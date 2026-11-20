import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowRight, Info } from 'lucide-react';
import { PageHero, SectionTitle, Breadcrumbs, Callout, SourceNote } from '@/components/ui';
import { QuizRunner } from '@/components/features/QuizRunner';
import { getQuiz, quizzes } from '@/content/quizzes';

export function generateStaticParams() {
  return quizzes.map((quiz) => ({ id: quiz.id }));
}

export function generateMetadata({ params }: { params: { id: string } }): Metadata {
  const quiz = getQuiz(params.id);
  if (!quiz) return { title: 'Quiz not found' };
  return { title: `${quiz.title} Quiz`, description: quiz.description };
}

export default function QuizDetailPage({ params }: { params: { id: string } }) {
  const quiz = getQuiz(params.id);
  if (!quiz) notFound();

  return (
    <>
      <Breadcrumbs items={[{ label: 'Quizzes', href: '/quizzes' }, { label: quiz.title }]} />
      <PageHero
        eyebrow={`${quiz.questions.length} questions`}
        title={quiz.title}
        description={quiz.description}
        compact
      >
        <Link href="/quizzes" className="btn border border-ivory/40 text-ivory hover:text-gold">All quizzes</Link>
      </PageHero>

      <section className="bg-[var(--bg-alt)] py-14">
        <div className="container-narrow"><QuizRunner quiz={quiz} /></div>
      </section>

      <section className="bg-[var(--surface)] py-16">
        <div className="container-narrow">
          <SectionTitle eyebrow="How it works" title="Learn as you go" description="The point is understanding, not a perfect score." />
          <div className="grid gap-5 sm:grid-cols-3">
            <div className="card p-5"><p className="font-serif text-lg font-semibold">One question at a time</p><p className="mt-2 text-sm leading-6 text-[var(--text-muted)]">No answers are shown or highlighted until you make a choice.</p></div>
            <div className="card p-5"><p className="font-serif text-lg font-semibold">Immediate explanation</p><p className="mt-2 text-sm leading-6 text-[var(--text-muted)]">After each answer you will see why it is right or wrong.</p></div>
            <div className="card p-5"><p className="font-serif text-lg font-semibold">Go deeper</p><p className="mt-2 text-sm leading-6 text-[var(--text-muted)]">Links after each question take you to the relevant guide.</p></div>
          </div>
          <Callout title="Your progress" tone="gold">
            Your best score is stored in this browser only. Retry as often as you like — the highest score is kept. Nothing is sent to a server.
          </Callout>
          <p className="mt-6 flex items-start gap-2 text-sm leading-7 text-[var(--text-muted)]">
            <Info size={16} className="mt-1 shrink-0 text-gold-dark dark:text-gold" />
            Quizzes are a study aid, not a substitute for catechesis or pastoral advice. If a question raises a personal concern, ask your parish priest.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/quizzes" className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-gold-dark dark:text-gold">More quizzes <ArrowRight size={14} /></Link>
            <Link href="/sources" className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-gold-dark dark:text-gold">Our sources <ArrowRight size={14} /></Link>
          </div>
          <div className="mt-10"><SourceNote label="Catechism of the Catholic Church" url="https://www.vatican.va/archive/ENG0015/_INDEX.HTM" /></div>
        </div>
      </section>
    </>
  );
}
