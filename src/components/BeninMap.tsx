import { useEffect, useMemo, useState, useCallback, useRef, Component, ErrorInfo } from "react";
import {
  GoogleMap,
  Marker,
  InfoWindow,
  useJsApiLoader,
  Autocomplete,
  DirectionsRenderer,
} from "@react-google-maps/api";
import { LIEUX, type Lieu } from "@/data/lieux";
import { MapPin, Navigation, Compass, Map as MapIcon, X, Car, Footprints, Bike, Bus, Search, AlertCircle } from "lucide-react";

const containerStyle = {
  width: "100%",
  height: "600px",
  borderRadius: "4px",
};

// Correct coordinates for Cotonou, Benin
const COTONOU = { lat: 6.3653, lng: 2.4183 };
// Initial center for whole Benin
const BENIN_CENTER = { lat: 9.3077, lng: 2.3158 };

const categoryColors: Record<string, string> = {
  plage: "#facc15",
  monument: "#f97316",
  restaurant: "#22c55e",
  musee: "#818cf8",
  marche: "#f43f5e",
  hebergement: "#3b82f6",
  site: "#a855f7",
  culture: "#ec4899",
};

type TravelMode = "DRIVING" | "WALKING" | "BICYCLING" | "TRANSIT";

// Fix issue #3: Move libraries array outside component to prevent recreation
const GOOGLE_MAPS_LIBRARIES: ("places")[] = ["places"];

interface BeninMapProps {
  focusLat?: number;
  focusLng?: number;
  focusName?: string;
}

// Local ErrorBoundary for issue #2
class BeninMapErrorBoundary extends Component<
  { children: React.ReactNode },
  { hasError: boolean; error: Error | null }
> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("BeninMap error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="bg-white/5 border border-white/20 rounded-sm p-8 flex flex-col items-center justify-center">
          <AlertCircle className="w-12 h-12 text-red-400 mb-4" />
          <h4 className="text-white text-lg font-display mb-2">Erreur de la carte</h4>
          <p className="text-white/70 text-center max-w-md">
            {this.state.error?.message || "Une erreur inattendue est survenue"}
          </p>
        </div>
      );
    }

    return this.props.children;
  }
}

// Actual BeninMap content component
function BeninMapContent({ focusLat, focusLng, focusName }: BeninMapProps) {
  const [map, setMap] = useState<google.maps.Map | null>(null);
  const [userPos, setUserPos] = useState<google.maps.LatLngLiteral | null>(null);
  const [destination, setDestination] = useState<Lieu | null>(null);
  const [directions, setDirections] = useState<google.maps.DirectionsResult | null>(null);
  const [travelMode, setTravelMode] = useState<TravelMode>("DRIVING");
  const [searchQuery, setSearchQuery] = useState("");
  const [autocomplete, setAutocomplete] = useState<google.maps.places.Autocomplete | null>(null);
  const [status, setStatus] = useState("");
  const [selectedPlace, setSelectedPlace] = useState<Lieu | null>(null);
  const [activeMarkerId, setActiveMarkerId] = useState<string | null>(null);

  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "";

  const { isLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: apiKey, // No fallback, use only env variable
    id: "benin-google-map",
    libraries: GOOGLE_MAPS_LIBRARIES, // Use constant array
  });

  const directionsServiceRef = useRef<google.maps.DirectionsService | null>(null);

  // Initialize Directions Service
  useEffect(() => {
    if (isLoaded && !directionsServiceRef.current) {
      directionsServiceRef.current = new google.maps.DirectionsService();
    }
  }, [isLoaded]);

  // Get user's location
  const locateUser = useCallback(() => {
    if (!navigator.geolocation) {
      setStatus("Géolocalisation non supportée par ce navigateur");
      setUserPos(COTONOU);
      return;
    }

    setStatus("Recherche de votre position…");

    navigator.geolocation.getCurrentPosition(
      (pos) => {
        console.log("GPS OK:", pos.coords.latitude, pos.coords.longitude);
        const position = { lat: pos.coords.latitude, lng: pos.coords.longitude };
        setUserPos(position);
        setStatus("");
      },
      (err) => {
        console.error("GPS ERROR:", err.code, err.message);
        // Show clear error message based on error code
        let errorMessage = "Position indisponible.";
        switch (err.code) {
          case 1:
            errorMessage = "Veuillez autoriser l'accès à votre position pour utiliser cette fonctionnalité.";
            break;
          case 2:
            errorMessage = "Impossible de déterminer votre position (GPS/Wi-Fi inactif).";
            break;
          case 3:
            errorMessage = "La recherche de votre position a pris trop de temps.";
            break;
        }
        setStatus(errorMessage);
        // Fallback ONLY to Benin (Cotonou), no random IP position
        setUserPos(COTONOU);
      },
      { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 }
    );
  }, []);

  useEffect(() => {
    locateUser();
  }, [locateUser]);

  // Handle focus from props
  useEffect(() => {
    if (focusLat != null && focusLng != null) {
      const focusPlace: Lieu = {
        id: "focus",
        nom: focusName || "Lieu sélectionné",
        categorie: "site",
        lat: focusLat,
        lng: focusLng,
        ville: "Bénin",
      };
      setDestination(focusPlace);
      setSelectedPlace(focusPlace);
      setActiveMarkerId("focus");
    }
  }, [focusLat, focusLng, focusName]);

  // Handle place selection from autocomplete
  const handlePlaceChanged = useCallback(() => {
    if (!autocomplete) return;
    const place = autocomplete.getPlace();

    if (!place.geometry || !place.geometry.location) {
      // Search our local data
      const matchedLieu = LIEUX.find((l) =>
        l.nom.toLowerCase().includes(searchQuery.toLowerCase()) ||
        l.ville.toLowerCase().includes(searchQuery.toLowerCase())
      );
      if (matchedLieu) {
        setDestination(matchedLieu);
        setSelectedPlace(matchedLieu);
        setActiveMarkerId(matchedLieu.id);
      }
      return;
    }

    // Create temp Lieu from Google place
    const tempLieu: Lieu = {
      id: "google-place-" + Date.now(),
      nom: place.name || "Destination",
      categorie: "site",
      lat: place.geometry.location.lat(),
      lng: place.geometry.location.lng(),
      ville: place.vicinity || "Bénin",
      description: place.formatted_address,
    };
    setDestination(tempLieu);
    setSelectedPlace(tempLieu);
    setActiveMarkerId(tempLieu.id);
  }, [autocomplete, searchQuery]);

  // Handle marker click
  const handleMarkerClick = useCallback((lieu: Lieu) => {
    setDestination(lieu);
    setSelectedPlace(lieu);
    setActiveMarkerId(lieu.id);
  }, []);

  // Calculate directions when origin/destination/mode change
  useEffect(() => {
    if (!isLoaded || !directionsServiceRef.current || !userPos || !destination) {
      setDirections(null);
      return;
    }

    const origin = new google.maps.LatLng(userPos.lat, userPos.lng);
    const dest = new google.maps.LatLng(destination.lat, destination.lng);

    directionsServiceRef.current.route(
      {
        origin: origin,
        destination: dest,
        travelMode: travelMode as unknown as google.maps.TravelMode,
      },
      (result, statusResult) => {
        if (statusResult === "OK" && result) {
          setDirections(result);
          if (map) {
            const bounds = new google.maps.LatLngBounds();
            bounds.extend(origin);
            bounds.extend(dest);
            map.fitBounds(bounds);
          }
        } else {
          setStatus("Impossible de calculer l'itinéraire");
        }
      }
    );
  }, [userPos, destination, travelMode, isLoaded, map]);

  const mapCenter = useMemo(() => {
    if (destination) return { lat: destination.lat, lng: destination.lng };
    if (userPos) return userPos;
    return BENIN_CENTER;
  }, [destination, userPos]);

  const mapZoom = destination ? 14 : (userPos ? 14 : 6);

  const filteredLieux = useMemo(() => {
    if (!searchQuery) return LIEUX;
    return LIEUX.filter((l) =>
      l.nom.toLowerCase().includes(searchQuery.toLowerCase()) ||
      l.ville.toLowerCase().includes(searchQuery.toLowerCase()) ||
      l.categorie.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);

  // Find position for active marker
  const activeMarkerPosition = useMemo(() => {
    if (!activeMarkerId) return null;

    if (activeMarkerId === "focus" && focusLat != null && focusLng != null) {
      return { lat: focusLat, lng: focusLng };
    }

    const lieu = LIEUX.find((l) => l.id === activeMarkerId);
    if (lieu) {
      return { lat: lieu.lat, lng: lieu.lng };
    }

    if (selectedPlace && selectedPlace.id === activeMarkerId) {
      return { lat: selectedPlace.lat, lng: selectedPlace.lng };
    }

    return null;
  }, [activeMarkerId, focusLat, focusLng, selectedPlace]);

  // Render error state if no API key first (issue #1)
  if (!apiKey || apiKey.trim() === "") {
    return (
      <div className="w-full">
        <div className="mb-6">
          <div className="flex items-center gap-3 mb-4">
            <MapIcon className="w-6 h-6 text-white/80" />
            <h3 className="font-display text-2xl text-white">Carte interactive du Bénin</h3>
          </div>
        </div>
        <div className="bg-white/5 border border-white/20 rounded-sm p-8 flex flex-col items-center justify-center">
          <AlertCircle className="w-12 h-12 text-red-400 mb-4" />
          <h4 className="text-white text-lg font-display mb-2">Clé API Google Maps manquante</h4>
          <p className="text-white/70 text-center max-w-md mb-4">
            Ajoutez une clé API Google Maps dans un fichier .env à la racine du projet :
          </p>
          <code className="bg-white/10 px-4 py-2 rounded text-sm text-white/80 mb-6">
            NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=votre-cle-api
          </code>
          <p className="text-white/50 text-xs">
            Obtenez une clé sur : https://console.cloud.google.com/
          </p>
        </div>
      </div>
    );
  }

  if (loadError) {
    return (
      <div className="w-full">
        <div className="mb-6">
          <div className="flex items-center gap-3 mb-4">
            <MapIcon className="w-6 h-6 text-white/80" />
            <h3 className="font-display text-2xl text-white">Carte interactive du Bénin</h3>
          </div>
        </div>
        <div className="bg-white/5 border border-white/20 rounded-sm p-8 flex flex-col items-center justify-center">
          <AlertCircle className="w-12 h-12 text-red-400 mb-4" />
          <h4 className="text-white text-lg font-display mb-2">Erreur de chargement de Google Maps</h4>
          <p className="text-white/70 text-center max-w-md">
            Vérifiez votre clé API Google Maps et vos permissions.
          </p>
        </div>
      </div>
    );
  }

  if (!isLoaded) {
    return (
      <div className="w-full">
        <div className="mb-6">
          <div className="flex items-center gap-3 mb-4">
            <MapIcon className="w-6 h-6 text-white/80" />
            <h3 className="font-display text-2xl text-white">Carte interactive du Bénin</h3>
          </div>
        </div>
        <div className="h-[600px] bg-white/5 animate-pulse rounded-sm border border-white/10 flex items-center justify-center">
          <p className="text-white/70">Chargement de la carte…</p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full">
      {/* Header */}
      <div className="mb-6">
        <div className="flex items-center gap-3 mb-4">
          <MapIcon className="w-6 h-6 text-white/80" />
          <h3 className="font-display text-2xl text-white">Carte interactive du Bénin</h3>
        </div>

        {/* Search bar */}
        <div className="relative mb-4">
          <div className="absolute inset-y-0 left-0 flex items-center pl-4">
            <Search className="w-4 h-4 text-white/50" />
          </div>
          <Autocomplete
            onLoad={setAutocomplete}
            onPlaceChanged={handlePlaceChanged}
          >
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Rechercher un lieu, une ville..."
              className="w-full pl-12 pr-4 py-3 bg-white/5 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:border-white/30 transition-all rounded-sm"
            />
          </Autocomplete>
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute inset-y-0 right-4 flex items-center text-white/40 hover:text-white"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Travel mode selector */}
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setTravelMode("DRIVING")}
            className={`flex items-center gap-2 px-4 py-2 text-xs tracking-[0.15em] uppercase font-medium transition-all border rounded-sm ${travelMode === "DRIVING"
              ? "bg-white text-black border-white"
              : "bg-transparent text-white/60 border-white/20 hover:border-white/50 hover:text-white"
              }`}
          >
            <Car className="w-4 h-4" />
            Voiture
          </button>
          <button
            onClick={() => setTravelMode("WALKING")}
            className={`flex items-center gap-2 px-4 py-2 text-xs tracking-[0.15em] uppercase font-medium transition-all border rounded-sm ${travelMode === "WALKING"
              ? "bg-white text-black border-white"
              : "bg-transparent text-white/60 border-white/20 hover:border-white/50 hover:text-white"
              }`}
          >
            <Footprints className="w-4 h-4" />
            Marcher
          </button>
          <button
            onClick={() => setTravelMode("BICYCLING")}
            className={`flex items-center gap-2 px-4 py-2 text-xs tracking-[0.15em] uppercase font-medium transition-all border rounded-sm ${travelMode === "BICYCLING"
              ? "bg-white text-black border-white"
              : "bg-transparent text-white/60 border-white/20 hover:border-white/50 hover:text-white"
              }`}
          >
            <Bike className="w-4 h-4" />
            Vélo
          </button>
          <button
            onClick={() => setTravelMode("TRANSIT")}
            className={`flex items-center gap-2 px-4 py-2 text-xs tracking-[0.15em] uppercase font-medium transition-all border rounded-sm ${travelMode === "TRANSIT"
              ? "bg-white text-black border-white"
              : "bg-transparent text-white/60 border-white/20 hover:border-white/50 hover:text-white"
              }`}
          >
            <Bus className="w-4 h-4" />
            Transport
          </button>
        </div>
      </div>

      <div className="grid lg:grid-cols-[1fr_380px] gap-6">
        {/* Map */}
        <div className="relative rounded-sm overflow-hidden border border-white/10">
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={mapCenter}
            zoom={mapZoom}
            onLoad={(mapInstance) => setMap(mapInstance)}
            onUnmount={() => setMap(null)}
            options={{
              disableDefaultUI: false,
              zoomControl: true,
              streetViewControl: false,
              fullscreenControl: true,
            }}
          >
            {/* User position */}
            {userPos && (
              <Marker
                position={userPos}
                icon={{
                  path: google.maps.SymbolPath.CIRCLE,
                  scale: 12,
                  fillColor: "#3b82f6",
                  fillOpacity: 1,
                  strokeColor: "#ffffff",
                  strokeWeight: 4,
                }}
              >
                {activeMarkerId === "user" && (
                  <InfoWindow
                    position={userPos}
                    onCloseClick={() => setActiveMarkerId(null)}
                  >
                    <div className="p-2 min-w-[150px]">
                      <p className="text-black font-medium">Votre position</p>
                    </div>
                  </InfoWindow>
                )}
              </Marker>
            )}

            {/* Places */}
            {filteredLieux.map((lieu) => (
              <Marker
                key={lieu.id}
                position={{ lat: lieu.lat, lng: lieu.lng }}
                icon={{
                  path: google.maps.SymbolPath.CIRCLE,
                  scale: selectedPlace?.id === lieu.id ? 12 : 8,
                  fillColor: categoryColors[lieu.categorie] || "#ffffff",
                  fillOpacity: 1,
                  strokeColor: "#ffffff",
                  strokeWeight: 2,
                }}
                onClick={() => handleMarkerClick(lieu)}
              >
                {/* Only render InfoWindow when explicitly active and position is valid */}
                {activeMarkerId === lieu.id && activeMarkerPosition && (
                  <InfoWindow
                    position={activeMarkerPosition}
                    onCloseClick={() => setActiveMarkerId(null)}
                  >
                    <div className="p-2 min-w-[200px]">
                      <p className="text-black font-display text-lg">{lieu.nom}</p>
                      <p className="text-xs uppercase tracking-[0.2em] text-gray-500 mt-1">{lieu.categorie} • {lieu.ville}</p>
                      {lieu.description && <p className="text-sm text-gray-600 mt-2">{lieu.description}</p>}
                      <button
                        onClick={() => handleMarkerClick(lieu)}
                        className="mt-3 w-full text-xs uppercase tracking-[0.2em] bg-[var(--gold)] text-[var(--ink)] py-2 px-3 rounded-sm font-semibold"
                      >
                        Y aller
                      </button>
                    </div>
                  </InfoWindow>
                )}
              </Marker>
            ))}

            {/* Directions */}
            {directions && (
              <DirectionsRenderer
                directions={directions}
                options={{
                  suppressMarkers: true,
                  polylineOptions: {
                    strokeColor: "#3b82f6",
                    strokeWeight: 5,
                    strokeOpacity: 0.8,
                  },
                }}
              />
            )}
          </GoogleMap>
        </div>

        {/* Sidebar */}
        <div className="bg-white/[0.03] border border-white/10 p-6 rounded-sm space-y-6">
          {/* Locate button */}
          <button
            onClick={locateUser}
            className="w-full px-6 py-4 bg-[var(--gold)] text-[var(--ink)] font-semibold tracking-wide hover:bg-[var(--accent)] transition-all flex items-center justify-center gap-3 rounded-sm"
          >
            <Navigation className="w-5 h-5" />
            Me localiser
          </button>

          {status && (
            <p className="text-sm text-white/70 text-center py-2 border border-white/10 rounded-sm">{status}</p>
          )}

          {/* Route info */}
          {directions && directions.routes[0] && directions.routes[0].legs[0] && (
            <div className="bg-[var(--gold)]/10 border border-[var(--gold)]/30 p-4 rounded-sm">
              <div className="flex items-center gap-2 mb-3">
                <MapPin className="w-5 h-5 text-[var(--gold)]" />
                <span className="text-[var(--gold)] font-semibold">Itinéraire</span>
              </div>

              <div className="space-y-3">
                <div>
                  <span className="text-xs uppercase tracking-[0.2em] text-white/50 block mb-1">De</span>
                  <span className="text-sm text-white font-medium">{directions.routes[0].legs[0].start_address}</span>
                </div>
                <div className="text-center">
                  <div className="inline-block w-0.5 h-4 bg-white/30"></div>
                </div>
                <div>
                  <span className="text-xs uppercase tracking-[0.2em] text-white/50 block mb-1">À</span>
                  <span className="text-sm text-white font-medium">{directions.routes[0].legs[0].end_address}</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mt-4 pt-4 border-t border-white/10">
                <div>
                  <span className="text-xs uppercase tracking-[0.2em] text-white/50 block mb-1">Distance</span>
                  <span className="text-xl font-display text-white">{directions.routes[0].legs[0].distance?.text}</span>
                </div>
                <div>
                  <span className="text-xs uppercase tracking-[0.2em] text-white/50 block mb-1">Temps estimé</span>
                  <span className="text-xl font-display text-white">{directions.routes[0].legs[0].duration?.text}</span>
                </div>
              </div>

              <button
                onClick={() => {
                  setDestination(null);
                  setSelectedPlace(null);
                  setDirections(null);
                  setActiveMarkerId(null);
                }}
                className="w-full mt-4 flex items-center justify-center gap-2 px-4 py-2 text-xs tracking-[0.2em] uppercase text-white/70 border border-white/10 rounded-sm hover:bg-white/5 transition-all"
              >
                <X className="w-3.5 h-3.5" />
                Effacer l'itinéraire
              </button>
            </div>
          )}

          {/* Nearest places */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Compass className="w-5 h-5 text-white/70" />
              <h4 className="font-display text-xl text-white">
                {searchQuery ? "Résultats" : "Sites incontournables"}
              </h4>
            </div>
            <ul className="space-y-4">
              {filteredLieux.slice(0, 5).map((p) => (
                <li
                  key={p.id}
                  onClick={() => handleMarkerClick(p)}
                  className="border-b border-white/10 pb-4 cursor-pointer hover:bg-white/[0.02] -mx-6 px-6 py-2 transition-all"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex-1">
                      <span className="font-medium text-white block">{p.nom}</span>
                      <span className="text-xs uppercase tracking-widest text-white/50 block mt-1">{p.categorie} • {p.ville}</span>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Legend */}
          <div className="pt-4 border-t border-white/10">
            <h5 className="text-xs uppercase tracking-[0.2em] text-white/50 mb-4">Légende</h5>
            <div className="grid grid-cols-2 gap-3">
              {Object.entries(categoryColors).slice(0, 6).map(([cat, color]) => (
                <div key={cat} className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: color }} />
                  <span className="text-xs text-white/70 capitalize">{cat}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Export component wrapped in ErrorBoundary
export function BeninMap(props: BeninMapProps) {
  return (
    <BeninMapErrorBoundary>
      <BeninMapContent {...props} />
    </BeninMapErrorBoundary>
  );
}
