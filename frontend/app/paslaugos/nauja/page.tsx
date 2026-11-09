import Link from 'next/link';
import { AppShell } from '../../components/AppShell';
import { ServiceBatchForm } from '../../components/ServiceBatchForm';

export default function NewServicePage() { return <AppShell><section className="screen-form batch-screen"><Link className="back-link" href="/paslaugos">← Grįžti į paslaugas</Link><p className="section-kicker">Paslaugų kūrimo forma</p><h1>Kurti paslaugas</h1><p className="screen-intro">Pridėkite vieną ar daugiau paslaugų į sąrašą. Baigę pasirinkite „Įrašyti paslaugas“.</p><ServiceBatchForm /></section></AppShell>; }
