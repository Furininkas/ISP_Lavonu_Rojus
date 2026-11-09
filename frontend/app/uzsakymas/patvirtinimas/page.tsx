'use client';

import Link from 'next/link';
import { useEffect } from 'react';
import { SiteFooter } from '../../components/SiteFooter';
import { SiteHeader } from '../../components/SiteHeader';
import { useCart } from '../../components/CartState';

export default function ConfirmationPage() {
  const { clearItems } = useCart();
  useEffect(() => { clearItems(); }, [clearItems]);
  return <><SiteHeader /><main className="confirmation-page container"><p className="section-kicker">Užsakymas pateiktas</p><h1>Ačiū. Viskas<br /><em>aiškiai suplanuota.</em></h1><p>Gavome jūsų užsakymą. Netrukus susisieksime, kad suderintume tolesnius žingsnius.</p><Link className="button button-purple" href="/">Grįžti į pradžią →</Link></main><SiteFooter /></>;
}
