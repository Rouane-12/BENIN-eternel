import MonumentsClient from './MonumentsClient';

export const metadata = {
  title: 'Monuments du Bénin — UNESCO, Abomey, Ouidah, Porto-Novo',
  description: 'Palais d\'Abomey UNESCO, Porte du Non-Retour, temple des Pythons, mosquée de Porto-Novo : monuments majeurs du Bénin.',
  openGraph: { url: '/monuments' },
  alternates: { canonical: '/monuments' },
};

export default function Monuments() {
  return <MonumentsClient />;
}
