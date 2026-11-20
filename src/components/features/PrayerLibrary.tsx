'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Bookmark, Filter, Search, X } from 'lucide-react';
import { BookmarkButton, EmptyState } from '@/components/ui';
import { useUser } from '@/components/providers/UserProvider';
import { prayerCategories, prayers } from '@/content/prayers';
import type { PrayerCategory } from '@/content/types';

type CategoryFilter = 'All' | PrayerCategory;

export function PrayerLibrary() {
  const { bookmarks } = useUser();
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState<CategoryFilter>('All');
  const [savedOnly, setSavedOnly] = useState(false);

  const results = useMemo(() => {
    const words = query.trim().toLowerCase().split(/\s+/).filter(Boolean);
    return prayers.filter((prayer) => {
      if (category !== 'All' && prayer.category !== category) return false;
      if (savedOnly && !bookmarks.includes(prayer.id)) return false;
      if (!words.length) return true;
      const haystack = [
        prayer.title,
        prayer.category,
        prayer.meaning,
        prayer.when,
        prayer.how,
        prayer.text,
        (prayer.tags || []).join(' '),
      ].join(' ').toLowerCase();
      return words.every((word) => haystack.includes(word));
    });
  }, [query, category, savedOnly, bookmarks]);

  const clearFilters = () => {
    setQuery('');
    setCategory('All');
    setSavedOnly(false);
  };

  return (
    <div>
      <div className="card p-6">
        <label htmlFor="prayer-search" className="label">Search the prayer library</label>
        <div className="relative">
          <Search size={17} className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[var(--text-muted)]" aria-hidden="true" />
          <input
            id="prayer-search"
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search by title, theme, tag, or words in the prayer"
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
        <div className="mt-3 flex flex-wrap gap-2" role="group" aria-label="Prayer categories">
          {(['All', ...prayerCategories] as CategoryFilter[]).map((item) => (
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
              {item === 'All' ? 'All prayers' : item}
            </button>
          ))}
        </div>

        <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-[var(--border)] pt-5">
          <button
            type="button"
            onClick={() => setSavedOnly((value) => !value)}
            aria-pressed={savedOnly}
            className={`inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-semibold transition-colors ${
              savedOnly
                ? 'border-gold bg-gold/15 text-gold-dark dark:text-gold'
                : 'border-[var(--border)] text-[var(--text-muted)] hover:border-gold'
            }`}
          >
            <Bookmark size={13} fill={savedOnly ? 'currentColor' : 'none'} aria-hidden="true" />
            {savedOnly ? 'Showing saved prayers only' : 'Show saved prayers only'}
          </button>
          <p aria-live="polite" className="text-xs text-[var(--text-muted)]">
            Showing <strong className="text-[var(--text)]">{results.length}</strong> of {prayers.length} prayers
          </p>
        </div>
      </div>

      {results.length === 0 ? (
        <div className="mt-8">
          <EmptyState
            title="No prayers found"
            description="No prayers match those filters. Try a different word, choose another category, or turn off the saved-only filter."
          />
          <div className="mt-4 text-center">
            <button type="button" onClick={clearFilters} className="btn-secondary btn-sm">
              <X size={14} /> Clear all filters
            </button>
          </div>
        </div>
      ) : (
        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {results.map((prayer) => (
            <article key={prayer.id} className="card flex h-full flex-col p-6">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="chip">{prayer.category}</span>
                <BookmarkButton id={prayer.id} title={prayer.title} />
              </div>
              <h3 className="mt-4 font-serif text-2xl font-semibold leading-snug">
                <Link href={`/prayers/${prayer.id}`} className="hover:text-gold-dark dark:hover:text-gold">{prayer.title}</Link>
              </h3>
              <p className="mt-3 text-sm leading-6 text-[var(--text-muted)]">{prayer.meaning}</p>
              <p className="mt-4 line-clamp-5 whitespace-pre-line font-serif text-[15px] leading-6 text-[var(--text-muted)]" aria-label={`Preview of ${prayer.title}`}>
                {prayer.text}
              </p>
              <Link
                href={`/prayers/${prayer.id}`}
                className="mt-5 inline-flex items-center gap-1.5 border-t border-[var(--border)] pt-4 text-xs font-semibold uppercase tracking-wider text-gold-dark dark:text-gold"
              >
                Full text and meaning <ArrowRight size={14} />
              </Link>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}
