import Link from 'next/link';
import { SiteFooter } from './SiteFooter';
import { SiteHeader } from './SiteHeader';

const sections = [['Pagrindinis', '/pagrindinis'], ['Profilis', '/profilis'], ['Paslaugos', '/paslaugos'], ['Katalogas', '/prekes'], ['Užsakymai', '/uzsakymai'], ['Tvarkaraštis', '/tvarkarastis'], ['Maršrutas', '/marsrutas']];
export function AppShell({ children }: { children: React.ReactNode }) { return <><SiteHeader /><div className="app-bar"><nav className="container" aria-label="Sistemos navigacija">{sections.map(([label, href]) => <Link href={href} key={href}>{label}</Link>)}</nav></div><main className="app-main container">{children}</main><SiteFooter /></>; }
