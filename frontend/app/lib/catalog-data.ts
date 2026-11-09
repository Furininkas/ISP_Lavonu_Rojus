export type CatalogItem = { id: string; kind: 'Paslauga' | 'Prekė'; title: string; description: string; price: number; meta: string; };
export const services: CatalogItem[] = [
  { id: 'atsisveikinimo-planas', kind: 'Paslauga', title: 'Atsisveikinimo planas', description: 'Konsultacija ir svarbiausių ceremonijos sprendimų suderinimas vienoje vietoje.', price: 95, meta: 'Apie 60 min.' },
  { id: 'transportas', kind: 'Paslauga', title: 'Palaikų transportavimas', description: 'Transporto maršruto ir laiko suderinimas pagal jūsų pasirinktą vietą.', price: 140, meta: 'Pagal maršrutą' },
  { id: 'atminimo-priminimai', kind: 'Paslauga', title: 'Atminimo priminimai', description: 'Svarbių datų planas ir ramūs priminimai šeimai.', price: 25, meta: 'Metinis planas' },
];
export const products: CatalogItem[] = [
  { id: 'atminimo-zvake', kind: 'Prekė', title: 'Atminimo žvakė', description: 'Paprasta, ilgo degimo žvakė tyliai atminimo akimirkai.', price: 12, meta: 'Laidotuvių atributika' },
  { id: 'gedulu-puokste', kind: 'Prekė', title: 'Gedulo puokštė', description: 'Sezoninių gėlių kompozicija su juosta ir pasirinktu užrašu.', price: 45, meta: 'Gėlių kompozicijos' },
  { id: 'atminimo-remelis', kind: 'Prekė', title: 'Atminimo rėmelis', description: 'Minimalistinis rėmelis nuotraukai ir trumpam prisiminimui.', price: 28, meta: 'Atminimo prekės' },
];
export function findItem(kind: 'services' | 'products', id: string) { return (kind === 'services' ? services : products).find((item) => item.id === id); }
export function formatPrice(price: number) { return new Intl.NumberFormat('lt-LT', { style: 'currency', currency: 'EUR' }).format(price); }
