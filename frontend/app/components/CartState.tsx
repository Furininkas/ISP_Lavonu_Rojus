'use client';
import { createContext, useCallback, useContext, useMemo, useState } from 'react';
import type { CatalogItem } from '../lib/catalog-data';
type CartContextValue = { items: CatalogItem[]; addItem: (item: CatalogItem) => void; removeItem: (id: string) => void; clearItems: () => void; };
const CartContext = createContext<CartContextValue | null>(null);
export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CatalogItem[]>([]);
  const addItem = useCallback((item: CatalogItem) => setItems((current) => [...current, item]), []);
  const removeItem = useCallback((id: string) => setItems((current) => current.filter((item, index) => `${item.id}-${index}` !== id)), []);
  const clearItems = useCallback(() => setItems([]), []);
  const value = useMemo(() => ({ items, addItem, removeItem, clearItems }), [items, addItem, removeItem, clearItems]);
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
export function useCart() { const context = useContext(CartContext); if (!context) throw new Error('useCart must be used inside CartProvider'); return context; }
