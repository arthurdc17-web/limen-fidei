'use client';

import { useState } from 'react';
import { ChevronDown, Info, Printer, RotateCcw, ShieldCheck } from 'lucide-react';
import { examinationSections } from '@/content/confession';

const totalPrompts = examinationSections.reduce((sum, section) => sum + section.questions.length, 0);

export function ExaminationOfConscience() {
  const [checked, setChecked] = useState<Record<string, boolean>>({});
  const [open, setOpen] = useState<Record<number, boolean>>(() =>
    examinationSections.reduce<Record<number, boolean>>((acc, _section, i) => {
      acc[i] = i === 0;
      return acc;
    }, {}),
  );

  const marked = Object.values(checked).filter(Boolean).length;

  const togglePrompt = (key: string) => setChecked((prev) => ({ ...prev, [key]: !prev[key] }));
  const toggleSection = (index: number) => setOpen((prev) => ({ ...prev, [index]: !prev[index] }));
  const reset = () => setChecked({});

  return (
    <div className="card overflow-hidden">
      <div className="border-b border-[var(--border)] bg-[var(--surface)] p-6 sm:p-8">
        <div className="flex flex-wrap items-start justify-between gap-5">
          <div className="max-w-2xl">
            <p className="eyebrow mb-2">Private prayer aid</p>
            <h2 className="font-serif text-2xl font-semibold sm:text-3xl">An examination of conscience</h2>
            <p className="mt-3 text-sm leading-7 text-[var(--text-muted)]">Read each question slowly. Mark the ones that speak to you. This is a moment of honest reflection before God, not a test with a passing grade.</p>
          </div>
          <div className="no-print flex flex-wrap gap-2">
            <button type="button" onClick={() => window.print()} className="btn-secondary btn-sm"><Printer size={14} /> Print</button>
            <button type="button" onClick={reset} disabled={marked === 0} className="btn-ghost btn-sm border border-[var(--border)]"><RotateCcw size={14} /> Clear</button>
          </div>
        </div>

        <div className="no-print mt-6 grid gap-4 sm:grid-cols-[1fr_auto] sm:items-center">
          <div aria-live="polite" className="rounded-sm border border-gold/30 bg-gold/10 px-5 py-4">
            <p className="text-sm leading-6">
              <strong>{marked}</strong> of {totalPrompts} prompts marked for reflection.
            </p>
            <p className="mt-1 text-xs leading-5 text-[var(--text-muted)]">There is no score, no right answer, and no judgement here. Take what is useful and leave the rest.</p>
          </div>
          <p className="flex max-w-xs items-start gap-2 text-xs leading-5 text-[var(--text-muted)]"><ShieldCheck size={16} className="mt-0.5 shrink-0 text-gold-dark dark:text-gold" /> Nothing is submitted or stored. Your ticks exist only in this open page.</p>
        </div>
      </div>

      <div className="divide-y divide-[var(--border)]">
        {examinationSections.map((section, sectionIndex) => {
          const panelId = `examination-panel-${sectionIndex}`;
          return (
            <section key={section.title} className="p-6 sm:p-8">
              <h3>
                <button
                  type="button"
                  onClick={() => toggleSection(sectionIndex)}
                  aria-expanded={Boolean(open[sectionIndex])}
                  aria-controls={panelId}
                  className="no-print flex w-full items-center justify-between gap-4 text-left"
                >
                  <span className="font-serif text-xl font-semibold leading-snug hover:text-gold-dark dark:hover:text-gold">{section.title}</span>
                  <ChevronDown size={18} className={`shrink-0 text-gold transition-transform ${open[sectionIndex] ? 'rotate-180' : ''}`} />
                </button>
                <span className="hidden font-serif text-xl font-semibold leading-snug print:block">{section.title}</span>
              </h3>
              <div
                id={panelId}
                role="region"
                aria-label={section.title}
                className={`mt-5 ${open[sectionIndex] ? '' : 'hidden print:block'}`}
              >
                <p className="mb-5 border-l-2 border-gold pl-4 text-sm italic leading-6 text-[var(--text-muted)]">{section.intro}</p>
                <ul className="space-y-4">
                  {section.questions.map((question, questionIndex) => {
                    const key = `${sectionIndex}-${questionIndex}`;
                    return (
                      <li key={key} className="flex items-start gap-3">
                        <input
                          id={key}
                          type="checkbox"
                          checked={Boolean(checked[key])}
                          onChange={() => togglePrompt(key)}
                          className="mt-1 h-4 w-4 shrink-0 cursor-pointer accent-[#9a7b45]"
                        />
                        <label htmlFor={key} className="cursor-pointer text-sm leading-6">{question}</label>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </section>
          );
        })}
      </div>

      <div className="border-t border-[var(--border)] bg-[var(--bg-alt)] p-6 sm:p-8">
        <p className="flex items-start gap-2 text-sm leading-7 text-[var(--text-muted)]"><Info size={16} className="mt-1 shrink-0 text-gold-dark dark:text-gold" /> This tool is for personal reflection only. It does not contact the Church, your parish, or this website&apos;s servers, and it does not save your answers anywhere — not even in this browser. When you close or refresh the page, your selections are gone.</p>
      </div>
    </div>
  );
}
