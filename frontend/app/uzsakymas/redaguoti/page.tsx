import { AppShell } from '../../components/AppShell';
import { ScreenForm } from '../../components/ScreenForm';
export default function EditOrderPage() { return <AppShell><ScreenForm title="Užsakymo redagavimo forma" intro="Pakeiskite užsakymo kontaktinius duomenis arba pastabą." backHref="/uzsakymas" backLabel="Grįžti į užsakymą" submitLabel="Išsaugoti pakeitimus" fields={[['Kontaktinis asmuo', 'text'], ['Telefono numeris', 'text'], ['El. paštas', 'email'], ['Pastaba', 'textarea']]} /></AppShell>; }
