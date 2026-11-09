import { AppShell } from '../../components/AppShell';
import { ScreenForm } from '../../components/ScreenForm';
export default function EditProfilePage() { return <AppShell><ScreenForm title="Profilio redagavimas" intro="Atnaujinkite savo kontaktinius duomenis." backHref="/profilis" backLabel="Profilis" submitLabel="Išsaugoti pakeitimus" fields={[{label:'Vardas ir pavardė',value:'Rūta Kazlauskaitė'},{label:'El. paštas',type:'email',value:'ruta@pastas.lt'},{label:'Telefono numeris',value:'+370 600 00 000'},{label:'Adresas',value:'Kaunas, Lietuva'}]} /></AppShell>; }
