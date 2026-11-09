import Link from 'next/link';
import { AppShell } from '../../components/AppShell';
export default function OptimisationPage() { return <AppShell><section className="screen-form"><p className="section-kicker">Užsakymo optimizavimas</p><h1>Biudžeto pasiūlymas</h1><div className="success-panel"><h2>Galimas taupymas: 18,00 €</h2><p>Pakeitus pasirinktą urnos apdailą išlaikomos visos užsakymo paslaugos.</p></div><Link className="button button-primary export-button" href="/uzsakymas">Grįžti į užsakymą</Link></section></AppShell>; }
