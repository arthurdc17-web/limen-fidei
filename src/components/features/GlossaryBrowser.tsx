'use client';

import { useMemo, useState } from 'react';
import { Filter, Search, X } from 'lucide-react';
import { EmptyState } from '@/components/ui';
import { glossary, glossaryCategories } from '@/content/glossary';

type GlossaryEntry = (typeof glossary)[number];

function slugify(value: string): string {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

function groupByLetter(entries: GlossaryEntry[]) {
  const groups = new Map<string, GlossaryEntry[]>();
  for (const entry of entries) {
    const letter = entry.term.charAt(0).toUpperCase();
    const list = groups.get(letter) ?? [];
    list.push(entry);
    groups.set(letter, list);
  }
  return Array.from(groups.entries())
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([letter, items]) => ({
      letter,
      items: [...items].sort((a, b) => a.term.localeCompare(b.term)),
    }));
}

export function GlossaryBrowser() {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('All');

  const results = useMemo(() => {
    const search = query.trim().toLowerCase();
    return glossary.filter((entry) => {
      if (category !== 'All' && entry.category !== category) return false;
      if (!search) return true;
      return `${entry.term} ${entry.definition} ${entry.category}`.toLowerCase().includes(search);
    });
  }, [query, category]);

  const groups = useMemo(() => groupByLetter(results), [results]);
  const isFiltered = query.trim().length > 0 || category !== 'All';

  function reset() {
    setQuery('');
    setCategory('All');
  }

  return (
    <div>
      <div className="card p-5 sm:p-7">
        <label htmlFor="glossary-search" className="label">Search the glossary</label>
        <div className="relative">
          <Search size={18} aria-hidden="true" className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-gold-dark dark:text-gold" />
          <input
            id="glossary-search"
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Try “Eucharist” or “adoration”"
            aria-describedby="glossary-result-count"
            className="input pl-11 pr-11"
          />
          {query.length > 0 && (
            <button
              type="button"
              onClick={() => setQuery('')}
              aria-label="Clear the glossary search"
              className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full p-1.5 text-[var(--text-muted)] transition-colors hover:text-gold-dark dark:hover:text-gold"
            >
              <X size={16} aria-hidden="true" />
            </button>
          )}
        </div>

        <div className="mt-7">
          <p className="label flex items-center gap-2"><Filter size={13} aria-hidden="true" /> Filter by category</p>
          <div className="flex flex-wrap gap-2" role="group" aria-label="Filter glossary terms by category">
            {glossaryCategories.map((option) => (
              <button
                key={option}
                type="button"
                aria-pressed={category === option}
                onClick={() => setCategory(option)}
                className={`chip transition-colors ${category === option ? '!border-gold !bg-gold/15 !text-gold-dark dark:!text-gold' : 'hover:border-gold/60 hover:text-gold-dark dark:hover:text-gold'}`}
              >
                {option}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-7 flex flex-wrap items-center justify-between gap-3 border-t border-[var(--border)] pt-5">
          <p id="glossary-result-count" role="status" aria-live="polite" className="text-sm text-[var(--text-muted)]">
            Showing <strong className="font-semibold text-[var(--text)]">{results.length}</strong> of {glossary.length} terms{category !== 'All' ? ` in ${category}` : ''}.
          </p>
          {isFiltered && (
            <button
              type="button"
              onClick={reset}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-gold-dark transition-colors hover:underline dark:text-gold"
            >
              <X size={13} aria-hidden="true" /> Reset search and filters
            </button>
          )}
        </div>
      </div>

      {results.length === 0 ? (
        <div className="mt-8 space-y-5">
          <EmptyState
            title="No matching terms"
            description="We couldn't find a definition that matches your search. Try a different word, or clear the filters to see every term."
          />
          <div className="text-center">
            <button type="button" onClick={reset} className="btn-secondary">Reset search and filters</button>
          </div>
        </div>
      ) : (
        <div className="mt-12 space-y-12">
          {groups.map((group) => (
            <section key={group.letter} aria-labelledby={`glossary-letter-${group.letter}`}>
              <div className="mb-5 flex items-center gap-4">
                <h3 id={`glossary-letter-${group.letter}`} className="font-serif text-3xl font-semibold text-gold-dark dark:text-gold">{group.letter}</h3>
                <div className="h-px flex-1 bg-[var(--border)]" aria-hidden="true" />
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                {group.items.map((entry) => (
                  <article key={entry.term} aria-labelledby={`term-${slugify(entry.term)}`} className="card p-6">
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <h4 id={`term-${slugify(entry.term)}`} className="font-serif text-xl font-semibold leading-snug">{entry.term}</h4>
                      <span className="chip !py-0.5 text-[10px]">{entry.category}</span>
                    </div>
                    <p className="mt-3 text-sm leading-7 text-[var(--text-muted)]">{entry.definition}</p>
                  </article>
                ))}
              </div>
            </section>
          ))}
        </div>
      )}
    </div>
  );
}
