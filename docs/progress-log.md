# Kohorts Progress Log

Newest entries appear at the top.

## 2026-11-25 — Piece 5c: Single-page marketing with conditional nav views

- **Feature ID:** Scaffold — Piece 5c (Owner-requested: keep only the home page and render Pricing/Testimonials/About/FAQ as conditional views; URL always stays at `/`)
- **Files added:** `src/components/marketing/nav.ts`, `src/components/marketing/views.tsx`, `src/components/marketing/views.module.css`
- **Files changed:** `src/app/page.tsx`, `src/app/page.module.css`, `src/components/marketing-header.tsx`, `src/components/marketing-header.module.css`, `src/app/llms.txt/route.ts`, `tests/e2e/marketing.spec.ts`, `docs/progress-log.md`
- **Files deleted:** `src/app/(marketing)/about/page.tsx`, `src/app/(marketing)/faq/page.tsx`, `src/app/(marketing)/pricing/page.tsx`, `src/app/(marketing)/testimonials/page.tsx`, `src/app/(marketing)/layout.tsx`, `src/app/(marketing)/marketing.module.css` (the whole `(marketing)` route group — flagged per AGENTS Boundary 2)
- **Commands and results:**
  - `pnpm typecheck` (`tsc --noEmit`): passed (0 errors) — required a rebuild first to clear stale `.next/types` from the deleted routes
  - `pnpm lint` (`eslint .`): passed (0 errors, 0 warnings)
  - `pnpm format:check` (`prettier --check .`): `All matched files use Prettier code style!`
  - `pnpm test` (`vitest run`): passed (`No test files found, exiting with code 0`)
  - `pnpm build` (`next build`): `Compiled successfully in 2.1s`, `Finished TypeScript in 6.2s`, static pages `(6/6)` — the only page route is `/`
  - `pnpm test:e2e` (`playwright test`): `20 passed (24.6s)` across `width-360`, `width-768`, `width-1024`, `width-1440`
- **Done when statements covered:**
  - Only the home page exists as a route; Pricing/Testimonials/About/FAQ render as conditional views inside `/`.
  - Nav items are now accessible buttons (active one marked `aria-current`); the logo returns to the home view; "Log in"/"Sign up" remain links.
  - The URL never changes: Playwright asserts `toHaveURL(/\/$/)` after every nav click.
  - The browser-tab title updates per active view (client-side `document.title`), preserving the dynamic-title requirement.
  - llms.txt rewritten to describe the single page and its sections.
- **Open issues:**
  - SEO trade-off (owner's explicit choice): the marketing sections are no longer individually crawlable URLs, so per-section titles/OG/links only exist in the client; only the root is indexed.
  - The layout `title.template` (`%s | Kohorts`) is now unused by marketing but remains available for future app pages (login, signup, dashboard).
- **Next piece proposed:** Piece 6 — Auth pages (`/login` and `/signup` screens only).

## 2026-11-25 — Piece 5b: Per-page dynamic titles (follow-up to Piece 5)

- **Feature ID:** Scaffold — Piece 5b (Owner-requested: make the `<head>` title change per page)
- **Files changed:** `src/app/(marketing)/pricing/page.tsx`, `src/app/(marketing)/testimonials/page.tsx`, `src/app/(marketing)/about/page.tsx`, `src/app/(marketing)/faq/page.tsx`, `tests/e2e/marketing.spec.ts`, `docs/progress-log.md`
- **Commands and results:**
  - `pnpm typecheck` (`tsc --noEmit`): passed (0 errors)
  - `pnpm lint` (`eslint .`): passed (0 errors, 0 warnings)
  - `pnpm format:check` (`prettier --check .`): `All matched files use Prettier code style!`
  - `pnpm test` (`vitest run`): passed (`No test files found, exiting with code 0`)
  - `pnpm build` (`next build`): `Compiled successfully in 857ms`, `Finished TypeScript in 7.7s`, static pages `(10/10)`
  - `pnpm test:e2e` (`playwright test`): `32 passed (46.8s)` across all 4 widths
- **Done when statements covered:**
  - Each marketing page now exports its own `title`, which the root `%s | Kohorts` template turns into a unique title: `/` → `Kohorts — Sell, run and certify paid cohorts in one place`, `/pricing` → `Pricing | Kohorts`, `/testimonials` → `Testimonials | Kohorts`, `/about` → `About | Kohorts`, `/faq` → `FAQ | Kohorts`.
  - Playwright now asserts `toHaveTitle` per route inside the existing marketing loop (so the dynamic title is verified at all 4 widths).
- **Open issues:**
  - Future app pages must still add their own `title` export to get a distinct title; the template is the mechanism, not automatic per-page copy.
- **Next piece proposed:** Piece 6 — Auth pages (`/login` and `/signup` screens only).

## 2026-11-25 — Piece 5: SEO and head metadata (scaffold)

- **Feature ID:** Scaffold — Piece 5 (Owner-requested SEO/head work; OpenGraph traces to PRD F5 "Pasting the link into WhatsApp shows a preview card")
- **Files changed:** `src/app/layout.tsx`, `src/app/icon.svg` (new), `src/app/opengraph-image.tsx` (new), `src/app/llms.txt/route.ts` (new), `.env.example`, `tests/e2e/marketing.spec.ts`, `docs/progress-log.md`
- **Files removed:** `src/app/favicon.ico` (the default Next.js icon, replaced by the brand mark — flagged per AGENTS Boundary 2)
- **Commands and results:**
  - `pnpm typecheck` (`tsc --noEmit`): passed (0 errors)
  - `pnpm lint` (`eslint .`): passed (0 errors, 0 warnings)
  - `pnpm format:check` (`prettier --check .`): `All matched files use Prettier code style!`
  - `pnpm test` (`vitest run`): passed (`No test files found, exiting with code 0`)
  - `pnpm build` (`next build`): `Compiled successfully in 5.5s`, `Finished TypeScript in 11.4s`, static pages `(10/10)` including `/icon.svg`, `/opengraph-image`, `/llms.txt`
  - `pnpm test:e2e` (`playwright test`): `32 passed (54.1s)` across `width-360`, `width-768`, `width-1024`, `width-1440`
- **Done when statements covered:**
  - Dynamic title via `title: { default, template: "%s | Kohorts" }` — homepage renders `Kohorts — Sell, run and certify paid cohorts in one place`, and child pages will pick up the `%s | Kohorts` suffix.
  - SEO: `description`, `keywords`, `canonical`, `robots` (index/follow), and `metadataBase` driven by `NEXT_PUBLIC_SITE_URL` (defaults to `http://localhost:3000`).
  - llms.txt: `/llms.txt` serves an LLM-readable Markdown file (H1 title, blockquote summary, `## Pages` links), per llmstxt.org.
  - OpenGraph: `og:title`, `og:description`, `og:site_name`, `og:type`, `og:image` (generated 1200×630 card from `opengraph-image.tsx`) plus a `twitter:card` of `summary_large_image`.
  - Favicon: on-brand black-on-white `K` mark served at `/icon.svg` (replaces the default Next.js icon).
  - Playwright asserts the `<title>`, favicon link, `og:*`/`twitter:card` tags, and `/llms.txt` response at all 4 PRD widths.
- **Open issues:**
  - Public domain is unconfirmed (PRD assumption A13). The owner must set `NEXT_PUBLIC_SITE_URL` in Vercel (and `.env.local`) once `kohorts.app` is purchased; until then canonical/OG/llms.txt URLs fall back to localhost.
  - The favicon and OG card use a generated placeholder `K` mark; swap `src/app/icon.svg` and `src/app/opengraph-image.tsx` when the real brand-guide logo (PRD 4.3, currently `[add link]`) is available.
  - Marketing pages do not yet export their own `title`, so the `%s | Kohorts` template is in place but unused until those pages are built out.
- **Next piece proposed:** Piece 6 — Auth pages (`/login` and `/signup` screens only, as previously planned).

## 2026-11-24 — Piece 4: Marketing pages (scaffold)

- **Feature ID:** Scaffold — Piece 4 (Owner-approved marketing pages `/pricing`, `/testimonials`, `/about`, `/faq`; PRD 1.1, 1.2, 2.1, 3.1, 4.1, 4.2, 5.3 D1/D5, F8, F9, F19, F20, F30, F31, F42, F44, F45)
- **Files changed:** `src/app/(marketing)/marketing.module.css`, `src/app/(marketing)/pricing/page.tsx`, `src/app/(marketing)/testimonials/page.tsx`, `src/app/(marketing)/about/page.tsx`, `src/app/(marketing)/faq/page.tsx`, `tests/e2e/marketing.spec.ts`, `docs/progress-log.md`
- **Commands and results:**
  - `pnpm typecheck` (`tsc --noEmit`): passed (0 errors)
  - `pnpm lint` (`eslint .`): passed (0 errors, 0 warnings)
  - `pnpm format:check` (`prettier --check .`): `All matched files use Prettier code style!`
  - `pnpm test` (`vitest run`): passed (`No test files found, exiting with code 0`)
  - `pnpm build` (`next build`): `Compiled successfully in 4.8s`, `Finished TypeScript in 11.6s`, static pages `(8/8)`
  - `pnpm test:e2e` (`playwright test`): `24 passed (1.1m)` across `width-360`, `width-768`, `width-1024`, `width-1440`
- **Done when statements covered:**
  - `/pricing` shows the 6.5% platform fee + separate VAT line (PRD 5.3 D1) and notes Flutterwave processing fees apply, with no other prices.
  - `/testimonials` shows 3 placeholder cards marked `"Placeholder: real tutor quote goes here"` with no invented names, quotes, photos, or results.
  - `/about` summarizes the problem and core bet strictly from PRD 1.1 and 1.2.
  - `/faq` renders an accessible native `<details>`/`<summary>` accordion with 6 PRD-backed questions (citations: Fee — PRD 5.3 D1, F9, F45; Payments — PRD F8, F9, 4.2; Recordings — PRD F19, F20, 3.1; Certificates — PRD F30, F31; Refunds — PRD F42, F44, 5.3 D5; Who it is for — PRD 2.1).
  - Playwright verifies all 5 marketing routes at all 4 widths (no horizontal scroll, keyboard navigation, zero axe violations).
- **Open issues:**
  - Header `"Log in"` and `"Sign up"` buttons will link to real screens in Piece 5.
  - `debug.log` from Chromium still sits in the repo root awaiting owner approval to delete (AGENTS Boundary 2).
- **Next piece proposed:** Piece 5 — Auth pages (`/login` and `/signup` screens only, email + 6-digit code steps, tutor consent checkbox on `/signup`, plain centred layout with `"Kohorts"` logo and no marketing header, plus `tests/e2e/auth.spec.ts`).

## 2026-11-24 — Piece 3: Marketing layout and homepage (scaffold)

- **Feature ID:** Scaffold — Piece 3 (Marketing header, layout, homepage hero; PRD 1.1, PRD 3.4 Screen 1, PRD 4.1 Accessibility & Responsiveness)
- **Files changed:** `src/components/marketing-header.tsx`, `src/components/marketing-header.module.css`, `src/app/page.tsx`, `src/app/page.module.css`, `src/app/(marketing)/layout.tsx`, `playwright.config.ts`, `tests/e2e/marketing.spec.ts`, `docs/progress-log.md`
- **Commands and results:**
  - `pnpm typecheck` (`tsc --noEmit`): passed (0 errors)
  - `pnpm lint` (`eslint .`): passed (0 errors, 0 warnings)
  - `pnpm format:check` (`prettier --check .`): `All matched files use Prettier code style!`
  - `pnpm test` (`vitest run`): passed (`No test files found, exiting with code 0`)
  - `pnpm build` (`next build`): `Compiled successfully in 2.8s`, `Finished TypeScript in 8.0s`, static pages `(4/4)`
  - `pnpm test:e2e` (`playwright test`): `4 passed (11.5s)` across `width-360`, `width-768`, `width-1024`, `width-1440`
- **Done when statements covered:**
  - Shared `MarketingHeader` displays `"Kohorts"` text logo (`/`), links to `/pricing`, `/testimonials`, `/about`, `/faq`, and `"Log in"` (outlined) + `"Sign up"` (black) buttons.
  - Below `768 px`, links and buttons sit behind a keyboard-accessible `"Menu"` / `"Close"` button with `aria-expanded`, `aria-controls`, and `Escape` close support.
  - Homepage `/` shows only the header and a full-viewport (`100vh`/`100svh`) hero section using PRD 1.1 Description and Core bet copy, plus a black `"Sign up"` CTA.
  - Starter `src/app/page.module.css` replaced so zero raw colour values exist outside `src/design-system/token.css`.
  - Playwright verifies no horizontal scroll, keyboard reach, and zero axe violations at all 4 PRD widths.
- **Open issues:**
  - Links in the header (`/pricing`, `/testimonials`, `/about`, `/faq`, `/login`, `/signup`) will resolve to real pages in Pieces 4 and 5.
- **Next piece proposed:** Piece 4 — Marketing pages (`/pricing`, `/testimonials`, `/about`, `/faq` inside `src/app/(marketing)/`, plus updating `tests/e2e/marketing.spec.ts`).

## 2026-11-24 — Piece 2b: Shared UI components (scaffold)

- **Feature ID:** Scaffold — Piece 2b (Design base: 3 shared components; PRD 4.1 Accessibility & Responsiveness)
- **Files changed:** `src/components/primitives.module.css`, `src/components/button.tsx`, `src/components/text-input.tsx`, `src/components/page-container.tsx`, `docs/progress-log.md`
- **Commands and results:**
  - `pnpm typecheck` (`tsc --noEmit`): passed (0 errors)
  - `pnpm lint` (`eslint .`): passed (0 errors, 0 warnings)
  - `pnpm format:check` (`prettier --check .`): `All matched files use Prettier code style!`
  - `pnpm test` (`vitest run`): passed (`No test files found, exiting with code 0`)
  - `pnpm build` (`next build`): `Compiled successfully in 672ms`, `Finished TypeScript in 6.0s`, static pages `(4/4)`
- **Done when statements covered:**
  - `Button` supports primary (black) and secondary (outlined) variants, optional `href` (Next.js `Link`), and minimum 44 px tap target.
  - `TextInput` renders a visible `<label>` linked via `htmlFor`, text error message with `aria-describedby`/`aria-invalid`, and minimum 44 px height.
  - `PageContainer` provides mobile-first (`360 px`) padding and wider (`768 px+`) layout rules.
  - All styles in `primitives.module.css` use only CSS variables from `src/design-system/token.css` (zero raw colour, font, spacing, or radius values).
- **Open issues:**
  - Default `src/app/page.module.css` from `create-next-app` still exists until Piece 3 replaces the homepage.
  - Playwright Chromium browser binaries will need to be downloaded before Piece 3 runs `pnpm test:e2e`.
- **Next piece proposed:** Piece 3 — Marketing layout and homepage (shared marketing header with responsive mobile menu, marketing route group layout, and full-viewport hero homepage `/` using PRD 1.1 copy + Playwright e2e test).

## 2026-11-24 — Piece 2a: Design tokens and global stylesheet (scaffold)

- **Feature ID:** Scaffold — Piece 2a (Design base split into 2a tokens + 2b components to respect the 5-file limit in AGENTS 5.2)
- **Files changed:** `src/design-system/token.css`, `src/app/globals.css`, `src/app/layout.tsx`, `docs/progress-log.md`
- **Commands and results:**
  - `pnpm typecheck` (`tsc --noEmit`): passed (0 errors)
  - `pnpm lint` (`eslint .`): passed (0 errors, 0 warnings)
  - `pnpm format:check` (`prettier --check .`): `All matched files use Prettier code style!`
  - `pnpm test` (`vitest run`): passed (`No test files found, exiting with code 0`)
  - `pnpm build` (`next build`): `Compiled successfully in 1355ms`, `Finished TypeScript in 10.3s`, static pages `(4/4)`
- **Done when statements covered:**
  - `src/design-system/token.css` holds all colour (`#000000`, `#ffffff`, `#595959`), system font stack, spacing, border, radius, and tap-target (`44px`) CSS variables.
  - `src/app/globals.css` uses only CSS variables from `token.css` (zero raw colour, font, or spacing values) and provides a visible keyboard focus ring.
  - `src/app/layout.tsx` loads `token.css` globally with no web fonts.
- **Open issues:**
  - Default `src/app/page.module.css` from `create-next-app` still exists until Piece 3 replaces the homepage.
- **Next piece proposed:** Piece 2b — Shared UI components (`src/components/primitives.module.css`, `src/components/button.tsx`, `src/components/text-input.tsx`, `src/components/page-container.tsx`) using only tokens from `token.css`, mobile-first from 360 px.

## 2026-11-24 — Piece 1: Project setup (scaffold)

- **Feature ID:** Scaffold — Piece 1 (Project setup; AGENTS 2.1, 2.2, 2.3)
- **Files changed:** `package.json`, `pnpm-lock.yaml`, `pnpm-workspace.yaml`, `tsconfig.json`, `next.config.ts`, `eslint.config.mjs`, `.gitignore`, `.env.example`, `.prettierrc`, `.prettierignore`, `vitest.config.ts`, `playwright.config.ts`, `src/app/layout.tsx`, `src/app/page.tsx`, `src/app/globals.css`, `src/app/page.module.css`, `public/*`, `README.md`, `docs/progress-log.md`
- **Commands and results:**
  - `pnpm typecheck` (`tsc --noEmit`): passed (0 errors)
  - `pnpm lint` (`eslint .`): passed (0 errors, 0 warnings)
  - `pnpm format:check` (`prettier --check .`): `All matched files use Prettier code style!`
  - `pnpm test` (`vitest run`): passed (`No test files found, exiting with code 0`)
  - `pnpm build` (`next build`): `Compiled successfully in 6.5s`, `Finished TypeScript in 7.7s`, static pages `(4/4)`
- **Done when statements covered:**
  - Next.js App Router + TypeScript strict mode + `src/` + ESLint + pnpm (no Tailwind) created.
  - Prettier, Vitest, Playwright, `@axe-core/playwright`, and Prisma 7 (`prisma`, `@prisma/client`, `@prisma/adapter-pg`, `pg`, `@types/pg`, `dotenv`) installed and pinned to exact versions.
  - All AGENTS 2.2 scripts added to `package.json`.
  - `.env.example` created with `DATABASE_URL=` (empty) and `.env.local` ignored via `.gitignore` (with `!.env.example`).
  - Scaffold folders (`src/components`, `src/lib`, `src/design-system`, `tests/e2e`, `prisma`) and `docs/progress-log.md` created.
- **Open issues:**
  - Local Node is `v26.13.0`; Prisma `7.10.1` prints a preinstall advisory recommending Node `20.19+`, `22.12+`, or `24.0+`. Will confirm `prisma validate` and `prisma generate` work cleanly in Piece 7.
  - Playwright Chromium browser binaries have not been downloaded yet (needed before Piece 3 `pnpm test:e2e`).
- **Next piece proposed:** Piece 2 — Design base (`src/design-system/token.css` with black/white/one-grey CSS variables, system font stack, and 3 shared components in `src/components/`: Button, TextInput, PageContainer).
