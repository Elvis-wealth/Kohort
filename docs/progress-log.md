# Kohorts Progress Log

Newest entries appear at the top.

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
