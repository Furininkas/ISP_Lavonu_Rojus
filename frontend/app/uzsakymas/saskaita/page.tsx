import { AppShell } from '../../components/AppShell';
import { ScreenForm } from '../../components/ScreenForm';
export default function BuyerPage() { return <AppShell><ScreenForm title="Pirkėjo duomenų įvedimo forma" intro="Įveskite duomenis, reikalingus sąskaitai parengti." backHref="/uzsakymas" backLabel="Grįžti į užsakymą" submitLabel="Parengti sąskaitą" fields={[['Vardas ir pavardė', 'text'], ['El. paštas', 'email'], ['Adresas', 'text'], ['Įmonės kodas (jei taikoma)', 'text']]} /></AppShell>; }
