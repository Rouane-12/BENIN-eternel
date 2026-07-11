import CommunesClient from './CommunesClient';

export const metadata = {
  title: "12 Départements & 77 Communes du Bénin",
  description: "Liste complète des 12 départements et 77 communes du Bénin avec leurs capitales.",
  openGraph: { url: "/communes" },
  alternates: { canonical: "/communes" },
};

export default function Communes() {
  return <CommunesClient />;
}
