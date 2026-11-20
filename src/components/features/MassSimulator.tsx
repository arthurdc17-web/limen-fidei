'use client';

import { useMemo, useState } from 'react';
import { ArrowLeft, ArrowRight, Church, Info, RotateCcw } from 'lucide-react';
import { ProgressBar } from '@/components/ui';
import { massSteps, massRiteInfo, massSections, type MassRite } from '@/content/mass';

const postureStyle: Record<string, string> = {
  Stand: 'bg-forest text-ivory',
  Sit: 'bg-gold text-forest-deep',
  Kneel: 'bg-burgundy text-ivory',
};

export function MassSimulator() {
  const [rite, setRite] = useState<MassRite>('novus-ordo');
  const [index, setIndex] = useState(0);
  const steps = massSteps[rite];
  const step = steps[index];
  const progress = Math.round(((index + 1) / steps.length) * 100);
  const sections = useMemo(() => massSections.filter((s) => steps.some((x) => x.section === s)), [steps]);

  const switchRite = (next: MassRite) => { setRite(next); setIndex(0); };

  return (
    <div id="simulator" className="card overflow-hidden scroll-mt-32">
      <div className="border-b border-[var(--border)] bg-[var(--surface)] p-5 sm:p-7">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <p className="eyebrow mb-2">Interactive walkthrough</p>
            <h2 className="font-serif text-2xl font-semibold sm:text-3xl">Walk through the Mass</h2>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-[var(--text-muted)]">Choose a form of the Mass, then move through it one step at a time. Every screen tells you what is happening, what to do, and what is being said.</p>
          </div>
          <button onClick={() => setIndex(0)} className="btn-ghost text-xs"><RotateCcw size={14} /> Restart</button>
        </div>
        <div className="mt-6 flex flex-wrap gap-2" role="tablist" aria-label="Choose Mass form">
          {(Object.keys(massRiteInfo) as MassRite[]).map((key) => (
            <button key={key} role="tab" aria-selected={rite === key} onClick={() => switchRite(key)} className={`rounded-sm border px-4 py-2.5 text-left text-sm transition-colors ${rite === key ? 'border-gold bg-gold/15 font-semibold text-gold-dark dark:text-gold' : 'border-[var(--border)] text-[var(--text-muted)] hover:border-gold'}`}>
              <span className="block">{massRiteInfo[key].short}</span>
              <span className="mt-0.5 block text-[10px] font-normal">{key === 'novus-ordo' ? 'Roman Missal, 3rd edition' : '1962 Roman Missal'}</span>
            </button>
          ))}
        </div>
        <p className="mt-3 flex items-start gap-2 text-xs leading-5 text-[var(--text-muted)]"><Info size={14} className="mt-0.5 shrink-0 text-gold-dark dark:text-gold" />{massRiteInfo[rite].note}</p>
      </div>

      <div className="border-b border-[var(--border)] px-5 py-4 sm:px-7">
        <div className="mb-3 flex flex-wrap gap-1.5">
          {sections.map((s) => (
            <button key={s} onClick={() => { const found = steps.findIndex((x) => x.section === s); if (found >= 0) setIndex(found); }} className={`rounded-full px-3 py-1 text-[11px] font-medium transition-colors ${step.section === s ? 'bg-forest text-ivory dark:bg-gold dark:text-forest-deep' : 'bg-[var(--bg-alt)] text-[var(--text-muted)] hover:bg-gold/20'}`}>{s}</button>
          ))}
        </div>
        <ProgressBar value={progress} label={`Step ${index + 1} of ${steps.length} · ${step.section}`} />
      </div>

      <div className="grid gap-0 lg:grid-cols-[1fr_320px]">
        <div className="p-6 sm:p-9">
          <div className="mb-5 flex flex-wrap items-center gap-3">
            <span className={`rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-wider ${postureStyle[step.posture] || 'bg-[var(--bg-alt)] text-[var(--text)]'}`}>{step.posture}</span>
            <span className="text-xs font-medium uppercase tracking-wider text-gold-dark dark:text-gold">{step.section}</span>
          </div>
          <h3 className="font-serif text-3xl font-semibold leading-tight sm:text-4xl">{step.title}</h3>
          <p className="mt-5 text-[17px] leading-8">{step.happening}</p>

          <div className="mt-8 space-y-5">
            <div className="border-l-2 border-gold pl-5">
              <p className="mb-1.5 text-[11px] font-bold uppercase tracking-[0.18em] text-gold-dark dark:text-gold">What the priest does</p>
              <p className="text-sm leading-7">{step.priest}</p>
            </div>
            <div className="border-l-2 border-forest pl-5 dark:border-gold/50">
              <p className="mb-1.5 text-[11px] font-bold uppercase tracking-[0.18em] text-gold-dark dark:text-gold">What you do</p>
              <p className="text-sm leading-7">{step.congregation}</p>
            </div>
            <div className="border border-[var(--border)] bg-[var(--bg)] p-5">
              <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.18em] text-gold-dark dark:text-gold">What is typically said</p>
              <p className="font-serif text-lg leading-8">{step.words}</p>
            </div>
            <div className="rounded-sm bg-forest-pale p-5 dark:bg-forest-light/30">
              <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.18em] text-gold-dark dark:text-gold">Why it matters</p>
              <p className="text-sm leading-7">{step.why}</p>
            </div>
          </div>
        </div>

        <aside className="border-t border-[var(--border)] bg-[var(--bg)] p-6 lg:border-l lg:border-t-0">
          <div className="sticky top-32">
            <div className="flex h-16 w-16 items-center justify-center rounded-full border border-gold/50 bg-[var(--surface)] text-gold-dark dark:text-gold"><Church size={28} strokeWidth={1.3} /></div>
            <p className="mt-5 text-[11px] font-bold uppercase tracking-[0.18em] text-[var(--text-muted)]">Current posture</p>
            <p className={`mt-1 inline-block rounded-sm px-3 py-1.5 text-sm font-semibold ${postureStyle[step.posture] || 'bg-[var(--surface)]'}`}>{step.posture}</p>
            <p className="mt-6 text-[11px] font-bold uppercase tracking-[0.18em] text-[var(--text-muted)]">Quick reminder</p>
            <p className="mt-2 text-sm leading-6 text-[var(--text-muted)]">If you are unsure, do what the people around you do. Nobody expects a first-time visitor to know the responses.</p>
            <div className="mt-8 border-t border-[var(--border)] pt-5">
              <p className="text-xs leading-5 text-[var(--text-muted)]"><strong className="text-[var(--text)]">Local customs vary.</strong> This guide describes the general order, not every parish’s practice.</p>
            </div>
          </div>
        </aside>
      </div>

      <div className="flex items-center justify-between gap-3 border-t border-[var(--border)] bg-[var(--surface)] p-5 sm:px-7">
        <button onClick={() => setIndex(Math.max(0, index - 1))} disabled={index === 0} className="btn-secondary btn-sm"><ArrowLeft size={15} /> Previous</button>
        <span className="hidden text-xs text-[var(--text-muted)] sm:block">{step.section} · {index + 1} / {steps.length}</span>
        <button onClick={() => setIndex(Math.min(steps.length - 1, index + 1))} disabled={index === steps.length - 1} className="btn-primary btn-sm">Next <ArrowRight size={15} /></button>
      </div>
    </div>
  );
}
