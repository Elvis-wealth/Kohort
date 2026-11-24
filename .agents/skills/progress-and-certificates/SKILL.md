---
name: progress-and-certificates
description: Use when calculating attendance %, assignments %, the 70% thresholds, learner progress cards, review backlog alerts, certificate PDFs, late certificates or the public certificate verification page. Keywords: progress, attendance %, assignments %, threshold, qualify, near threshold, backlog, certificate, PDF, verify, verification, F28, F30, F31, F32, F46, E12, E13, E18. Paths: progress code in src/features/assignments/ and src/features/attendance/, certificate code in src/features/notifications/.
---

Load when: the task names F28, F30, F31, F32, F46 (the counts only; notifications sends the alert), E12, E13 or E18, or changes how a percentage is calculated.
Skip when: the task only records a Join click or a review (use classes-and-recordings or screens-and-tests).

## Purpose
Calculate each learner's standing the same way everywhere, and issue certificates anyone can trust.

## Before you start
1. Also read the PRD 3.2 terms (Attendance %, Assignments %) and PRD 5.2 E12, E13 and E18.
2. Certificate code is covered by the coverage rule in AGENTS 3.1.

## Steps
1. One calculation module
   - Write pure functions: `attendancePercent`, `assignmentsPercent`, `qualifies`. No database calls inside them.
   - Every screen, alert and certificate job calls these functions. No percentage is calculated anywhere else.
2. Integer maths
   - Compare with integers to avoid rounding errors: a learner meets 70% when `met * 100 >= 70 * total`.
   - Display rounded down to a whole number.
   - Zero total: follow PRD E13 for assignments. For attendance with zero classes held, follow PRD E25.
3. Recalculate from source records (attendance, reviews, classes, assignments) each time. Do not store running counters.
4. "Needed to qualify": compute the smallest number of extra classes or reviews that makes `qualifies` true; show it on the progress card.
5. Backlog alert (F46): for each learner, run `qualifies` twice, once as is and once counting pending submissions as reviewed. Count the learners who change from false to true.
6. Certificate job (jobs table, PRD 4.2 Background jobs)
   - Run at 00:00 WAT, which is 23:00 UTC the day before. Store the run time in UTC.
   - Idempotent (safe to run twice): one certificate per learner per cohort. A second run skips learners who already have one.
   - Certificate ID: random and at least 12 characters, never sequential.
   - Generate the PDF once (with @react-pdf/renderer, AGENTS 2.1) and store it with files-and-uploads. The Download button signs a link to it.
7. Verification page: public, read-only, shows only the fields in PRD F31. Unknown or malformed IDs get the same "not found" page.
8. Late certificates (F32): rerun `qualifies` for that learner after each attendance or review change inside the PRD window.

## Never
- Let a TA, tutor or AI override the thresholds or issue a certificate by hand.
- Show learner email or phone on the verification page.

## Done checklist
- [ ] Unit tests: the PRD F28 example, exact 70%, 69.9%, zero assignments, zero classes (E25), cancelled classes excluded.
- [ ] Test: running the certificate job twice creates one certificate.
- [ ] Test: an unknown ID shows "Certificate not found".
- [ ] Coverage at or above the AGENTS 3.1 threshold for this module.

## Example
Learner: 7 of 10 classes, 6 of 10 assignments reviewed.
`attendancePercent` = 70 (met), `assignmentsPercent` = 60 (not met), needed = 1 review.
Test name: "F28 shows 1 more review needed at 6 of 10".
