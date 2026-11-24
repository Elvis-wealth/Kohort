---
name: screens-and-tests
description: Use when building or changing any screen, form or component, and when writing unit or end-to-end tests for a feature's Done when statements, screen widths or accessibility. Keywords: screen, page, form, component, layout, design system, mobile, 360 px, responsive, accessibility, WCAG, label, focus, Vitest, Playwright, test, done when, fixture, fake data. Paths: src/app/, src/components/, UI files in src/features/, tests/e2e/, every *.test.ts file.
---

Load when: the task touches a PRD 3.4 screen, adds a component, or writes a test.
Skip when: the task changes only server logic that another skill's checklist already tests.

## Purpose
Build screens that match the design system and the PRD, and prove each Done when statement with a test.

## Before you start
1. Find the screen in PRD 3.4 and the matching design in the PRD 4.3 design files.
2. Read PRD 4.1 Accessibility and Responsiveness.
3. Run accessibility scans with @axe-core/playwright (AGENTS 2.1). Any other test library: ask first (AGENTS Boundary 2).

## Steps: building a screen
1. Start from the 360 px layout, then add rules for wider screens.
2. Use only design system components and tokens. If one is missing, stop and ask; do not create a lookalike.
3. Render on the server by default. Make a component client-side only when it needs browser state or events.
4. Every form field gets a visible label, a text error message and the right input type (email, tel, number).
5. Every action shows a loading state and disables its button until the server answers.
6. Load data through the access check (auth-and-roles); never pass hidden fields to the browser.
7. If the PRD 1.3 measurement events list names this action, send that event to PostHog.

## Steps: writing tests
1. Pure logic goes in a Vitest unit test next to the code. Anything a user clicks or sees goes in a Playwright test.
2. Build fake data with factory functions in one test helpers folder. Never use real names, emails or phone numbers.
3. Run each Playwright test at all widths in PRD 4.1 Responsiveness, using one project per width in the Playwright config.
4. For every screen test, assert: no horizontal scroll, keyboard reaches every control, each input has a label, and an axe scan finds no violations.
5. Timing statements ("within 10 seconds"): use an assertion with that timeout. Never use fixed waits.
6. Statements a test cannot prove (email inbox, Lighthouse speed): write them as a manual check in the report with the steps you followed.

## Never
- Mark a test as skipped or delete it to get a green run.
- Test against a live payment, email or AI service.

## Done checklist
- [ ] Playwright passes at every PRD width for each screen touched.
- [ ] Each screen test asserts no horizontal scroll, keyboard reach, input labels and zero axe violations.
- [ ] No fixed waits in tests (search the diff for `waitForTimeout`).
- [ ] Test data comes only from the factory functions.
- [ ] Each PRD 1.3 event this screen triggers is sent (unit test with a fake PostHog client).

## Example
F13 statement: "A learner with 2 cohorts sees 2 cards".
Factory: `makeLearner({ cohorts: 2 })`.
Playwright test "F13 shows 2 cohort cards" runs at 4 widths and checks no horizontal scroll.
