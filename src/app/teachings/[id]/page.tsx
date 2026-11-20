import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowRight, BookOpen, GraduationCap, Tag } from 'lucide-react';
import { BookmarkButton, Breadcrumbs, Callout, PageHero, SectionTitle, SourceNote } from '@/components/ui';
import { RecordVisit } from '@/components/features/RecordVisit';
import { getTeaching, teachings } from '@/content/teachings';

export function generateMetadata({ params }: { params: { id: string } }): Metadata {
  const teaching = getTeaching(params.id);
  if (!teaching) return { title: 'Teaching not found' };
  return { title: teaching.title, description: teaching.summary };
}

export function generateStaticParams() {
  return teachings.map((teaching) => ({ id: teaching.id }));
}

export default function TeachingDetailPage({ params }: { params: { id: string } }) {
  const teaching = getTeaching(params.id);
  if (!teaching) notFound();

  const related = teachings.filter((item) => item.category === teaching.category && item.id !== teaching.id).slice(0, 4);

  return (
    <>
      <PageHero
        compact
        eyebrow={teaching.category}
        title={teaching.title}
        description={teaching.summary}
      >
        <Link href="/teachings" className="btn border border-ivory/40 text-ivory hover:text-gold">All teachings <ArrowRight size={16} /></Link>
        <RecordVisit id={`teaching-${teaching.id}`} title={teaching.title} />
      </PageHero>

      <Breadcrumbs items={[
        { label: 'Teachings', href: '/teachings' },
        { label: teaching.category, href: '/teachings' },
        { label: teaching.title },
      ]} />

      <section className="container-narrow py-14">
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <span className="chip"><Tag size={12} aria-hidden="true" /> {teaching.category}</span>
          <BookmarkButton id={teaching.id} title={teaching.title} />
        </div>

        <div className="prose-faith">
          {teaching.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        </div>

        {teaching.terms && teaching.terms.length > 0 && (
          <div className="mt-12">
            <SectionTitle eyebrow="Vocabulary" title="Key terms" />
            <dl className="grid gap-4 sm:grid-cols-2">
              {teaching.terms.map((term) => (
                <div key={term.term} className="card p-6">
                  <dt className="font-serif text-xl font-semibold">{term.term}</dt>
                  <dd className="mt-2 text-sm leading-7 text-[var(--text-muted)]">{term.text}</dd>
                </div>
              ))}
            </dl>
          </div>
        )}

        {teaching.scripture && teaching.scripture.length > 0 && (
          <div className="mt-12">
            <SectionTitle eyebrow="Bible" title="Scripture references" />
            <ul className="grid gap-2 sm:grid-cols-2">
              {teaching.scripture.map((reference) => (
                <li key={reference} className="flex items-start gap-3 rounded-md border border-[var(--border)] bg-[var(--surface)] px-5 py-4 text-sm leading-6">
                  <BookOpen size={16} className="mt-1 shrink-0 text-gold-dark dark:text-gold" aria-hidden="true" />
                  <span>{reference}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {teaching.ccc && teaching.ccc.length > 0 && (
          <div className="mt-12">
            <SectionTitle eyebrow="Catechism" title="Church references" />
            <div className="flex flex-wrap gap-2">
              {teaching.ccc.map((reference) => <span key={reference} className="chip">{reference}</span>)}
            </div>
          </div>
        )}

        <Callout title="Faith, reason, and careful language" tone="gold">
          Catholic teaching distinguishes defined dogma, authoritative doctrine, changeable discipline, theological opinion, and private devotion. Where a discipline or custom varies by diocese or rite, follow your parish’s practice; for a personal application, ask your priest. The <Link href="/teachings" className="link-gold">teachings overview</Link> explains these categories.
        </Callout>

        <SourceNote label={teaching.source?.label} url={teaching.source?.url} ccc={teaching.ccc?.join(' · ')} />
      </section>

      {related.length > 0 && (
        <section className="bg-[var(--surface)] py-16">
          <div className="container-page">
            <SectionTitle eyebrow="Continue reading" title={`More on ${teaching.category.toLowerCase()}`} description="Other articles in the same category." />
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {related.map((item) => (
                <Link key={item.id} href={`/teachings/${item.id}`} className="card group flex h-full flex-col p-6">
                  <GraduationCap size={18} className="text-gold-dark dark:text-gold" aria-hidden="true" />
                  <h3 className="mt-3 font-serif text-xl font-semibold group-hover:text-gold-dark dark:group-hover:text-gold">{item.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-6 text-[var(--text-muted)]">{item.summary}</p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-gold-dark dark:text-gold">Read the teaching <ArrowRight size={13} /></span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
