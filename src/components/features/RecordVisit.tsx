'use client';

import { useEffect, useRef } from 'react';
import { useUser } from '@/components/providers/UserProvider';

/**
 * Adds a visited page to the reader's local recent list. Renders nothing.
 * The short delay lets UserProvider finish restoring localStorage first.
 */
export function RecordVisit({ id, title }: { id: string; title: string }) {
  const { addRecent } = useUser();
  const addRecentRef = useRef(addRecent);
  addRecentRef.current = addRecent;

  useEffect(() => {
    const timer = window.setTimeout(() => addRecentRef.current(id, title), 0);
    return () => window.clearTimeout(timer);
  }, [id, title]);

  return null;
}
