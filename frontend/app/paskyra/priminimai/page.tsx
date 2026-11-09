import Link from 'next/link';
import { SiteFooter } from '../../components/SiteFooter';
import { SiteHeader } from '../../components/SiteHeader';

const reminders = [
  { date: '18', month: 'LAP', title: 'Ceremonijos data', text: 'Primename apie suplanuotą ceremoniją ir pasiruošimo laiką.', status: 'Šią savaitę' },
  { date: '28', month: 'LAP', title: 'Atminimo diena', text: 'Svarbi data, kurią galite pažymėti savo kalendoriuje.', status: 'Po 10 dienų' },
  { date: '06', month: 'GRU', title: 'Užsakymo apžvalga', text: 'Peržiūrėkite užsakymo informaciją ir suderintus pasirinkimus.', status: 'Gruodžio mėn.' },
];

export default function RemindersPage() {
  return <><SiteHeader /><main className="container reminders-page"><Link className="back-link" href="/paskyra">← Grįžti į paskyrą</Link><div className="reminders-heading"><div><p className="section-kicker">Mano paskyra</p><h1>Priminimai</h1><p>Visa svarbiausia informacija apie artėjančias datas – vienoje vietoje.</p></div><span className="reminder-count">3 aktyvūs</span></div><section className="reminder-list" aria-label="Artėjantys priminimai">{reminders.map((reminder) => <article key={reminder.title}><div className="reminder-date"><strong>{reminder.date}</strong><span>{reminder.month}</span></div><div><p className="reminder-status">{reminder.status}</p><h2>{reminder.title}</h2><p>{reminder.text}</p></div><span className="reminder-dot" aria-hidden="true" /></article>)}</section><section className="reminder-note"><div><p className="section-kicker">Pranešimai</p><h2>Norite gauti priminimus el. paštu?</h2><p>Pasirinkite pageidaujamą priminimų būdą savo paskyros nustatymuose.</p></div><Link className="button button-purple" href="/paskyra">Paskyros nustatymai →</Link></section></main><SiteFooter /></>;
}
