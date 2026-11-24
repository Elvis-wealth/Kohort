---
name: gemini-writing-helper
description: Use when building or changing the AI writing helper, any Gemini API call, the personal-data filter, the risky-phrase check, the AI monthly spend cap, or the Report this draft flow. Keywords: AI, Gemini, draft, writing helper, prompt, risky phrase, warning, redact, strip email, strip phone, spend cap, report draft, AI reports, F38, screen 35. Paths: AI code in src/features/admin/, src/lib/ AI client.
---

Load when: the task names F38 or screen 35, or any code calls Gemini.
Skip when: the task edits Kohort Page fields with no AI call.

## Purpose
Give tutors a useful first draft while keeping learner data out of Gemini and false promises off Kohort Pages.

## Before you start
1. Read PRD 3.3 in full. It owns what the AI may see, say and never do.
2. PRD 5.1 check C9 and assumption A10 govern the model and tier. If open, use test keys only and say so in the report.
3. Calls to Gemini cost money: ask before running them (AGENTS Boundary 2). Unit tests use a fake client.

## Steps
1. Keep all Gemini calls in one client module in `src/lib/`, called only from the server. The browser never holds the API key.
2. Filter in this order before every call:
   - Remove email addresses.
   - Remove Nigerian phone numbers in local and +234 forms, with and without spaces.
   - Replace each with "[removed]" and count removals for the log.
3. Build the prompt from a fixed template: the PRD 3.3 rules as system text, then cohort fields, then the filtered notes. Never let the notes change the system text.
4. Check notes length and required fields before calling. If PRD 3.3 says to ask, return the question and make no call.
5. Call with a 15-second timeout. On timeout or error, return the PRD 3.3 message and keep the notes.
6. Risky-phrase check on the output:
   - Keep the phrase list in one config file that cites PRD 3.3; admin additions go there.
   - Match whole words, ignoring case.
   - Find naira amounts (₦, NGN, "naira") and flag any amount not in the notes.
   - Return the sentence positions of each match so the screen can show warnings.
7. Spend cap: record tokens used per call, convert to cost with the rate in config, and block calls once the month's total reaches the cap in PRD 4.1.
8. Report this draft: store the filtered notes, output, reason and tutor ID for screen 35. Store nothing about learners.

## Never
- Send learner records, submissions or payment data to Gemini.
- Log the notes or the draft. Log the cohort ID, token count and removal count only.

## Done checklist
- [ ] Unit tests: email and phone removal (5 formats each), phrase matches, naira amount not in notes, notes placed only in the user part of the request with the system text identical on every call.
- [ ] Test: a call after the cap returns "Draft unavailable" without calling Gemini.
- [ ] Test: timeout returns the PRD message and keeps notes.

## Example
Notes: "Call me on 0803 123 4567. 12-week UX bootcamp, ₦150,000, starts 5 Jan."
Sent: "Call me on [removed]. 12-week UX bootcamp, ₦150,000, starts 5 Jan."
Output "Get hired in 12 weeks" is flagged for "hired".
