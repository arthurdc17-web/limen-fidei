import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, BookOpen, Church, Clock, Info, ScrollText } from 'lucide-react';
import { Breadcrumbs, Callout, CheckListItem, PageHero, ProgressBar, SectionTitle, SourceNote } from '@/components/ui';
import { lessons } from '@/content/lessons';
import type { Lesson } from '@/content/types';
import { images } from '@/content/images';

export const metadata: Metadata = {
  title: 'The Beginner’s Guide — Five Lessons on the Catholic Faith',
  description: 'The canonical five-lesson introduction to Catholicism: what the Church is, what Catholics believe, the Bible, Church structure, and Catholic traditions.',
};

/** A transparent estimate based on the actual word count of each lesson. */
function estimateMinutes(lesson: Lesson): number {
  const words = [
    lesson.intro,
    ...lesson.sections.flatMap((section) => [
      ...section.body,
      section.definition?.text || '',
      ...(section.bible || []),
    ]),
    ...lesson.summary,
    ...lesson.questions,
  ].join(' ').split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 200));
}

export default function LessonsPage() {
  return (
    <>
      <PageHero
        eyebrow="Beginner’s Guide"
        title="Five Lessons on the Catholic Faith"
        description="Start with the basics and build a reliable picture of what Catholics believe, how the Church is organised, and why the Mass and the sacraments matter."
        image={images.bible}
      >
        <Link href="/beginners" className="btn bg-gold text-forest-deep hover:bg-gold-light">New here? Read the overview <ArrowRight size={16} /></Link>
        <Link href="#all-lessons" className="btn border border-ivory/40 text-ivory hover:text-gold">See all five lessons</Link>
      </PageHero>

      <Breadcrumbs items={[{ label: 'Beginner’s Guide', href: '/beginners' }, { label: 'Lessons' }]} />

      <section className="container-page py-14">
        <Callout title="Read in order, but at your own pace" tone="green">
          Each lesson builds on the previous one, though every lesson also stands on its own. There is nothing to memorise and no test to pass. Read, notice the Scripture and Catechism references, and keep a note of anything you want to ask a priest or OCIA director.
        </Callout>
      </section>

      {/* HOW TO USE */}
      <section className="bg-[var(--surface)] py-20">
        <div className="container-page grid gap-12 lg:grid-cols-[420px_1fr] lg:items-start">
          <div>
            <SectionTitle eyebrow="Before you begin" title="How to use this guide" description="A few habits make these lessons far more useful." />
            <img src={images.stainedGlass} alt="Stained glass window depicting scenes from the life of Jesus" loading="lazy" className="card mt-6 h-64 w-full object-cover" />
          </div>
          <div className="card p-8">
            <ul className="space-y-5">
              <li>
                <h3 className="flex items-center gap-2 font-serif text-xl font-semibold"><BookOpen size={18} className="text-gold-dark dark:text-gold" aria-hidden="true" /> Read one lesson at a time</h3>
                <p className="mt-2 text-sm leading-7 text-[var(--text-muted)]">Each lesson has several short sections. Stop when you need to; the summary at the end repeats the main points.</p>
              </li>
              <li>
                <h3 className="flex items-center gap-2 font-serif text-xl font-semibold"><ScrollText size={18} className="text-gold-dark dark:text-gold" aria-hidden="true" /> Follow the references</h3>
                <p className="mt-2 text-sm leading-7 text-[var(--text-muted)]">Bible passages and Catechism paragraphs are listed under each section. Look up the ones that interest you — that is where the explanation becomes concrete.</p>
              </li>
              <li>
                <h3 className="flex items-center gap-2 font-serif text-xl font-semibold"><Church size={18} className="text-gold-dark dark:text-gold" aria-hidden="true" /> Bring questions to parish life</h3>
                <p className="mt-2 text-sm leading-7 text-[var(--text-muted)]">A lesson can explain a belief; a priest or OCIA director can help apply it to your circumstances. The <Link href="/becoming-catholic" className="link-gold">OCIA guide</Link> explains who to ask.</p>
              </li>
              <li>
                <h3 className="flex items-center gap-2 font-serif text-xl font-semibold"><Info size={18} className="text-gold-dark dark:text-gold" aria-hidden="true" /> Use the questions</h3>
                <p className="mt-2 text-sm leading-7 text-[var(--text-muted)]">The review questions at the end of each lesson are prompts for thought and discussion, not an exam. You can save a lesson to your own list and return to it later.</p>
              </li>
            </ul>
            <div className="mt-7 grid gap-3 border-t border-[var(--border)] pt-6 sm:grid-cols-2">
              <CheckListItem>Keep a notebook of unfamiliar terms.</CheckListItem>
              <CheckListItem>Pray the four core prayers alongside lesson 1.</CheckListItem>
              <CheckListItem>Attend Mass while you read lessons 1–3.</CheckListItem>
              <CheckListItem>Revisit the summary before moving on.</CheckListItem>
            </div>
          </div>
        </div>
      </section>

      {/* ALL LESSONS */}
      <section id="all-lessons" className="container-page scroll-mt-28 py-20">
        <SectionTitle eyebrow="The complete guide" title="All five lessons" description="The guide moves from the identity of the Church to the beliefs, Scripture, structure, and traditions that shape Catholic life." />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {lessons.map((lesson) => {
            const progress = Math.round((lesson.number / lessons.length) * 100);
            return (
              <article key={lesson.id} className="card flex h-full flex-col p-7">
                <div className="flex items-start justify-between gap-3">
                  <span className="font-serif text-5xl leading-none text-gold-dark dark:text-gold">{String(lesson.number).padStart(2, '0')}</span>
                  <span className="chip"><Clock size={12} aria-hidden="true" /> about {estimateMinutes(lesson)} min</span>
                </div>
                <h3 className="mt-4 font-serif text-2xl font-semibold leading-snug">
                  <Link href={`/lessons/${lesson.id}`} className="hover:text-gold-dark dark:hover:text-gold">{lesson.title}</Link>
                </h3>
                <p className="mt-3 flex-1 text-sm leading-6 text-[var(--text-muted)]">{lesson.intro}</p>
                <div className="mt-6">
                  <ProgressBar value={progress} label={`Lesson ${lesson.number} of ${lessons.length}`} />
                </div>
                <Link href={`/lessons/${lesson.id}`} className="mt-6 inline-flex items-center gap-1.5 border-t border-[var(--border)] pt-4 text-xs font-semibold uppercase tracking-wider text-gold-dark dark:text-gold">
                  Start lesson {lesson.number} <ArrowRight size={14} />
                </Link>
              </article>
            );
          })}
        </div>
        <p className="mt-6 text-xs leading-6 text-[var(--text-muted)]">
          Reading times are estimates calculated from each lesson’s word count at about 200 words per minute. The progress bars show a lesson’s place in the five-part sequence, not your personal progress.
        </p>
      </section>

      <section className="bg-forest py-16 text-ivory">
        <div className="container-page flex flex-wrap items-center justify-between gap-6">
          <div>
            <p className="eyebrow mb-2 text-gold">Ready for the next step?</p>
            <h2 className="font-serif text-3xl font-semibold">Becoming Catholic, explained simply</h2>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-ivory/70">The OCIA journey, the different situations people arrive from, and what happens at the Easter Vigil.</p>
          </div>
          <Link href="/becoming-catholic" className="btn bg-gold text-forest-deep hover:bg-gold-light">Read the OCIA guide <ArrowRight size={16} /></Link>
        </div>
      </section>

      <section className="container-narrow py-14">
        <SourceNote label="Catechism of the Catholic Church" url="https://www.vatican.va/archive/ENG0015/_INDEX.HTM" ccc="CCC 1–3 · CCC 78–95" />
      </section>
    </>
  );
}
