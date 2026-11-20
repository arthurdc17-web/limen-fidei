'use client';

import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { ArrowLeft, ArrowRight, CirclePause, CirclePlay, RotateCcw, Volume2, VolumeX } from 'lucide-react';
import { ProgressBar } from '@/components/ui';
import { buildRosary, getMystery, mysterySets, suggestedSetForToday, type MysterySet, type RosaryStep } from '@/content/mysteries';
import { getPrayer } from '@/content/prayers';
import { useUser } from '@/components/providers/UserProvider';

const LARGE_POSITIONS = [0, 11, 22, 33, 44, 55];
const TOTAL_CIRCLE = 56;

function beadKey(step: RosaryStep): string {
  if (step.kind === 'sign' || step.kind === 'creed') return 'cross';
  if (step.decade === 0 && step.kind === 'our-father') return 'large-0';
  if (step.decade === 0 && step.kind === 'glory') return 'stem-3';
  if (step.decade === 0 && step.kind === 'hail-mary') return `stem-${Math.max(0, Number(step.label.match(/bead (\d)/)?.[1] || 1) - 1)}`;
  if (step.decade > 0 && step.kind === 'our-father') return `large-${step.decade - 1}`;
  if (step.decade > 0 && (step.kind === 'glory' || step.kind === 'fatima')) return `large-${step.decade}`;
  if (step.decade > 0 && step.kind === 'hail-mary') return `small-${(step.decade - 1) * 10 + Number(step.label.match(/Hail Mary (\d+)/)?.[1] || 1) - 1}`;
  return 'center';
}

function RosaryDiagram({ steps, current, onJump }: { steps: RosaryStep[]; current: RosaryStep; onJump: (index: number) => void }) {
  const currentKey = beadKey(current);
  const jump = (key: string) => { const i = steps.findIndex((s) => beadKey(s) === key); if (i >= 0) onJump(i); };
  const cx = 160, cy = 168, r = 118;
  const angle = (i: number) => (i / TOTAL_CIRCLE) * Math.PI * 2 - Math.PI / 2;
  const circleBeads = Array.from({ length: TOTAL_CIRCLE }, (_, i) => {
    const isLarge = LARGE_POSITIONS.includes(i);
    const key = isLarge ? `large-${LARGE_POSITIONS.indexOf(i)}` : `small-${i - LARGE_POSITIONS.filter((p) => p < i).length}`;
    return { i, x: cx + r * Math.cos(angle(i)), y: cy + r * Math.sin(angle(i)), isLarge, key };
  });

  return (
    <svg viewBox="0 0 320 360" className="mx-auto w-full max-w-[340px]" role="img" aria-label="Visual diagram of a rosary with clickable beads">
      <circle cx={cx} cy={cy} r={r} fill="none" stroke="currentColor" className="text-gold/50" strokeWidth="1.5" />
      <line x1="160" y1="50" x2="160" y2="8" stroke="currentColor" className="text-gold/50" strokeWidth="1.5" />
      {/* Cross */}
      <g onClick={() => jump('cross')} className="cursor-pointer" role="button" aria-label="Go to the opening prayers at the crucifix">
        <rect x="152" y="6" width="16" height="48" rx="2" className={currentKey === 'cross' ? 'fill-gold' : 'fill-forest dark:fill-gold/70'} />
        <rect x="140" y="18" width="40" height="15" rx="2" className={currentKey === 'cross' ? 'fill-gold' : 'fill-forest dark:fill-gold/70'} />
      </g>
      {/* Stem beads */}
      {[0, 1, 2, 3].map((i) => {
        const y = 70 + i * 18;
        const key = `stem-${i}`;
        return <circle key={key} cx="160" cy={y} r="6" onClick={() => jump(key)} className={`cursor-pointer ${currentKey === key ? 'fill-gold' : 'fill-forest dark:fill-gold/60'}`} />;
      })}
      {/* Circle beads */}
      {circleBeads.map((b) => (
        <circle key={b.i} cx={b.x} cy={b.y} r={b.isLarge ? 7 : 4.5} onClick={() => jump(b.key)} className={`cursor-pointer transition-all ${currentKey === b.key ? 'fill-gold stroke-forest stroke-2' : b.isLarge ? 'fill-gold/70' : 'fill-forest dark:fill-gold/50'}`}>
          <title>{b.isLarge ? 'Our Father / Glory bead' : 'Hail Mary bead'}</title>
        </circle>
      ))}
      {/* Center medal */}
      <g onClick={() => jump('center')} className="cursor-pointer">
        <circle cx="160" cy="286" r="13" className={currentKey === 'center' ? 'fill-gold' : 'fill-forest dark:fill-gold/70'} />
        <text x="160" y="291" textAnchor="middle" className="fill-ivory text-[11px] font-serif">M</text>
      </g>
      <text x="160" y="318" textAnchor="middle" className="fill-[var(--text-muted)] text-[10px]">Click any bead to jump to that prayer</text>
    </svg>
  );
}

export function RosarySimulator() {
  const [set, setSet] = useState<MysterySet>(() => suggestedSetForToday());
  const [index, setIndex] = useState(0);
  const [speaking, setSpeaking] = useState(false);
  const [rate, setRate] = useState(1);
  const { setRosaryProgress, rosaryProgress } = useUser();
  const steps = useMemo(() => buildRosary(set), [set]);
  const step = steps[index];
  const prayer = getPrayer(step.prayerId)!;
  const mystery = step.mysteryNumber ? getMystery(set, step.mysteryNumber) : null;
  const voicesRef = useRef<SpeechSynthesisVoice[]>([]);

  useEffect(() => {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) voicesRef.current = window.speechSynthesis.getVoices();
  }, []);

  useEffect(() => () => { if ('speechSynthesis' in window) window.speechSynthesis.cancel(); }, []);

  const stop = useCallback(() => { if ('speechSynthesis' in window) { window.speechSynthesis.cancel(); } setSpeaking(false); }, []);

  const speak = useCallback((text: string, onEnd?: () => void) => {
    if (!('speechSynthesis' in window)) return;
    window.speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(text.replace(/\n/g, ' '));
    u.rate = rate;
    const voice = voicesRef.current.find((v) => v.lang.startsWith('en'));
    if (voice) u.voice = voice;
    if (onEnd) u.onend = onEnd;
    window.speechSynthesis.speak(u);
  }, [rate]);

  const startNarration = () => {
    if (speaking) { stop(); return; }
    setSpeaking(true);
    speak(`${step.label}. ${prayer.text}`, () => {
      if (index < steps.length - 1) {
        setIndex(index + 1);
        setRosaryProgress(set, index + 1);
      } else {
        setSpeaking(false);
      }
    });
  };

  const changeStep = (next: number) => {
    stop();
    const i = Math.max(0, Math.min(steps.length - 1, next));
    setIndex(i);
    setRosaryProgress(set, i);
    if (speaking) {
      const target = steps[i];
      setSpeaking(true);
      speak(`${target.label}. ${getPrayer(target.prayerId)!.text}`, () => {
        if (i < steps.length - 1) {
          setIndex(i + 1);
          setRosaryProgress(set, i + 1);
        }
      });
    }
  };

  const changeSet = (s: MysterySet) => { stop(); setSet(s); setIndex(0); setRosaryProgress(s, 0); };

  return (
    <div className="card overflow-hidden">
      <div className="border-b border-[var(--border)] bg-[var(--surface)] p-5 sm:p-7">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="eyebrow mb-2">Interactive digital rosary</p>
            <h2 className="font-serif text-2xl font-semibold sm:text-3xl">Pray along, bead by bead</h2>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-[var(--text-muted)]">The guide follows the structure of a physical Rosary. Click a bead to jump to it, or use Next and Previous.</p>
          </div>
          <div className="flex flex-wrap gap-2" role="group" aria-label="Choose the mysteries">
            {mysterySets.map((s) => (
              <button key={s} onClick={() => changeSet(s)} className={`rounded-sm border px-3 py-2 text-xs font-semibold transition-colors ${set === s ? 'border-gold bg-gold/15 text-gold-dark dark:text-gold' : 'border-[var(--border)] text-[var(--text-muted)] hover:border-gold'}`}>{s}</button>
            ))}
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-[360px_1fr]">
        <div className="border-b border-[var(--border)] bg-[var(--bg)] p-6 lg:border-b-0 lg:border-r">
          <RosaryDiagram steps={steps} current={step} onJump={changeStep} />
          <div className="mt-4">
            <ProgressBar value={step.progress} label={`Bead ${index + 1} of ${steps.length}`} />
          </div>
        </div>

        <div className="p-6 sm:p-9">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-gold-dark dark:text-gold">{step.decade > 0 ? `Decade ${step.decade} of 5` : 'Opening prayers'}</p>
              <h3 className="mt-1 font-serif text-3xl font-semibold">{step.label}</h3>
            </div>
            <button onClick={startNarration} aria-pressed={speaking} className={`btn-sm btn ${speaking ? 'bg-burgundy text-ivory' : 'btn-primary'}`}>
              {speaking ? <><CirclePause size={15} /> Pause voice</> : <><CirclePlay size={15} /> Play voice</>}
            </button>
          </div>
          <p className="mt-4 rounded-sm border-l-2 border-gold bg-[var(--bg)] px-4 py-3 text-sm leading-6"><strong>Do this:</strong> {step.instruction}</p>

          {mystery && (
            <div className="mt-5 border border-gold/40 bg-gold/5 p-5">
              <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-gold-dark dark:text-gold">Mystery {mystery.number} · {mystery.set}</p>
              <h4 className="mt-1 font-serif text-xl font-semibold">{mystery.title}</h4>
              <p className="mt-2 text-sm leading-6 text-[var(--text-muted)]">{mystery.explanation}</p>
              <p className="mt-3 text-xs italic leading-5 text-[var(--text-muted)]">{mystery.scripture}</p>
            </div>
          )}

          <div className="mt-6">
            <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.18em] text-[var(--text-muted)]">Prayer text · {prayer.title}</p>
            <div className="prayer-text prose-faith max-w-none rounded-sm border border-[var(--border)] bg-[var(--surface)] p-5">{prayer.text}</div>
          </div>

          <div className="mt-5 flex flex-wrap items-center gap-4">
            <label className="flex items-center gap-2 text-xs text-[var(--text-muted)]"><Volume2 size={15} /> Voice speed
              <select value={rate} onChange={(e) => setRate(Number(e.target.value))} className="input w-auto py-1.5 text-xs">
                <option value={0.75}>0.75×</option><option value={1}>1×</option><option value={1.25}>1.25×</option><option value={1.5}>1.5×</option>
              </select>
            </label>
            <span className="flex items-center gap-1.5 text-[11px] text-[var(--text-muted)]"><VolumeX size={13} /> Narration uses your device’s built-in voice, not a recording. It may continue in the background where your browser allows.</span>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-3 border-t border-[var(--border)] bg-[var(--surface)] p-5 sm:px-7">
        <div className="flex gap-2">
          <button onClick={() => changeStep(index - 1)} disabled={index === 0} className="btn-secondary btn-sm"><ArrowLeft size={15} /> Previous</button>
          <button onClick={() => changeStep(index + 1)} disabled={index === steps.length - 1} className="btn-primary btn-sm">Next <ArrowRight size={15} /></button>
        </div>
        <button onClick={() => { stop(); setIndex(0); setRosaryProgress(set, 0); }} className="btn-ghost text-xs"><RotateCcw size={14} /> Restart Rosary</button>
      </div>
    </div>
  );
}
