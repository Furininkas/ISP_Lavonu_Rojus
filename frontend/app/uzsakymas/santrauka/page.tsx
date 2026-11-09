import Link from 'next/link';
import { AppShell } from '../../components/AppShell';
export default function SummaryPage() { return <AppShell><section className="screen-form"><p className="section-kicker">Užsakymo santrauka</p><h1>Patikrinkite užsakymą</h1><div className="order-summary"><p>Klasikinė urna × 1 — 89,00 €</p><p>Atsisveikinimo ceremonija × 1 — 150,00 €</p><p className="order-total">Iš viso: 239,00 €</p></div><Link className="button button-primary export-button" href="/uzsakymas">Patvirtinti ir grįžti</Link></section></AppShell>; }
