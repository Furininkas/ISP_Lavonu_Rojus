'use client';
import { FormEvent, useState } from 'react';
import Link from 'next/link';

type Field = { label: string; type?: string; placeholder?: string; value?: string } | [string, string];
export function ScreenForm({ title, intro, fields, backHref, backLabel, submitLabel }: { title: string; intro: string; fields: Field[]; backHref: string; backLabel: string; submitLabel: string }) {
  const [saved, setSaved] = useState(false);
  const submit = (event: FormEvent<HTMLFormElement>) => { event.preventDefault(); setSaved(true); };
  return <section className="screen-form"><Link className="back-link" href={backHref}>← {backLabel}</Link><p className="section-kicker">Informacija</p><h1>{title}</h1><p className="screen-intro">{intro}</p>{saved ? <div className="success-panel"><h2>Veiksmas atliktas</h2><p>Informacija pateikta sėkmingai.</p><Link className="button button-purple" href={backHref}>Grįžti →</Link></div> : <form onSubmit={submit}>{fields.map((entry) => { const field = Array.isArray(entry) ? { label: entry[0], type: entry[1] } : entry; return <label key={field.label}>{field.label}{field.type === 'textarea' ? <textarea placeholder={field.placeholder} defaultValue={field.value} /> : <input type={field.type || 'text'} placeholder={field.placeholder} defaultValue={field.value} required />}</label>; })}<button className="button button-primary" type="submit">{submitLabel} →</button></form>}</section>;
}
