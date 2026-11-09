import Link from 'next/link';
import { notFound } from 'next/navigation';
import { AddToOrderButton } from '../../components/AddToOrderButton';
import { AppShell } from '../../components/AppShell';
import { findItem, formatPrice } from '../../lib/catalog-data';

export default function ServiceDetail({ params }: { params: { id: string } }) { const item = findItem('services', params.id); if (!item) notFound(); return <AppShell><Link className="back-link" href="/paslaugos">← Visos paslaugos</Link><div className="two-column"><section className="detail-page"><p className="section-kicker">{item.kind} · {item.meta}</p><h1>{item.title}</h1><p className="detail-copy">{item.description}</p><div className="detail-panel"><div><span>Kaina</span><strong>{formatPrice(item.price)}</strong></div><div><span>Tipas</span><strong>{item.meta}</strong></div></div><AddToOrderButton item={item} /></section><aside className="detail-actions"><h2>Paslaugos valdymas</h2><p>Pasirinkite veiksmą paslaugos informacijai tvarkyti.</p><div className="action-links"><Link href={`/paslaugos/${params.id}/redaguoti`}>Redaguoti paslaugą</Link><Link href={`/paslaugos/${params.id}/salinti`}>Pašalinti paslaugą</Link></div></aside></div></AppShell>; }
