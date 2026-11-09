'use client';

import { useRouter } from 'next/navigation';
import type { CatalogItem } from '../lib/catalog-data';
import { useCart } from './CartState';

export function AddToOrderButton({ item }: { item: CatalogItem }) {
  const { addItem } = useCart();
  const router = useRouter();
  return <button className="button button-primary" onClick={() => { addItem(item); router.push('/krepselis'); }}>Pridėti į užsakymą <span>→</span></button>;
}
