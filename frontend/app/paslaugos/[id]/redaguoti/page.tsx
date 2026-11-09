import { AppShell } from '../../../components/AppShell';
import { ScreenForm } from '../../../components/ScreenForm';
export default function EditServicePage() { return <AppShell><ScreenForm title="Paslaugos redagavimo forma" intro="Pakeiskite paslaugos informaciją ir išsaugokite atnaujinimą." backHref="/paslaugos" backLabel="Grįžti į paslaugą" submitLabel="Išsaugoti pakeitimus" fields={[['Paslaugos pavadinimas', 'text'], ['Kaina, €', 'number'], ['Trukmė', 'text'], ['Vieta', 'text'], ['Aprašymas', 'textarea']]} /></AppShell>; }
