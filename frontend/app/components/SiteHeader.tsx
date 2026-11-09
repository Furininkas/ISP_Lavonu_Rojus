'use client';
import Link from 'next/link';
import { useState } from 'react';
import { useCart } from './CartState';

const navigation = [['Paslaugos', '/paslaugos'], ['Prekės', '/prekes'], ['Apie mus', '/apie-mus']];
export function SiteHeader() {
  const { items } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);
  return <header className="site-header"><nav className="nav container" aria-label="Pagrindinė navigacija"><Link className="brand" href="/" aria-label="Lavonų rojus – pradžia" onClick={closeMenu}><span className="brand-mark">LR</span><span>Lavonų rojus</span></Link><div className="nav-links">{navigation.map(([label, href]) => <Link href={href} key={href}>{label}</Link>)}</div><div className="nav-actions"><Link className="cart-link" href="/krepselis">Užsakymas <span>{items.length}</span></Link><Link className="login-link" href="/registracija">Registracija <span>↗</span></Link><Link className="login-link" href="/prisijungti">Prisijungti <span>↗</span></Link></div><button className="menu-toggle" type="button" aria-label={menuOpen ? 'Uždaryti meniu' : 'Atidaryti meniu'} aria-expanded={menuOpen} onClick={() => setMenuOpen(open => !open)}><i /><i /></button></nav>{menuOpen && <div className="mobile-menu"><div className="container"><div className="mobile-menu-links">{navigation.map(([label, href], index) => <Link href={href} onClick={closeMenu} key={href}><span>0{index + 1}</span>{label}</Link>)}</div><div className="mobile-menu-actions"><Link href="/krepselis" onClick={closeMenu}>Jūsų užsakymas <b>{items.length}</b></Link><Link href="/registracija" onClick={closeMenu}>Registracija →</Link><Link href="/prisijungti" onClick={closeMenu}>Prisijungti →</Link></div></div></div>}</header>;
}
