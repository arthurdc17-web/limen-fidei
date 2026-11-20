'use client';

import { useEffect, useMemo, useState } from 'react';
import { Clock, Plus, RotateCcw, X } from 'lucide-react';
import { ProgressBar } from '@/components/ui';
import { useUser } from '@/components/providers/UserProvider';
import { dailyPrayerIds } from '@/content/daily';
import { getPrayer } from '@/content/prayers';

interface RoutineItem { id: string; title: string; minutes: number }

const STORAGE_KEY = 'catholic-companion-daily-routine-v1';
const DEFAULT_GOAL = 15;

const suggestions: RoutineItem[] = dailyPrayerIds.map((id) => ({
  id,
  title: getPrayer(id)?.title ?? id,
  minutes: 5,
}));

const defaultItems: RoutineItem[] = [
  { ...suggestions[0], minutes: 5 },
  { ...suggestions[1], minutes: 3 },
  { ...suggestions[5], minutes: 5 },
];

const clampMinutes = (value: number) => Math.min(180, Math.max(1, Number.isFinite(value) ? Math.round(value) : 1));

export function DailyRoutine() {
  const { dailyGoalMinutes, setDailyGoalMinutes } = useUser();
  const [items, setItems] = useState<RoutineItem[]>(() => defaultItems.map((item) => ({ ...item })));
  const [selected, setSelected] = useState<string>(suggestions[0].id);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed: unknown = JSON.parse(raw);
        if (Array.isArray(parsed)) {
          const restored = parsed.filter((entry): entry is RoutineItem =>
            Boolean(entry) &&
            typeof entry === 'object' &&
            typeof (entry as RoutineItem).id === 'string' &&
            typeof (entry as RoutineItem).title === 'string' &&
            typeof (entry as RoutineItem).minutes === 'number' &&
            Number.isFinite((entry as RoutineItem).minutes),
          );
          setItems(restored.map((item) => ({ ...item, minutes: clampMinutes(item.minutes) })));
        }
      }
    } catch { /* ignore malformed or unavailable local data */ }
    setLoaded(true);
  }, []);

  useEffect(() => {
    if (!loaded) return;
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(items)); } catch { /* storage may be unavailable */ }
  }, [items, loaded]);

  const available = useMemo(() => suggestions.filter((suggestion) => !items.some((item) => item.id === suggestion.id)), [items]);

  useEffect(() => {
    if (available.length > 0 && !available.some((option) => option.id === selected)) {
      setSelected(available[0].id);
    }
  }, [available, selected]);

  const totalMinutes = useMemo(() => items.reduce((sum, item) => sum + item.minutes, 0), [items]);
  const goal = clampMinutes(dailyGoalMinutes);
  const percent = Math.round((totalMinutes / goal) * 100);

  const addItem = () => {
    const suggestion = suggestions.find((item) => item.id === selected);
    if (!suggestion || items.some((item) => item.id === suggestion.id)) return;
    setItems((prev) => [...prev, { ...suggestion }]);
    const next = available.find((item) => item.id !== suggestion.id);
    setSelected(next?.id ?? '');
  };

  const updateMinutes = (id: string, value: number) =>
    setItems((prev) => prev.map((item) => (item.id === id ? { ...item, minutes: clampMinutes(value) } : item)));

  const removeItem = (id: string) => setItems((prev) => prev.filter((item) => item.id !== id));

  const reset = () => {
    setItems(defaultItems.map((item) => ({ ...item })));
    setDailyGoalMinutes(DEFAULT_GOAL);
    setSelected(suggestions[0].id);
  };

  return (
    <div className="card overflow-hidden">
      <div className="border-b border-[var(--border)] bg-[var(--surface)] p-6 sm:p-8">
        <div className="flex flex-wrap items-start justify-between gap-5">
          <div className="max-w-2xl">
            <p className="eyebrow mb-2">A simple planner</p>
            <h2 className="font-serif text-2xl font-semibold sm:text-3xl">Build your daily prayer routine</h2>
            <p className="mt-3 text-sm leading-7 text-[var(--text-muted)]">Choose a few prayers, set a realistic amount of time for each, and adjust your daily goal. This is a tool to help you begin — not a scorecard for your spiritual life.</p>
          </div>
          <button type="button" onClick={reset} className="btn-ghost btn-sm border border-[var(--border)]"><RotateCcw size={14} /> Reset routine</button>
        </div>

        <div className="mt-7 grid gap-6 sm:grid-cols-[220px_1fr] sm:items-end">
          <div>
            <label htmlFor="daily-goal" className="label">Daily goal (minutes)</label>
            <input
              id="daily-goal"
              type="number"
              min={1}
              max={180}
              value={goal}
              onChange={(event) => setDailyGoalMinutes(clampMinutes(Number(event.target.value)))}
              className="input"
            />
          </div>
          <div>
            <ProgressBar value={percent} label={`${totalMinutes} of ${goal} minutes planned`} />
            <p aria-live="polite" className="mt-3 text-xs text-[var(--text-muted)]">{items.length} {items.length === 1 ? 'item' : 'items'} in your routine · saved in this browser</p>
          </div>
        </div>
      </div>

      <div className="p-6 sm:p-8">
        <div className="flex flex-wrap items-end gap-3">
          <div className="min-w-[220px] flex-1">
            <label htmlFor="routine-suggestion" className="label">Add from suggested prayers</label>
            <select
              id="routine-suggestion"
              value={selected}
              onChange={(event) => setSelected(event.target.value)}
              disabled={available.length === 0}
              className="input"
            >
              {available.length === 0
                ? <option value="">All suggested prayers are already in your routine</option>
                : available.map((option) => <option key={option.id} value={option.id}>{option.title}</option>)}
            </select>
          </div>
          <button type="button" onClick={addItem} disabled={available.length === 0} className="btn-primary btn-sm"><Plus size={15} /> Add prayer</button>
        </div>

        <ul className="mt-7 space-y-3">
          {items.length === 0 ? (
            <li className="rounded-sm border border-dashed border-[var(--border)] p-8 text-center text-sm text-[var(--text-muted)]">Your routine is empty. Add a suggested prayer above to begin.</li>
          ) : items.map((item) => (
            <li key={item.id} className="flex flex-wrap items-center gap-4 border border-[var(--border)] bg-[var(--bg)] p-4">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-gold/40 text-gold-dark dark:text-gold"><Clock size={16} /></span>
              <div className="min-w-0 flex-1">
                <p className="font-serif text-lg font-semibold leading-6">{item.title}</p>
                <p className="mt-0.5 text-xs text-[var(--text-muted)]">A suggested prayer from the Church&apos;s daily practice.</p>
              </div>
              <div className="flex items-center gap-2">
                <label htmlFor={`minutes-${item.id}`} className="text-xs font-medium text-[var(--text-muted)]">Minutes</label>
                <input
                  id={`minutes-${item.id}`}
                  type="number"
                  min={1}
                  max={180}
                  value={item.minutes}
                  onChange={(event) => updateMinutes(item.id, Number(event.target.value))}
                  className="input !w-20 !px-2 !py-2 text-center"
                  aria-label={`Minutes for ${item.title}`}
                />
              </div>
              <button type="button" onClick={() => removeItem(item.id)} aria-label={`Remove ${item.title} from your routine`} className="rounded-sm border border-[var(--border)] p-2 text-[var(--text-muted)] transition-colors hover:border-burgundy hover:text-burgundy"><X size={16} /></button>
            </li>
          ))}
        </ul>
      </div>

      <div className="border-t border-[var(--border)] bg-[var(--bg-alt)] p-6 sm:p-8">
        <p className="flex items-start gap-2 text-sm leading-7 text-[var(--text-muted)]"><Clock size={16} className="mt-1 shrink-0 text-gold-dark dark:text-gold" /> Your routine is saved in this browser, and your daily goal is stored with your other app preferences. Nothing is shared or sent anywhere. Adjust the numbers freely — the aim is a rhythm you can actually keep.</p>
      </div>
    </div>
  );
}
