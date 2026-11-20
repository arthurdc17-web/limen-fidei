'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import Link from 'next/link';
import { ArrowRight, BookOpen, CheckCircle2, Info, RotateCcw, Trophy, XCircle } from 'lucide-react';
import { useUser } from '@/components/providers/UserProvider';
import { EmptyState, ProgressBar } from '@/components/ui';
import type { Quiz } from '@/content/types';

/** Small client badge used by the quiz index to show a stored best score. */
export function QuizBestScore({ id, total }: { id: string; total: number }) {
  const { quizScores } = useUser();
  const best = quizScores[id];
  if (typeof best !== 'number') return <span className="chip">Not started</span>;
  return (
    <span className="chip border-gold/50 text-gold-dark dark:text-gold"><Trophy size={12} /> Best {best}/{total}</span>
  );
}

export function QuizRunner({ quiz }: { quiz: Quiz }) {
  const { quizScores, setQuizScore, addRecent } = useUser();
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState<(number | null)[]>(() => quiz.questions.map(() => null));
  const recorded = useRef(false);

  const total = quiz.questions.length;
  const isFinished = index >= total;
  const question = quiz.questions[Math.min(index, total - 1)];
  const selected = answers[index] ?? null;
  const best = quizScores[quiz.id];

  const score = useMemo(
    () => answers.reduce<number>((count, choice, i) => count + (choice === quiz.questions[i]?.correct ? 1 : 0), 0),
    [answers, quiz.questions],
  );
  const percent = total > 0 ? Math.round((score / total) * 100) : 0;

  // Record a visit once per mounted quiz. The ref guard prevents a loop when
  // addRecent's identity changes after state is written to localStorage.
  useEffect(() => {
    if (recorded.current) return;
    recorded.current = true;
    addRecent(quiz.id, quiz.title);
  }, [addRecent, quiz.id, quiz.title]);

  // Number keys 1–9 choose an answer. Nothing reveals correctness until a
  // choice has been made, and typing in other page inputs is ignored.
  useEffect(() => {
    if (isFinished) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.altKey || event.ctrlKey || event.metaKey) return;
      const target = event.target as HTMLElement | null;
      if (target && ['INPUT', 'TEXTAREA', 'SELECT'].includes(target.tagName)) return;
      const choice = Number(event.key);
      if (Number.isInteger(choice) && choice >= 1 && choice <= question.options.length) {
        event.preventDefault();
        choose(choice - 1);
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  });

  const choose = (optionIndex: number) => {
    if (selected !== null || isFinished) return;
    const nextAnswers = [...answers];
    nextAnswers[index] = optionIndex;
    setAnswers(nextAnswers);
    if (index === total - 1) {
      const finalScore = nextAnswers.reduce<number>((count, choiceValue, i) => count + (choiceValue === quiz.questions[i]?.correct ? 1 : 0), 0);
      if (typeof best !== 'number' || finalScore > best) setQuizScore(quiz.id, finalScore);
    }
  };

  const goNext = () => {
    if (selected === null) return;
    setIndex((current) => Math.min(current + 1, total));
  };

  const retry = () => {
    setAnswers(quiz.questions.map(() => null));
    setIndex(0);
  };

  if (total === 0) {
    return <EmptyState title="No questions yet" description="This quiz does not have any questions at the moment." href="/quizzes" action="Browse other quizzes" />;
  }

  if (isFinished) {
    return (
      <div className="card overflow-hidden">
        <div className="border-b border-[var(--border)] bg-[var(--surface)] p-6 text-center sm:p-9">
          <Trophy size={32} className="mx-auto text-gold-dark dark:text-gold" />
          <h2 className="mt-4 font-serif text-3xl font-semibold sm:text-4xl">Quiz complete</h2>
          <p className="mt-3 text-[var(--text-muted)]">
            You scored <strong className="text-[var(--text)]">{score} out of {total}</strong> ({percent}%).
          </p>
          <div className="mx-auto mt-6 max-w-md"><ProgressBar value={percent} label="Your score" /></div>
          <p className="mt-4 text-sm text-[var(--text-muted)]">
            {typeof best === 'number' ? `Your best score on this quiz: ${best}/${total}.` : 'Your score has been saved in this browser.'}
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <button type="button" onClick={retry} className="btn-primary"><RotateCcw size={16} /> Try again</button>
            <Link href="/quizzes" className="btn-secondary">All quizzes <ArrowRight size={16} /></Link>
          </div>
        </div>

        <div className="p-6 sm:p-8">
          <h3 className="font-serif text-2xl font-semibold">Review your answers</h3>
          <ol className="mt-5 space-y-6">
            {quiz.questions.map((item, i) => {
              const chosen = answers[i];
              const correct = chosen === item.correct;
              return (
                <li key={i} className="border-b border-[var(--border)] pb-6 last:border-0 last:pb-0">
                  <p className="flex items-start gap-2 font-medium">
                    {correct ? <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-forest-light dark:text-gold" /> : <XCircle size={18} className="mt-0.5 shrink-0 text-burgundy" />}
                    <span><span className="text-[var(--text-muted)]">{i + 1}. </span>{item.question}</span>
                  </p>
                  <p className="mt-2 pl-7 text-sm leading-7 text-[var(--text-muted)]">{item.explanation}</p>
                  {item.link && (
                    <p className="mt-2 pl-7">
                      {item.link.startsWith('/') ? (
                        <Link href={item.link} className="link-gold inline-flex items-center gap-1 text-xs">Read more <ArrowRight size={12} /></Link>
                      ) : (
                        <a href={item.link} target="_blank" rel="noopener noreferrer" className="link-gold inline-flex items-center gap-1 text-xs">Read more <ArrowRight size={12} /></a>
                      )}
                    </p>
                  )}
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    );
  }

  const correctIndex = question.correct;
  const answered = selected !== null;

  return (
    <div className="card overflow-hidden">
      <div className="border-b border-[var(--border)] bg-[var(--surface)] px-6 py-5 sm:px-8">
        <ProgressBar value={Math.round(((index + (answered ? 1 : 0)) / total) * 100)} label={`Question ${index + 1} of ${total}`} />
      </div>

      <div className="p-6 sm:p-9">
        <p className="eyebrow mb-3">Question {index + 1}</p>
        <h2 className="font-serif text-2xl font-semibold leading-snug sm:text-3xl">{question.question}</h2>

        <div className="mt-7 grid gap-3" role="group" aria-label={`Answer choices for question ${index + 1}`}>
          {question.options.map((option, optionIndex) => {
            const isChosen = selected === optionIndex;
            const isCorrect = optionIndex === correctIndex;
            const stateClass = !answered
              ? 'border-[var(--border)] hover:border-gold hover:bg-gold/5'
              : isCorrect
                ? 'border-forest bg-forest/10 dark:border-gold dark:bg-gold/10'
                : isChosen
                  ? 'border-burgundy bg-burgundy/5'
                  : 'border-[var(--border)] opacity-65';

            return (
              <button
                key={optionIndex}
                type="button"
                onClick={() => choose(optionIndex)}
                disabled={answered}
                aria-pressed={isChosen}
                className={`flex w-full items-start gap-3 rounded-sm border px-4 py-3.5 text-left text-sm leading-6 transition-colors ${stateClass}`}
              >
                <span className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full border text-xs font-semibold ${isChosen ? 'border-gold bg-gold text-forest-deep' : 'border-[var(--border)] text-[var(--text-muted)]'}`}>
                  {optionIndex + 1}
                </span>
                <span className="flex-1">{option}</span>
                {answered && isCorrect && <CheckCircle2 size={17} className="mt-0.5 shrink-0 text-forest-light dark:text-gold" />}
                {answered && isChosen && !isCorrect && <XCircle size={17} className="mt-0.5 shrink-0 text-burgundy" />}
              </button>
            );
          })}
        </div>

        <p className="mt-4 flex items-center gap-2 text-xs text-[var(--text-muted)]"><Info size={13} />You can press 1, 2, or 3 on your keyboard to choose an answer.</p>

        {answered && (
          <div
            role="status"
            aria-live="polite"
            className={`mt-7 border-l-4 p-5 sm:p-6 ${selected === correctIndex ? 'border-forest bg-forest-pale dark:border-gold dark:bg-forest-light/30' : 'border-burgundy bg-burgundy/5'}`}
          >
            <p className="flex items-center gap-2 font-semibold">
              {selected === correctIndex ? <><CheckCircle2 size={18} className="text-forest-light dark:text-gold" /> Correct</> : <><XCircle size={18} className="text-burgundy" /> Not quite</>}
            </p>
            {selected !== correctIndex && <p className="mt-2 text-sm leading-7">The correct answer is: <strong>{question.options[correctIndex]}</strong></p>}
            <p className="mt-2 text-sm leading-7">{question.explanation}</p>
            <div className="mt-4 flex flex-wrap items-center gap-4">
              <button type="button" onClick={goNext} className="btn-primary btn-sm">
                {index === total - 1 ? 'See your score' : 'Next question'} <ArrowRight size={15} />
              </button>
              {question.link && (
                question.link.startsWith('/') ? (
                  <Link href={question.link} className="link-gold inline-flex items-center gap-1 text-xs"><BookOpen size={13} /> Read more in the guide</Link>
                ) : (
                  <a href={question.link} target="_blank" rel="noopener noreferrer" className="link-gold inline-flex items-center gap-1 text-xs"><BookOpen size={13} /> Read more</a>
                )
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
