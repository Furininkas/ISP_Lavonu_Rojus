import Link from 'next/link';
import { SiteHeader } from '../components/SiteHeader';
import { SiteFooter } from '../components/SiteFooter';

const categories = ['Laidotuvių atributika', 'Atminimo prekės', 'Gėlių kompozicijos'];

export default function ProductsPage() {
  return <><SiteHeader /><main className="public-page"><section className="public-hero mint-hero"><div className="container"><p className="section-kicker">Prekės</p><h1>Rinkitės tai, kas<br /><em>prasminga.</em></h1><p>Prekių kataloge galėsite ramiai peržiūrėti kategorijas, kainas ir prieinamumą.</p></div></section><section className="container category-list"><p className="section-kicker">Katalogas</p>{categories.map((category, i) => <div className="category-row" key={category}><span>0{i + 1}</span><h2>{category}</h2><span>→</span></div>)}<p className="catalogue-note">Produktų katalogas bus prijungtas kitame etape, kai įgyvendinsime prekių valdymą.</p></section><section className="public-cta purple-cta"><div className="container"><h2>Peržiūrėkite prekes<br />savo <em>paskyroje.</em></h2><Link className="button button-primary" href="/prisijungti">Prisijungti <span>→</span></Link></div></section></main><SiteFooter /></>;
}
