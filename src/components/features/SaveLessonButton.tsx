'use client';

import { Bookmark, Check } from 'lucide-react';
import { useUser } from '@/components/providers/UserProvider';

/** Saves a lesson to the reader's local "My Space" list. */
export function SaveLessonButton({ id, title }: { id: string; title: string }) {
  const { savedLessons, toggleSavedLesson } = useUser();
  const saved = savedLessons.includes(id);

  return (
    <button
      type="button"
      onClick={() => toggleSavedLesson(id)}
      aria-pressed={saved}
      aria-label={saved ? `Remove ${title} from saved lessons` : `Save ${title} to your lessons`}
      className={`inline-flex items-center gap-2 rounded-sm border px-3 py-2 text-xs font-semibold transition-colors ${
        saved
          ? 'border-gold bg-gold/15 text-gold-dark dark:text-gold'
          : 'border-ivory/40 text-ivory hover:border-gold hover:text-gold'
      }`}
    >
      {saved ? <Check size={14} /> : <Bookmark size={14} />}
      {saved ? 'Saved lesson' : 'Save lesson'}
    </button>
  );
}
