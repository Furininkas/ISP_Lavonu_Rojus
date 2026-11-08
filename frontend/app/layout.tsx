import './globals.css';
import './theme.css';
import './public-pages.css';

export const metadata = { title: 'Lavonų rojus | Laidotuvių paslaugos', description: 'Laidotuvių paslaugų organizavimas vienoje vietoje.' };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="lt"><body>{children}</body></html>;
}
