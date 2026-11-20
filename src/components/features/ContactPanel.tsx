'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Check, Copy, ExternalLink, FileText, Mail, ShieldCheck } from 'lucide-react';
import { Tabs } from '@/components/ui';

type CopyStatus = 'idle' | 'copied' | 'error';

/** Legacy path for browsers where the asynchronous Clipboard API is unavailable or blocked. */
function copyWithFallback(text: string): boolean {
  const previousFocus = document.activeElement as HTMLElement | null;
  const selection = window.getSelection();
  const savedRange = selection && selection.rangeCount > 0 ? selection.getRangeAt(0).cloneRange() : null;

  const helper = document.createElement('textarea');
  helper.value = text;
  helper.setAttribute('readonly', '');
  helper.setAttribute('aria-hidden', 'true');
  helper.style.position = 'fixed';
  helper.style.top = '0';
  helper.style.left = '-9999px';
  document.body.appendChild(helper);
  helper.select();

  let succeeded = false;
  try {
    succeeded = document.execCommand('copy');
  } catch {
    succeeded = false;
  }

  document.body.removeChild(helper);
  if (previousFocus && typeof previousFocus.focus === 'function') previousFocus.focus();
  if (selection && savedRange) {
    selection.removeAllRanges();
    selection.addRange(savedRange);
  }
  return succeeded;
}

async function writeToClipboard(text: string): Promise<boolean> {
  if (typeof navigator !== 'undefined' && navigator.clipboard && typeof navigator.clipboard.writeText === 'function') {
    try {
      await navigator.clipboard.writeText(text);
      return true;
    } catch {
      // The API can be denied by permissions or an insecure context; use the fallback.
    }
  }
  if (typeof document === 'undefined') return false;
  return copyWithFallback(text);
}

export function ContactPanel({ contactEmail = '' }: { contactEmail?: string }) {
  const [draft, setDraft] = useState('');
  const [status, setStatus] = useState<CopyStatus>('idle');
  const [action, setAction] = useState('copy');
  const email = contactEmail.trim();
  const hasEmail = email.length > 0;
  const canCopy = draft.trim().length > 0;

  function updateDraft(value: string) {
    setDraft(value);
    if (status !== 'idle') setStatus('idle');
  }

  async function handleCopy() {
    if (!canCopy) return;
    const succeeded = await writeToClipboard(draft.trim());
    setStatus(succeeded ? 'copied' : 'error');
  }

  function copyAction() {
    return (
      <div className="pt-6">
        <div className="flex flex-wrap items-center gap-3">
          <button type="button" onClick={handleCopy} disabled={!canCopy} className="btn-primary">
            {status === 'copied' ? <Check size={16} aria-hidden="true" /> : <Copy size={16} aria-hidden="true" />}
            {status === 'copied' ? 'Copied to clipboard' : 'Copy message to clipboard'}
          </button>
          {!canCopy && <span className="text-xs text-[var(--text-muted)]">Write a message above to enable copying.</span>}
        </div>
        <p role="status" aria-live="polite" className="mt-3 min-h-[1.5rem] text-sm leading-6 text-[var(--text-muted)]">
          {status === 'copied'
            ? 'Copied. You can now paste the text into your own email or notes app.'
            : status === 'error'
              ? 'Your browser blocked automatic copying. Select the text above and copy it manually.'
              : ''}
        </p>
      </div>
    );
  }

  return (
    <div className="card overflow-hidden">
      <div className="flex items-start gap-3 border-b border-[var(--border)] bg-[var(--bg-alt)] px-6 py-5 sm:px-8">
        <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-gold/40 text-gold-dark dark:text-gold">
          <FileText size={17} aria-hidden="true" />
        </span>
        <div>
          <h2 className="font-serif text-2xl font-semibold">Draft your message</h2>
          <p className="mt-1 text-sm leading-7 text-[var(--text-muted)]">Write first, then decide what to do with the text. This page never sends a message on your behalf.</p>
        </div>
      </div>

      <div className="p-6 sm:p-8">
        <label htmlFor="contact-message" className="label">Your message</label>
        <textarea
          id="contact-message"
          value={draft}
          onChange={(event) => updateDraft(event.target.value)}
          placeholder="Write your question or feedback here…"
          aria-describedby="contact-message-help"
          className="input min-h-[190px] resize-y leading-7"
        />
        <p id="contact-message-help" className="mt-2 text-xs leading-6 text-[var(--text-muted)]">
          {draft.trim().length} characters. Your draft stays in this browser tab; it is not stored or transmitted by this site.
        </p>

        {hasEmail ? (
          <>
            <div className="mt-8 border-b border-[var(--border)]">
              <Tabs
                tabs={[
                  { id: 'copy', label: 'Copy your message' },
                  { id: 'email', label: 'Open your email app' },
                ]}
                active={action}
                onChange={(id) => {
                  setAction(id);
                  setStatus('idle');
                }}
              />
            </div>
            <div role="tabpanel" aria-label={action === 'copy' ? 'Copy your message' : 'Open your email app'}>
              {action === 'copy' ? (
                copyAction()
              ) : (
                <div className="pt-6">
                  <a
                    href={`mailto:${email}?subject=${encodeURIComponent('Catholic Companion — question or feedback')}&body=${encodeURIComponent(draft.trim())}`}
                    className="btn-primary"
                  >
                    <Mail size={16} aria-hidden="true" /> Open in your email app <ExternalLink size={14} aria-hidden="true" />
                  </a>
                  <p className="mt-3 text-sm leading-7 text-[var(--text-muted)]">
                    This opens your device’s default email app with the address filled in and your draft in the body. Sending is entirely up to you, and it happens in your email app, not on this site.
                  </p>
                </div>
              )}
            </div>
          </>
        ) : (
          copyAction()
        )}

        <div className="mt-9 border-t border-[var(--border)] pt-6">
          <div className="flex items-start gap-3">
            <ShieldCheck size={20} className="mt-0.5 shrink-0 text-gold-dark dark:text-gold" aria-hidden="true" />
            <div>
              <h3 className="font-serif text-lg font-semibold">Please leave out sensitive information</h3>
              <p className="mt-2 text-sm leading-7 text-[var(--text-muted)]">
                Do not include confessions, details of sins, or sensitive personal data such as health, financial, or identity information. This site does not provide pastoral advice: for personal guidance, speak with your parish priest. If you are in immediate danger, contact local emergency services.
              </p>
            </div>
          </div>
          <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-sm">
            <Link href="/faq" className="link-gold inline-flex items-center gap-1.5">Browse frequently asked questions <ArrowRight size={13} aria-hidden="true" /></Link>
            <Link href="/sources" className="link-gold inline-flex items-center gap-1.5">Review our sources <ArrowRight size={13} aria-hidden="true" /></Link>
          </div>
        </div>
      </div>
    </div>
  );
}
