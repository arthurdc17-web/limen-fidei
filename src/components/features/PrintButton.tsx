'use client';

import { Printer } from 'lucide-react';

/** Small client-only control that opens the browser print dialog. */
export function PrintButton({ label = 'Print' }: { label?: string }) {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      aria-label={`${label} this page`}
      className="inline-flex items-center gap-2 rounded-sm border border-ivory/40 px-3 py-2 text-xs font-semibold text-ivory transition-colors hover:border-gold hover:text-gold"
    >
      <Printer size={14} />
      {label}
    </button>
  );
}
