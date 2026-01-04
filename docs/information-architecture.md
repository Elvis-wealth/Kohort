# Kohorts — Information Architecture (MVP v1.1)

## 1. Core Principles (IA Rules)

- Kohorts **does NOT process payments**
- Kohorts **does NOT hold money**
- Kohorts **verifies payments via Paystack signals**
- Kohorts **automates enrollment & access**
- Manual overrides exist, but are secondary

---

## 2. User Roles

### 2.1 Founder (Primary User)

- Creates and manages cohorts
- Connects Paystack
- Controls community access
- Views enrollment data

### 2.2 Student (Secondary User)

- Views public cohort pages
- Pays externally (Paystack)
- Gains access automatically after verification

### 2.3 System (Automation Layer)

- Verifies payments
- Updates enrollment status
- Sends access links
- Enforces plan limits

---

## 3. Top-Level Product Areas

```
Kohorts
├── Authentication
├── Founder Dashboard
├── Cohorts
├── Enrollment & Verification
├── CommunityAccess
├── Settings
└──System / Automation

```

---

## 4. Authentication

### 4.1 Auth Screens

- Sign up
- Log in
- Password reset

### 4.2 Auth Methods

- Email + password (MVP)
- OAuth (future)

---

## 5. Founder Dashboard

### Purpose

Single control center for founders.

### Contains

- Overview metrics
  - Active cohorts
  - Total enrolled students
  - Automation status
- Recent enrollments
- Warnings (e.g. Paystack not connected)

---

## 6. Cohorts Module (Core of Product)

### 6.1 Cohort List

- View all cohorts
- Status:
  - Draft
  - Live
  - Closed

---

### 6.2 Create / Edit Cohort

### Cohort Data

- Cohort name
- Description
- Banner image
- Start date
- End date
- Max students (optional)

### Payment Configuration

- Paystack public key
- Paystack payment link
- Payment reference pattern (for verification)

### Community Configuration

- Platform type (Discord / Slack / Telegram)
- Invite link (private)
- Automation toggle (on/off)

---

### 6.3 Internal Cohort Page (Founder View)

**Private**

- Enrollment table
  - Student name
  - Email
  - Payment status (pending / verified / failed)
  - Access status (sent / not sent)
- Manual actions
  - Mark as paid
  - Resend access link
  - Remove student
- Automation logs

---

### 6.4 Public Cohort Page (Student View)

**Public**

- Cohort details
- Start date
- What’s included
- CTA: **Enroll Now**
  - Redirects to Paystack payment page

---

## 7. Enrollment & Verification

### 7.1 Enrollment Intake

- Student submits:
  - Name
  - Email
- System stores pending enrollment

---

### 7.2 Payment Verification

- Webhook listener (Paystack)
- Match payment reference to cohort
- Verify amount + status
- Update enrollment record

---

### 7.3 Failure Handling

- Unmatched payments → flagged
- Manual review by founder
- Retry verification

---

## 8. Community Access

### 8.1 Automated Access (Paid Tier)

- Triggered on verified payment
- Send:
  - Receipt email
  - Community invite link
- Update access status

---

### 8.2 Manual Access (Free Tier)

- Founder adds students manually
- Automation disabled

---

## 9. Settings

### 9.1 Account Settings

- Profile
- Email
- Password

### 9.2 Billing & Plan

- Free tier
- Automation add-on
- Usage limits
- Upgrade / downgrade

---

## 10. System / Automation Layer (Invisible to Users)

### Responsibilities

- Payment verification jobs
- Email sending
- Access triggers
- Plan enforcement
- Logs & error tracking

---

## 11. Explicit Out of Scope (MVP v1.1)

❌ In-app payments

❌ Wallets / escrow

❌ Revenue splitting

❌ Multi-currency payouts

❌ Analytics dashboards beyond basics

---

## 12. IA Lock Statement

> Any screen, feature, or flow not described in this document
>
> **does not exist in Kohorts MVP v1.1** unless explicitly approved.
