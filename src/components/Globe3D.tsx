import { useEffect, useRef } from "react";
import * as THREE from "three";

/**
 * Globe noir & blanc avec continents réels, marqueur pulsant sur le Bénin.
 * Tourne en permanence; rotation très légèrement accélérée par le scroll.
 */
export function Globe3D({ scrollProgress = 0 }: { scrollProgress?: number }) {
  const mountRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef(scrollProgress);
  progressRef.current = scrollProgress;

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 100);
    camera.position.z = 2.9;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    const resize = () => {
      const w = mount.clientWidth;
      const h = mount.clientHeight;
      renderer.setSize(w, h, false);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
    };
    mount.appendChild(renderer.domElement);
    resize();
    window.addEventListener("resize", resize);

    const sphereGeom = new THREE.SphereGeometry(1, 96, 64);
    const loader = new THREE.TextureLoader();
    loader.setCrossOrigin("anonymous");
    const earthMat = new THREE.MeshBasicMaterial({ color: 0xffffff });
    const earth = new THREE.Mesh(sphereGeom, earthMat);
    scene.add(earth);

    loader.load(
      "https://unpkg.com/three-globe@2.31.1/example/img/earth-topology.png",
      (tex) => {
        tex.colorSpace = THREE.SRGBColorSpace;
        earthMat.map = tex;
        earthMat.needsUpdate = true;
      },
    );

    const wire = new THREE.LineSegments(
      new THREE.WireframeGeometry(new THREE.SphereGeometry(1.002, 36, 18)),
      new THREE.LineBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.12 }),
    );
    scene.add(wire);

    const halo = new THREE.Mesh(
      new THREE.SphereGeometry(1.08, 64, 64),
      new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.1, side: THREE.BackSide }),
    );
    scene.add(halo);

    // Bénin (~9.3°N, 2.3°E)
    // Helper function to convert Lat/Lon to Vector3 for standard Three.js sphere
    const getPos = (la: number, lo: number, r: number) => {
      const phi = (90 - la) * (Math.PI / 180);
      const theta = (lo + 180) * (Math.PI / 180);
      return new THREE.Vector3(
        -r * Math.sin(phi) * Math.cos(theta),
        r * Math.cos(phi),
        r * Math.sin(phi) * Math.sin(theta)
      );
    };

    const pos = getPos(9.3, 2.3, 1.015);
    const { x, y, z } = pos;

    const marker = new THREE.Mesh(
      new THREE.SphereGeometry(0.025, 16, 16),
      new THREE.MeshBasicMaterial({ color: 0xffffff }),
    );
    marker.position.copy(pos);

    const glow = new THREE.Mesh(
      new THREE.SphereGeometry(0.07, 24, 24),
      new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.5 }),
    );
    glow.position.copy(pos);

    const ring = new THREE.Mesh(
      new THREE.RingGeometry(0.04, 0.08, 48),
      new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.6, side: THREE.DoubleSide }),
    );
    ring.position.copy(pos.clone().multiplyScalar(1.005));
    ring.lookAt(0, 0, 0);

    const pin = new THREE.Mesh(
      new THREE.CylinderGeometry(0.004, 0.004, 0.22, 8),
      new THREE.MeshBasicMaterial({ color: 0xffffff }),
    );
    const pinPos = pos.clone().multiplyScalar(1.09);
    pin.position.copy(pinPos);
    pin.lookAt(0, 0, 0);
    pin.rotateX(Math.PI / 2);

    const group = new THREE.Group();
    group.add(earth, wire, halo, marker, glow, ring, pin);
    scene.add(group);

    let raf = 0;
    // Benin (Lon 2.3) with this formula is near +X.
    // To see it in center, rotate by -PI/2.
    // To move it to the LEFT edge, rotate more (around -2.2 rad)
    const targetY = -Math.PI / 2 - 0.7;
    const targetX = 0.15; // Slight tilt to see Africa better

    const animate = (t: number) => {
      raf = requestAnimationFrame(animate);
      const p = Math.min(1, Math.max(0, progressRef.current));

      // Rotation continue sur l'axe Y
      group.rotation.y += 0.002 + p * 0.005;
      group.rotation.x = targetX;

      // Position de caméra fixe (pas de zoom)
      camera.position.z = 2.8;

      const breathing = 1 + (Math.sin(t * 0.003) * 0.5 + 0.5) * 0.2;
      glow.scale.setScalar(breathing);

      const cycle = (t * 0.0005) % 1;
      const ringScale = 1 + cycle * 1.5;
      ring.scale.setScalar(ringScale);
      (ring.material as THREE.MeshBasicMaterial).opacity = Math.max(0, 0.4 - cycle * 0.4);

      renderer.render(scene, camera);
    };
    raf = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      renderer.dispose();
      sphereGeom.dispose();
      if (renderer.domElement.parentNode === mount) mount.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} className="absolute inset-0" aria-hidden />;
}