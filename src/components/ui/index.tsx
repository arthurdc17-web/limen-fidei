'use client';

import Link from 'next/link';
import { useState } from 'react';
import { ArrowRight, Bookmark, BookOpen, CalendarDays, Check, ChevronDown, ChevronRight, Church, CircleDot, Cross, ExternalLink, Heart, HeartHandshake, Info, Landmark, Library, ScrollText, Search, Sparkles, Users, type LucideIcon } from 'lucide-react';
import { useUser } from '@/components/providers/UserProvider';

export function PageHero({ eyebrow, title, description, image, children, compact = false }: {
  eyebrow: string; title: string; description: string; image?: string; children?: React.ReactNode; compact?: boolean;
}) {
  return (
    <section className="relative overflow-hidden bg-forest-deep text-ivory">
      {image && <div className="absolute inset-0"><img src={image} alt="" className="h-full w-full object-cover opacity-20" /></div>}
      <div className="pattern-cross absolute inset-0 opacity-40" />
      <div className={`container-page relative ${compact ? 'py-14' : 'py-20 md:py-28'}`}>
        <div className="max-w-3xl">
          <p className="eyebrow mb-4">{eyebrow}</p>
          <h1 className="font-serif text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl md:text-6xl">{title}</h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-ivory/75 sm:text-lg">{description}</p>
          {children && <div className="mt-8 flex flex-wrap gap-3">{children}</div>}
        </div>
      </div>
    </section>
  );
}

export function SectionTitle({ eyebrow, title, description, center = false }: { eyebrow?: string; title: string; description?: string; center?: boolean }) {
  return (
    <div className={`mb-9 ${center ? 'text-center' : ''}`}>
      {eyebrow && <p className="eyebrow mb-3">{eyebrow}</p>}
      <h2 className="font-serif text-3xl font-semibold leading-tight sm:text-4xl">{title}</h2>
      {description && <p className={`mt-4 max-w-2xl leading-7 text-[var(--text-muted)] ${center ? 'mx-auto' : ''}`}>{description}</p>}
      <div className={`mt-5 h-px w-16 bg-gold ${center ? 'mx-auto' : ''}`} />
    </div>
  );
}

// Server components cannot pass icon functions to client components.
// Use a stable string key instead; the icon is resolved inside this client component.
const featureIcons: Record<string, LucideIcon> = {
  book: BookOpen, calendar: CalendarDays, church: Church, cross: Cross,
  heart: Heart, 'heart-handshake': HeartHandshake, landmark: Landmark,
  library: Library, rosary: CircleDot, scroll: ScrollText, sparkles: Sparkles, users: Users,
};

export function FeatureCard({ href, image, title, description, badge, iconName }: {
  href: string; image?: string; title: string; description: string; badge?: string; iconName?: keyof typeof featureIcons;
}) {
  const Icon = iconName ? featureIcons[iconName] : undefined;
  return (
    <Link href={href} className="card group flex h-full flex-col overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-gold/60 hover:shadow-soft">
      {image && <div className="relative h-44 overflow-hidden bg-forest"><img src={image} alt="" loading="lazy" className="h-full w-full object-cover opacity-85 transition-transform duration-500 group-hover:scale-105" />{badge && <span className="absolute left-3 top-3 bg-forest-deep/85 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-gold">{badge}</span>}</div>}
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-start gap-3">
          {Icon && <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-gold/40 text-gold-dark dark:text-gold"><Icon size={17} /></span>}
          <h3 className="font-serif text-xl font-semibold leading-snug">{title}</h3>
        </div>
        <p className="mt-3 flex-1 text-sm leading-6 text-[var(--text-muted)]">{description}</p>
        <span className="mt-5 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-gold-dark dark:text-gold">Explore <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" /></span>
      </div>
    </Link>
  );
}

export function Breadcrumbs({ items }: { items: { label: string; href?: string }[] }) {
  return (
    <nav aria-label="Breadcrumb" className="container-page py-5 text-xs text-[var(--text-muted)]">
      <ol className="flex flex-wrap items-center gap-2">
        <li><Link href="/" className="hover:text-gold-dark">Home</Link></li>
        {items.map((item, i) => (
          <li key={i} className="flex items-center gap-2">
            <ChevronRight size={12} className="opacity-50" />
            {item.href ? <Link href={item.href} className="hover:text-gold-dark">{item.label}</Link> : <span aria-current="page" className="font-semibold text-[var(--text)]">{item.label}</span>}
          </li>
        ))}
      </ol>
    </nav>
  );
}

export function Accordion({ items, defaultOpen = 0 }: { items: { title: string; content: React.ReactNode }[]; defaultOpen?: number | null }) {
  const [open, setOpen] = useState<number | null>(defaultOpen);
  return (
    <div className="divide-y divide-[var(--border)] border-y border-[var(--border)]">
      {items.map((item, i) => (
        <div key={i}>
          <button onClick={() => setOpen(open === i ? null : i)} aria-expanded={open === i} className="flex w-full items-center justify-between gap-4 py-5 text-left font-medium hover:text-gold-dark dark:hover:text-gold">
            <span className="font-serif text-lg">{item.title}</span>
            <ChevronDown size={18} className={`shrink-0 text-gold transition-transform ${open === i ? 'rotate-180' : ''}`} />
          </button>
          {open === i && <div className="prose-faith pb-6 text-[15px]">{item.content}</div>}
        </div>
      ))}
    </div>
  );
}

export function Tabs({ tabs, active, onChange }: { tabs: { id: string; label: string }[]; active: string; onChange: (id: string) => void }) {
  return (
    <div className="flex flex-wrap gap-1 border-b border-[var(--border)]" role="tablist">
      {tabs.map((t) => (
        <button key={t.id} role="tab" aria-selected={active === t.id} onClick={() => onChange(t.id)} className={`-mb-px border-b-2 px-4 py-3 text-sm font-medium transition-colors ${active === t.id ? 'border-gold text-gold-dark dark:text-gold' : 'border-transparent text-[var(--text-muted)] hover:text-[var(--text)]'}`}>{t.label}</button>
      ))}
    </div>
  );
}

export function ProgressBar({ value, label }: { value: number; label?: string }) {
  return (
    <div className="w-full">
      {label && <div className="mb-2 flex justify-between text-xs font-medium text-[var(--text-muted)]"><span>{label}</span><span>{value}%</span></div>}
      <div className="h-2 w-full overflow-hidden rounded-full bg-[var(--border)]" role="progressbar" aria-label={label || 'Progress'} aria-valuenow={value} aria-valuemin={0} aria-valuemax={100}>
        <div className="h-full rounded-full bg-gold transition-all duration-500" style={{ width: `${Math.max(0, Math.min(100, value))}%` }} />
      </div>
    </div>
  );
}

export function BookmarkButton({ id, title }: { id: string; title: string }) {
  const { bookmarks, toggleBookmark } = useUser();
  const saved = bookmarks.includes(id);
  return (
    <button onClick={() => toggleBookmark(id)} aria-pressed={saved} aria-label={saved ? `Saved — remove ${title} from bookmarks` : `Save ${title} to bookmarks`} className={`inline-flex items-center gap-2 rounded-sm border px-3 py-2 text-xs font-semibold transition-colors ${saved ? 'border-gold bg-gold/15 text-gold-dark dark:text-gold' : 'border-[var(--border)] text-[var(--text-muted)] hover:border-gold'}`}>
      <Bookmark size={14} fill={saved ? 'currentColor' : 'none'} /> {saved ? 'Saved' : 'Save'}
    </button>
  );
}

export function Callout({ title, children, tone = 'green' }: { title: string; children: React.ReactNode; tone?: 'green' | 'gold' | 'red' }) {
  const styles = { green: 'border-forest/25 bg-forest-pale dark:bg-forest-light/40', gold: 'border-gold/40 bg-gold/10', red: 'border-burgundy/30 bg-burgundy/5' }[tone];
  return (
    <aside className={`my-7 border-l-4 p-5 ${styles}`}>
      <p className="mb-2 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-gold-dark dark:text-gold">{tone === 'red' ? <Info size={14} /> : <Sparkles size={14} />} {title}</p>
      <div className="text-sm leading-7">{children}</div>
    </aside>
  );
}

export function SourceNote({ label, url, ccc }: { label?: string; url?: string; ccc?: string }) {
  if (!label && !url && !ccc) return null;
  return (
    <p className="mt-8 flex flex-wrap items-center gap-x-3 gap-y-1 border-t border-[var(--border)] pt-4 text-xs text-[var(--text-muted)]">
      <span className="font-semibold uppercase tracking-wider">Reference</span>
      {ccc && <span>{ccc}</span>}
      {label && (url ? <a href={url} target="_blank" rel="noopener noreferrer" className="link-gold inline-flex items-center gap-1">{label} <ExternalLink size={11} /></a> : <span>{label}</span>)}
    </p>
  );
}

export function EmptyState({ title, description, href, action }: { title: string; description: string; href?: string; action?: string }) {
  return (
    <div className="card flex flex-col items-center px-6 py-14 text-center">
      <span className="mb-4 flex h-12 w-12 items-center justify-center rounded-full border border-gold/40 text-gold"><Search size={20} /></span>
      <h3 className="font-serif text-2xl">{title}</h3>
      <p className="mt-2 max-w-md text-sm leading-6 text-[var(--text-muted)]">{description}</p>
      {href && <Link href={href} className="btn-primary mt-6">{action || 'Browse content'}</Link>}
    </div>
  );
}

export function CheckListItem({ children, done = false }: { children: React.ReactNode; done?: boolean }) {
  return <li className="flex gap-3 text-sm leading-6"><span className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border ${done ? 'border-gold bg-gold text-forest-deep' : 'border-[var(--border)] text-transparent'}`}><Check size={12} /></span><span>{children}</span></li>;
}
