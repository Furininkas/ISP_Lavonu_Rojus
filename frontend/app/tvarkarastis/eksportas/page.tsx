import Link from 'next/link';
import { AppShell } from '../../components/AppShell';
export default function ExportSchedulePage() { return <AppShell><section className="success-panel"><p className="section-kicker">Tvarkaraštis</p><h2>Tvarkaraštis paruoštas</h2><p>Tvarkaraščio suvestinė sėkmingai parengta peržiūrai.</p><Link className="button button-primary" href="/tvarkarastis">Grįžti į tvarkaraštį</Link></section></AppShell>; }
