import { DashboardView } from '../components/DashboardView';
export default function AdminPage() { return <DashboardView title="Administravimas" description="Sistemos apžvalga ir svarbiausi valdymo rodikliai vienoje vietoje." cards={[["Naudotojai", "126", "12 naujų šį mėnesį"], ["Tiekėjai", "14", "2 laukia patvirtinimo"], ["Užsakymai", "38", "5 nauji šiandien"]]} />; }
