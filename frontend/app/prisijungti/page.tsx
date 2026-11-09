import Link from 'next/link';
import { SiteFooter } from '../components/SiteFooter';
import { SiteHeader } from '../components/SiteHeader';

export default function SignInPage() {
  return <><SiteHeader /><main className="sign-in-page"><section className="container login-wrap"><div><p className="section-kicker">Paskyra</p><h1>Prisijunkite prie<br /><em>savo paskyros.</em></h1><p>Čia rasite paslaugas, užsakymus ir svarbiausią informaciją vienoje vietoje.</p></div><form className="login-form"><label>El. paštas<input type="email" placeholder="vardas@pastas.lt" /></label><label>Slaptažodis<input type="password" placeholder="••••••••" /></label><Link className="button button-primary" href="/pagrindinis">Prisijungti →</Link><p>Naujas naudotojas? <Link href="/registracija">Registruotis</Link></p></form></section></main><SiteFooter /></>;
}
