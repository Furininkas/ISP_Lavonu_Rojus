import Link from 'next/link';
import { SiteHeader } from '../components/SiteHeader';
import { SiteFooter } from '../components/SiteFooter';

export default function SignInPage() {
  return <><SiteHeader /><main className="sign-in-page"><div className="sign-in-card"><p className="section-kicker">Paskyra</p><h1>Prisijungimas<br />netrukus.</h1><p>Registracija ir prisijungimas bus įgyvendinti kitame etape.</p><Link className="button button-purple" href="/">Grįžti į pradžią <span>←</span></Link></div></main><SiteFooter /></>;
}
