import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Clock, HelpCircle, Info } from 'lucide-react';
import { PageHero, SectionTitle, Breadcrumbs, Callout } from '@/components/ui';
import { QuizBestScore } from '@/components/features/QuizRunner';
import { quizzes } from '@/content/quizzes';
import { images } from '@/content/images';

export const metadata: Metadata = {
  title: 'Catholic Quizzes',
  description: 'Short, friendly quizzes on the Mass, Catholic beliefs, the sacraments, the Rosary, prayers, history, and Church vocabulary.',
};

export default function QuizzesPage() {
  const questionCount = quizzes.reduce((total, quiz) => total + quiz.questions.length, 0);

  return (
    <>
      <Breadcrumbs items={[{ label: 'Quizzes' }]} />
      <PageHero
        eyebrow="Test your knowledge"
        title="Catholic Quizzes"
        description="A relaxed way to check what you have learned. Each quiz gives an explanation after every answer and links to the relevant guide — so you learn as you go."
        image={images.stainedGlass}
      >
        <Link href="#all-quizzes" className="btn bg-gold text-forest-deep hover:bg-gold-light">Browse quizzes <ArrowRight size={16} /></Link>
      </PageHero>

      <div className="container-page py-14">
        <Callout title="Learning, not grading" tone="green">
          These quizzes are for personal study, not an exam and not a test of faith. Your scores are saved only in this browser so you can see your own progress. You can retry any quiz as often as you like.
        </Callout>
      </div>

      <section id="all-quizzes" className="scroll-mt-28 bg-[var(--bg-alt)] py-16">
        <div className="container-page">
          <SectionTitle
            eyebrow={`${quizzes.length} quizzes · ${questionCount} questions`}
            title="Choose a quiz"
            description="Pick a topic, work through the questions one at a time, and review the explanations at the end."
          />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {quizzes.map((quiz) => (
              <article key={quiz.id} className="card flex h-full flex-col p-6 transition-all duration-300 hover:-translate-y-1 hover:border-gold/60 hover:shadow-soft">
                <div className="flex items-start justify-between gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/40 text-gold-dark dark:text-gold"><HelpCircle size={18} /></span>
                  <QuizBestScore id={quiz.id} total={quiz.questions.length} />
                </div>
                <h3 className="mt-5 font-serif text-2xl font-semibold leading-snug">{quiz.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-6 text-[var(--text-muted)]">{quiz.description}</p>
                <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-[var(--border)] pt-4">
                  <span className="chip"><Clock size={12} /> {quiz.questions.length} questions</span>
                  <Link href={`/quizzes/${quiz.id}`} className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-gold-dark dark:text-gold">
                    Start quiz <ArrowRight size={14} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
          <p className="mt-8 flex items-start gap-2 text-sm leading-7 text-[var(--text-muted)]">
            <Info size={16} className="mt-1 shrink-0 text-gold-dark dark:text-gold" />
            An answer is never marked or revealed before you choose it. After each question you will see the correct answer, a short explanation, and a link to study further.
          </p>
        </div>
      </section>
    </>
  );
}
