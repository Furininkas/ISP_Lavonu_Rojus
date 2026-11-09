import { ScreenForm } from '../components/ScreenForm';
import { SiteFooter } from '../components/SiteFooter';
import { SiteHeader } from '../components/SiteHeader';
export default function RegisterPage() { return <><SiteHeader /><main className="container app-main"><ScreenForm title="Registracija" intro="Sukurkite paskyrą, kad galėtumėte tvarkyti užsakymus ir svarbią informaciją." backHref="/prisijungti" backLabel="Prisijungimas" submitLabel="Sukurti paskyrą" fields={[{ label:'Vardas ir pavardė', placeholder:'Vardas Pavardė' },{ label:'El. paštas', type:'email', placeholder:'vardas@pastas.lt' },{ label:'Telefono numeris', placeholder:'+370' },{ label:'Slaptažodis', type:'password', placeholder:'••••••••' }]} /></main><SiteFooter /></>; }
