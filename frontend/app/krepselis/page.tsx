'use client';

import Link from 'next/link';
import { SiteFooter } from '../components/SiteFooter';
import { SiteHeader } from '../components/SiteHeader';
import { useCart } from '../components/CartState';
import { formatPrice } from '../lib/catalog-data';

export default function CartPage() {
  const { items, removeItem } = useCart();
  const total = items.reduce((sum, item) => sum + item.price, 0);
  return <><SiteHeader /><main className="container cart-page"><p className="section-kicker">Jūsų užsakymas</p><h1>Jūsų pasirinkimai</h1>{items.length === 0 ? <div className="empty-state"><p>Kol kas nieko neįtraukėte.</p><Link className="button button-purple" href="/paslaugos">Peržiūrėti paslaugas →</Link></div> : <><div className="cart-list">{items.map((item, index) => <article key={`${item.id}-${index}`}><div><p>{item.kind}</p><h2>{item.title}</h2><span>{item.meta}</span></div><strong>{formatPrice(item.price)}</strong><button onClick={() => removeItem(`${item.id}-${index}`)}>Pašalinti</button></article>)}</div><div className="cart-total"><span>Iš viso</span><strong>{formatPrice(total)}</strong><Link className="button button-primary" href="/uzsakymas">Tęsti užsakymą →</Link></div></>}</main><SiteFooter /></>;
}
