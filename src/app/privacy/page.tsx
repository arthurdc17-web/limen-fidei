import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Info, Lock, ShieldCheck } from 'lucide-react';
import { Breadcrumbs, Callout, CheckListItem, PageHero, SectionTitle } from '@/components/ui';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'What Catholic Companion stores in your browser, which third-party resources it loads, and how to clear your data.',
};

export default function PrivacyPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: 'Privacy Policy' }]} />

      <PageHero
        eyebrow="Your data"
        title="Privacy Policy"
        description="A short, plain account of what this website does with information on your device. We keep preferences in your browser, require no account, and do not run a user-data service."
      />

      <div className="container-narrow py-14">
        <Callout title="The short version" tone="green">
          <p>
            Catholic Companion stores your preferences locally in your browser so the site can remember your bookmarks, progress, and reading mode. We do not ask you to sign in, we do not keep a server-side profile for you, and this site does not use analytics or advertising trackers. You can clear everything from the <Link href="/account" className="link-gold">My Space</Link> page or through your browser settings.
          </p>
        </Callout>
      </div>

      <section className="bg-[var(--bg-alt)] py-14">
        <div className="container-narrow">
          <SectionTitle eyebrow="Local storage" title="What is stored on your device" description="All of the items below are kept in your browser’s local storage under a single key, catholic-companion-v1. They are used only to make the site remember your choices." />
          <div className="card overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[520px] text-left text-sm">
                <thead className="border-b border-[var(--border)] bg-[var(--surface)] text-xs uppercase tracking-wider text-[var(--text-muted)]">
                  <tr>
                    <th scope="col" className="px-5 py-3 font-semibold">Stored item</th>
                    <th scope="col" className="px-5 py-3 font-semibold">Purpose</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[var(--border)]">
                  {[
                    ['Bookmarks', 'The pages you have saved for quick access.'],
                    ['Saved lessons', 'Beginner’s guide lessons you have marked to return to.'],
                    ['Quiz scores', 'Your most recent score for each quiz.'],
                    ['Recently viewed', 'A short list of recent pages, kept on this device only.'],
                    ['Daily goal', 'The reading-time goal you set in My Space.'],
                    ['Rosary progress', 'The step you reached in each set of mysteries.'],
                    ['Learning path', 'The sections you have added to your own path.'],
                    ['Reading mode', 'Whether you have chosen light or dark mode.'],
                  ].map(([name, purpose]) => (
                    <tr key={name}>
                      <th scope="row" className="px-5 py-3 font-medium text-[var(--text)]">{name}</th>
                      <td className="px-5 py-3 text-[var(--text-muted)]">{purpose}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <p className="mt-4 text-sm leading-7 text-[var(--text-muted)]">
            If local storage is unavailable or blocked, the site still works; your choices simply will not persist between visits.
          </p>
        </div>
      </section>

      <section className="container-narrow py-14">
        <SectionTitle eyebrow="What we do not do" title="No accounts, no tracking" description="These are deliberate design choices, not settings you have to switch off." />
        <ul className="grid gap-3 sm:grid-cols-2">
          <CheckListItem>No account, sign-in, or password is required to use the site.</CheckListItem>
          <CheckListItem>No server-side user profile is created or maintained for your activity.</CheckListItem>
          <CheckListItem>No analytics, usage measurement, or advertising trackers are included in this site.</CheckListItem>
          <CheckListItem>No contact form on this site submits or stores your message.</CheckListItem>
          <CheckListItem>No payment or financial information is requested anywhere.</CheckListItem>
          <CheckListItem>No email address is collected unless you choose to send one yourself using your own email app.</CheckListItem>
        </ul>
      </section>

      <section className="bg-[var(--surface)] py-14">
        <div className="container-narrow">
          <SectionTitle eyebrow="Third parties" title="Resources loaded from elsewhere" description="A few parts of the site fetch material from other providers. Those providers may see standard browser request information, such as your IP address, under their own privacy policies." />
          <div className="space-y-4">
            <div className="card p-6">
              <h3 className="font-serif text-xl font-semibold">Google Fonts</h3>
              <p className="mt-2 text-sm leading-7 text-[var(--text-muted)]">The serif and sans-serif typefaces are loaded from Google Fonts when a page is opened. This is a font request; you can block it in your browser if you prefer.</p>
            </div>
            <div className="card p-6">
              <h3 className="font-serif text-xl font-semibold">Wikimedia Commons</h3>
              <p className="mt-2 text-sm leading-7 text-[var(--text-muted)]">Photographs are served from Wikimedia Commons rather than bundled with the site. Credits, file names, and licence pages are listed on our <Link href="/sources" className="link-gold">sources page</Link>.</p>
            </div>
            <div className="card p-6">
              <h3 className="font-serif text-xl font-semibold">External links</h3>
              <p className="mt-2 text-sm leading-7 text-[var(--text-muted)]">Links to Scripture, Vatican, and bishops’ conference resources take you to independent websites. Once you follow them, their privacy policies apply, not this one.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="container-narrow py-14">
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <Lock size={22} className="text-gold-dark dark:text-gold" aria-hidden="true" />
            <h2 className="mt-4 font-serif text-2xl font-semibold">Voice narration stays on your device</h2>
            <p className="mt-3 text-sm leading-7 text-[var(--text-muted)]">Where a guide can read text aloud, it uses your browser’s built-in speech synthesis. The words are spoken locally by your device or browser voice. No audio is recorded, uploaded, or sent to a speech service by this site. Which voices are available depends on your browser and operating system.</p>
          </div>
          <div>
            <Info size={22} className="text-gold-dark dark:text-gold" aria-hidden="true" />
            <h2 className="mt-4 font-serif text-2xl font-semibold">Contact email, if configured</h2>
            <p className="mt-3 text-sm leading-7 text-[var(--text-muted)]">If the site operator has configured a contact address for this deployment, you can open it in your own email application. Nothing is posted to this site by doing so. If no address is configured, no messaging service exists. See the <Link href="/contact" className="link-gold">contact page</Link> for details.</p>
          </div>
        </div>
      </section>

      <section className="bg-[var(--bg-alt)] py-14">
        <div className="container-narrow">
          <SectionTitle eyebrow="Choices" title="Children and removing your data" />
          <div className="space-y-6 prose-faith max-w-prose">
            <div>
              <h3>Children’s privacy</h3>
              <p>This is a general educational resource and does not ask for names, ages, or contact details. We do not knowingly collect personal information from children. Young people are welcome to read and learn, but should use the site with a parent or guardian and should not send personal information by email.</p>
            </div>
            <div>
              <h3>Deleting what the site remembers</h3>
              <p>Open <Link href="/account" className="link-gold">My Space</Link> and use the reset option to clear bookmarks, saved lessons, quiz scores, recent pages, goals, progress, and your learning path from this browser. You can also clear this site’s storage through your browser’s site-data settings. Because there is no account, there is no additional server-side copy to request or delete.</p>
            </div>
            <div>
              <h3>Changes to this policy</h3>
              <p>If this site changes in a way that affects your data, this page will be updated. The current version applies to the site as it is published now.</p>
            </div>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/account" className="btn-primary">Manage your data <ArrowRight size={15} /></Link>
            <Link href="/terms" className="btn-secondary">Terms of Use</Link>
          </div>
        </div>
      </section>

      <div className="container-narrow py-10">
        <p className="flex items-start gap-2 text-xs leading-6 text-[var(--text-muted)]">
          <ShieldCheck size={15} className="mt-0.5 shrink-0 text-gold-dark dark:text-gold" aria-hidden="true" />
          Questions about the content behind this site? See <Link href="/sources" className="link-gold">Sources and References</Link>.
        </p>
      </div>
    </>
  );
}
