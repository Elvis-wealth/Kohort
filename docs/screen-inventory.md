# Kohorts — Screen Inventory (MVP v1.1)

## Screen Rules

- If a screen is **not listed here**, it **does not exist**
- Screens map directly to user flows
- Each screen has a **single responsibility**
- No “mega screens”

---

## 1️⃣ Authentication Screens

### 1.1 Sign Up Screen

**User:** Founder

**Purpose:** Account creation

**Core Elements**

- Email
- Password
- Confirm password
- Create account CTA

---

### 1.2 Log In Screen

**User:** Founder

**Core Elements**

- Email
- Password
- Log in CTA
- Forgot password link

---

### 1.3 Password Reset Screen

**User:** Founder

**Core Elements**

- Email input
- Reset CTA
- Confirmation state

---

## 2️⃣ Founder Dashboard

### 2.1 Dashboard Home

**User:** Founder

**Purpose:** High-level overview

**Core Elements**

- Active cohorts count
- Total enrolled students
- Automation status
- Recent enrollments list
- “Create Cohort” CTA

---

## 3️⃣ Cohort Management Screens

### 3.1 Cohort List Screen

**User:** Founder

**Purpose:** Manage all cohorts

**Core Elements**

- Cohort name
- Status (Draft / Live / Closed)
- Student count
- View cohort CTA

---

### 3.2 Create / Edit Cohort Screen

**User:** Founder

**Purpose:** Cohort setup

**Sections**

- Basic info
- Payment configuration
- Community configuration

**Core Elements**

- Name
- Description
- Dates
- Paystack payment link
- Reference pattern
- Community type
- Invite link
- Save / Publish CTA

---

### 3.3 Internal Cohort Page

**User:** Founder

**Purpose:** Operations & control

**Core Elements**

- Enrollment table
  - Student name
  - Email
  - Payment status
  - Access status
- Manual actions
  - Mark as paid
  - Resend access
  - Remove student
- Automation logs

---

## 4️⃣ Public Enrollment Screens

### 4.1 Public Cohort Page

**User:** Student

**Purpose:** Marketing + enrollment

**Core Elements**

- Cohort name
- Description
- Banner image
- Start date
- CTA: “Enroll Now”

---

### 4.2 Enrollment Intake Screen

**User:** Student

**Purpose:** Capture student info

**Core Elements**

- Name
- Email
- Continue to payment CTA

_(Optional if data is collected pre-payment)_

---

## 5️⃣ Enrollment Status Screens

### 5.1 Enrollment Success Screen

**User:** Student

**Purpose:** Confirmation

**Core Elements**

- Payment received message
- “Check your email” notice
- Support contact info

---

### 5.2 Enrollment Pending Screen

**User:** Student

**Purpose:** Waiting state

**Core Elements**

- Payment verification message
- Expected wait time
- Support contact

---

### 5.3 Enrollment Failed Screen

**User:** Student

**Purpose:** Error handling

**Core Elements**

- Failure message
- Retry payment CTA
- Contact support link

---

## 6️⃣ Settings Screens

### 6.1 Account Settings Screen

**User:** Founder

**Core Elements**

- Profile info
- Email update
- Password update

---

### 6.2 Billing & Plan Screen

**User:** Founder

**Core Elements**

- Current plan
- Automation status
- Usage limits
- Upgrade CTA

---

## 7️⃣ System / Feedback Screens

### 7.1 Empty State Screens

**User:** Founder

**Use Cases**

- No cohorts yet
- No enrollments yet

---

### 7.2 Error State Screen

**User:** Founder / Student

**Core Elements**

- Error message
- Retry action
- Support contact

---

## Explicitly Non-Existent Screens (MVP v1.1)

❌ Wallet

❌ Transaction history

❌ Revenue dashboard

❌ Student login dashboard

❌ Founder analytics

❌ Multi-admin roles

---

## Screen Inventory Lock Statement

> Claude must only create, reference, or link to screens listed in this document.
>
> Any additional screen requires explicit founder approval.
