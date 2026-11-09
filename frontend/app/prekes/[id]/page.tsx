import Link from 'next/link';
import { notFound } from 'next/navigation';
import { AddToOrderButton } from '../../components/AddToOrderButton';
import { AppShell } from '../../components/AppShell';
import { findItem, formatPrice } from '../../lib/catalog-data';

export default function ProductDetail({ params }: { params: { id: string } }) { const item = findItem('products', params.id); if (!item) notFound(); return <AppShell><Link className="back-link" href="/prekes">← Visos prekės</Link><div className="two-column"><section className="detail-page"><p className="section-kicker">{item.kind} · {item.meta}</p><h1>{item.title}</h1><p className="detail-copy">{item.description}</p><div className="detail-panel"><div><span>Kaina</span><strong>{formatPrice(item.price)}</strong></div><div><span>Kategorija</span><strong>{item.meta}</strong></div></div><AddToOrderButton item={item} /></section><aside className="detail-actions"><h2>Prekės valdymas</h2><p>Tvarkykite prekės duomenis ir sandėlio likutį.</p><div className="action-links"><Link href={`/prekes/${params.id}/redaguoti`}>Redaguoti prekę</Link><Link href={`/prekes/${params.id}/likutis`}>Peržiūrėti likutį</Link><Link href={`/prekes/${params.id}/salinti`}>Pašalinti prekę</Link></div></aside></div></AppShell>; }
