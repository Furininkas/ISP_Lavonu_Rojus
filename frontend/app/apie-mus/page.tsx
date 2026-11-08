import { SiteHeader } from '../components/SiteHeader';
import { SiteFooter } from '../components/SiteFooter';

export default function AboutPage() {
  return <><SiteHeader /><main className="public-page"><section className="public-hero about-hero"><div className="container"><p className="section-kicker">Apie mus</p><h1>Rūpestis, pagarba<br />ir <em>aiškumas.</em></h1><p>„Lavonų rojus“ yra informacinė sistema, skirta padėti organizuoti laidojimo paslaugas, užsakymus ir atminimo priežiūrą.</p></div></section><section className="container values"><p className="section-kicker">Mūsų požiūris</p><div><h2>Sudėtingu metu technologija turi būti <em>rami ir paprasta.</em></h2><p>Vienoje vietoje sujungiame paslaugas, prekes, užsakymus, sąskaitas ir priminimus, kad svarbi informacija būtų lengvai pasiekiama tada, kai jos reikia.</p></div></section></main><SiteFooter /></>;
}
