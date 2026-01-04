# Kohorts — MVP v1.1 Product Specification

## 1. Product Name

**Kohorts**

---

## 2. One-Line Description (Internal)

**Kohorts automatically turns successful cohort payments into enrolled, onboarded students — without handling money.**

---

## 3. Problem Statement

Cohort-based creators (bootcamps, mentors, course founders) in Nigeria and similar markets commonly:

- Use Paystack/Flutterwave payment links
- Track paid students manually (spreadsheets, WhatsApp, Notion)
- Manually send community links after payment
- Lack a single source of truth for enrollment

This leads to:

- Administrative overload
- Missed or delayed onboarding
- Poor professionalism
- Scaling friction as cohorts grow

Existing tools either:

- Over-focus on payments (Selar, etc.)
- Require heavy setup
- Or don’t solve post-payment operations

---

## 4. Product Vision

Kohorts is the **post-payment operating system for cohort-based programs**.

It does **not** replace Paystack.

It **does** automate what happens _after_ payment.

---

## 5. Target Users

### Primary Users

- Tech bootcamp founders
- Mentors running cohort programs
- Course creators with time-bound enrollments

### User Characteristics

- Semi-technical
- Comfortable using payment links
- Uncomfortable managing APIs or complex setups
- Highly sensitive to operational friction

---

## 6. What Kohorts Is (and Is Not)

### Kohorts IS:

- A cohort management platform
- A system of record for enrollment
- A post-payment automation layer

### Kohorts IS NOT:

- A payment processor
- A wallet
- An escrow service
- A payout or revenue-splitting platform

---

## 7. Core Product Concept (v1.1)

**Once a student pays via the founder’s Paystack link, Kohorts:**

1. Verifies the payment (read-only)
2. Creates the student record
3. Marks them as paid
4. Automatically onboards them (email + community link)

---

## 8. Payments Architecture (Critical)

### Payment Flow

- Founders provide their **Paystack payment link**
- Kohorts embeds this link in the public cohort page
- Students pay **directly on Paystack**
- Kohorts:
  - Receives the payment reference on redirect
  - Calls Paystack’s **verify transaction endpoint**
  - Confirms:
    - Status = success
    - Amount matches cohort price
    - Reference not previously used

### Explicit Constraints

- Kohorts never touches funds
- Kohorts never stores card data
- Kohorts cannot move, refund, or split money

This is **verification, not processing**.

---

## 9. MVP v1.1 Feature Scope

### 9.1 Founder (Internal)

### Authentication

- Email/password login

### Dashboard

- List of cohorts
- Basic stats (total students, paid students)

### Cohort Creation

- Cohort name
- Description
- Price
- Banner image
- Paystack payment link
- Community link (Discord / WhatsApp / Slack)

### Internal Cohort Page

- Student table:
  - Name
  - Email
  - Payment status (Paid / Unpaid)
  - Payment reference
- Automatic population on successful payment
- Manual add/edit student (override)
- Export student list (CSV)

---

### 9.2 Student (Public)

### Public Cohort Page

- Cohort name & description
- Price
- Banner image
- “Enroll Now” CTA

### Enrollment Flow

- Clicking CTA redirects to Paystack
- After successful payment:
  - Student redirected back to Kohorts
  - Enrollment confirmation page shown
  - Welcome email sent
  - Community link delivered

---

## 10. Automation Rules (MVP v1.1)

### Automated

- Payment verification by reference
- Student creation
- Payment status update
- Welcome/onboarding email
- Community link delivery

### Not Automated

- Refunds
- Installments
- Disputes
- Revenue sharing
- Payouts
- Multi-gateway support

---

## 11. Pricing Model

### Free Tier

- Create cohorts
- Public cohort pages
- Manual student management

### Paid Automation Add-on

- Payment verification
- Auto-enrollment
- Auto onboarding & community access

Rationale:

- Avoids penalizing small cohorts
- Aligns pricing with value delivered
- Encourages upgrade as founders scale

---

## 12. Design Principles

- Inspired by **Supabase**
- Clean, minimal, product-first UI
- Strong AppShell (sidebar + header)
- Component-driven design system
- Subtle micro-interactions
- Professional and trust-building

---

## 13. Technical Stack (Locked)

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- Prisma + PostgreSQL
- Paystack (verification only)
- VS Code + Claude Code (sub-agent workflow)

---

## 14. Explicit Non-Goals (v1.1)

- Student accounts
- Founder wallets
- Revenue splitting
- Installment plans
- Affiliate systems
- Course hosting
- Messaging systems

---

## 15. Success Criteria (MVP v1.1)

Kohorts is successful if founders say:

> “Once someone pays, Kohorts handles everything else.”

---

## 16. Guiding Principle (Do Not Break)

> Automate the pain, not the payment.
