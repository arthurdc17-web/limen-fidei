'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Cross, RotateCcw, Search } from 'lucide-react';
import { EmptyState } from '@/components/ui';
import { saints, saintVocations, saintPeriods, saintPatronages } from '@/content/saints';

const ALL = 'All';

export function SaintDirectory() {
  const [query, setQuery] = useState('');
  const [vocation, setVocation] = useState(ALL);
  const [period, setPeriod] = useState(ALL);
  const [patronage, setPatronage] = useState(ALL);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    return saints.filter((saint) => {
      const matchesQuery = !q || [saint.name, saint.vocation, saint.period, saint.feast, saint.background, ...saint.patronage]
        .join(' ')
        .toLowerCase()
        .includes(q);
      const matchesVocation = vocation === ALL || saint.vocation === vocation;
      const matchesPeriod = period === ALL || saint.period === period;
      const matchesPatronage = patronage === ALL || saint.patronage.includes(patronage);
      return matchesQuery && matchesVocation && matchesPeriod && matchesPatronage;
    });
  }, [query, vocation, period, patronage]);

  const reset = () => {
    setQuery('');
    setVocation(ALL);
    setPeriod(ALL);
    setPatronage(ALL);
  };

  const filtersActive = Boolean(query.trim()) || vocation !== ALL || period !== ALL || patronage !== ALL;

  return (
    <div>
      <div className="card p-6 sm:p-7">
        <div className="grid gap-5 lg:grid-cols-[minmax(0,1.5fr)_repeat(3,minmax(0,1fr))]">
          <div>
            <label htmlFor="saint-search" className="label">Search</label>
            <div className="relative">
              <Search size={16} className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-[var(--text-muted)]" aria-hidden="true" />
              <input
                id="saint-search"
                type="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Name, feast, patronage, or keyword"
                className="input pl-10"
                aria-label="Search saints by name, feast, patronage, or keyword"
              />
            </div>
          </div>

          <div>
            <label htmlFor="saint-vocation" className="label">Vocation</label>
            <select id="saint-vocation" value={vocation} onChange={(event) => setVocation(event.target.value)} className="input" aria-label="Filter saints by vocation">
              {saintVocations.map((option) => <option key={option} value={option}>{option}</option>)}
            </select>
          </div>

          <div>
            <label htmlFor="saint-period" className="label">Period</label>
            <select id="saint-period" value={period} onChange={(event) => setPeriod(event.target.value)} className="input" aria-label="Filter saints by historical period">
              {saintPeriods.map((option) => <option key={option} value={option}>{option}</option>)}
            </select>
          </div>

          <div>
            <label htmlFor="saint-patronage" className="label">Patronage</label>
            <select id="saint-patronage" value={patronage} onChange={(event) => setPatronage(event.target.value)} className="input" aria-label="Filter saints by patronage">
              {[ALL, ...saintPatronages].map((option) => <option key={option} value={option}>{option}</option>)}
            </select>
          </div>
        </div>

        <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-[var(--border)] pt-5">
          <p aria-live="polite" className="text-sm text-[var(--text-muted)]">
            Showing <strong className="text-[var(--text)]">{results.length}</strong> of {saints.length} saints
          </p>
          <button type="button" onClick={reset} disabled={!filtersActive} className="btn-ghost btn-sm border border-[var(--border)]"><RotateCcw size={14} /> Reset filters</button>
        </div>
      </div>

      {results.length === 0 ? (
        <div className="mt-8">
          <EmptyState title="No saints found" description="No saint matches those filters. Try a different name or keyword, or clear the filters to see everyone again." />
          <div className="mt-4 text-center">
            <button type="button" onClick={reset} className="btn-primary"><RotateCcw size={15} /> Reset filters</button>
          </div>
        </div>
      ) : (
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {results.map((saint) => (
            <article key={saint.id} className="card group flex h-full flex-col overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-gold/60">
              {saint.image ? (
                <div className="h-44 overflow-hidden bg-forest-pale">
                  <img src={saint.image} alt={`Sacred art depicting ${saint.name}`} loading="lazy" className="h-full w-full object-cover opacity-90 transition-transform duration-500 group-hover:scale-105" />
                </div>
              ) : (
                <div className="flex h-44 items-center justify-center bg-forest text-ivory/60" aria-hidden="true">
                  <Cross size={34} strokeWidth={1.2} />
                </div>
              )}
              <div className="flex flex-1 flex-col p-6">
                <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-gold-dark dark:text-gold">{saint.period}</p>
                <h3 className="mt-2 font-serif text-xl font-semibold leading-snug">
                  <Link href={`/saints/${saint.id}`} className="hover:text-gold-dark hover:underline dark:hover:text-gold">{saint.name}</Link>
                </h3>
                <dl className="mt-4 space-y-1.5 text-sm text-[var(--text-muted)]">
                  <div className="flex flex-wrap gap-1.5"><dt className="font-semibold text-[var(--text)]">Feast:</dt><dd>{saint.feast}</dd></div>
                  <div className="flex flex-wrap gap-1.5"><dt className="font-semibold text-[var(--text)]">Vocation:</dt><dd>{saint.vocation}</dd></div>
                </dl>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {saint.patronage.map((item) => <span key={item} className="chip">{item}</span>)}
                </div>
                <Link href={`/saints/${saint.id}`} className="mt-5 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-gold-dark dark:text-gold">
                  Read the story <ArrowRight size={13} className="transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}
