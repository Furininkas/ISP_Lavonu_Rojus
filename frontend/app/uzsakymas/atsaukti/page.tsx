import Link from 'next/link';
import { AppShell } from '../../components/AppShell';
export default function CancelPage() { return <AppShell><section className="screen-form"><p className="section-kicker">Užsakymo atšaukimas</p><h1>Ar tikrai norite atšaukti užsakymą?</h1><p className="screen-intro">Užsakymas nebus toliau vykdomas.</p><div className="confirm-panel"><Link className="button button-primary" href="/uzsakymai">Taip, atšaukti</Link><Link className="button button-plain" href="/uzsakymas">Atšaukti veiksmą</Link></div></section></AppShell>; }
