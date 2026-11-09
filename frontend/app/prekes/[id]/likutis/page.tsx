import Link from 'next/link';
import { AppShell } from '../../../components/AppShell';
export default function StockPage() { return <AppShell><section className="screen-form"><p className="section-kicker">Prekės likutis</p><h1>Sandėlio informacija</h1><div className="status-grid"><article><p>Turimas kiekis</p><strong>14 vnt.</strong></article><article><p>Rezervuota</p><strong>3 vnt.</strong></article><article><p>Laisvas likutis</p><strong>11 vnt.</strong></article></div><Link className="button button-primary export-button" href="/prekes">Grįžti į katalogą</Link></section></AppShell>; }
