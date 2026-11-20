import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowRight, BookOpen, Clock, Heart, ScrollText, Volume2 } from 'lucide-react';
import { BookmarkButton, Breadcrumbs, Callout, PageHero, SectionTitle, SourceNote } from '@/components/ui';
import { PrintButton } from '@/components/features/PrintButton';
import { RecordVisit } from '@/components/features/RecordVisit';
import { getPrayer, prayers } from '@/content/prayers';

export function generateMetadata({ params }: { params: { id: string } }): Metadata {
  const prayer = getPrayer(params.id);
  if (!prayer) return { title: 'Prayer not found' };
  return { title: prayer.title, description: prayer.meaning };
}

export function generateStaticParams() {
  return prayers.map((prayer) => ({ id: prayer.id }));
}

export default function PrayerDetailPage({ params }: { params: { id: string } }) {
  const prayer = getPrayer(params.id);
  if (!prayer) notFound();

  const related = prayers.filter((item) => item.category === prayer.category && item.id !== prayer.id).slice(0, 4);

  return (
    <>
      <PageHero
        compact
        eyebrow={prayer.category}
        title={prayer.title}
        description={prayer.meaning}
      >
        <PrintButton label="Print prayer" />
        <Link href="/prayers" className="btn border border-ivory/40 text-ivory hover:text-gold">All prayers <ArrowRight size={16} /></Link>
        <RecordVisit id={`prayer-${prayer.id}`} title={prayer.title} />
      </PageHero>

      <Breadcrumbs items={[
        { label: 'Prayers', href: '/prayers' },
        { label: prayer.category, href: '/prayers' },
        { label: prayer.title },
      ]} />

      {/* FULL TEXT */}
      <section className="container-narrow py-14">
        <div className="mb-5 flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="eyebrow">The text</p>
            <h2 className="mt-2 font-serif text-2xl font-semibold">Pray the words slowly</h2>
          </div>
          <BookmarkButton id={prayer.id} title={prayer.title} />
        </div>
        <article className="card p-8 sm:p-12">
          <p className="prayer-text">{prayer.text}</p>
        </article>
        {prayer.tags && prayer.tags.length > 0 && (
          <div className="mt-5 flex flex-wrap items-center gap-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-[var(--text-muted)]">Themes</span>
            {prayer.tags.map((tag) => <span key={tag} className="chip">#{tag}</span>)}
          </div>
        )}
      </section>

      {/* GUIDANCE */}
      <section className="bg-[var(--surface)] py-16">
        <div className="container-narrow">
          <SectionTitle eyebrow="Understanding this prayer" title="Meaning, time, and method" />
          <div className="grid gap-5 md:grid-cols-3">
            <article className="card p-6">
              <Heart size={20} className="text-gold-dark dark:text-gold" aria-hidden="true" />
              <h3 className="mt-4 font-serif text-xl font-semibold">What it means</h3>
              <p className="mt-3 text-sm leading-7 text-[var(--text-muted)]">{prayer.meaning}</p>
            </article>
            <article className="card p-6">
              <Clock size={20} className="text-gold-dark dark:text-gold" aria-hidden="true" />
              <h3 className="mt-4 font-serif text-xl font-semibold">When to pray it</h3>
              <p className="mt-3 text-sm leading-7 text-[var(--text-muted)]">{prayer.when}</p>
            </article>
            <article className="card p-6">
              <ScrollText size={20} className="text-gold-dark dark:text-gold" aria-hidden="true" />
              <h3 className="mt-4 font-serif text-xl font-semibold">How to pray it</h3>
              <p className="mt-3 text-sm leading-7 text-[var(--text-muted)]">{prayer.how}</p>
            </article>
          </div>

          {prayer.history && (
            <div className="prose-faith mt-12 max-w-prose">
              <h2>Where this prayer comes from</h2>
              <p>{prayer.history}</p>
            </div>
          )}

          <Callout title="A devotion, not an obligation" tone="gold">
            Many of these prayers are cherished devotions rather than required acts of worship. Where a practice varies by parish, diocese, or rite — such as the language used or whether a prayer is said after Mass — follow local custom. God is not honoured by anxious precision.
          </Callout>

          {prayer.source && (
            <SourceNote label={prayer.source.label} url={prayer.source.url} />
          )}
        </div>
      </section>

      {/* AUDIO */}
      <section className="container-narrow py-14">
        <div className="card flex flex-col gap-4 p-7 sm:flex-row sm:items-start">
          <Volume2 size={22} className="shrink-0 text-gold-dark dark:text-gold" aria-hidden="true" />
          <div>
            <h2 className="font-serif text-xl font-semibold">Praying with audio</h2>
            {prayer.audioUrl ? (
              <>
                <p className="mt-2 text-sm leading-7 text-[var(--text-muted)]">A recording is available for this prayer. Use the player below, and pause whenever you need to.</p>
                <audio controls src={prayer.audioUrl} aria-label={`Audio recording of ${prayer.title}`} className="mt-4 w-full">
                  Your browser does not support audio playback.
                </audio>
              </>
            ) : (
              <p className="mt-2 text-sm leading-7 text-[var(--text-muted)]">No recorded audio file is provided for this prayer. The <Link href="/rosary" className="link-gold">interactive Rosary guide</Link> can read prayers aloud using your device’s built-in speech voice, and recordings can be attached to a prayer through its <code className="rounded bg-[var(--bg-alt)] px-1.5 py-0.5 text-xs">audioUrl</code> field without changing this page.</p>
            )}
          </div>
        </div>
      </section>

      {/* RELATED */}
      {related.length > 0 && (
        <section className="bg-ivory py-16 dark:bg-[var(--bg-alt)]">
          <div className="container-page">
            <SectionTitle eyebrow="Keep praying" title={`More ${prayer.category.toLowerCase()}`} description="Other prayers from the same category in the library." />
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {related.map((item) => (
                <Link key={item.id} href={`/prayers/${item.id}`} className="card group p-6">
                  <BookOpen size={18} className="text-gold-dark dark:text-gold" aria-hidden="true" />
                  <h3 className="mt-3 font-serif text-xl font-semibold group-hover:text-gold-dark dark:group-hover:text-gold">{item.title}</h3>
                  <p className="mt-2 line-clamp-3 text-sm leading-6 text-[var(--text-muted)]">{item.meaning}</p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-gold-dark dark:text-gold">Read the prayer <ArrowRight size={13} /></span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
