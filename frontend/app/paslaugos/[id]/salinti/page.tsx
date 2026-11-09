import Link from 'next/link';
import { AppShell } from '../../../components/AppShell';
export default function DeleteServicePage() { return <AppShell><section className="screen-form"><p className="section-kicker">Paslaugos šalinimas</p><h1>Ar tikrai norite pašalinti paslaugą?</h1><p className="screen-intro">Šis veiksmas pašalins paslaugą iš sąrašo.</p><div className="confirm-panel"><Link className="button button-primary" href="/paslaugos">Taip, pašalinti</Link><Link className="button button-plain" href="/paslaugos">Atšaukti</Link></div></section></AppShell>; }
