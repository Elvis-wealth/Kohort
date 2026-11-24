---
name: auth-and-roles
description: Use when building sign-in, sign-up, one-time codes, sessions, consent capture, account deletion, TA invites, or any server check of who may see or do what. Keywords: Auth.js, sign in, one-time code, OTP, session, lockout, role, admin, tutor, TA, learner, 403, permission, consent, delete account, F1, F12, F35, F36, F37, F42, F43. Paths: src/features/onboarding/, src/features/tas/, src/features/privacy/, src/lib/ auth module, the Next.js request interceptor file (its name depends on the pinned Next.js version).
---

Load when: the task names F1, F12, F35 to F37, F42 or F43, adds a page or server action, or touches the paths above.
Skip when: the task changes only display text on a page that already has its access check and tests.

## Purpose
Make sure every request knows who the user is, and that each role reaches only what the PRD allows.

## Before you start
1. Read PRD 4.1 Security, PRD F36 and the PRD 3.4 Access column for every screen in the task.
2. Groups A, F12 and F42 need the owner's "go" (AGENTS Boundary 2).

## Steps
1. Sign-in codes
   - Configure Auth.js email sign-in to send a 6-digit code instead of a link (custom verification token).
   - Store only a hash of the code, together with the email and its expiry time in UTC. Check the code and email together, never the code alone.
   - Count failed attempts per email; lock and unlock using the numbers in PRD 4.1 Security.
2. One access helper
   - Write one server function, for example `requireAccess(user, action, resource)`, in the auth module.
   - Deny by default. Allow only what the PRD 3.4 Access column and F36 permit.
   - Check cohort membership: a TA only for cohorts they were added to, a learner only for cohorts they paid for.
3. Use the helper in every server action, route handler and server-rendered page. Never rely on hiding a button.
4. Return 403 with no data on denial. Never say whether the resource exists.
5. Sign-in after payment (F12): at checkout start, set a one-time value in the learner's browser and store it with the payment. Create the session only after the payment is verified, and only for the browser holding that value. Without it, send a sign-in code instead.
6. Consent (F42): store the policy version, date and time with each acceptance. Read the policy version from one config value.
7. Deletion (F43): run the erase as a job in the jobs table, PRD 4.2 Background jobs; keep payment records with personal fields removed, as PRD F43 states.
8. Field filtering: build TA responses from an allow-list of fields; never send a full learner record and hide fields in the UI.

## Never
- Store raw codes, session tokens or passwords in logs or reports.
- Put role logic in React components alone.

## Done checklist
- [ ] Unit tests: code expiry, wrong-code lockout, a valid code with the wrong email fails, the access helper for every role.
- [ ] Test: opening the Payment Success link in a second browser does not sign it in.
- [ ] One 403 test per limit in PRD F36, and one per screen in the task for each role without access.
- [ ] A test that a TA response contains no phone number or payment field.
- [ ] Every new server action and route calls the access helper (search the diff).

## Example
Task: F36 on screen 23 (Learner detail).
Steps: add the field allow-list for TAs; call the access helper in the page loader.
Tests: "F36 TA gets 403 on the Earnings URL", "F36 TA learner detail has no phone field", "F36 tutor sees the phone field".
