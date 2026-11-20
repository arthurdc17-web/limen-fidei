'use client';

import { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Clock, HelpCircle, Search, Trash2, X } from 'lucide-react';
import { useUser } from '@/components/providers/UserProvider';
import { Accordion, EmptyState, SectionTitle } from '@/components/ui';
import { searchCategories, searchContent, searchIndex } from '@/lib/search';
import { faqCategories, faqs } from '@/content/faq';

function escapeRegExp(value: string): string {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

/** Highlights each query word in a result's title or description. */
function Highlight({ text, query }: { text: string; query: string }) {
  const words = query.trim().split(/\s+/).filter(Boolean).map(escapeRegExp);
  if (words.length === 0) return <>{text}</>;
  const parts = text.split(new RegExp(`(${words.join('|')})`, 'gi'));
  return (
    <>
      {parts.map((part, index) => (
        index % 2 === 1
          ? <mark key={index} className="rounded-sm bg-gold/40 px-0.5 text-[var(--text)]">{part}</mark>
          : <span key={index}>{part}</span>
      ))}
    </>
  );
}

const quickCategories = ['All', 'Prayer', 'Saint', 'Teaching', 'Mass', 'Rosary', 'FAQ', 'Quiz'];

export function SearchClient() {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('All');
  const { recent, clearRecent } = useUser();

  const results = useMemo(() => searchContent(query, category), [query, category]);
  const hasQuery = query.trim().length > 0;

  const recentItems = useMemo(() => recent.map((item) => {
    const found = searchIndex.find((entry) => entry.id === item.id)
      || searchIndex.find((entry) => entry.id === `quiz-${item.id}`)
      || searchIndex.find((entry) => entry.id === `lesson-${item.id}`);
    return { ...item, href: found?.href || `/${item.id}` };
  }), [recent]);

  return (
    <div>
      <div className="card p-6 sm:p-8">
        <label htmlFor="site-search" className="label">Search this site</label>
        <div className="relative">
          <Search size={18} className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-gold-dark dark:text-gold" />
          <input
            id="site-search"
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Try “Rosary”, “Confession”, or “St Francis”"
            className="input pl-11"
            autoFocus
            aria-describedby="search-scope"
          />
        </div>
        <p id="search-scope" className="mt-2 text-xs text-[var(--text-muted)]">Searches titles, descriptions, and keywords on Catholic Companion only.</p>

        <div className="mt-6 flex flex-wrap gap-2" role="group" aria-label="Quick category filters">
          {quickCategories.map((option) => (
            <button
              key={option}
              type="button"
              aria-pressed={category === option}
              onClick={() => setCategory(option)}
              className={`chip transition-colors ${category === option ? 'border-gold bg-gold/15 text-gold-dark dark:text-gold' : 'hover:border-gold'}`}
            >
              {option}
            </button>
          ))}
        </div>

        <div className="mt-4 flex flex-wrap items-center gap-3">
          <label htmlFor="search-category" className="text-xs font-semibold uppercase tracking-wider text-[var(--text-muted)]">All categories</label>
          <select
            id="search-category"
            value={category}
            onChange={(event) => setCategory(event.target.value)}
            className="input max-w-xs py-2 text-sm"
          >
            {searchCategories.map((option) => <option key={option} value={option}>{option}</option>)}
          </select>
          {category !== 'All' && (
            <button type="button" onClick={() => setCategory('All')} className="inline-flex items-center gap-1 text-xs text-[var(--text-muted)] hover:text-gold-dark">
              <X size={13} /> Clear filter
            </button>
          )}
        </div>
      </div>

      {!hasQuery && (
        <section className="mt-10" aria-labelledby="recent-heading">
          <SectionTitle eyebrow="Pick up where you left off" title="Recently viewed" />
          {recentItems.length > 0 ? (
            <>
              <ul className="grid gap-2 sm:grid-cols-2">
                {recentItems.map((item) => (
                  <li key={item.id + item.at}>
                    <Link href={item.href} className="card flex items-start gap-3 p-4 transition-colors hover:border-gold">
                      <Clock size={16} className="mt-0.5 shrink-0 text-gold-dark dark:text-gold" />
                      <span className="min-w-0 flex-1">
                        <span className="block truncate font-medium">{item.title}</span>
                        <span className="block text-[11px] text-[var(--text-muted)]">{new Date(item.at).toISOString().slice(0, 10)}</span>
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
              <button type="button" onClick={clearRecent} className="btn-ghost mt-4 text-xs"><Trash2 size={14} /> Clear recent views</button>
            </>
          ) : (
            <p className="card p-6 text-sm leading-7 text-[var(--text-muted)]">
              Pages you visit on this site will appear here. Your history is stored only in this browser.
            </p>
          )}
        </section>
      )}

      {hasQuery && (
        <section className="mt-10" aria-live="polite" aria-label="Search results">
          <div className="mb-5 flex flex-wrap items-baseline justify-between gap-2">
            <h2 className="font-serif text-2xl font-semibold">
              {results.length} {results.length === 1 ? 'result' : 'results'} for “{query.trim()}”
            </h2>
            {category !== 'All' && <span className="chip">in {category}</span>}
          </div>

          {results.length > 0 ? (
            <ul className="grid gap-4 sm:grid-cols-2">
              {results.map((item) => (
                <li key={item.id}>
                  <Link href={item.href} className="card group flex h-full flex-col p-6 transition-all hover:-translate-y-0.5 hover:border-gold/60 hover:shadow-soft">
                    <div className="flex items-start justify-between gap-3">
                      <span className="chip border-gold/40 text-gold-dark dark:text-gold">{item.category}</span>
                      <ArrowRight size={16} className="text-gold-dark transition-transform group-hover:translate-x-1 dark:text-gold" />
                    </div>
                    <h3 className="mt-4 font-serif text-xl font-semibold leading-snug"><Highlight text={item.title} query={query} /></h3>
                    <p className="mt-2 flex-1 text-sm leading-6 text-[var(--text-muted)]"><Highlight text={item.description} query={query} /></p>
                    <span className="mt-4 break-all text-[11px] text-[var(--text-muted)]">{item.href}</span>
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <>
              <EmptyState
                title="No results found"
                description={`Nothing matched “${query.trim()}”${category === 'All' ? '' : ` in ${category}`}. Try a shorter word or a different category.`}
                href="/quizzes"
                action="Browse quizzes"
              />
              <div className="mt-5 flex flex-wrap items-center justify-center gap-2 text-sm">
                <span className="text-[var(--text-muted)]">Popular pages:</span>
                <Link href="/mass" className="link-gold">Mass guide</Link>
                <Link href="/rosary" className="link-gold">Rosary</Link>
                <Link href="/prayers" className="link-gold">Prayers</Link>
                <Link href="/faq" className="link-gold">FAQ</Link>
              </div>
            </>
          )}
        </section>
      )}
    </div>
  );
}

/**
 * The interactive FAQ browser lives in this client component module so that
 * the /faq page can remain a Server Component and still export its metadata.
 * Each question has its own anchor id, so links such as /faq#confess-to-priest
 * scroll to the right question and open it.
 */
export function FaqBrowser() {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('All');
  const [hash, setHash] = useState<string | null>(null);

  useEffect(() => {
    const updateHash = () => setHash(window.location.hash.replace(/^#/, '') || null);
    updateHash();
    window.addEventListener('hashchange', updateHash);
    return () => window.removeEventListener('hashchange', updateHash);
  }, []);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return faqs.filter((faq) => {
      if (category !== 'All' && faq.category !== category) return false;
      if (!q) return true;
      const haystack = `${faq.question} ${faq.answer.join(' ')} ${faq.category} ${faq.scripture || ''} ${faq.ccc || ''}`.toLowerCase();
      return haystack.includes(q);
    });
  }, [query, category]);

  const reset = () => { setQuery(''); setCategory('All'); };

  return (
    <div>
      <div className="card mb-8 p-5 sm:p-6">
        <label htmlFor="faq-search" className="label">Search the FAQ</label>
        <div className="relative">
          <Search size={18} className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-gold-dark dark:text-gold" />
          <input
            id="faq-search"
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search questions and answers"
            className="input pl-11"
            aria-describedby="faq-count"
          />
        </div>
        <div className="mt-5 flex flex-wrap gap-2" role="group" aria-label="Filter questions by category">
          {faqCategories.map((option) => (
            <button
              key={option}
              type="button"
              aria-pressed={category === option}
              onClick={() => setCategory(option)}
              className={`chip transition-colors ${category === option ? 'border-gold bg-gold/15 text-gold-dark dark:text-gold' : 'hover:border-gold'}`}
            >
              {option}
            </button>
          ))}
        </div>
        <p id="faq-count" role="status" className="mt-4 text-xs text-[var(--text-muted)]">
          Showing {filtered.length} of {faqs.length} questions{category === 'All' ? '' : ` in ${category}`}.
        </p>
      </div>

      {filtered.length > 0 ? (
        <div className="space-y-3">
          {filtered.map((faq) => {
            const openFromLink = hash === faq.id;
            return (
              <div key={faq.id} id={faq.id} className="scroll-mt-28">
                <Accordion
                  key={`${faq.id}-${openFromLink}`}
                  defaultOpen={openFromLink ? 0 : null}
                  items={[{
                    title: faq.question,
                    content: (
                      <>
                        {faq.answer.map((paragraph, index) => <p key={index}>{paragraph}</p>)}
                        {(faq.scripture || faq.ccc) && (
                          <p className="mt-4 border-t border-[var(--border)] pt-3 text-xs text-[var(--text-muted)]">
                            {faq.scripture && <>Scripture: {faq.scripture}</>}
                            {faq.scripture && faq.ccc && <> · </>}
                            {faq.ccc && <>{faq.ccc}</>}
                          </p>
                        )}
                      </>
                    ),
                  }]}
                />
              </div>
            );
          })}
        </div>
      ) : (
        <div className="card flex flex-col items-center px-6 py-14 text-center">
          <HelpCircle size={26} className="mb-4 text-gold-dark dark:text-gold" />
          <h3 className="font-serif text-2xl">No matching questions</h3>
          <p className="mt-2 max-w-md text-sm leading-6 text-[var(--text-muted)]">Try a different word, or choose “All” to see every question.</p>
          <button type="button" onClick={reset} className="btn-secondary mt-6">Reset filters</button>
        </div>
      )}
    </div>
  );
}
