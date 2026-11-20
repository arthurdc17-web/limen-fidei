'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import {
  ArrowRight, BookOpen, CheckCircle2, Clock, Download, GraduationCap,
  Heart, Moon, RotateCcw, ShieldCheck, Sun, Trash2, Trophy, UserRound, X,
} from 'lucide-react';
import { useUser } from '@/components/providers/UserProvider';
import { BookmarkButton, Callout, CheckListItem, EmptyState, ProgressBar, SectionTitle, Tabs } from '@/components/ui';
import { searchIndex } from '@/lib/search';
import { quizzes } from '@/content/quizzes';
import type { SearchItem } from '@/content/types';

const rosarySets = ['Joyful', 'Sorrowful', 'Glorious', 'Luminous'] as const;

/** Content ids can be stored with or without their search-index prefix. */
function resolveItem(id: string): SearchItem | null {
  const prefixes = ['lesson', 'quiz', 'prayer', 'saint', 'teaching', 'sacrament', 'faq', 'mystery'];
  return searchIndex.find((item) => item.id === id)
    || prefixes.map((prefix) => searchIndex.find((item) => item.id === `${prefix}-${id}`)).find(Boolean)
    || searchIndex.find((item) => item.href === `/${id}`)
    || null;
}

export function AccountDashboard() {
  const {
    bookmarks, savedLessons, quizScores, recent, dailyGoalMinutes,
    rosaryProgress, learningPath, theme, toggleSavedLesson,
    toggleLearningPath, toggleTheme, clearRecent, setDailyGoalMinutes,
    setRosaryProgress, resetUserData,
  } = useUser();
  const [activeTab, setActiveTab] = useState('saved');
  const [exported, setExported] = useState(false);

  const bookmarked = useMemo(
    () => bookmarks.map((id) => ({ id, item: resolveItem(id) })),
    [bookmarks],
  );
  const lessons = useMemo(
    () => savedLessons.map((id) => ({ id, item: resolveItem(id) })),
    [savedLessons],
  );
  const path = useMemo(
    () => learningPath.map((id) => ({ id, item: resolveItem(id) })),
    [learningPath],
  );
  const scores = useMemo(
    () => Object.entries(quizScores)
      .map(([id, score]) => {
        const quiz = quizzes.find((entry) => entry.id === id);
        return {
          id,
          score,
          total: quiz?.questions.length ?? 0,
          title: quiz?.title || resolveItem(id)?.title || id,
        };
      })
      .sort((a, b) => b.score - a.score),
    [quizScores],
  );
  const recentItems = useMemo(
    () => recent.map((item) => ({ ...item, item: resolveItem(item.id) })),
    [recent],
  );

  const exerciseCount = scores.reduce((total, entry) => total + entry.total, 0);

  const exportData = () => {
    const payload = {
      app: 'Catholic Companion',
      version: 1,
      exportedAt: new Date().toISOString(),
      bookmarks,
      savedLessons,
      quizScores,
      recent,
      dailyGoalMinutes,
      rosaryProgress,
      learningPath,
      theme,
    };
    const blob = new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement('a');
    anchor.href = url;
    anchor.download = 'catholic-companion-data.json';
    document.body.appendChild(anchor);
    anchor.click();
    anchor.remove();
    URL.revokeObjectURL(url);
    setExported(true);
  };

  const handleReset = () => {
    const confirmed = window.confirm(
      'Reset all saved data in this browser? This clears your bookmarks, saved lessons, quiz scores, recent views, learning path, Rosary progress, and daily goal. This cannot be undone.',
    );
    if (confirmed) {
      resetUserData();
      setExported(false);
    }
  };

  return (
    <div className="space-y-10">
      <Callout title="Everything stays in this browser" tone="green">
        <p>
          There is no account or sign-in on this site. Your bookmarks, saved lessons, quiz scores, recent views, learning path, Rosary progress, and settings live only in this browser’s <code className="rounded bg-[var(--bg-alt)] px-1.5 py-0.5 text-xs">localStorage</code>. They are <strong>never sent to a server</strong>.
        </p>
        <ul className="mt-4 grid gap-2 sm:grid-cols-2">
          <CheckListItem>Clearing your browser data removes everything here.</CheckListItem>
          <CheckListItem>Use “Export data” to keep a personal JSON copy.</CheckListItem>
          <CheckListItem>Data does not sync between devices or browsers.</CheckListItem>
          <CheckListItem>We cannot recover data you delete.</CheckListItem>
        </ul>
      </Callout>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <div className="card p-5"><Heart size={19} className="text-gold-dark dark:text-gold" /><p className="mt-3 font-serif text-3xl font-semibold">{bookmarks.length}</p><p className="text-xs uppercase tracking-wider text-[var(--text-muted)]">Bookmarks</p></div>
        <div className="card p-5"><BookOpen size={19} className="text-gold-dark dark:text-gold" /><p className="mt-3 font-serif text-3xl font-semibold">{savedLessons.length}</p><p className="text-xs uppercase tracking-wider text-[var(--text-muted)]">Saved lessons</p></div>
        <div className="card p-5"><Trophy size={19} className="text-gold-dark dark:text-gold" /><p className="mt-3 font-serif text-3xl font-semibold">{scores.length}</p><p className="text-xs uppercase tracking-wider text-[var(--text-muted)]">Quizzes taken</p></div>
        <div className="card p-5"><GraduationCap size={19} className="text-gold-dark dark:text-gold" /><p className="mt-3 font-serif text-3xl font-semibold">{exerciseCount}</p><p className="text-xs uppercase tracking-wider text-[var(--text-muted)]">Questions answered</p></div>
      </div>

      <div>
        <SectionTitle eyebrow="Your dashboard" title="Manage your data" description="Choose a section below. Everything is stored locally and can be exported or removed at any time." />
        <Tabs
          active={activeTab}
          onChange={setActiveTab}
          tabs={[
            { id: 'saved', label: 'Saved items' },
            { id: 'progress', label: 'Progress' },
            { id: 'activity', label: 'Recent activity' },
            { id: 'settings', label: 'Settings & data' },
          ]}
        />

        <div className="mt-8" role="tabpanel" aria-label={activeTab}>
          {activeTab === 'saved' && (
            <div className="space-y-10">
              <section aria-labelledby="bookmarks-heading">
                <h3 id="bookmarks-heading" className="font-serif text-2xl font-semibold">Bookmarks</h3>
                {bookmarked.length === 0 ? (
                  <div className="mt-4"><EmptyState title="No bookmarks yet" description="Use the Save button on a prayer, saint, teaching, or guide and it will appear here." href="/" action="Explore the site" /></div>
                ) : (
                  <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                    {bookmarked.map(({ id, item }) => (
                      <li key={id} className="card flex flex-wrap items-center justify-between gap-3 p-4">
                        <div className="min-w-0 flex-1">
                          {item ? (
                            <Link href={item.href} className="font-medium hover:text-gold-dark dark:hover:text-gold">{item.title}</Link>
                          ) : <span className="font-medium">{id}</span>}
                          {item && <p className="mt-0.5 text-[11px] uppercase tracking-wider text-[var(--text-muted)]">{item.category}</p>}
                        </div>
                        <BookmarkButton id={id} title={item?.title || id} />
                      </li>
                    ))}
                  </ul>
                )}
              </section>

              <section aria-labelledby="lessons-heading">
                <h3 id="lessons-heading" className="font-serif text-2xl font-semibold">Saved lessons</h3>
                {lessons.length === 0 ? (
                  <p className="card mt-4 p-6 text-sm leading-7 text-[var(--text-muted)]">No lessons saved. Save a lesson from the beginner guides to revisit it here.</p>
                ) : (
                  <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                    {lessons.map(({ id, item }) => (
                      <li key={id} className="card flex items-center justify-between gap-3 p-4">
                        <div className="min-w-0 flex-1">
                          <Link href={item?.href || `/lessons/${id}`} className="font-medium hover:text-gold-dark dark:hover:text-gold">{item?.title || id}</Link>
                          <p className="mt-0.5 text-[11px] text-[var(--text-muted)]">Beginner guide</p>
                        </div>
                        <button type="button" onClick={() => toggleSavedLesson(id)} aria-label={`Remove ${item?.title || id} from saved lessons`} className="btn-ghost px-2 text-xs"><X size={15} /></button>
                      </li>
                    ))}
                  </ul>
                )}
              </section>

              <section aria-labelledby="path-heading">
                <h3 id="path-heading" className="font-serif text-2xl font-semibold">Learning path</h3>
                <p className="mt-1 text-sm leading-7 text-[var(--text-muted)]">Topics you have added to your personal study plan.</p>
                {path.length === 0 ? (
                  <p className="card mt-4 p-6 text-sm leading-7 text-[var(--text-muted)]">Your learning path is empty. Add lessons or topics from their detail pages.</p>
                ) : (
                  <ol className="mt-4 space-y-2">
                    {path.map(({ id, item }, index) => (
                      <li key={id} className="card flex items-center gap-3 p-4">
                        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-gold/40 text-xs font-semibold text-gold-dark dark:text-gold">{index + 1}</span>
                        <div className="min-w-0 flex-1">
                          {item
                            ? <Link href={item.href} className="font-medium hover:text-gold-dark dark:hover:text-gold">{item.title}</Link>
                            : <span className="font-medium">{id}</span>}
                        </div>
                        <button type="button" onClick={() => toggleLearningPath(id)} aria-label={`Remove ${item?.title || id} from learning path`} className="btn-ghost px-2 text-xs"><X size={15} /></button>
                      </li>
                    ))}
                  </ol>
                )}
              </section>
            </div>
          )}

          {activeTab === 'progress' && (
            <div className="space-y-10">
              <section aria-labelledby="quiz-heading">
                <h3 id="quiz-heading" className="font-serif text-2xl font-semibold">Quiz scores</h3>
                {scores.length === 0 ? (
                  <p className="card mt-4 p-6 text-sm leading-7 text-[var(--text-muted)]">You have not taken a quiz yet. <Link href="/quizzes" className="link-gold inline-flex items-center gap-1">Browse quizzes <ArrowRight size={12} /></Link></p>
                ) : (
                  <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                    {scores.map((entry) => {
                      const pct = entry.total > 0 ? Math.round((entry.score / entry.total) * 100) : 0;
                      return (
                        <li key={entry.id} className="card p-5">
                          <div className="flex items-start justify-between gap-3">
                            <Link href={`/quizzes/${entry.id}`} className="font-serif text-lg font-semibold hover:text-gold-dark dark:hover:text-gold">{entry.title}</Link>
                            <span className="chip border-gold/40 text-gold-dark dark:text-gold"><Trophy size={12} /> {entry.score}/{entry.total || '—'}</span>
                          </div>
                          <div className="mt-4"><ProgressBar value={pct} label="Best score" /></div>
                        </li>
                      );
                    })}
                  </ul>
                )}
              </section>

              <section aria-labelledby="rosary-heading">
                <h3 id="rosary-heading" className="font-serif text-2xl font-semibold">Rosary progress</h3>
                <p className="mt-1 text-sm leading-7 text-[var(--text-muted)]">Track which decade of each mystery set you are on. This is a personal reminder, not a requirement.</p>
                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  {rosarySets.map((set) => {
                    const step = rosaryProgress[set] ?? 0;
                    const value = Math.max(0, Math.min(100, Math.round((step / 5) * 100)));
                    return (
                      <div key={set} className="card p-5">
                        <div className="flex items-center justify-between gap-3">
                          <h4 className="font-serif text-xl font-semibold">{set} Mysteries</h4>
                          <span className="chip">{step} / 5</span>
                        </div>
                        <div className="mt-4"><ProgressBar value={value} label="Decades completed" /></div>
                        <div className="mt-4 flex flex-wrap gap-2">
                          <button type="button" onClick={() => setRosaryProgress(set, Math.max(0, step - 1))} disabled={step <= 0} className="btn-ghost btn-sm border border-[var(--border)]" aria-label={`Decrease ${set} mysteries progress`}>−</button>
                          <button type="button" onClick={() => setRosaryProgress(set, Math.min(5, step + 1))} disabled={step >= 5} className="btn-ghost btn-sm border border-[var(--border)]" aria-label={`Increase ${set} mysteries progress`}>+</button>
                          <button type="button" onClick={() => setRosaryProgress(set, 0)} disabled={step === 0} className="btn-ghost btn-sm border border-[var(--border)]"><RotateCcw size={13} /> Reset</button>
                          <Link href={`/rosary#mysteries`} className="btn-ghost btn-sm">Read the mysteries <ArrowRight size={13} /></Link>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </section>
            </div>
          )}

          {activeTab === 'activity' && (
            <section aria-labelledby="recent-heading">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <h3 id="recent-heading" className="font-serif text-2xl font-semibold">Recently viewed</h3>
                {recentItems.length > 0 && (
                  <button type="button" onClick={clearRecent} className="btn-ghost text-xs"><Trash2 size={14} /> Clear recent</button>
                )}
              </div>
              {recentItems.length === 0 ? (
                <p className="card mt-4 p-6 text-sm leading-7 text-[var(--text-muted)]">Nothing here yet. Pages you open will be listed here so you can return to them quickly.</p>
              ) : (
                <ul className="mt-4 space-y-2">
                  {recentItems.map((entry) => (
                    <li key={`${entry.id}-${entry.at}`} className="card flex flex-wrap items-center justify-between gap-3 p-4">
                      <div className="min-w-0 flex-1">
                        <Link href={entry.item?.href || `/${entry.id}`} className="font-medium hover:text-gold-dark dark:hover:text-gold">{entry.title}</Link>
                        <p className="mt-0.5 flex items-center gap-1.5 text-[11px] text-[var(--text-muted)]"><Clock size={11} /> Viewed {new Date(entry.at).toISOString().slice(0, 10)}</p>
                      </div>
                      {entry.item && <span className="chip">{entry.item.category}</span>}
                    </li>
                  ))}
                </ul>
              )}
            </section>
          )}

          {activeTab === 'settings' && (
            <div className="space-y-6">
              <section className="card p-6" aria-labelledby="goal-heading">
                <h3 id="goal-heading" className="font-serif text-2xl font-semibold">Daily learning goal</h3>
                <p className="mt-2 text-sm leading-7 text-[var(--text-muted)]">Set a gentle target for how many minutes a day you would like to spend learning. This is a reminder for you, not a timer.</p>
                <div className="mt-5 flex flex-wrap items-center gap-4">
                  <input
                    type="range"
                    min={5}
                    max={120}
                    step={5}
                    value={dailyGoalMinutes}
                    onChange={(event) => setDailyGoalMinutes(Number(event.target.value))}
                    aria-label="Daily learning goal in minutes"
                    className="w-full max-w-sm accent-gold sm:w-80"
                  />
                  <output className="chip border-gold/40 text-gold-dark dark:text-gold">{dailyGoalMinutes} minutes</output>
                </div>
              </section>

              <section className="card p-6" aria-labelledby="theme-heading">
                <h3 id="theme-heading" className="font-serif text-2xl font-semibold">Appearance</h3>
                <p className="mt-2 text-sm leading-7 text-[var(--text-muted)]">Choose the theme you find most comfortable to read.</p>
                <button type="button" onClick={toggleTheme} className="btn-secondary mt-5" aria-label={theme === 'light' ? 'Switch to dark theme' : 'Switch to light theme'}>
                  {theme === 'light' ? <Moon size={16} /> : <Sun size={16} />}
                  {theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
                </button>
              </section>

              <section className="card p-6" aria-labelledby="data-heading">
                <h3 id="data-heading" className="font-serif text-2xl font-semibold">Your data</h3>
                <p className="mt-2 text-sm leading-7 text-[var(--text-muted)]">
                  Export a copy of everything stored in this browser, or remove all of it. Exporting downloads a plain JSON file to your device; it is not uploaded anywhere.
                </p>
                <div className="mt-5 flex flex-wrap gap-3">
                  <button type="button" onClick={exportData} className="btn-primary"><Download size={16} /> Export data as JSON</button>
                  <button type="button" onClick={handleReset} className="btn-secondary border-burgundy/50 text-burgundy hover:bg-burgundy/5 dark:text-red-300"><Trash2 size={16} /> Reset all data</button>
                </div>
                {exported && <p className="mt-4 flex items-center gap-2 text-sm text-forest-light dark:text-gold"><CheckCircle2 size={16} /> Your export has been downloaded.</p>}
                <p className="mt-5 flex items-start gap-2 text-xs leading-5 text-[var(--text-muted)]"><ShieldCheck size={14} className="mt-0.5 shrink-0 text-gold-dark dark:text-gold" />Resetting clears local data only. It cannot affect any other device or browser, and we have no copy to restore.</p>
              </section>

              <section className="card p-6" aria-labelledby="about-data-heading">
                <h3 id="about-data-heading" className="flex items-center gap-2 font-serif text-2xl font-semibold"><UserRound size={20} className="text-gold-dark dark:text-gold" /> About this dashboard</h3>
                <p className="mt-2 text-sm leading-7 text-[var(--text-muted)]">There is no account, password, or server-side profile. This dashboard simply reads the values stored in your browser. If you use another browser or device, it will start empty.</p>
                <Link href="/sources" className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-gold-dark dark:text-gold">Read our privacy note on sources <ArrowRight size={14} /></Link>
              </section>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
