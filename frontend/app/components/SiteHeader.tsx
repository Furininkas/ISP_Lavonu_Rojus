import Link from 'next/link';

export function SiteHeader() {
  return (
    <header className="site-header">
      <nav className="nav container" aria-label="Pagrindinė navigacija">
        <Link className="brand" href="/" aria-label="Lavonų rojus - pradžia"><span className="brand-mark">LR</span><span>Lavonų rojus</span></Link>
        <div className="nav-links"><Link href="/paslaugos">Paslaugos</Link><Link href="/prekes">Prekės</Link><Link href="/apie-mus">Apie mus</Link></div>
        <Link className="login-link" href="/prisijungti">Prisijungti <span>↗</span></Link>
      </nav>
    </header>
  );
}
