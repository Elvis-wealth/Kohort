---
name: notifications
description: Use when any feature sends an email or in-app alert, or when scheduling a reminder: payment confirmations, sign-in codes, class reminders, recording reminders, new assignments, reviews, announcements, backlog alerts, certificates, admin decisions, help replies. Keywords: email, Resend, in-app alert, notification, reminder, announcement, template, schedule, retry, unsubscribe, F21, F25, F29, F33, F34, F39, F46. Paths: src/features/notifications/, src/lib/ email client.
---

Load when: the task names F21, F25, F29, F33, F34, F39 or F46 (sending only; progress-and-certificates computes the counts), or any code sends a message.
Skip when: the message is shown only on the current screen as a form error.

## Purpose
Send every message through one path, so timing, retries and wording stay the same across Kohorts.

## Before you start
1. Read the PRD 3.2 row for the feature ID (timing and content) and PRD 4.1 Security (sender domain).
2. PRD R14 and A8 cover email limits; do not assume a daily cap. Read the provider limit from config.

## Steps
1. One entry point: `notify(event, recipientIds, data)` in `src/features/notifications/`. No other code calls the email client.
2. `notify` writes the in-app alert first, in the same request, then queues the email. The request never waits for the email to send.
3. Email sending runs as a job in the jobs table, PRD 4.2 Background jobs:
   - Send in batches no larger than the provider limit in config.
   - Retry a failed send 3 times over 30 minutes, then log the failure for admin with the event and recipient ID only.
4. Templates: one file per event, plain text and HTML, with Kohorts branding from the design system. Pass only the fields the message shows.
5. Preferences: check the learner's setting only for class reminders (PRD F33). Every other event always sends.
6. Scheduled messages (class reminders, recording reminders, backlog alerts):
   - Store each due time in UTC.
   - Add each one to the jobs table with its due time. Cron runs every 5 minutes, so a message may go out up to 5 minutes after its due time.
   - Before sending, re-read the source record. If the class was deleted or rescheduled, or the recording is attached, send nothing.
7. Idempotency (safe to run twice): give each message a key of event, record ID and recipient ID. Skip a key that was already sent.

## Never
- Put secrets, sign-in links that do not expire, phone numbers or payment details in an email.
- Send an email from inside a webhook handler or server action; queue it.

## Done checklist
- [ ] Unit tests: `notify` writes the alert and queues one email per recipient; duplicate key sends once.
- [ ] Test: a learner with class reminder emails off gets the in-app alert but no email.
- [ ] Test: a reminder for a deleted class is not sent.
- [ ] Test with a fake email client: a 100-recipient announcement is sent in batches no larger than the configured limit.

## Example
Task: F29 announcement to 100 learners.
`notify("announcement.posted", learnerIds, { cohortTitle, body })` writes 100 alerts, queues 100 emails, returns.
Test name: "F29 posts 100 in-app alerts before any email is sent".
