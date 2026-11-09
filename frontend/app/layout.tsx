import './globals.css';
import './theme.css';
import './public-pages.css';
import './commerce.css';
import './site-layout.css';
import './reminders.css';
import './app-screens.css';
import './service-batch.css';
import { CartProvider } from './components/CartState';

export const metadata = { title: 'Lavonų rojus | Laidotuvių paslaugos', description: 'Laidotuvių paslaugų organizavimas vienoje vietoje.' };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="lt"><body><CartProvider>{children}</CartProvider></body></html>;
}
