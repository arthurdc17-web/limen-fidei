import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, BookOpen } from 'lucide-react';
import { Breadcrumbs, Callout, PageHero, SectionTitle } from '@/components/ui';
import { GlossaryBrowser } from '@/components/features/GlossaryBrowser';

export const metadata: Metadata = {
  title: 'Catholic Glossary',
  description: 'Search and browse plain-language definitions of Catholic terms, filtered by category and grouped alphabetically.',
};

export default function GlossaryPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: 'Glossary' }]} />

      <PageHero
        eyebrow="Reference"
        title="Catholic Glossary"
        description="Church words do not have to be confusing. Look up a term, browse by category, or scan the alphabet to find clear, short definitions you can use while you read and pray."
      >
        <Link href="/sources" className="btn border border-ivory/40 text-ivory hover:text-gold">See our sources <ArrowRight size={15} /></Link>
      </PageHero>

      <div className="container-page py-14">
        <Callout title="How to read these definitions" tone="green">
          These are short, educational explanations written for beginners, not formal definitions from the Magisterium. Some terms have a precise technical meaning in theology or canon law; where that matters, we point you to the Church documents behind the entry. For authoritative teaching, read the sources themselves.
        </Callout>
      </div>

      <section className="bg-[var(--bg-alt)] py-16">
        <div className="container-page">
          <SectionTitle
            eyebrow="Browse"
            title="Look up a term"
            description="Search by word or phrase, narrow the list by category, or reset everything to start again. Every definition is shown in place — no clicks needed."
          />
          <GlossaryBrowser />
        </div>
      </section>

      <section className="bg-forest py-16 text-ivory">
        <div className="container-narrow text-center">
          <BookOpen size={28} className="mx-auto text-gold" aria-hidden="true" />
          <h2 className="mt-5 font-serif text-3xl font-semibold sm:text-4xl">Go deeper with primary sources</h2>
          <p className="mx-auto mt-5 max-w-2xl leading-8 text-ivory/70">
            The glossary is a starting point. Our references page collects the Scripture translations, Catechism, Vatican documents, and bishops’ conference resources used throughout the site.
          </p>
          <Link href="/sources" className="btn mt-8 bg-gold text-forest-deep hover:bg-gold-light">Explore sources and references <ArrowRight size={16} /></Link>
        </div>
      </section>
    </>
  );
}
