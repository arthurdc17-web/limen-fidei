import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowRight, BookOpen, Check, ChevronRight } from 'lucide-react';
import { Breadcrumbs, Callout, CheckListItem, PageHero, SectionTitle, SourceNote } from '@/components/ui';
import { SaveLessonButton } from '@/components/features/SaveLessonButton';
import { RecordVisit } from '@/components/features/RecordVisit';
import { getLesson, lessons } from '@/content/lessons';

export function generateMetadata({ params }: { params: { id: string } }): Metadata {
  const lesson = getLesson(params.id);
  if (!lesson) return { title: 'Lesson not found' };
  return { title: lesson.title, description: lesson.intro };
}

export function generateStaticParams() {
  return lessons.map((lesson) => ({ id: lesson.id }));
}

export default function LessonDetailPage({ params }: { params: { id: string } }) {
  const lesson = getLesson(params.id);
  if (!lesson) notFound();

  const index = lessons.findIndex((item) => item.id === lesson.id);
  const previous = index > 0 ? lessons[index - 1] : null;
  const next = index < lessons.length - 1 ? lessons[index + 1] : null;
  const cccRefs = lesson.sections
    .map((section) => section.ccc?.[0])
    .filter((ref): ref is string => Boolean(ref));

  return (
    <>
      <PageHero
        compact
        eyebrow={`Lesson ${lesson.number} of ${lessons.length} — Beginner’s Guide`}
        title={lesson.title}
        description={lesson.intro}
      >
        <SaveLessonButton id={lesson.id} title={lesson.title} />
        <Link href="/lessons" className="btn border border-ivory/40 text-ivory hover:text-gold">All lessons <ArrowRight size={16} /></Link>
        <RecordVisit id={`lesson-${lesson.id}`} title={`Lesson ${lesson.number}: ${lesson.title}`} />
      </PageHero>

      <Breadcrumbs items={[
        { label: 'Beginner’s Guide', href: '/lessons' },
        { label: `Lesson ${lesson.number}: ${lesson.title}` },
      ]} />

      <section className="container-narrow py-16">
        <div className="prose-faith">
          {lesson.sections.map((section, sectionIndex) => (
            <section key={section.heading} className={sectionIndex === lesson.sections.length - 1 ? '' : 'mb-12 border-b border-[var(--border)] pb-12'}>
              <h2>{section.heading}</h2>
              {section.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}

              {section.definition && (
                <Callout title={`Definition — ${section.definition.term}`} tone="gold">
                  <p>{section.definition.text}</p>
                </Callout>
              )}

              {section.bible && section.bible.length > 0 && (
                <div className="mt-6 rounded-md border border-[var(--border)] bg-[var(--surface)] p-5">
                  <p className="mb-3 flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.18em] text-gold-dark dark:text-gold">
                    <BookOpen size={14} aria-hidden="true" /> Scripture
                  </p>
                  <ul className="space-y-2 text-sm leading-6">
                    {section.bible.map((reference) => <li key={reference}>{reference}</li>)}
                  </ul>
                </div>
              )}

              {section.ccc && section.ccc.length > 0 && (
                <div className="mt-4 flex flex-wrap items-center gap-2">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[var(--text-muted)]">Catechism</span>
                  {section.ccc.map((reference) => <span key={reference} className="chip">{reference}</span>)}
                </div>
              )}
            </section>
          ))}
        </div>

        <SourceNote label="Catechism of the Catholic Church" url="https://www.vatican.va/archive/ENG0015/_INDEX.HTM" ccc={cccRefs.join(' · ')} />
      </section>

      {/* SUMMARY */}
      <section className="bg-[var(--surface)] py-16">
        <div className="container-narrow">
          <SectionTitle eyebrow="Remember" title="Lesson summary" description="The main points, gathered in one place." />
          <div className="card p-8">
            <ul className="space-y-4">
              {lesson.summary.map((point) => <CheckListItem key={point} done>{point}</CheckListItem>)}
            </ul>
          </div>
        </div>
      </section>

      {/* QUESTIONS */}
      <section className="container-narrow py-16">
        <SectionTitle eyebrow="For reflection" title="Questions to consider" description="Use these on your own, with a friend, or in a parish study group. There is no score to achieve." />
        <ol className="space-y-3">
          {lesson.questions.map((question, i) => (
            <li key={question} className="card flex gap-4 p-5">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-gold/50 font-serif text-sm text-gold-dark dark:text-gold">{i + 1}</span>
              <span className="text-sm leading-7">{question}</span>
            </li>
          ))}
        </ol>
        <Callout title="Continue the journey" tone="green">
          If this lesson raised a question about your own circumstances — baptism, confirmation, or coming back to the Church — the <Link href="/becoming-catholic" className="link-gold">becoming Catholic guide</Link> covers the common situations, and your parish priest can advise you personally.
        </Callout>
      </section>

      {/* LESSON NAVIGATION */}
      <nav aria-label="Lesson navigation" className="border-t border-[var(--border)] bg-[var(--surface)] py-12">
        <div className="container-narrow grid gap-4 sm:grid-cols-2">
          {previous ? (
            <Link href={`/lessons/${previous.id}`} className="card group p-6">
              <span className="inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wider text-gold-dark dark:text-gold">← Previous lesson</span>
              <span className="mt-3 block font-serif text-xl font-semibold group-hover:text-gold-dark dark:group-hover:text-gold">Lesson {previous.number}: {previous.title}</span>
            </Link>
          ) : <div aria-hidden="true" className="hidden sm:block" />}
          {next ? (
            <Link href={`/lessons/${next.id}`} className="card group p-6 sm:text-right">
              <span className="inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wider text-gold-dark dark:text-gold">Next lesson <ChevronRight size={13} /></span>
              <span className="mt-3 block font-serif text-xl font-semibold group-hover:text-gold-dark dark:group-hover:text-gold">Lesson {next.number}: {next.title}</span>
            </Link>
          ) : (
            <Link href="/beginners" className="card group p-6 sm:text-right">
              <span className="inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wider text-gold-dark dark:text-gold">Guide complete <Check size={13} /></span>
              <span className="mt-3 block font-serif text-xl font-semibold group-hover:text-gold-dark dark:group-hover:text-gold">Return to the beginner overview</span>
            </Link>
          )}
        </div>
      </nav>
    </>
  );
}
