import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowRight, BookOpen, Check, Church, GraduationCap, Heart, Info, ScrollText } from 'lucide-react';
import { BookmarkButton, Breadcrumbs, Callout, CheckListItem, PageHero, SectionTitle, SourceNote } from '@/components/ui';
import { RecordVisit } from '@/components/features/RecordVisit';
import { getSacrament, sacraments } from '@/content/sacraments';

export function generateMetadata({ params }: { params: { id: string } }): Metadata {
  const sacrament = getSacrament(params.id);
  if (!sacrament) return { title: 'Sacrament not found' };
  return { title: sacrament.name, description: sacrament.subtitle };
}

export function generateStaticParams() {
  return sacraments.map((sacrament) => ({ id: sacrament.id }));
}

const typeIcons = { Initiation: Church, Healing: Heart, 'Service of Communion': GraduationCap } as const;

export default function SacramentDetailPage({ params }: { params: { id: string } }) {
  const sacrament = getSacrament(params.id);
  if (!sacrament) notFound();

  const related = sacraments.filter((item) => item.type === sacrament.type && item.id !== sacrament.id).slice(0, 3);
  const TypeIcon = typeIcons[sacrament.type];

  return (
    <>
      <PageHero
        compact
        eyebrow={sacrament.type}
        title={sacrament.name}
        description={sacrament.subtitle}
      >
        <Link href="/sacraments" className="btn border border-ivory/40 text-ivory hover:text-gold">All seven sacraments <ArrowRight size={16} /></Link>
        <RecordVisit id={`sacrament-${sacrament.id}`} title={sacrament.name} />
      </PageHero>

      <Breadcrumbs items={[
        { label: 'Sacraments', href: '/sacraments' },
        { label: sacrament.type, href: '/sacraments' },
        { label: sacrament.name },
      ]} />

      <section className="container-narrow py-14">
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <span className="chip"><TypeIcon size={13} aria-hidden="true" /> {sacrament.type}</span>
          <BookmarkButton id={sacrament.id} title={sacrament.name} />
        </div>

        {/* WHAT / WHY */}
        <div className="grid gap-5 md:grid-cols-2">
          <article className="card p-7">
            <ScrollText size={20} className="text-gold-dark dark:text-gold" aria-hidden="true" />
            <h2 className="mt-4 font-serif text-2xl font-semibold">What it is</h2>
            <p className="mt-3 text-sm leading-7 text-[var(--text-muted)]">{sacrament.what}</p>
          </article>
          <article className="card p-7">
            <Heart size={20} className="text-gold-dark dark:text-gold" aria-hidden="true" />
            <h2 className="mt-4 font-serif text-2xl font-semibold">Why the Church celebrates it</h2>
            <p className="mt-3 text-sm leading-7 text-[var(--text-muted)]">{sacrament.why}</p>
          </article>
        </div>

        {/* BIBLICAL FOUNDATIONS */}
        <div className="mt-14">
          <SectionTitle eyebrow="Bible" title="Biblical foundations" description="The passages the Church reads in connection with this sacrament." />
          <ul className="space-y-2">
            {sacrament.biblical.map((reference) => (
              <li key={reference} className="flex items-start gap-3 rounded-md border border-[var(--border)] bg-[var(--surface)] px-5 py-4 text-sm leading-6">
                <BookOpen size={16} className="mt-1 shrink-0 text-gold-dark dark:text-gold" aria-hidden="true" />
                <span>{reference}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* CELEBRATION */}
        <div className="mt-14">
          <SectionTitle eyebrow="The rite" title="How it is celebrated" description="The usual order of the rite. The exact words and gestures belong to the approved liturgical books of your Church." />
          <ol className="space-y-3">
            {sacrament.celebration.map((step, i) => (
              <li key={step} className="card flex gap-4 p-5">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-gold/50 font-serif text-sm text-gold-dark dark:text-gold">{i + 1}</span>
                <span className="text-sm leading-7">{step}</span>
              </li>
            ))}
          </ol>
        </div>

        {/* EFFECTS */}
        <div className="mt-14">
          <SectionTitle eyebrow="Grace" title="The effects of this sacrament" description="What the Church teaches this sacrament accomplishes in those who receive it worthily." />
          <div className="card p-7">
            <ul className="space-y-4">
              {sacrament.effects.map((effect) => <CheckListItem key={effect} done>{effect}</CheckListItem>)}
            </ul>
          </div>
        </div>

        {/* WHO / PREPARATION */}
        <div className="mt-14 grid gap-5 md:grid-cols-2">
          <article className="card p-7">
            <Church size={20} className="text-gold-dark dark:text-gold" aria-hidden="true" />
            <h2 className="mt-4 font-serif text-2xl font-semibold">Who may receive it</h2>
            <p className="mt-3 text-sm leading-7 text-[var(--text-muted)]">{sacrament.who}</p>
          </article>
          <article className="card p-7">
            <GraduationCap size={20} className="text-gold-dark dark:text-gold" aria-hidden="true" />
            <h2 className="mt-4 font-serif text-2xl font-semibold">Preparation</h2>
            <ul className="mt-4 space-y-3">
              {sacrament.preparation.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-7">
                  <Check size={15} className="mt-1.5 shrink-0 text-gold-dark dark:text-gold" aria-hidden="true" />
                  <span className="text-[var(--text-muted)]">{item}</span>
                </li>
              ))}
            </ul>
          </article>
        </div>

        {/* TEACHING */}
        <div className="prose-faith mt-14">
          <h2>Church teaching</h2>
          {sacrament.teaching.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        </div>

        <Callout title="Discipline and local custom vary" tone="gold">
          Details such as the age for Confirmation, the form of the rite, fasting before Communion, and the disciplines for ordination or marriage are matters of Church discipline or local custom. They can differ by diocese, country, and Church <em>sui iuris</em>. Ask your parish for the norms that apply to you; the grace of the sacrament does not depend on the variation. For personal circumstances, speak with a priest.
        </Callout>

        <div className="mt-10 flex flex-wrap items-center gap-2">
          <span className="text-xs font-semibold uppercase tracking-wider text-[var(--text-muted)]">Catechism</span>
          {sacrament.ccc.map((reference) => <span key={reference} className="chip">{reference}</span>)}
        </div>
        <SourceNote label="Catechism of the Catholic Church" url="https://www.vatican.va/archive/ENG0015/_INDEX.HTM" ccc={sacrament.ccc.join(' · ')} />
      </section>

      {/* RELATED SACRAMENTS */}
      {related.length > 0 && (
        <section className="bg-[var(--surface)] py-16">
          <div className="container-page">
            <SectionTitle eyebrow="Along the same path" title={`Other sacraments of ${sacrament.type.toLowerCase()}`} description="The sacraments are received together as parts of one Christian life." />
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((item) => (
                <Link key={item.id} href={`/sacraments/${item.id}`} className="card group p-6">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/40 text-gold-dark dark:text-gold"><TypeIcon size={17} aria-hidden="true" /></span>
                  <h3 className="mt-4 font-serif text-xl font-semibold group-hover:text-gold-dark dark:group-hover:text-gold">{item.name}</h3>
                  <p className="mt-2 text-sm leading-6 text-[var(--text-muted)]">{item.subtitle}</p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-gold-dark dark:text-gold">Read about it <ArrowRight size={13} /></span>
                </Link>
              ))}
            </div>
            <div className="mt-8">
              <Link href="/sacraments" className="btn-secondary btn-sm"><Info size={14} /> Back to all seven sacraments</Link>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
