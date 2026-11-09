import { AppShell } from '../../components/AppShell';
import { ProductSearch } from '../../components/ProductSearch';
export default function SearchPage() { return <AppShell><section className="screen-form"><p className="section-kicker">Katalogas</p><h1>Prekių paieškos langas</h1><p className="screen-intro">Raskite katalogo prekę pagal jos pavadinimą.</p><ProductSearch /></section></AppShell>; }
