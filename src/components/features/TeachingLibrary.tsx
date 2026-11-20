'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Filter, Search, Tag, X } from 'lucide-react';
import { EmptyState } from '@/components/ui';
import { teachingCategories, teachings } from '@/content/teachings';

type CategoryFilter = 'All' | (typeof teachingCategories)[number];

export function TeachingLibrary() {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState<CategoryFilter>('All');

  const results = useMemo(() => {
    const words = query.trim().toLowerCase().split(/\s+/).filter(Boolean);
    return teachings.filter((teaching) => {
      if (category !== 'All' && teaching.category !== category) return false;
      if (!words.length) return true;
      const haystack = [
        teaching.title,
        teaching.summary,
        teaching.category,
        teaching.body.join(' '),
        (teaching.scripture || []).join(' '),
        (teaching.ccc || []).join(' '),
        (teaching.terms || []).map((term) => `${term.term} ${term.text}`).join(' '),
      ].join(' ').toLowerCase();
      return words.every((word) => haystack.includes(word));
    });
  }, [query, category]);

  const clearFilters = () => {
    setQuery('');
    setCategory('All');
  };

  return (
    <div>
      <div className="card p-6">
        <label htmlFor="teaching-search" className="label">Search Catholic teachings</label>
        <div className="relative">
          <Search size={17} className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[var(--text-muted)]" aria-hidden="true" />
          <input
            id="teaching-search"
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search by topic, term, or Scripture reference"
            className="input pl-11 pr-11"
          />
          {query && (
            <button
              type="button"
              onClick={() => setQuery('')}
              aria-label="Clear search"
              className="absolute right-3 top-1/2 -translate-y-1/2 rounded-sm p-1 text-[var(--text-muted)] hover:text-gold-dark dark:hover:text-gold"
            >
              <X size={16} />
            </button>
          )}
        </div>

        <div className="mt-6 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[var(--text-muted)]">
          <Filter size={14} aria-hidden="true" /> Filter by category
        </div>
        <div className="mt-3 flex flex-wrap gap-2" role="group" aria-label="Teaching categories">
          {(['All', ...teachingCategories] as CategoryFilter[]).map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setCategory(item)}
              aria-pressed={category === item}
              className={`rounded-full border px-3 py-1.5 text-xs font-medium transition-colors ${
                category === item
                  ? 'border-gold bg-gold/15 text-gold-dark dark:text-gold'
                  : 'border-[var(--border)] text-[var(--text-muted)] hover:border-gold hover:text-gold-dark dark:hover:text-gold'
              }`}
            >
              {item === 'All' ? 'All teachings' : item}
            </button>
          ))}
        </div>

        <p aria-live="polite" className="mt-5 border-t border-[var(--border)] pt-5 text-xs text-[var(--text-muted)]">
          Showing <strong className="text-[var(--text)]">{results.length}</strong> of {teachings.length} teachings
        </p>
      </div>

      {results.length === 0 ? (
        <div className="mt-8">
          <EmptyState
            title="No teachings found"
            description="No articles match those filters. Try a shorter search term or choose another category."
          />
          <div className="mt-4 text-center">
            <button type="button" onClick={clearFilters} className="btn-secondary btn-sm">
              <X size={14} /> Clear all filters
            </button>
          </div>
        </div>
      ) : (
        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {results.map((teaching) => (
            <article key={teaching.id} className="card flex h-full flex-col p-6">
              <span className="chip"><Tag size={12} aria-hidden="true" /> {teaching.category}</span>
              <h3 className="mt-4 font-serif text-2xl font-semibold leading-snug">
                <Link href={`/teachings/${teaching.id}`} className="hover:text-gold-dark dark:hover:text-gold">{teaching.title}</Link>
              </h3>
              <p className="mt-3 flex-1 text-sm leading-6 text-[var(--text-muted)]">{teaching.summary}</p>
              {teaching.terms && teaching.terms.length > 0 && (
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {teaching.terms.slice(0, 2).map((term) => <span key={term.term} className="chip">{term.term}</span>)}
                </div>
              )}
              <Link
                href={`/teachings/${teaching.id}`}
                className="mt-5 inline-flex items-center gap-1.5 border-t border-[var(--border)] pt-4 text-xs font-semibold uppercase tracking-wider text-gold-dark dark:text-gold"
              >
                Read the full teaching <ArrowRight size={14} />
              </Link>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}
