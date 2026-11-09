import { AppShell } from '../../components/AppShell';
import { ScreenForm } from '../../components/ScreenForm';
export default function NewProductPage() { return <AppShell><ScreenForm title="Prekės kūrimo forma" intro="Įveskite prekės informaciją, kainą ir turimą likutį." backHref="/prekes" backLabel="Grįžti į katalogą" submitLabel="Išsaugoti prekę" fields={[['Prekės pavadinimas', 'text'], ['Kategorija', 'text'], ['Kaina, €', 'number'], ['Kiekis sandėlyje', 'number'], ['Aprašymas', 'textarea']]} /></AppShell>; }
