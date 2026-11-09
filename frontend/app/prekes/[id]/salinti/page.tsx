import Link from 'next/link';
import { AppShell } from '../../../components/AppShell';
export default function DeleteProductPage() { return <AppShell><section className="screen-form"><p className="section-kicker">Prekės šalinimas</p><h1>Ar tikrai norite pašalinti prekę?</h1><p className="screen-intro">Šis veiksmas pašalins prekę iš katalogo.</p><div className="confirm-panel"><Link className="button button-primary" href="/prekes">Taip, pašalinti</Link><Link className="button button-plain" href="/prekes">Atšaukti</Link></div></section></AppShell>; }
