import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowRight, CalendarDays, Cross, Heart, ScrollText, Sparkles, Users } from 'lucide-react';
import { PageHero, SectionTitle, Breadcrumbs, BookmarkButton, Callout, SourceNote } from '@/components/ui';
import { saints, getSaint } from '@/content/saints';

export function generateStaticParams() {
  return saints.map((saint) => ({ id: saint.id }));
}

export function generateMetadata({ params }: { params: { id: string } }): Metadata {
  const saint = getSaint(params.id);
  if (!saint) return { title: 'Saint not found' };
  return {
    title: saint.name,
    description: saint.background,
  };
}

export default function SaintDetailPage({ params }: { params: { id: string } }) {
  const saint = getSaint(params.id);
  if (!saint) notFound();

  const index = saints.findIndex((s) => s.id === saint.id);
  const previous = saints[(index - 1 + saints.length) % saints.length];
  const next = saints[(index + 1) % saints.length];

  return (
    <>
      <Breadcrumbs items={[{ label: 'Saints', href: '/saints' }, { label: saint.name }]} />

      <PageHero
        eyebrow={`${saint.period} · ${saint.vocation}`}
        title={saint.name}
        description={saint.background}
        image={saint.image}
      >
        <BookmarkButton id={`saint-${saint.id}`} title={saint.name} />
        <Link href="/saints" className="btn border border-ivory/40 text-ivory hover:text-gold">Back to all saints</Link>
      </PageHero>

      <div className="container-page py-16">
        <div className="grid gap-12 lg:grid-cols-[1fr_330px] lg:items-start">
          <div>
            {saint.image ? (
              <img src={saint.image} alt={`Sacred art depicting ${saint.name}`} className="card mb-10 h-72 w-full object-cover sm:h-96" />
            ) : (
              <div className="card mb-10 flex h-52 flex-col items-center justify-center bg-forest text-center text-ivory/70" aria-label="No image is included for this saint">
                <Cross size={38} strokeWidth={1.2} />
                <p className="mt-3 text-sm">No image is included for this saint.</p>
              </div>
            )}

            <div className="prose-faith max-w-prose">
              <SectionTitle eyebrow="The story" title="Life and legacy" />
              {saint.biography.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}

              <h2>In their own words</h2>
              <p>{saint.writings}</p>

              <h2>A prayer associated with {saint.name}</h2>
              <blockquote>{saint.prayer}</blockquote>

              <h2>Why they are remembered</h2>
              <p>{saint.remembered}</p>
            </div>
          </div>

          <aside className="space-y-6">
            <div className="card p-7">
              <p className="eyebrow mb-5">At a glance</p>
              <dl className="space-y-5 text-sm">
                <div>
                  <dt className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[var(--text-muted)]"><CalendarDays size={14} className="text-gold-dark dark:text-gold" /> Feast day</dt>
                  <dd className="mt-1 font-serif text-lg leading-7">{saint.feast}</dd>
                </div>
                <div>
                  <dt className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[var(--text-muted)]"><CalendarDays size={14} className="text-gold-dark dark:text-gold" /> Dates</dt>
                  <dd className="mt-1 font-serif text-lg leading-7">{saint.dates}</dd>
                </div>
                <div>
                  <dt className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[var(--text-muted)]"><Users size={14} className="text-gold-dark dark:text-gold" /> Vocation</dt>
                  <dd className="mt-1 font-serif text-lg leading-7">{saint.vocation}</dd>
                </div>
                <div>
                  <dt className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[var(--text-muted)]"><ScrollText size={14} className="text-gold-dark dark:text-gold" /> Period</dt>
                  <dd className="mt-1 font-serif text-lg leading-7">{saint.period}</dd>
                </div>
                <div>
                  <dt className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[var(--text-muted)]"><Sparkles size={14} className="text-gold-dark dark:text-gold" /> Patronage</dt>
                  <dd className="mt-2 flex flex-wrap gap-1.5">{saint.patronage.map((item) => <span key={item} className="chip">{item}</span>)}</dd>
                </div>
              </dl>
            </div>

            <div className="card p-7">
              <p className="eyebrow mb-4">Virtues</p>
              <ul className="space-y-3">
                {saint.virtues.map((virtue) => (
                  <li key={virtue} className="flex items-start gap-2.5 text-sm leading-6"><Heart size={15} className="mt-1 shrink-0 text-gold-dark dark:text-gold" /> {virtue}</li>
                ))}
              </ul>
            </div>

            <div className="card p-7">
              <p className="eyebrow mb-4">Key events</p>
              <ol className="space-y-3">
                {saint.events.map((event, i) => (
                  <li key={event} className="flex gap-3 text-sm leading-6">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-gold/50 font-serif text-xs text-gold-dark dark:text-gold">{i + 1}</span>
                    <span>{event}</span>
                  </li>
                ))}
              </ol>
            </div>

            <SourceNote label="Saints and blessed — The Holy See" url="https://www.vatican.va/" />
          </aside>
        </div>

        <Callout title="A life worth reading slowly" tone="gold">
          Saints are not presented as people who never struggled. Their holiness is a witness to what grace can do in an ordinary human life. Take one virtue or one event from this story and carry it into your own week.
        </Callout>
      </div>

      {/* PREVIOUS / NEXT */}
      <nav aria-label="More saints" className="border-t border-[var(--border)] bg-[var(--surface)] py-12">
        <div className="container-page grid gap-5 sm:grid-cols-2">
          <Link href={`/saints/${previous.id}`} className="card group flex items-center gap-4 p-6 transition-colors hover:border-gold">
            <ArrowRight size={18} className="shrink-0 rotate-180 text-gold-dark dark:text-gold" />
            <span>
              <span className="block text-[11px] font-bold uppercase tracking-[0.18em] text-[var(--text-muted)]">Previous saint</span>
              <span className="mt-1 block font-serif text-lg font-semibold group-hover:text-gold-dark dark:group-hover:text-gold">{previous.name}</span>
            </span>
          </Link>
          <Link href={`/saints/${next.id}`} className="card group flex items-center justify-end gap-4 p-6 text-right transition-colors hover:border-gold">
            <span>
              <span className="block text-[11px] font-bold uppercase tracking-[0.18em] text-[var(--text-muted)]">Next saint</span>
              <span className="mt-1 block font-serif text-lg font-semibold group-hover:text-gold-dark dark:group-hover:text-gold">{next.name}</span>
            </span>
            <ArrowRight size={18} className="shrink-0 text-gold-dark dark:text-gold" />
          </Link>
        </div>
      </nav>
    </>
  );
}
