---
name: weekly-gate
description: Use when the owner types /weekly-gate (Manual skill) to check whether the current build week meets its PRD 5.4 gate. Keywords: weekly gate, week check, build week, milestone, timeline, progress review. Paths: docs/progress-log.md (append only), AGENTS.md phase line (read only).
---

Load when: the owner types /weekly-gate. This is a manual skill.
Skip when: any other request, including a normal task in the same week.

## Purpose
Give the owner a yes or no answer on whether this week's PRD 5.4 gate is met, with evidence.

## Rules for this skill
- Read and report only. Do not write or change product code, tests or config.
- Do not mark a feature done that has no passing evidence.

## Steps
1. Work out the week from today's date and the PRD 5.4 dates. If it differs from the phase line in AGENTS 1.1, show both and ask the owner which to use.
2. Read that week's row in PRD 5.4: features, tasks and gate.
3. For each feature ID in the row:
   - Find its latest report in `docs/progress-log.md`.
   - Mark it Done only if that report shows all 5 AGENTS Boundary 1 commands passing and every Done when statement covered.
   - Otherwise mark it Not done and quote the open issue from the report.
4. Run the 5 AGENTS Boundary 1 commands and `pnpm test:e2e` once on the current branch. Record each pass or fail line.
5. For each owner task in the row (checks, setup, commitments), ask the owner whether it is done and record the answer. With no answer, mark it Unknown. Do not guess.
6. Decide the gate:
   - PASS: every feature Done, every command passing, the gate condition met.
   - FAIL: anything else. List each blocker.
7. Add the result to the top of `docs/progress-log.md` in the format below, then show it to the owner.

## Report format
```
## Week <n> gate: PASS or FAIL (<date>)
Features: <ID> Done | <ID> Not done: <open issue>
Commands: typecheck <pass/fail>, lint, format:check, test, build, test:e2e
Owner tasks: <task> Done | Unknown
Gate condition: <quote from PRD 5.4> Met or Not met
Blockers: <numbered list, or None>
Next: <first blocker to clear, or the next week's first feature>
```

## Done checklist
- [ ] Every feature in the PRD 5.4 row appears in the report.
- [ ] Every Done mark points to a progress log entry with passing commands.
- [ ] Command results come from this run, not from earlier reports.
- [ ] No file other than `docs/progress-log.md` changed (check `git status`).

## Example
Week 2 row: F4, F5, F6, F7, F39, F47. Gate: a test tutor publishes a Kohort Page.
Result: FAIL. F47 Not done ("help email not set"). Commands all pass. Blocker 1: F47.
