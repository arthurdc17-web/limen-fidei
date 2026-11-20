'use client';

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';

interface RecentItem { id: string; title: string; at: number }

interface UserState {
  bookmarks: string[];
  savedLessons: string[];
  quizScores: Record<string, number>;
  recent: RecentItem[];
  dailyGoalMinutes: number;
  rosaryProgress: Record<string, number>;
  learningPath: string[];
  theme: 'light' | 'dark';
}

const defaultState: UserState = {
  bookmarks: [],
  savedLessons: [],
  quizScores: {},
  recent: [],
  dailyGoalMinutes: 15,
  rosaryProgress: {},
  learningPath: [],
  theme: 'light',
};

const STORAGE_KEY = 'catholic-companion-v1';

interface UserContextValue extends UserState {
  toggleBookmark: (id: string) => void;
  toggleSavedLesson: (id: string) => void;
  setQuizScore: (id: string, score: number) => void;
  addRecent: (id: string, title: string) => void;
  setDailyGoalMinutes: (n: number) => void;
  setRosaryProgress: (set: string, step: number) => void;
  toggleLearningPath: (id: string) => void;
  toggleTheme: () => void;
  clearRecent: () => void;
  resetUserData: () => void;
}

const UserContext = createContext<UserContextValue | null>(null);

export function UserProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState<UserState>(defaultState);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) setState({ ...defaultState, ...JSON.parse(raw) });
    } catch { /* ignore malformed local data */ }
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); } catch { /* storage may be unavailable */ }
    document.documentElement.classList.toggle('dark', state.theme === 'dark');
  }, [state, hydrated]);

  const toggle = useCallback((key: 'bookmarks' | 'savedLessons' | 'learningPath', id: string) => {
    setState((s) => ({
      ...s,
      [key]: s[key].includes(id) ? s[key].filter((x) => x !== id) : [...s[key], id],
    }));
  }, []);

  const value = useMemo<UserContextValue>(() => ({
    ...state,
    toggleBookmark: (id) => toggle('bookmarks', id),
    toggleSavedLesson: (id) => toggle('savedLessons', id),
    toggleLearningPath: (id) => toggle('learningPath', id),
    setQuizScore: (id, score) => setState((s) => ({ ...s, quizScores: { ...s.quizScores, [id]: score } })),
    addRecent: (id, title) => setState((s) => ({ ...s, recent: [{ id, title, at: Date.now() }, ...s.recent.filter((r) => r.id !== id)].slice(0, 8) })),
    setDailyGoalMinutes: (n) => setState((s) => ({ ...s, dailyGoalMinutes: n })),
    setRosaryProgress: (set, step) => setState((s) => ({ ...s, rosaryProgress: { ...s.rosaryProgress, [set]: step } })),
    toggleTheme: () => setState((s) => ({ ...s, theme: s.theme === 'light' ? 'dark' : 'light' })),
    clearRecent: () => setState((s) => ({ ...s, recent: [] })),
    resetUserData: () => setState({ ...defaultState, theme: state.theme }),
  }), [state, toggle]);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

export function useUser() {
  const ctx = useContext(UserContext);
  if (!ctx) throw new Error('useUser must be used within UserProvider');
  return ctx;
}
