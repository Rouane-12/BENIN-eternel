import CultureBeninoiseClient from './CultureBeninoiseClient';

export const metadata = {
  title: "Culture Béninoise — Artistes, Influenceurs & Événements",
  description: "Découvrez les artistes, influenceurs et événements qui font vibrer la culture béninoise.",
  openGraph: { url: "/culture-beninoise" },
  alternates: { canonical: "/culture-beninoise" },
};

export default function CultureBeninoise() {
  return <CultureBeninoiseClient />;
}
