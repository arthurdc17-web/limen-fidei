import Link from 'next/link';
import { ArrowRight, BookOpen, ExternalLink, Search } from 'lucide-react';
import { FeatureCard } from '@/components/ui';
import { sourceGroups } from '@/content/sources';

export default function NotFound() {
  const bibleSource = sourceGroups[0]?.items[0];

  return (
    <>
      <section className="relative overflow-hidden bg-forest-deep text-ivory">
        <div className="pattern-cross absolute inset-0 opacity-40" aria-hidden="true" />
        <div className="container-page relative py-20 md:py-28">
          <div className="max-w-3xl">
            <p className="eyebrow mb-4">404 — Page not found</p>
            <h1 className="font-serif text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl md:text-6xl">This page has gone wandering.</h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-ivory/75 sm:text-lg">
              The link may be out of date, or the page may have moved. Nothing is lost — here are a few good places to pick up again.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/" className="btn bg-gold text-forest-deep hover:bg-gold-light">Return home <ArrowRight size={16} /></Link>
              <Link href="/search" className="btn border border-ivory/40 text-ivory hover:text-gold">Search the site</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="container-page py-16">
        <p className="eyebrow mb-3">Keep exploring</p>
        <h2 className="font-serif text-3xl font-semibold sm:text-4xl">Popular starting points</h2>
        <div className="divider-gold mt-5" />
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {bibleSource && (
            <a href={bibleSource.url} target="_blank" rel="noopener noreferrer" className="card group flex h-full flex-col p-6 transition-all duration-300 hover:-translate-y-1 hover:border-gold/60 hover:shadow-soft">
              <BookOpen size={18} className="text-gold-dark dark:text-gold" aria-hidden="true" />
              <h3 className="mt-3 font-serif text-xl font-semibold leading-snug">{bibleSource.name}</h3>
              <p className="mt-3 flex-1 text-sm leading-6 text-[var(--text-muted)]">{bibleSource.note}</p>
              <span className="mt-5 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-gold-dark dark:text-gold">
                Read the Bible <ExternalLink size={13} aria-hidden="true" /><span className="sr-only">(opens in a new tab)</span>
              </span>
            </a>
          )}
          <FeatureCard href="/mass" title="Guide to the Mass" description="Follow along with every part of the liturgy, step by step." iconName="church" />
          <FeatureCard href="/rosary" title="Pray the Rosary" description="Pray bead by bead with full texts and the mysteries." iconName="rosary" />
          <FeatureCard href="/glossary" title="Catholic Glossary" description="Look up a word in plain language, from A to Z." iconName="book" />
        </div>
        <p className="mt-10 text-sm leading-7 text-[var(--text-muted)]">
          Still stuck? Try the <Link href="/search" className="link-gold inline-flex items-center gap-1">site search <Search size={12} aria-hidden="true" /></Link> or start with the <Link href="/lessons" className="link-gold">beginner’s guide</Link>.
        </p>
      </section>
    </>
  );
}
