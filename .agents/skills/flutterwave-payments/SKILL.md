---
name: flutterwave-payments
description: Use when building or changing checkout, payment verification, Flutterwave webhooks, split payouts, tutor earnings, chargebacks or cohort cancellation refunds. Keywords: Flutterwave, checkout, webhook, subaccount, split, payout, earnings, chargeback, dispute, refund, F8, F9, F10, F11, F44, E1 to E7. Paths: src/features/payments/, src/lib/ payment client, any src/app route that receives a Flutterwave webhook.
---

Load when: the task names F8, F9, F10, F11, F44 or E1 to E7, or touches the paths above.
Skip when: the task only displays a price or the take-home calculator (F45) with no payment call.

## Purpose
Move money through Flutterwave so that access is granted once, only for a verified payment, and every naira is traceable.

## Before you start
1. Also read PRD 4.1 Security.
2. List every PRD 5.1 check the task depends on (C3, C4, C5, C6). If one is open, stop and ask (AGENTS Boundary 7).
3. This is payment code: post your plan and wait for "go" (AGENTS Boundary 2).

## Steps
1. Keep all Flutterwave calls in one client module in `src/lib/`. Feature code never calls the Flutterwave API directly.
2. Put kobo-to-Flutterwave-amount conversion in one helper with unit tests. Confirm the unit Flutterwave's API expects in its docs; never convert inline.
3. Create a payment record with a unique transaction reference before opening checkout. The reference is the key for every later step.
4. Treat the checkout redirect as untrusted. Show "Checking payment". If the payment is not verified within 30 seconds, send the learner to screen 5 (Payment failed or pending). Never grant access from redirect query values.
5. Webhook handler, in this order:
   - Verify the webhook using the method in Flutterwave's current docs and the secret from environment config. On failure, return 401 and log the reference only.
   - Look up the transaction by reference. If already processed, return 200 and do nothing (idempotent: safe to receive twice).
   - Call Flutterwave's verify endpoint. Compare status, amount, currency and reference with the stored record. Any mismatch: mark "Needs review", grant nothing.
   - Grant access and record the result in one database transaction.
   - Return 200 as soon as the result is saved. Hand emails to the notifications skill.
6. Reconciliation job (jobs table, PRD 4.2 Background jobs): list payments still "Pending" or "Needs review", re-verify each with Flutterwave, and log every change.
7. Seat holds: create the hold when checkout opens and store its expiry time in UTC. When counting seats, ignore holds past their expiry, so no job is needed to free them.
8. Refunds and chargebacks: compute amounts with integer kobo only. Store each refund or dispute as its own record linked to the payment; never edit the original payment amount.
9. Earnings view: read figures from stored payment records, not from live API calls on page load.

## Never
- Store card or bank details, or log full webhook bodies. Log the reference, status and amount only.
- Hard-code the fee, VAT or refund rules. Read them from one config module that cites the PRD section.

## Done checklist
- [ ] Unit tests: amount conversion, webhook check (valid, invalid, missing), duplicate webhook, verify mismatch, expired hold not counted.
- [ ] No route grants access without the verify call.
- [ ] Payment records stay unchanged after a refund or dispute.
- [ ] Report lists the PRD 5.1 checks this code depends on and their status.

## Example
Task: F8 webhook.
Plan: client module, signature check, idempotent lookup, verify call, grant in one transaction.
Tests: "F8 rejects a webhook with a bad signature", "F8 ignores a second webhook for the same reference", "F8 marks Needs review when the verified amount differs".
