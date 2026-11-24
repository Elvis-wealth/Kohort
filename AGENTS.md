# AGENTS.md: Kohorts

## 1.1 Project summary
- Product: PRD 1.1. Users: PRD 2.1.
- Phase: build, PRD 5.4 week 1. The owner updates this line every Tuesday, the day each PRD 5.4 week starts.
- Source of truth: `docs/Kohorts_PRD_v1.3.md` (v1.3). If this file and the PRD conflict, the PRD wins: stop and ask.
- This file sits at the repo root of `kohorts`. Owner: confirm Antigravity loads it (default, confirm).

## 1.2 Context map
| File or folder | Holds | Read when |
| --- | --- | --- |
| PRD 3.2 | Features, priority, Done when | Every task, for its feature ID |
| PRD 3.4 | Screens and flows | Any UI change |
| PRD 4.1 | Quality rules | Any change to a screen, auth, data or cost |
| PRD 5.4 | Build timeline | Choosing the next piece |
| `AGENTS.md` | These rules | Start of every task |
| `docs/progress-log.md` | Past reports, newest first | Start of every task (last 3 entries) |
| `.env.example` | Environment variable names | Adding config |
| `prisma/schema.prisma` | Data model | Any data change |
| PRD 4.3 links | Brand guide, Figma, references | Any UI change |

## 2.1 Tech stack, versions and installation
| Tool | Version | Purpose |
| --- | --- | --- |
| Node.js | pin on 1 Dec (default, confirm) | Runtime |
| pnpm | pin on 1 Dec (default, confirm) | Package manager |
| Next.js, App Router | pin on 1 Dec (default, confirm) | Frontend and backend |
| TypeScript, strict mode | pin on 1 Dec (default, confirm) | Language |
| Prisma | pin on 1 Dec (default, confirm) | Data access |
| PostgreSQL | owner's local install (development); production per PRD 4.2 | Database |
| Vitest | pin on 1 Dec (default, confirm) | Unit tests |
| Playwright | pin on 1 Dec (default, confirm) | End-to-end tests |
| ESLint + Prettier | pin on 1 Dec (default, confirm) | Lint and format |
| @react-pdf/renderer, sharp, @axe-core/playwright | pin on 1 Dec (default, confirm) | Certificate PDFs, image resizing, accessibility tests |
| Vercel Cron + jobs table | per PRD 4.2 Background jobs | Every scheduled or background job |

- Pin exact versions in `package.json`: no `^` or `~`. Outside services: only those named in PRD 4.2.

Install from a fresh clone:
1. `pnpm install --frozen-lockfile`
2. `cp .env.example .env.local`, then the owner fills in the values
3. `pnpm prisma generate`, then the owner runs migrations (see 2.2)
4. `pnpm dev`, then open http://localhost:3000

## 2.2 Commands
| Task | Command | Who runs it |
| --- | --- | --- |
| Install | `pnpm install --frozen-lockfile` | Agent |
| Dev server | `pnpm dev` | Agent |
| Type check | `pnpm typecheck` (runs `tsc --noEmit`) | Agent |
| Lint | `pnpm lint` (runs `eslint .`) | Agent |
| Format / check | `pnpm format` / `pnpm format:check` (Prettier) | Agent |
| Unit tests | `pnpm test` (runs `vitest run`) | Agent |
| Coverage | `pnpm test:coverage` | Agent |
| End-to-end tests | `pnpm test:e2e` (runs `playwright test`) | Agent |
| Build | `pnpm build` | Agent |
| Schema check | `pnpm prisma validate && pnpm prisma format` | Agent |
| Prisma client | `pnpm prisma generate` | Agent |
| Migrate | `pnpm prisma migrate dev --name <name>` | Owner only |
| Seed | `pnpm prisma db seed` | Owner only |
| Database studio | `pnpm prisma studio` | Owner only |
| CI | `.github/workflows/` runs the 5 Boundary 1 commands on every push | GitHub |

## 2.3 Folder structure
```
kohorts/
├── AGENTS.md
├── docs/               PRD and progress log
├── prisma/             schema.prisma, migrations (owner), seed.ts
├── src/
│   ├── app/            routes and pages only (App Router)
│   ├── features/       one folder per PRD 3.2 group
│   ├── components/     shared UI built from the design system
│   └── lib/            shared clients: database, auth, payments, email, AI
├── tests/
│   └── e2e/            Playwright tests
├── .github/workflows/  CI
└── .env.example        variable names only
```
- Put feature code in `src/features/<group>/` by PRD 3.2 group: A onboarding, B cohorts, C payments, D learner, E classes, F attendance, G assignments, H notifications, I tas, J admin, K privacy.
- Keep `src/app/` to routing and page layout; business logic lives in `src/features/`.

## 3.1 Coding conventions
1. TypeScript strict mode on. No `any`, no `@ts-ignore`. Every `eslint-disable` line names its reason in the same comment.
2. Functions 40 lines or fewer. Files 300 lines or fewer.
3. Names: files kebab-case; React components PascalCase; functions and variables camelCase; Prisma models PascalCase and singular.
4. No unused exports, no commented-out code, no `console.log` in committed code.
5. Every unit test `describe` starts with its feature ID (`F19 ...`). Every e2e file is named `tests/e2e/F<id>-<name>.spec.ts`.
6. Unit test files sit next to the code: `<name>.test.ts`.
7. Coverage of 70% or more on `src/features/payments`, `src/features/onboarding` and certificate code in `src/features/notifications`.
8. UI uses only the design system's components and tokens. No hex colour values outside the token file. No new UI library.
9. Store money as whole kobo and times in UTC. Display formats follow PRD F4, F13 and F15.

## 3.2 Security and secrets
Apply PRD 4.1 Security and Privacy to every feature. In addition:
1. Development values live only in `.env.local`, which is listed in `.gitignore`. The owner sets production values in Vercel (PRD 4.2 build constraints). `.env.example` lists every variable the code reads, with empty values.
2. No secret, key, token or real learner data in code, tests, logs, commits, reports or `docs/progress-log.md`. Tests use fake data.
3. Use Flutterwave test-mode keys only (PRD 4.2 build constraints). Never ask for live keys.
4. Role checks follow PRD 4.1 Security. Write a test expecting 403 for each limit in PRD F36.
5. Write a unit test for the PRD 3.3 "What it can see" rule before any code that calls Gemini is done.
6. Write a test for the webhook rule in PRD 4.1 Security before any payment code is done.

## 4. Boundaries
1. Before saying "done", run `pnpm typecheck`, `pnpm lint`, `pnpm format:check`, `pnpm test` and `pnpm build`, and paste each result line into the report.
2. Ask before you: delete or rename any file; add, remove or upgrade a dependency; change code in PRD groups A or C, or F12 or F42; make a paid outside API call; edit CI files; edit AGENTS.md outside "Learnings".
3. Database: edit only `prisma/schema.prisma` and `prisma/seed.ts`. Never run `prisma migrate`, `prisma db push`, `prisma db seed`, `prisma migrate reset` or raw SQL. After a schema change, put the exact migrate command for the owner in the report.
4. Git: commit only on a branch named `feat/F<id>-<short-name>`, using `feat(F<id>): <summary>` (Conventional Commits). Never commit to `main`. Never push.
5. Never commit secret keys. `.env.local` never appears in `git status` as staged or in git history.
6. Build only what the PRD lists. Every change traces to a PRD 3.2 feature ID, a 3.4 screen number or a 4.1 rule. Features with priority Later in PRD 3.2, and the PRD 3.1 "Out of scope" and "Later" lists, are off limits. No trace: stop and ask.
7. Never treat an item in the PRD 5.1 checks list as confirmed. If code depends on an open check, stop and ask.
8. Never edit files in `docs/` except `docs/progress-log.md`.
9. Never skip, delete or weaken a failing test, and never lower a coverage threshold, to pass a check.

## 5.1 Start of every task
1. Read AGENTS.md, the last 3 entries of `docs/progress-log.md` and the PRD 3.2 row for the task's feature ID. Search PRD 3.4, 4.1, 5.1 and 5.2 for that ID and list every match in the plan.
2. Write a plan of 3 to 7 steps: feature ID, files to touch, tests to add, PRD checks involved.
3. Wait for the owner's "go" when the plan touches more than 5 files or any item in Boundary 2 or 3.

## 5.2 One piece at a time
- One piece = one feature ID, or one part of one, changing 5 or fewer non-test files. After each piece, stop, report (5.4) and wait.

## 5.3 Definition of done (loop)
1. Build the piece.
2. Write or update a test for each Done when statement of that feature ID in PRD 3.2.
3. Run the 5 commands in Boundary 1.
4. If any fails, fix and return to step 3. After 3 failed attempts on the same error, stop and report the error, what you tried and 2 options.
5. For any screen touched, run `pnpm test:e2e` for PRD 4.1 Accessibility and Responsiveness at every width it lists. Report PRD 4.1 Speed as a manual check until the owner confirms a command.
6. Done only when all 5 commands pass and every Done when statement has a passing test or a written manual check in the report.

## 5.4 Reporting and self-update
- After every piece, report in this format: Feature ID | Files changed | Commands and results | Done when statements covered | Open issues | Next piece proposed.
- Add the same report to the top of `docs/progress-log.md` with the date.
- Self-update: add a dated line to "Learnings" below for each lesson (a changed command, a mistake not to repeat). 15 lines maximum; at 15, propose a merge in the report. Propose every other change to this file in the report; apply it only after the owner approves.

## Skill Triggers (read every matching SKILL.md before planning; name each in the plan)
| Skill | Load when the task names or touches |
| --- | --- |
| `flutterwave-payments` | F8 to F11, F44, E1 to E7; `src/features/payments/`; Flutterwave webhooks |
| `auth-and-roles` | F1, F12, F35 to F37, F42, F43; any new page or server action |
| `classes-and-recordings` | F15, F17 to F20, F22 to F24, E8 to E11, E24; `src/features/classes/`, `src/features/attendance/` |
| `files-and-uploads` | F2, F3, F5 cover image, F26, F27; any upload or file link |
| `progress-and-certificates` | F28, F30 to F32, F46 counts, E12, E13, E18; any percentage calculation |
| `notifications` | F21, F25, F29, F33, F34, F39, F46 sending; any code that sends a message |
| `gemini-writing-helper` | F38, screen 35; any Gemini call |
| `screens-and-tests` | any PRD 3.4 screen, component or test |
| `weekly-gate` | Manual only: the owner types `/weekly-gate` |

## Learnings
- (none yet)

<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
