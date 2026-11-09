import { AppShell } from '../components/AppShell';
import { RoutePlanner } from '../components/RoutePlanner';
export default function RoutePage() { return <AppShell><section className="screen-form"><p className="section-kicker">Maršrutas</p><h1>Maršruto sudarymo langas</h1><p className="screen-intro">Pasirinkite paslaugas su nurodytomis vietomis. Sistema pateiks kelionės atstumą ir trukmę.</p><RoutePlanner /></section></AppShell>; }
