# Catholic Companion

A beginner-friendly, independent Catholic educational website built with Next.js 14, React 18, TypeScript, Tailwind CSS, and Lucide icons.

## What is included

- Complete, responsive site shell with accessible navigation, light/dark reading mode, and a persistent footer disclaimer.
- Educational content for the Mass, Rosary, prayers, teachings, sacraments, saints, the liturgical calendar, daily life, Confession, and becoming Catholic.
- Interactive tools:
  - Mass simulator with separate Novus Ordo and 1962 Traditional Latin Mass walks.
  - Digital Rosary with correct bead sequence, all twenty mysteries, full prayer texts, clickable beads, and device speech narration.
  - Searchable prayer library with bookmarks.
  - Quizzes with immediate feedback, explanations, and saved best scores.
  - Examination of conscience that is local-only and never submits anything.
  - Church finder that sends users to official directories instead of inventing parish data.
  - Customizable daily prayer routine.
  - Search, glossary filters, and a personal “My Space” dashboard.
- Liturgical dates and seasons are calculated dynamically from the Easter algorithm; no year is hardcoded.
- User preferences and progress are stored only in the browser via `localStorage`.

## Routes

Public content pages:

`/`, `/beginners`, `/lessons`, `/mass`, `/rosary`, `/prayers`, `/teachings`, `/sacraments`, `/becoming-catholic`, `/confession`, `/saints`, `/calendar`, `/daily-life`, `/churches`, `/faq`, `/quizzes`, `/glossary`, `/about`, `/contact`, `/privacy`, `/terms`, `/sources`

Tools and account:

`/search`, `/account`

Dynamic detail routes:

`/lessons/[id]`, `/prayers/[id]`, `/teachings/[id]`, `/sacraments/[id]`, `/saints/[id]`, `/quizzes/[id]`

## Requirements

- Node.js 18.17+ (Node 20+ recommended) and npm.

This workspace includes a local Node runtime at `.tools/bin/node` because Node was not preinstalled. Prefix commands with:

```bash
export PATH="$PWD/.tools/bin:$PATH"
```

## Run locally

```bash
export PATH="$PWD/.tools/bin:$PATH"   # only needed in this workspace
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Production build:

```bash
export PATH="$PWD/.tools/bin:$PATH"
npm run build
npm start
```

Type check:

```bash
export PATH="$PWD/.tools/bin:$PATH"
npm run typecheck
```

## Environment variables

Copy `.env.example` to `.env.local` if you want the contact page to show a working email action:

```env
NEXT_PUBLIC_CONTACT_EMAIL=you@example.org
```

If the variable is unset, the contact page clearly states that no messaging service is configured and offers working alternatives instead of showing a fake form submission.

No API keys are required. The site deliberately avoids parsers or parish APIs that could produce unverified data.

## Architecture

- `src/app` — App Router pages and global styles.
- `src/components/layout` — header and footer.
- `src/components/ui` — shared presentational components.
- `src/components/features` — interactive clients such as the Mass simulator, Rosary, quizzes, search, and church finder.
- `src/components/providers/UserProvider.tsx` — typed `localStorage` state for bookmarks, saved lessons, quiz scores, recent views, daily goal, Rosary progress, learning path, and theme.
- `src/content` — curated educational data and vetted image references. Sources and credits are listed on `/sources`.
- `src/lib` — liturgical date calculations and the site search index.

## Content and accuracy

Content is primarily referenced to the Catechism of the Catholic Church, NABRE Scripture via USCCB, Vatican documents, and USCCB guidance. The site distinguishes dogma, doctrine, discipline, theological opinion, and private devotion, and notes where local custom varies. It is an independent educational resource, not an official Vatican or diocesan site, and does not replace pastoral guidance.

## Limitations

- No backend, accounts, or server-side user data. All personalization is browser-local.
- No parish database or real-time Mass-times API is bundled. The church finder links to official directories and tells users to confirm details with the parish.
- Rosary narration uses the browser’s built-in speech synthesis rather than recorded audio; voice quality and background playback vary by device and browser.
- Contact is only enabled when `NEXT_PUBLIC_CONTACT_EMAIL` is configured at build time.
- External links and Wikimedia-hosted images require an internet connection.
