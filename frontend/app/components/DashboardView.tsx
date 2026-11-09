import Link from 'next/link';
import { SiteFooter } from './SiteFooter';
import { SiteHeader } from './SiteHeader';
export function DashboardView({ title, description, cards, action }: { title: string; description: string; cards: [string, string, string][]; action?: { href: string; label: string } }) {
  return <><SiteHeader /><main className="container dashboard-page"><p className="section-kicker">Paskyra</p><h1>{title}</h1><p className="dashboard-intro">{description}</p><div className="dashboard-grid">{cards.map(([label, value, note]) => <article key={label}><p>{label}</p><strong>{value}</strong><span>{note}</span></article>)}</div><section className="dashboard-table"><div><h2>Naujausia informacija</h2><span>Atnaujinta šiandien</span></div><article><b>Užsakymas #2026-014</b><span>Planuojama ceremonija · 2026-11-18</span><em>Peržiūrėti →</em></article><article><b>Atminimo priminimas</b><span>Artėjanti svarbi data · 2026-11-28</span><em>Peržiūrėti →</em></article></section>{action && <Link className="dashboard-action" href={action.href}>{action.label} →</Link>}<Link className="button button-purple" href="/">Atsijungti į pradžią →</Link></main><SiteFooter /></>;
}
