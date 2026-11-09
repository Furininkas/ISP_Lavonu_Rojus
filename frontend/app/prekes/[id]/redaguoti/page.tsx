import { AppShell } from '../../../components/AppShell';
import { ScreenForm } from '../../../components/ScreenForm';
export default function EditProductPage() { return <AppShell><ScreenForm title="Prekės redagavimo langas" intro="Pakeiskite prekės informaciją ir išsaugokite atnaujinimą." backHref="/prekes" backLabel="Grįžti į prekę" submitLabel="Išsaugoti pakeitimus" fields={[['Prekės pavadinimas', 'text'], ['Kategorija', 'text'], ['Kaina, €', 'number'], ['Kiekis sandėlyje', 'number'], ['Aprašymas', 'textarea']]} /></AppShell>; }
