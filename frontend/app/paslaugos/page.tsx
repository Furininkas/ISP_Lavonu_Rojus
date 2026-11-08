import Link from 'next/link';
import { SiteHeader } from '../components/SiteHeader';
import { SiteFooter } from '../components/SiteFooter';

const items = [
  ['Laidotuvių organizavimas', 'Paslaugų pasirinkimas, datos, laiko ir vietos suderinimas vienoje vietoje.'],
  ['Palaikų transportavimas', 'Patogus maršruto planavimas tarp pasirinktų paslaugų vietų.'],
  ['Atminimo priminimai', 'Svarbių datų priminimai ir susijusių paslaugų rekomendacijos.'],
];

export default function ServicesPage() {
  return <><SiteHeader /><main className="public-page"><section className="public-hero"><div className="container"><p className="section-kicker">Paslaugos</p><h1>Pagalba kiekviename<br /><em>svarbiame žingsnyje.</em></h1><p>Aiškiai pateiktos paslaugos padeda pasirūpinti svarbiausiais sprendimais jums patogiu tempu.</p></div></section><section className="container public-grid">{items.map(([title, text], i) => <article key={title}><span>0{i + 1}</span><h2>{title}</h2><p>{text}</p></article>)}</section><section className="public-cta"><div className="container"><p className="section-kicker light">Pasiruošę pradėti?</p><h2>Susipažinkite su mūsų<br /><em>paslaugomis.</em></h2><Link className="button button-primary" href="/prisijungti">Prisijungti <span>→</span></Link></div></section></main><SiteFooter /></>;
}
