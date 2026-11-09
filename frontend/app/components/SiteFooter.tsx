import Link from 'next/link';

const links = [
  ['Paslaugos', '/paslaugos'],
  ['Prekės', '/prekes'],
  ['Apie mus', '/apie-mus'],
  ['Prisijungti', '/prisijungti'],
];

export function SiteFooter() {
  return <footer id="kontaktai" className="site-footer"><div className="container footer-grid"><div className="footer-brand"><Link className="brand" href="/"><span className="brand-mark">LR</span><span>Lavonų rojus</span></Link><p>Laidotuvių paslaugos su rūpesčiu, pagarba ir aiškumu.</p></div><div><p className="footer-label">Naršyti</p><nav className="footer-links" aria-label="Poraštės navigacija">{links.map(([label, href]) => <Link href={href} key={href}>{label}</Link>)}</nav></div><div><p className="footer-label">Susisiekite</p><a href="tel:+37060000000">+370 600 00 000</a><a href="mailto:info@lavonurojus.lt">info@lavonurojus.lt</a><p className="footer-address">Kaunas, Lietuva</p></div></div><div className="container footer-bottom"><span>© 2026 UAB „Lavonų rojus“</span><span>Privatumo politika · Naudojimosi sąlygos</span></div></footer>;
}
