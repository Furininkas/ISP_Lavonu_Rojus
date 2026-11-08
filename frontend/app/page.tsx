import { SiteHeader } from './components/SiteHeader';
import { SiteFooter } from './components/SiteFooter';

const services = [
  ['01', 'Laidotuvių planavimas', 'Paslaugos, laikas ir svarbiausi sprendimai vienoje aiškioje vietoje.'],
  ['02', 'Prekės atminimui', 'Rinkitės reikalingas prekes ir matykite jų kainas bei prieinamumą.'],
  ['03', 'Užsakymų valdymas', 'Peržiūrėkite užsakymą, sąskaitą ir svarbius priminimus savo paskyroje.'],
];

export default function Home() {
  return (
    <main>
      <section className="hero" id="pradzia">
        <SiteHeader />
        <div className="container hero-content">
          <p className="eyebrow">Rūpestis, kai jo labiausiai reikia</p>
          <h1>Orus atsisveikinimas.<br /><em>Aiškus kelias pirmyn.</em></h1>
          <p className="hero-copy">Padedame ramiau pasirūpinti laidotuvių paslaugomis, atminimo prekėmis ir svarbia informacija - vienoje vietoje.</p>
          <div className="hero-actions"><a className="button button-primary" href="#paslaugos">Peržiūrėti paslaugas <span>→</span></a><a className="button button-text" href="#procesas">Sužinoti daugiau <span>↓</span></a></div>
        </div>
        <div className="hero-orbit orbit-one" aria-hidden="true" /><div className="hero-orbit orbit-two" aria-hidden="true" /><div className="hero-leaf leaf-one" aria-hidden="true" /><div className="hero-leaf leaf-two" aria-hidden="true" />
        <p className="hero-note">UAB LAVONŲ ROJUS · KAUNAS</p>
      </section>
      <section className="intro container" id="paslaugos">
        <p className="section-kicker">Mūsų sistema</p>
        <div className="intro-heading"><h2>Mažiau rūpesčių<br />sudėtingu metu.</h2><p>Lavonų rojus sujungia svarbiausius laidojimo organizavimo žingsnius į vieną ramią ir lengvai naudojamą erdvę.</p></div>
        <div className="service-grid">{services.map(([number, title, text]) => <article className="service-card" key={number}><span className="service-number">{number}</span><div className="card-symbol" aria-hidden="true">✦</div><h3>{title}</h3><p>{text}</p><a href="#prisijungti" aria-label={`${title} - daugiau informacijos`}>Daugiau <span>→</span></a></article>)}</div>
      </section>
      <section className="process" id="procesas"><div className="container process-layout"><div><p className="section-kicker light">Paprastas procesas</p><h2>Viskas, ko reikia,<br /><em>be skubėjimo.</em></h2></div><ol className="steps"><li><span>01</span><div><h3>Pasirinkite</h3><p>Peržiūrėkite paslaugas ir prekes pagal savo poreikius.</p></div></li><li><span>02</span><div><h3>Sudarykite užsakymą</h3><p>Patogiai suformuokite užsakymą ir matykite jo eigą.</p></div></li><li><span>03</span><div><h3>Rūpinkitės ramiai</h3><p>Gaukite sąskaitą, tvarkaraštį ir svarbius priminimus.</p></div></li></ol></div></section>
      <section className="closing container" id="prisijungti"><p className="section-kicker">Pradėkite čia</p><h2>Ramybė prasideda<br />nuo <em>aiškumo.</em></h2><a className="button button-purple" href="#kontaktai">Prisijungti prie sistemos <span>→</span></a></section>
      <SiteFooter />
    </main>
  );
}
