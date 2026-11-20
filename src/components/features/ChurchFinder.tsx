'use client';

import { useState, type FormEvent } from 'react';
import { CheckCircle2, Church, ExternalLink, Globe, Info, MapPin, Phone, ShieldCheck } from 'lucide-react';
import { CheckListItem } from '@/components/ui';

/**
 * A search *helper*, not a parish database. It never fabricates results:
 * the only output is a set of links built from the user's own text plus
 * practical advice to confirm details with the parish or diocese.
 */
export function ChurchFinder() {
  const [query, setQuery] = useState('');
  const [submitted, setSubmitted] = useState<string | null>(null);
  const [error, setError] = useState('');

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const value = query.trim();
    if (!value) {
      setError('Please enter a city, postal code, or parish name before continuing.');
      setSubmitted(null);
      return;
    }
    setError('');
    setSubmitted(value);
  };

  const mapsUrl = submitted
    ? `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${submitted} Catholic church`)}`
    : '';

  return (
    <div className="card overflow-hidden">
      <div className="border-b border-[var(--border)] bg-[var(--surface)] p-6 sm:p-8">
        <p className="eyebrow mb-2">Search helper</p>
        <h2 className="font-serif text-3xl font-semibold sm:text-4xl">Where are you looking?</h2>
        <p className="mt-3 max-w-2xl text-sm leading-7 text-[var(--text-muted)]">
          Enter a city, ZIP or postal code, or a parish name. We will give you an official directory and a map search — never a fabricated list of churches.
        </p>

        <form onSubmit={handleSubmit} className="mt-6" noValidate>
          <label htmlFor="church-query" className="label">City, postal code, or parish name</label>
          <div className="flex flex-col gap-3 sm:flex-row">
            <input
              id="church-query"
              name="church-query"
              type="text"
              value={query}
              onChange={(event) => {
                setQuery(event.target.value);
                if (error) setError('');
              }}
              placeholder="e.g. Springfield, 62704, or St Mary"
              aria-invalid={Boolean(error)}
              aria-describedby={error ? 'church-error' : 'church-hint'}
              className="input flex-1"
              autoComplete="off"
            />
            <button type="submit" className="btn-primary shrink-0"><MapPin size={16} /> Show next steps</button>
          </div>
          {error && <p id="church-error" role="alert" className="mt-2 text-sm font-medium text-burgundy dark:text-red-300">{error}</p>}
          <p id="church-hint" className="mt-2 text-xs leading-5 text-[var(--text-muted)]">
            Your text is used only in this browser to build the links below. Nothing is submitted to a server.
          </p>
        </form>
      </div>

      {submitted ? (
        <div className="p-6 sm:p-8">
          <div className="mb-7 flex items-start gap-3 rounded-sm border border-gold/40 bg-gold/10 p-4">
            <CheckCircle2 size={20} className="mt-0.5 shrink-0 text-gold-dark dark:text-gold" />
            <div>
              <p className="font-semibold">Next steps for “{submitted}”</p>
              <p className="mt-1 text-sm leading-6 text-[var(--text-muted)]">
                These links will help you find real parishes. Confirm every detail with the parish itself before you travel.
              </p>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <a
              href="https://www.usccb.org/mass-times"
              target="_blank"
              rel="noopener noreferrer"
              className="card group flex h-full flex-col p-6 transition-all hover:-translate-y-0.5 hover:border-gold/60 hover:shadow-soft"
            >
              <ShieldCheck size={22} className="text-gold-dark dark:text-gold" />
              <h3 className="mt-4 font-serif text-2xl font-semibold">Official USCCB Mass Times</h3>
              <p className="mt-2 flex-1 text-sm leading-7 text-[var(--text-muted)]">
                For the United States, the U.S. Conference of Catholic Bishops maintains a Mass Times directory. It is the most trustworthy national starting point. Enter “{submitted}” there to search its listings.
              </p>
              <span className="mt-5 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-gold-dark dark:text-gold">
                Open USCCB Mass Times <ExternalLink size={13} />
              </span>
            </a>

            <a
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="card group flex h-full flex-col p-6 transition-all hover:-translate-y-0.5 hover:border-gold/60 hover:shadow-soft"
            >
              <MapPin size={22} className="text-gold-dark dark:text-gold" />
              <h3 className="mt-4 font-serif text-2xl font-semibold">Search Google Maps</h3>
              <p className="mt-2 flex-1 text-sm leading-7 text-[var(--text-muted)]">
                Opens a new tab with a map search for “{submitted} Catholic church.” Map listings are useful for locations and directions, but their hours can be stale — verify them with the parish.
              </p>
              <span className="mt-5 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-gold-dark dark:text-gold">
                Open map search <ExternalLink size={13} />
              </span>
            </a>
          </div>

          <div className="mt-8 grid gap-8 md:grid-cols-2">
            <div>
              <h3 className="flex items-center gap-2 font-serif text-xl font-semibold"><Phone size={17} className="text-gold-dark dark:text-gold" /> Confirm with the parish</h3>
              <ul className="mt-3 space-y-2.5">
                <CheckListItem>Open the parish website or bulletin for the current schedule.</CheckListItem>
                <CheckListItem>Call the parish office to confirm Mass times and any holiday changes.</CheckListItem>
                <CheckListItem>If you are not yet Catholic, ask who coordinates OCIA / RCIA.</CheckListItem>
                <CheckListItem>For Eastern Catholic parishes, check the eparchy or archeparchy directory as well.</CheckListItem>
              </ul>
              <p className="mt-4 text-sm leading-7 text-[var(--text-muted)]">
                Outside the United States, use your national bishops’ conference or local diocesan directory; the USCCB directory does not cover those regions.
              </p>
            </div>

            <div>
              <h3 className="flex items-center gap-2 font-serif text-xl font-semibold"><Church size={17} className="text-gold-dark dark:text-gold" /> What to verify</h3>
              <ul className="mt-3 space-y-2.5">
                <CheckListItem>Mass times, including weekdays and Holy Days</CheckListItem>
                <CheckListItem>Confession times or appointment availability</CheckListItem>
                <CheckListItem>OCIA contact and faith formation programmes</CheckListItem>
                <CheckListItem>Accessibility: entry, seating, restrooms, parking</CheckListItem>
                <CheckListItem>Languages spoken or liturgies offered</CheckListItem>
              </ul>
              <p className="mt-4 flex items-start gap-2 text-xs leading-5 text-[var(--text-muted)]"><Globe size={14} className="mt-0.5 shrink-0 text-gold-dark dark:text-gold" />Local customs vary by parish, diocese, and country. When in doubt, ask.</p>
            </div>
          </div>

          <p className="mt-8 flex items-start gap-2 border-t border-[var(--border)] pt-5 text-xs leading-5 text-[var(--text-muted)]">
            <Info size={14} className="mt-0.5 shrink-0 text-gold-dark dark:text-gold" />
            We do not display search results and make no claim that any parish matches your text. The links above lead to third-party services whose information you should verify independently.
          </p>
        </div>
      ) : (
        <div className="p-6 sm:p-8">
          <div className="grid gap-4 sm:grid-cols-3">
            <div className="card p-5"><ShieldCheck size={19} className="text-gold-dark dark:text-gold" /><h3 className="mt-3 font-serif text-lg font-semibold">Official directory</h3><p className="mt-1 text-sm leading-6 text-[var(--text-muted)]">Start with the USCCB for U.S. parishes.</p></div>
            <div className="card p-5"><MapPin size={19} className="text-gold-dark dark:text-gold" /><h3 className="mt-3 font-serif text-lg font-semibold">Map search</h3><p className="mt-1 text-sm leading-6 text-[var(--text-muted)]">See locations and directions near you.</p></div>
            <div className="card p-5"><Phone size={19} className="text-gold-dark dark:text-gold" /><h3 className="mt-3 font-serif text-lg font-semibold">Confirm locally</h3><p className="mt-1 text-sm leading-6 text-[var(--text-muted)]">The parish is the final word on details.</p></div>
          </div>
        </div>
      )}
    </div>
  );
}
