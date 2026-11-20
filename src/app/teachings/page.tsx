import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Info } from 'lucide-react';
import { Accordion, Breadcrumbs, Callout, FeatureCard, PageHero, SectionTitle, SourceNote } from '@/components/ui';
import { TeachingLibrary } from '@/components/features/TeachingLibrary';
import { images } from '@/content/images';
import { accuracyNote, doctrinalNotes } from '@/content/sources';

export const metadata: Metadata = {
  title: 'Catholic Teachings — Doctrine, Morality, and Faith Explained',
  description: 'Explore Catholic teachings on the Trinity, grace, moral life, Mary and the saints, Church authority, and philosophical foundations.',
};

export default function TeachingsPage() {
  return (
    <>
      <PageHero
        eyebrow="Catholic Teachings"
        title="Understand What the Church Teaches"
        description="Clear, referenced explanations of Catholic doctrine and moral teaching — from the Trinity and the sacraments to conscience, social teaching, and the saints."
        image={images.stainedGlass}
      >
        <Link href="#articles" className="btn bg-gold text-forest-deep hover:bg-gold-light">Browse the teachings <ArrowRight size={16} /></Link>
        <Link href="/lessons" className="btn border border-ivory/40 text-ivory hover:text-gold">Start with the basics</Link>
      </PageHero>

      <Breadcrumbs items={[{ label: 'Teachings' }]} />

      <section className="container-page py-14">
        <Callout title="How to read these articles" tone="green">
          {accuracyNote}
        </Callout>
      </section>

      <section id="articles" className="scroll-mt-28 bg-[var(--surface)] py-16">
        <div className="container-page">
          <SectionTitle eyebrow="The library" title="Explore the teachings" description="Filter by category or search for a topic, term, or Scripture reference. Each article includes a summary, key terms, and references." />
          <TeachingLibrary />
        </div>
      </section>

      {/* DOGMA, DOCTRINE, DISCIPLINE */}
      <section className="container-page py-20">
        <div className="grid gap-10 lg:grid-cols-[380px_1fr] lg:items-start">
          <div>
            <SectionTitle eyebrow="Important distinctions" title="Dogma, doctrine, and discipline" description="Not every Church statement carries the same weight. The Catechism distinguishes several kinds of teaching." />
            <p className="text-sm leading-7 text-[var(--text-muted)]">These distinctions help you read Church documents carefully and avoid presenting a theological opinion or a changeable rule as a defined truth of faith.</p>
            <div className="mt-6 card p-6">
              <Info size={20} className="text-gold-dark dark:text-gold" aria-hidden="true" />
              <p className="mt-3 text-sm leading-7 text-[var(--text-muted)]">Defined dogmas are binding. Doctrines require religious submission of mind and will. Disciplines can change. The articles here identify which is which where the distinction matters.</p>
            </div>
          </div>
          <div className="card p-8">
            <Accordion items={doctrinalNotes.map((note) => ({
              title: note.title,
              content: <p>{note.text}</p>,
            }))} />
          </div>
        </div>
      </section>

      {/* RELATED PATHS */}
      <section className="bg-forest py-16 text-ivory">
        <div className="container-page">
          <p className="eyebrow mb-3">Keep learning</p>
          <h2 className="font-serif text-3xl font-semibold">Faith is lived, not only studied</h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-ivory/70">Connect these teachings to prayer, the sacraments, and the everyday practice of discipleship.</p>
        </div>
      </section>
      <section className="container-page py-16">
        <div className="grid gap-6 md:grid-cols-3">
          <FeatureCard href="/lessons" iconName="book" title="Beginner’s Guide" description="Five introductory lessons covering the basic story and vocabulary of the faith." />
          <FeatureCard href="/sacraments" iconName="church" title="The Seven Sacraments" description="What each sacrament is, how it is celebrated, and the grace it brings." />
          <FeatureCard href="/glossary" iconName="library" title="Catholic Glossary" description="Plain-language definitions of the terms used across these articles." />
        </div>
        <div className="mt-10">
          <SourceNote label="Catechism of the Catholic Church" url="https://www.vatican.va/archive/ENG0015/_INDEX.HTM" ccc="CCC 88–90" />
        </div>
      </section>
    </>
  );
}
