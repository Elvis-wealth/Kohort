# Kohorts PRD v1.3

24 Nov 2026 · Owner: Elvis Okolo, Product Owner and Builder

Items marked **(v1.3)** changed in this version; **(v1.2)** and **(v1.1)** mark earlier changes. **[ASSUMPTION]** marks an inference to confirm. **[CHECK]** marks a fact about an outside service or law that must be confirmed before the matching feature is built. Both lists are in 5.1.

---

## Changelog v1.2 to v1.3

1. Header and 1.1: version v1.3.
2. 4.2: added Background jobs and Certificates and images rows (owner decisions OD1, OD3).
3. 5.1: added check C14 (Vercel Cron limits).
4. 5.2: added E25, zero classes held (owner decision OD2).
5. 5.3: added decisions D10 to D12.
6. 5.4: C14 added to week 1 checks.

## Changelog v1.1 to v1.2

1. Header and 1.1: version v1.2, date 24 Nov 2026.
2. 3.4 TA line: TA limits replaced with a pointer to F36 (K4).
3. 4.1 Privacy: TA access sentences replaced with a pointer to F36 (K4).
4. 4.2: "Notes for building with an AI agent on Antigravity" renamed "Build constraints"; agent workflow moved to AGENTS.md 5.1 to 5.4; live-key rule kept as a product requirement; stack-limit rationale cut (K1, K3, K8, K13).
5. 4.3: added rows for AGENTS.md and the design system; audit report path set to docs/ (K9, K14).
6. Reliability check re-run for v1.2.

## Changelog v1.0 to v1.1

1. 1.1: added the Core bet line.
2. 1.3 G4: replaced "second cohort" goal with a weekly admin-time goal; repeat cohorts kept as a tracked number with a 60-day rule.
3. 1.3 G5: set a naira target of ₦2,600,000 in platform fees in 90 days.
4. 1.3: added the measurement events list.
5. 2.1: learners under 18 excluded.
6. 2.3 Journeys A, B, C, E: updated to match F12, F17, F19, F24 and F42.
7. 3.1: scope lists updated for pasted Meet links, cancellation refunds, calculator, help channel, under-18 exclusion and new Later items.
8. F2: added the bank account name-match rule.
9. F5: added the WhatsApp link preview.
10. F6: enrolment closes on paid plus held seats; hold times set.
11. F8: Flutterwave checkout prefilled; one combined consent box.
12. F9: processing fee bearer moved to a week-1 check.
13. F10: expected payout date per payment.
14. F11: chargeback deduction, invoice and pause rules.
15. F12: learner signed in on Payment Success; 30-day session.
16. F16: moved to Later.
17. F17: covers Google Meet, Zoom and Teams; default link per cohort.
18. F19: tutor confirms link sharing on the picked recording.
19. F24: Form collaborator prompt for TAs.
20. F27: 3-tap phone review, inline image and PDF preview, bulk review up to 50.
21. F31: raised to Must have; adds "Run your cohort on Kohorts" link.
22. F36: TAs see learner name and email only.
23. F38: risky-phrase check, personal data removal, report review time.
24. F39: decision within 2 working days.
25. F41: moved to Later.
26. F42: 18+ confirmation and bold no-refund line above Pay.
27. F44 (new): cohort cancellation refunds.
28. F45 (new): take-home calculator on the landing page.
29. F46 (new): review backlog alerts.
30. F47 (new): help channel.
31. 3.3: AI rules updated for Gemini data handling, outcome claims and reports.
32. 3.4: screens 1, 20, 23, 30, 34 updated; screen 36 Help added; flows 5 and 9 updated or added.
33. 4.1: cost limits, page weight, ID retention, email domain rule, TA data access updated.
34. 4.2: hosting plan, video integration, recordings, AI model and notes updated.
35. 4.3: links set as a launch gate.
36. 5.1: R2, R7, R8 updated; R15 and R16 added; A6, A8, A10 updated; A14 and A15 added; Checks list C1 to C13 added.
37. 5.2: E3, E4, E9, E11, E21 updated; E22 to E24 added.
38. 5.3: settled questions moved to a decisions log; new open questions added.
39. 5.4 (new): 8-week build timeline with a tutor commitment gate.

---

## Layer 1: What is this?

### 1.1 Product snapshot (v1.1)

| Field | Value |
| --- | --- |
| Product name | Kohorts |
| Description | A web app where bootcamp tutors sell, run and certify paid cohorts in one place, replacing forms, spreadsheets and scattered links. |
| Core bet (v1.1) | Tutors see who is falling behind every week, and learners earn verified certificates automatically. Every Must-have feature serves selling, delivering or this bet. |
| Version (v1.3) | v1.3 (PRD after skills audit decisions) |
| Date (v1.2) | 24 Nov 2026 |
| Owner | Elvis Okolo, Product Owner and Builder |
| Market | Nigeria first |
| Platform | Web app, mobile-first for learners |

### 1.2 The problem

Nigerian bootcamp tutors run paid cohorts of up to 100 learners with 5 or more disconnected tools. Registration sits in Google Forms, payment proof arrives as bank transfer screenshots on WhatsApp, and payment status lives in a spreadsheet. Class links, recordings and assignment links get buried in WhatsApp chats. Learners lose track of what they missed and what is due. Tutors cannot see who attends or submits until it is too late to step in, and certificates are made by hand.

**Today vs with Kohorts**

| Job | Today | With Kohorts |
| --- | --- | --- |
| Advertise a bootcamp | Flyer + WhatsApp status + Google Form link | One public Kohort Page per cohort |
| Collect payment | Bank transfer, screenshot, manual check; or Selar | Flutterwave checkout on the Kohort Page, split payout to tutor |
| Track who paid | Spreadsheet updated by hand | Paid learner list created on payment |
| Onboard learners | Tutor adds each number to a WhatsApp group | Account created on payment; community link shown in dashboard |
| Run live classes | Meet or Zoom link pasted in chat | Class schedule with a Join button per class |
| Share recordings | Drive link pasted in chat, lost in scroll | Recording attached to its class page |
| Track attendance | Headcount or none | Join clicks logged; tutor or TA edits; optional Google Form check-in |
| Collect assignments | Links sent in DMs or a form | Submission per assignment, reviewed in one queue |
| Issue certificates | Designed and sent one by one | Issued automatically at 70% attendance and 70% assignments reviewed |

**Cost of the problem** [ASSUMPTION: estimates to confirm in tutor interviews]

- Time: a tutor with 100 learners spends 6 to 10 hours per week on admin (payment checks, link sharing, chasing submissions).
- Money: 5% to 10% of interested learners drop off between the form and the bank transfer.
- Learners: 20% to 40% of paid learners go inactive before week 4, with no signal to the tutor.

### 1.3 Goals and success metrics (v1.1)

All targets are measured from the public launch date.

| # | Goal | Metric | Target | Timeframe | How measured |
| --- | --- | --- | --- | --- | --- |
| G1 | Tutors run real paid cohorts on Kohorts | Tutors with at least 1 paid cohort live | 10 tutors, 10 cohorts | 90 days | Admin dashboard count |
| G2 | Learners pay through Kohorts | Paying learners | 500 | 90 days | Successful Flutterwave payments |
| G3 | Learners stay engaged (learner metric) | Share of enrolled learners who log in at least once a week | 70% | Weekly, across each cohort's run | Login events per learner per week |
| G4 (v1.1) | Kohorts cuts tutor admin (tutor metric, tests the core bet) | Share of tutors reporting 2 hours or less of admin per week | 80% | Week 4 of each cohort | 3-question survey in the tutor dashboard at week 4 |
| G5 (v1.1) | Kohorts earns revenue (business metric) | Gross platform fees collected at 6.5% (Nestuge benchmark), net of chargebacks and cancellation refunds | ₦2,600,000 [ASSUMPTION: 500 learners at an average price of ₦80,000] | 90 days | Flutterwave split settlement reports |

**Tracked, no target (v1.1):** share of tutors who launch a second cohort, counted only for tutors whose first cohort ended at least 60 days earlier.

**Measurement events (v1.1):** tutor verified, cohort published, payment succeeded, learner signed in, class joined, submission created, submission reviewed, certificate issued, admin survey answered, cohort cancelled. All events go to PostHog.

**Non-goals for v1:** self-paced course sales, a public marketplace that finds learners for tutors, tutor-branded pages, and installment payments.

---

## Layer 2: Who is it for?

### 2.1 Target users (v1.1)

- **Primary:** solo tutors in Nigeria running paid, online bootcamps of up to 100 learners, tech (design, data, product, code) and non-tech (business, finance, content creation).
- **Secondary:** teaching assistants who help a tutor run a cohort; learners aged 18 or older who pay for and attend a cohort.
- **Excluded in v1:** training companies with multiple tutors under one account, schools and universities, tutors running free cohorts, tutors who need in-person class tracking, self-paced course sellers, and learners under 18 (v1.1).

### 2.2 User personas

**Persona 1: Tobi Adeyemi, tech tutor**

- Age 29, Lagos. Senior product designer who runs a 12-week UI/UX bootcamp three times a year.
- Profile: Tobi teaches on weekday evenings and Saturdays over Google Meet. His last cohort had 85 paid learners at ₦150,000 each. He spends Sunday nights matching transfer screenshots to names in a spreadsheet. He wants to look professional without paying for a full LMS.
- Goals: fill cohorts in 3 weeks, cut admin to under 2 hours a week, see who is falling behind by week 3.
- Frustrations: unmatched transfers, "please resend the link" messages, learners who claim attendance they cannot prove.
- Current tools: Google Forms, WhatsApp community, Google Meet, Google Sheets, Canva for certificates.
- Device and connectivity: MacBook on home fibre; iPhone on 4G when out.
- Quote: "I want to teach. Right now I'm a part-time accountant for my own bootcamp."

**Persona 2: Amaka Eze, non-tech tutor**

- Age 34, Abuja. Chartered accountant who runs an 8-week bookkeeping and personal finance bootcamp for small business owners.
- Profile: Amaka runs 2 cohorts a year of about 60 learners each, over Zoom. Her learners are less used to web tools, and they pay from their phones. Assignments are Excel sheets and photos of handwritten ledgers.
- Goals: a checkout her learners trust, assignments in one place, certificates her learners can show employers.
- Frustrations: learners who cannot find the class link, files sent in five formats over WhatsApp.
- Current tools: Selar for payment, WhatsApp group, Zoom, email.
- Device and connectivity: Windows laptop; Android phone on 4G with frequent drops.
- Quote: "If my students can use WhatsApp, the app has to be that clear."

**Persona 3: Ibrahim Musa, teaching assistant**

- Age 24, Kaduna. A past learner of Tobi's bootcamp, now his TA for ₦80,000 per cohort.
- Profile: Ibrahim marks attendance, reviews first-pass assignments and posts reminders. He works from his phone between other freelance jobs.
- Goals: clear list of what to review today, no access to money matters he should not see.
- Frustrations: digging through chats to find who submitted what.
- Current tools: WhatsApp, Google Sheets shared by Tobi.
- Device and connectivity: Android phone on 4G; borrows a laptop twice a week.
- Quote: "Just show me the queue. I'll clear it."

**Persona 4: Femi Ogunleye, learner**

- Age 26, Ibadan. Customer service rep moving into product design.
- Profile: Femi found Tobi's bootcamp from an Instagram post and paid from his phone. He attends live classes after work and catches up on recordings when he misses one.
- Goals: pay without doubt, know what is due this week, earn a certificate for his CV.
- Frustrations: missing a class and not finding the recording; not knowing if his submission was received.
- Current tools: WhatsApp, Instagram, Google Meet app, phone banking app.
- Device and connectivity: Android phone on 4G, 3G fallback; data bundles he rations.
- Quote: "Tell me what I missed and what's due. That's all I need."

### 2.3 User journeys (v1.1)

Friction points are marked **[FRICTION]**.

**Journey A: Tobi sets up and publishes a cohort (v1.1)**

1. Tobi signs up with his email and confirms a one-time code.
2. He completes tutor verification: full name, phone, ID document and a Nigerian bank account for payouts. **[FRICTION: KYC drop-off; show progress and what is left.]**
3. Kohorts admin decides within 2 working days. He gets an email.
4. He creates a cohort: title, description, price, start and end dates, capacity, class schedule.
5. He connects his Google account for recordings, pastes his Google Meet link as the cohort's default class link, and adds his WhatsApp community link.
6. He uses the AI writing helper to draft the Kohort Page copy, clears the flagged phrases, then edits it.
7. He previews the page on mobile and publishes it.
8. He copies the Kohort Page link and posts it on Instagram and WhatsApp, where it shows a preview card.

**Journey B: Femi discovers, pays and joins (v1.1)**

1. Femi taps the Kohort Page link from Instagram on his phone.
2. He reads the outline, schedule, price, tutor bio and no-refund terms.
3. He taps Enrol, enters his name, email and phone, and ticks one box confirming he is 18 or older and agrees to the Terms (no refunds) and Privacy Policy. **[FRICTION: form length on mobile.]**
4. He pays with card, bank transfer or USSD on Flutterwave checkout, with his details already filled in. **[FRICTION: pending transfers; highest drop-off point.]**
5. He lands on a Payment Success screen, already signed in, and gets a confirmation email.
6. He opens My Bootcamps, sees the cohort, the next class and the WhatsApp community link.

**Journey C: Tobi runs a week of classes (v1.1)**

1. Monday: Tobi posts an announcement for the week. Learners get it in-app and by email.
2. Tuesday class: learners tap Join from the class page. Kohorts logs each click. Tobi shares a Google Form check-in link mid-class.
3. After class: Tobi picks the Meet recording from his Google Drive and confirms link sharing. It appears on the class page for learners. **[FRICTION: tutor forgets; send a reminder 2 hours after class end.]**
4. Tobi or Ibrahim adjusts attendance for learners who joined by phone dial-in or whose clicks failed.
5. Tobi posts Assignment 3 with a due date.
6. Friday: Tobi opens the review queue, marks 20 link submissions reviewed in one batch, and comments on 10 more.

**Journey D: Femi completes the cohort**

1. Femi misses a class, watches the recording on the class page and submits the assignment on time.
2. His progress card shows attendance % and assignments reviewed % against the 70% thresholds. **[FRICTION: learner near the threshold in the final week; show what is needed to qualify.]**
3. On the cohort end date, Kohorts checks both thresholds and issues his certificate.
4. Femi downloads the PDF and shares its verification link on LinkedIn.

**Journey E: Ibrahim handles daily TA tasks (v1.1)**

1. Ibrahim accepts Tobi's TA invite by email and signs in.
2. He sees only the cohort he was added to, with no payment data and no learner phone numbers.
3. He opens the review queue on his phone, filtered to submissions not yet reviewed, and clears 15.
4. He posts a reminder announcement for Saturday's class.
5. He corrects attendance for 3 learners after checking the Google Form responses, which Tobi shared with him as a Form collaborator. **[FRICTION: manual reconciliation of form responses.]**

---

## Layer 3: What will it do?

### 3.1 Scope (v1.1)

**In scope (v1)**

- Tutor sign-up, verification by Kohorts admin, payout account setup
- One public Kohort Page per cohort, with enrolment that closes at capacity or by the tutor
- Full-payment checkout on Flutterwave with split payout to the tutor
- Learner account created on payment, signed in on Payment Success, email one-time-code login after that, My Bootcamps dashboard
- Class schedule with Join buttons; tutors paste Google Meet, Zoom or Teams links (v1.1)
- Google Meet recordings attached from the tutor's Google Drive; pasted links for other tools
- Attendance from Join clicks, tutor or TA edits, and an optional Google Form check-in link
- Assignments in the Google Classroom pattern: links, Google Docs, text and file uploads
- Review queue with bulk review, announcements, learner progress and automatic certificates
- Teaching assistants with fixed permissions
- Email and in-app notifications
- AI writing helper for Kohort Page copy and announcements, with a risky-phrase check
- Cohort cancellation refunds (v1.1)
- Take-home calculator on the landing page (v1.1)
- Help page and help email (v1.1)
- Admin tools: tutor approval, suspension, dispute evidence export
- Consent capture, 18+ confirmation and account deletion under the Nigeria Data Protection Act 2023

**Out of scope (v1)**

| Item | Reason |
| --- | --- |
| Hosting live video | Tutors already use Meet, Zoom or Teams; hosting video costs more than the v1 budget |
| Uploading video files to Kohorts | Storage cost; recordings stay in the tutor's Google Drive |
| Installment payments | Adds payment-plan logic and debt follow-up; decided for later |
| Free cohorts | Kohorts earns only from paid sales |
| Refunds, except cohort cancellation (v1.1) | Decided: no refunds in v1; tutor bears chargebacks; F44 covers cancelled cohorts |
| Tutor-branded or white-label pages | Decided: all pages carry the Kohorts brand |
| Multi-tutor organisations | v1 serves solo tutors |
| In-person class tracking | v1 serves online classes only |
| WhatsApp message notifications | Per-message cost; email and in-app cover v1 |
| Reading Google Form responses automatically | Needs extra Google permissions; tutor reconciles by hand in v1 |
| Native mobile apps | Learners arrive from social links; the web app covers phones |
| Auto-created Meet links (v1.1) | Needs a Google permission that requires a review which can delay launch [CHECK C2] |
| Learners under 18 (v1.1) | Extra legal duties for children's data and contracts [CHECK C10] |
| Referral codes (v1.1) | Credits, tracking and abuse checks do not fit the 8-week build |
| In-browser Word and Excel preview (v1.1) | Needs a document viewer service; download covers v1 |

**Later (v2 and after)**

- Self-paced video lessons and a Udemy or Skool-style course experience
- Installment payments and free cohorts
- WhatsApp notifications
- Native in-app attendance check-in that replaces the Google Form
- AI recording summaries and AI draft feedback on assignments
- Multi-tutor organisations and white-label pages
- Auto-created Meet links through Google Calendar (F16) (v1.1)
- Full admin payment overview (F41) (v1.1)
- Tutor referral codes (v1.1)
- Phone-number login (v1.1)

### 3.2 Features (v1.1)

Terms used below. **Attendance %** = classes attended ÷ classes held so far (cancelled classes excluded). **Assignments %** = assignments marked reviewed for that learner ÷ assignments posted to the cohort. Both are calculated for every enrolled learner, as in Google Classroom; an assignment a learner never submits counts as not reviewed. **Held seat (v1.1)** = a seat reserved while a learner is in checkout: 15 minutes for card and USSD, 2 hours for bank transfer.

**A. Tutor onboarding**

| ID | Feature | Description | Priority | Done when |
| --- | --- | --- | --- | --- |
| F1 | Tutor sign-up | A tutor creates an account with email and a 6-digit one-time code. | Must have | A new tutor enters an email, receives a code within 60 seconds, enters it and lands on the verification screen. A wrong code 5 times locks sign-in for 15 minutes. |
| F2 (v1.1) | Tutor verification and payout setup | The tutor submits full name, phone, ID document and Nigerian bank account; Kohorts creates a Flutterwave subaccount after admin approval. | Must have | A tutor submits all 4 items. Flutterwave returns the bank account name; it passes when the surname and at least one other name match the entered name, letter case ignored; otherwise the request is marked "Name mismatch" for admin. The request appears in the admin queue. On approval the tutor gets an email and can publish a Kohort Page. Before approval, the Publish button is disabled with the message "Awaiting verification". |
| F3 | Tutor profile | Photo, bio (max 500 characters) and social links shown on every Kohort Page. | Should have | A tutor saves a profile and the photo, bio and links appear on each of their Kohort Pages within 10 seconds of saving. |

**B. Cohorts and Kohort Page**

| ID | Feature | Description | Priority | Done when |
| --- | --- | --- | --- | --- |
| F4 | Create cohort | The tutor sets title, description, curriculum outline, price in naira, capacity (1 to 500), start and end dates, and the class schedule. | Must have | A tutor fills all required fields and saves a draft; a missing required field blocks saving and names the field; the draft appears in the tutor dashboard. |
| F5 (v1.1) | Publish Kohort Page | A verified tutor publishes a public page with a unique link for the cohort. | Must have | A verified tutor taps Publish; the page goes live at kohorts.app/[tutor]/[cohort]; it shows title, outline, schedule, price, seats left, tutor profile and no-refund terms; it renders at 360 px width without horizontal scroll. Pasting the link into WhatsApp shows a preview card with the cohort title, price and a cover image. |
| F6 (v1.1) | Close enrolment | Enrolment closes when paid seats plus held seats reach capacity, or when the tutor closes it. | Must have | When paid seats plus held seats equal capacity, or the tutor taps Close Enrolment, the Enrol button changes to "Enrolment closed" within 5 seconds and no new checkout can start. When a held seat expires unpaid, the Enrol button returns within 60 seconds if enrolment was closed only by capacity. |
| F7 | Social links | The tutor adds one community link (WhatsApp or Discord) per cohort. | Must have | A tutor saves a link starting with chat.whatsapp.com or discord.gg; any other format is rejected with an error; the link shows only to enrolled learners. |

**C. Payments**

| ID | Feature | Description | Priority | Done when |
| --- | --- | --- | --- | --- |
| F8 (v1.1) | Checkout | The learner enters name, email and phone once, ticks the combined consent box (F42), and pays the full price via Flutterwave (card, bank transfer, USSD). | Must have | A learner completes payment and Kohorts confirms it through Flutterwave's webhook and a server-side verification call before granting access. Flutterwave's checkout opens with name, email and phone already filled [CHECK C5]. A failed or cancelled payment grants no access and shows a retry button. |
| F9 (v1.1) | Split payout | Each payment splits between the tutor's subaccount and Kohorts at a 6.5% platform fee. Who carries Flutterwave's processing fee is confirmed in build week 1 [CHECK C3]. | Must have | For a ₦100,000 test payment, the Flutterwave settlement report shows the Kohorts platform fee at 6.5% (₦6,500), any VAT as a separate line, and the remainder credited to the tutor's subaccount with the processing fee applied as confirmed in C3. Kohorts never holds the tutor's share. |
| F10 (v1.1) | Tutor earnings view | The tutor sees each payment, fee, net amount, payout status and expected payout date per cohort. | Must have | Each successful payment appears in the tutor's earnings view within 60 seconds with gross, platform fee, VAT, processing fee, net and an expected payout date based on Flutterwave's settlement schedule [CHECK C4]; totals match the Flutterwave dashboard to the kobo. |
| F11 (v1.1) | Chargeback deduction | A chargeback is recorded against the tutor, the learner's access is removed, and the amount comes from the tutor's next payout. | Should have | When Flutterwave reports a chargeback, the payment shows "Disputed" in tutor and admin views within 24 hours; the learner loses cohort access; admin exports that learner's join logs, submissions and login history as evidence in 1 click. If the tutor has no payout within 30 days, the tutor receives an invoice and their Kohort Pages pause until it is paid. A tutor with 2 chargebacks in 90 days appears in the admin review list. |
| F44 (v1.1, new) | Cohort cancellation refund | A tutor cancels a cohort from Cohort admin. Before the first class, every learner gets a full refund. After the first class, each learner gets back price × (classes not held ÷ classes scheduled). Kohorts refunds its fee share in the same proportion. | Must have | A tutor taps Cancel Cohort, sees the refund total per learner and in total, and confirms. Within 24 hours every learner gets an email stating the refund amount, and the refund is started through Flutterwave [CHECK C6]. The tutor's share is taken from future payouts or invoiced, as in F11. The Kohort Page shows "Cohort cancelled" and checkout is blocked. |

**D. Learner account and dashboard**

| ID | Feature | Description | Priority | Done when |
| --- | --- | --- | --- | --- |
| F12 (v1.1) | Account on payment | A learner account is created on successful payment, and the learner is signed in on the Payment Success screen. Later sign-ins use an email one-time code. | Must have | Within 60 seconds of a confirmed payment, the learner sees the Payment Success screen already signed in, with a "Go to My Bootcamps" button, and receives a confirmation email. The session lasts 30 days. A second purchase with the same email adds the cohort to the existing account, not a new one. |
| F13 | My Bootcamps dashboard | Lists every cohort the learner is enrolled in, with next class, due assignments and progress. | Must have | A learner with 2 cohorts sees 2 cards; each shows next class date and time in WAT, the count of assignments due in 7 days, and attendance % and assignments %. |
| F14 | Cohort home | One page per enrolled cohort with schedule, recordings, assignments, announcements and community link. | Must have | An enrolled learner opens the cohort home and reaches any class, recording or assignment in 2 taps or fewer; a non-enrolled user gets a 403 page. |

**E. Live classes and recordings**

| ID | Feature | Description | Priority | Done when |
| --- | --- | --- | --- | --- |
| F15 | Class schedule | The tutor adds classes with date, time, duration and video tool. | Must have | A tutor adds a class and it appears on the cohort home for all enrolled learners within 10 seconds, with time shown in WAT. |
| F16 (v1.1) | Google Meet link creation | For tutors who connect Google, Kohorts creates a Meet link per class through Google Calendar. | Later | A tutor with Google connected saves a class and a Meet link is attached to it within 30 seconds; the event appears on the tutor's Google Calendar. |
| F17 (v1.1) | Pasted class links | Tutors paste a Google Meet, Zoom or Teams link as the cohort's default class link, and can override it for any class. | Must have | A tutor saves a link on a meet.google.com, zoom.us or teams.microsoft.com domain; other domains are rejected with an error. Every class without its own link uses the default link. |
| F18 | Join button | Learners join a class from Kohorts; the button opens 15 minutes before start and closes at class end. | Must have | An enrolled learner taps Join between 15 minutes before start and class end, and the meeting opens in a new tab; outside that window the button is disabled and shows the start time. |
| F19 (v1.1) | Attach Meet recording | After class, the tutor picks the Meet recording from Google Drive using the Google Picker. Kohorts asks the tutor to confirm that the file will be set to "anyone with the link can view", then sets it and attaches it to the class. | Must have | The tutor picks a file and confirms; Kohorts sets the file's sharing [CHECK C1]; an enrolled learner who is signed out of Google plays it on the class page within 60 seconds. Kohorts requests access only to the picked file (drive.file scope). A non-enrolled user cannot see the recording link inside Kohorts. If the tutor declines, nothing is attached and the tutor sees "Learners can't watch this until sharing is on". |
| F20 | Pasted recording link | Tutors using Zoom, Teams or other storage paste a recording link per class. | Should have | A tutor pastes a link and it shows as "Watch recording" on the class page within 10 seconds. |
| F21 | Recording reminder | Kohorts reminds the tutor to attach a recording after each class. | Should have | If no recording is attached 2 hours after class end, the tutor gets an email and an in-app alert; the reminder repeats once at 24 hours, then stops. |

**F. Attendance**

| ID | Feature | Description | Priority | Done when |
| --- | --- | --- | --- | --- |
| F22 | Join-click attendance | Each learner's Join tap during the class window marks them present. | Must have | A learner taps Join within the window and shows as Present on the class register within 10 seconds; a learner with no tap shows Absent after class end. |
| F23 | Manual attendance edit | The tutor or a TA changes any learner's status for any class. | Must have | A tutor or TA switches a learner between Present and Absent, the learner's attendance % updates within 10 seconds, and the change log records who changed it and when. |
| F24 (v1.1) | Google Form check-in link | The tutor or TA attaches a Google Form link to a class; learners see it during the class window. | Should have | A tutor saves a link on a docs.google.com/forms or forms.gle domain, and enrolled learners see a "Check in" button on the class page from class start to class end. On save, the tutor sees "Add your TAs as collaborators on this Form in Google Forms so they can see responses." |

**G. Assignments**

| ID | Feature | Description | Priority | Done when |
| --- | --- | --- | --- | --- |
| F25 | Create assignment | The tutor posts an assignment with title, instructions, optional attachments and due date. | Must have | A tutor posts an assignment and every enrolled learner sees it on the cohort home and gets an email within 5 minutes. |
| F26 | Submit assignment | Learners submit any mix of links (including Google Docs), text (max 5,000 characters) and files (images, PDF, Word, Excel; max 10 MB each, max 5 files). | Must have | A learner submits and sees "Submitted" with a timestamp; a file over 10 MB or of another type is rejected before upload with the limit named; a learner can edit until the tutor marks it reviewed; a late submission is accepted and labelled Late. |
| F27 (v1.1) | Review queue | Tutor and TAs see all submissions, filter by assignment and status, add a comment and mark reviewed, one at a time or in bulk. | Must have | At 360 px width, a TA opens a submission, views images and PDFs inline without downloading, comments and marks it reviewed in 3 taps or fewer. Word and Excel files open as downloads. A tutor or TA selects up to 50 submissions and marks them reviewed in 1 action. The learner sees the status and comment within 10 seconds and the learner's assignments % updates. |
| F28 | Learner progress | Tutor and learner see attendance % and assignments % against the 70% thresholds. | Must have | For a learner with 7 of 10 classes attended and 6 of 10 assignments reviewed, the progress card shows 70% attendance (met) and 60% assignments (not met, 1 more needed). |
| F46 (v1.1, new) | Review backlog alert | Kohorts warns the tutor before the end date when unreviewed submissions could cost learners their certificates. | Must have | 7 days and 2 days before the cohort end date, the tutor and TAs get an email and in-app alert showing the count of unreviewed submissions and the count of learners who would qualify if those were reviewed. No alert is sent when the count is 0. |

**H. Announcements, certificates and notifications**

| ID | Feature | Description | Priority | Done when |
| --- | --- | --- | --- | --- |
| F29 | Announcements | Tutor and TAs post text announcements (max 2,000 characters) to one cohort. | Must have | A post appears on the cohort home for every enrolled learner within 10 seconds and is emailed to them within 5 minutes. |
| F30 | Automatic certificates | On the cohort end date, every learner at or above 70% attendance and 70% assignments gets a PDF certificate. | Must have | At 00:00 WAT after the end date, each qualifying learner receives an email and a Download button for a PDF with learner name, cohort title, tutor name, dates and a unique ID; non-qualifying learners receive none. |
| F31 (v1.1) | Certificate verification | Each certificate has a public page that confirms it is genuine and links tutors to Kohorts. | Must have | Opening kohorts.app/verify/[ID] shows learner name, cohort, tutor and issue date, plus a "Run your cohort on Kohorts" link to the landing page; an unknown ID shows "Certificate not found". |
| F32 | Late certificate issue | If a tutor reviews more work after the end date, qualifying learners get certificates. | Should have | Up to 14 days after the end date, any learner who crosses both thresholds receives a certificate within 10 minutes of the change. |
| F33 | Notifications | Email and in-app alerts for payment, class reminders, new assignments, reviews, announcements and certificates. | Must have | Each event in this list creates an in-app alert within 10 seconds and an email within 5 minutes; a learner can turn off class reminder emails but not payment or certificate emails. |
| F34 | Class reminders | Learners get a reminder before each class. | Should have | Every enrolled learner gets an email and in-app alert 60 minutes before each class start. |

**I. Teaching assistants**

| ID | Feature | Description | Priority | Done when |
| --- | --- | --- | --- | --- |
| F35 | Invite TA | The tutor invites a TA by email to one or more cohorts. | Must have | The invited TA receives an email, signs in with a one-time code and sees only the cohorts they were added to. |
| F36 (v1.1) | TA permissions | TAs can manage attendance, review assignments and post announcements. They see learner name and email only. They cannot see payments or phone numbers, edit cohort settings or invite others. | Must have | A TA signed in sees no earnings, price, payout, settings screens or learner phone numbers; a direct URL to any of those screens returns 403. |
| F37 | Remove TA | The tutor removes a TA from a cohort. | Must have | After removal, the TA's next request to that cohort returns 403; their past reviews and attendance edits stay in the log with their name. |

**J. AI, admin and help**

| ID | Feature | Description | Priority | Done when |
| --- | --- | --- | --- | --- |
| F38 (v1.1) | AI writing helper | Drafts Kohort Page copy and announcements from the tutor's notes using Gemini; the tutor edits and clears flagged phrases before publishing. | Should have | A tutor enters notes of 20 or more words, taps Draft, and gets an editable draft within 15 seconds. Emails and phone numbers in the notes are removed before sending to Gemini. Any risky phrase or naira amount not in the notes shows a yellow warning on its sentence, and Publish stays disabled until the tutor clears each warning. Nothing is published until the tutor taps Publish. See 3.3. |
| F39 (v1.1) | Admin tutor approval | Admin reviews verification requests and approves or rejects with a reason. | Must have | Admin sees each pending request with documents and the name-match result, approves or rejects with a reason within 2 working days of submission, and the tutor gets the result by email within 5 minutes. While pending, the tutor sees "Under review, decision by [date]". |
| F40 | Admin suspension | Admin suspends a tutor or a single cohort. | Must have | A suspended tutor's Kohort Pages show "Enrolment paused" and checkout is blocked within 60 seconds; enrolled learners keep access to existing recordings and materials. |
| F41 (v1.1) | Admin payment overview | Admin sees all payments, fees, disputes and payouts across tutors. | Later | Admin filters payments by tutor, cohort, date and status, and platform fee totals match the Flutterwave settlement report for the same date range. |
| F45 (v1.1, new) | Take-home calculator | A calculator on the landing page shows a tutor their take-home on Kohorts for a given price and class size. | Should have | A visitor enters a price and number of learners and sees, within 1 second, gross sales, the 6.5% Kohorts fee, VAT on that fee, and net take-home before Flutterwave processing fees, with a note that processing fees apply. |
| F47 (v1.1, new) | Help channel | A Help link on every screen opens a help page with articles and a help email address. | Must have | Every signed-in screen and the Kohort Page show a Help link; the help page lists 6 articles (Meet recording plans, attaching recordings, payouts and fees, adding a TA, Form check-in, certificates) and the help email; every email to it gets a human reply within 1 working day. |

**K. Privacy and consent**

| ID | Feature | Description | Priority | Done when |
| --- | --- | --- | --- | --- |
| F42 (v1.1) | Consent capture | Learners confirm they are 18 or older and accept the Terms (no refunds) and Privacy Policy in one box at checkout. Tutors accept the Terms and Privacy Policy at sign-up. | Must have | Checkout and sign-up cannot complete without the box ticked. The checkout box reads "I am 18 or older and I agree to the Terms (no refunds) and Privacy Policy", and the line "No refunds after payment, except if the tutor cancels" appears in bold directly above the Pay button. Each acceptance stores the date, time and policy version. |
| F43 | Account deletion | A user requests deletion from settings; Kohorts deletes personal data within 30 days. | Must have | A user taps Delete Account and confirms; within 30 days their name, email, phone and files are erased; payment records are kept for the period in A3, with name, email and phone removed. |

### 3.3 AI behavior rules (v1.1)

v1 has one AI feature: the writing helper (F38), using Google Gemini.

**What it does:** turns a tutor's notes into a draft for a Kohort Page (headline, description, outline, who it is for) or an announcement.

**What it can see (v1.1):** the notes the tutor types, with email addresses and phone numbers removed before sending, and the cohort's title, dates, price and schedule. Above the notes box the tutor sees "Do not paste learner details here."

**What it cannot see:** learner names, emails, phone numbers, submissions, payments, or data from any other tutor.

**What it must never do:**

- Publish or send anything without the tutor tapping Publish or Post.
- Invent facts: prices, dates, job guarantees, salary claims, accreditation or testimonials not present in the tutor's notes.
- Promise refunds, since the v1 policy is no refunds outside cohort cancellation.
- Produce text over 1,500 words for a page or 300 words for an announcement.

**Outcome claims (v1.1):** the AI may describe skills, projects and tools taught. Claims about jobs, salaries or earnings appear only if they are in the tutor's notes, and they are flagged for the tutor to confirm.

**Risky-phrase check (v1.1):** before a draft is shown, Kohorts scans it for these words and phrases: guarantee, guaranteed, job, hired, salary, earn, income, certified by, accredited, approved by, and any naira amount not in the tutor's notes. Each match shows a yellow warning on its sentence. The tutor must edit or clear each warning before Publish turns on.

**Handling uncertainty:** if the notes are under 20 words or miss the price or dates, it asks the tutor for the missing detail and drafts nothing.

**Tone:** plain, warm, direct Nigerian English. Short sentences. No hype words such as "life-changing" or "guaranteed".

**Human approval:** every output is a draft in an editable field. The tutor approves every word by publishing.

**Global rules for all AI in Kohorts (v1 and later)**

- No learner personal data is sent to an AI model in v1.
- Production uses the paid Gemini API tier only, under terms where prompts are not used to train Google's models [CHECK C9].
- AI never makes a grading, attendance or certificate decision. Those stay with the tutor or the fixed 70% rules.
- If the AI call fails or exceeds 15 seconds, the tutor sees "Draft unavailable, try again or write your own" and the form keeps their notes.
- Each draft has a "Report this draft" link that logs the notes, output and reason for admin review (v1.1). Admin reviews each report within 5 working days. When 3 reports name the same problem, admin adds that phrase to the risky-phrase list.
- AI spend counts toward the monthly cost ceiling in 4.1.

**Planned AI for later:** recording summaries (tutor approves before learners see them) and draft assignment feedback (tutor approves before learners see it). Both follow the global rules above.

### 3.4 Screens and flows (v1.1)

**Public**

| # | Screen | Purpose | Access | Key actions | Leads to |
| --- | --- | --- | --- | --- | --- |
| 1 (v1.1) | Landing page | Explains Kohorts to tutors | Anyone | Sign up as tutor, use take-home calculator | Tutor sign-up |
| 2 | Kohort Page | Sells one cohort | Anyone | Enrol | Checkout |
| 3 | Checkout | Collects learner details, consent and payment | Anyone | Pay | Payment success or failed |
| 4 | Payment success | Confirms enrolment | Paying learner | Go to My Bootcamps | My Bootcamps |
| 5 | Payment failed or pending | Explains status and next step | Paying learner | Retry, check status | Checkout or Payment success |
| 6 | Sign in | Email one-time code login | Any user | Request code, enter code | Role dashboard |
| 7 | Certificate verification | Confirms a certificate | Anyone | Open Kohorts landing page | Landing page |
| 8 | Terms and privacy | Policy text | Anyone | None | None |
| 36 (v1.1) | Help page | Help articles and help email | Anyone | Open article, email help | None |

**Learner**

| # | Screen | Purpose | Access | Key actions | Leads to |
| --- | --- | --- | --- | --- | --- |
| 9 | My Bootcamps | All enrolled cohorts | Learner | Open cohort | Cohort home |
| 10 | Cohort home | Schedule, announcements, community link, progress | Enrolled learner | Join class, open assignment, open recording | Class page, Assignment page |
| 11 | Class page | One class: join, check in, recording | Enrolled learner | Join, Check in, Watch | External meeting, Recording |
| 12 | Assignment page | Instructions, submission, review status | Enrolled learner | Submit, edit | Cohort home |
| 13 | Certificates | Earned certificates | Learner | Download, copy verify link | Certificate verification |
| 14 | Notifications | In-app alerts | Any signed-in user | Open alert | Linked screen |
| 15 | Account settings | Profile, email reminders, delete account | Any signed-in user | Save, delete | Sign in (after deletion) |

**Tutor**

| # | Screen | Purpose | Access | Key actions | Leads to |
| --- | --- | --- | --- | --- | --- |
| 16 | Tutor sign-up | Create tutor account | Anyone | Enter email and code | Verification |
| 17 | Verification | KYC and payout account | Tutor | Submit documents | Tutor dashboard |
| 18 | Tutor dashboard | All cohorts, alerts, next classes | Tutor | Create cohort, open cohort | Cohort editor, Cohort admin |
| 19 | Cohort editor | Create and edit cohort, AI draft, publish | Tutor | Save, Draft with AI, Publish | Kohort Page preview |
| 20 (v1.1) | Cohort admin | Learners list, schedule, settings, close enrolment, cancel cohort | Tutor | Add class, close enrolment, cancel cohort | Class editor, Learners |
| 21 | Class editor | Class details, link, recording, check-in form | Tutor, TA (check-in only) | Save, Pick recording | Cohort admin |
| 22 | Learners | Enrolled learners with progress | Tutor, TA | Open learner | Learner detail |
| 23 (v1.1) | Learner detail | One learner's attendance, submissions, contact and payment status | Tutor (all fields); TA (name, email, attendance, submissions only) | Edit attendance | Learners |
| 24 | Attendance register | Per-class Present and Absent list | Tutor, TA | Edit status | Cohort admin |
| 25 | Assignments manager | Create and list assignments | Tutor | Post assignment | Review queue |
| 26 | Review queue | Submissions to review | Tutor, TA | Comment, mark reviewed, bulk mark reviewed | Next submission |
| 27 | Announcements | Post and list announcements | Tutor, TA | Draft with AI, Post | Cohort admin |
| 28 | Earnings | Payments and payouts | Tutor | Filter, export CSV | None |
| 29 | Team | Invite and remove TAs | Tutor | Invite, remove | None |
| 30 (v1.1) | Integrations | Connect Google for recordings; set default class link and community link | Tutor | Connect, disconnect, save links | Tutor dashboard |
| 31 | Tutor profile | Photo, bio, links | Tutor | Save | Tutor dashboard |

**TA (v1.2):** TAs use screens 14, 15, 21 to 24, 26 and 27, within the limits in F36.

**Admin**

| # | Screen | Purpose | Access | Key actions | Leads to |
| --- | --- | --- | --- | --- | --- |
| 32 | Admin approvals | Pending tutor verifications | Admin | Approve, reject | Tutor record |
| 33 | Tutor record | One tutor's details, cohorts, status | Admin | Suspend, reinstate | Admin approvals |
| 34 (v1.1) | Disputes and refunds | Disputed payments, chargeback history, cancellation refunds | Admin | Export evidence, view refund status | None |
| 35 | AI reports | Reported AI drafts | Admin | Review, close | None |

**Core flows**

1. **Tutor onboarding:** Landing page > Tutor sign-up > Verification > (admin decides within 2 working days) > Tutor dashboard
2. **Publish a cohort:** Tutor dashboard > Cohort editor > Draft with AI > Clear warnings > Kohort Page preview > Publish
3. **Learner enrolment:** Kohort Page > Checkout > Flutterwave > Payment success (signed in) > My Bootcamps
4. **Attend a class:** My Bootcamps > Cohort home > Class page > Join > External meeting
5. **Recording (v1.1):** Class editor > Pick recording (Google Picker) > Confirm link sharing > Class page shows recording
6. **Submit and review:** Assignment page > Submit > Review queue > Mark reviewed > Learner sees status
7. **Certificate:** Backlog alerts at 7 and 2 days > Cohort end date > Threshold check > Email > Certificates > Download
8. **TA setup:** Team > Invite TA > TA signs in > Review queue
9. **Cohort cancellation (v1.1):** Cohort admin > Cancel cohort > Refund summary > Confirm > Learner emails > Disputes and refunds (admin)

---

## Layer 4: How will it be built and held to standard?

### 4.1 Quality rules (v1.1)

| Area | Standard |
| --- | --- |
| Speed (v1.1) | Kohort Page and Checkout reach Largest Contentful Paint in 2.5 seconds or less on a mid-range Android phone over 4G (tested with Lighthouse mobile throttling). Every other screen loads in 3 seconds or less. Any button action shows a response within 1 second. Kohort Page ships 200 KB or less of compressed JavaScript, and its first load is 1 MB or less in total, images included. Uploaded images are resized to 1,200 px wide or less. |
| Security (v1.1) | Sign-in by 6-digit email code that expires in 10 minutes; 5 wrong tries lock sign-in for 15 minutes. Sessions expire after 30 days of inactivity. 4 roles (admin, tutor, TA, learner), checked on the server for every request. HTTPS only, TLS 1.2 or higher. Card and bank details are entered on Flutterwave's hosted checkout and never touch Kohorts servers. Every Flutterwave webhook is signature-checked and re-verified by API before access is granted. Uploaded files are checked by file type and size on the server and served through links that expire in 15 minutes. Admin accounts require an authenticator-app second factor. Emails are sent from a Kohorts domain with SPF, DKIM and DMARC set, and the sign-in code email lands in the Gmail inbox, not spam, in 9 of 10 test sends. |
| Privacy (v1.2) | Collected: learner name, email, phone, submissions, attendance, login times; tutor name, phone, email, ID document, bank account. Learners' data is visible to their tutor; TA access follows F36. Tutor ID images are deleted 30 days after the admin decision; Kohorts keeps the decision, date and admin name. Learner data is deleted 2 years after cohort end [ASSUMPTION]; payment records are kept 6 years for tax with personal fields removed on account deletion [ASSUMPTION]. Aligned with the Nigeria Data Protection Act 2023: consent captured with policy version, privacy policy published, deletion within 30 days of request, breach notice to the Nigeria Data Protection Commission within 72 hours [CHECK C10]. |
| Cost limits (v1.1) | Total monthly spend on hosting, database, email, storage, monitoring and AI: $50 from launch up to 50 active cohorts, and $150 at 200 active cohorts [ASSUMPTION for 200]. The $50 includes paid hosting and paid email plans [CHECK C7, C8]. AI spend capped at $10 per month in v1, with a hard stop that shows tutors "Draft unavailable" when the cap is reached. Flutterwave fees are paid from transactions and sit outside these limits. |
| Accessibility | Target WCAG 2.1 AA. Checks: (1) text contrast 4.5:1 or higher; (2) tap targets 44 × 44 px or larger; (3) every form field has a visible label and a text error message; (4) every screen works with keyboard only, with a visible focus ring; (5) every image has alt text, and status is never shown by colour alone. |
| Responsiveness | Layouts tested at 360, 768, 1024 and 1440 px widths with no horizontal scroll. Learner screens are designed at 360 px first. Browsers tested: latest 2 versions of Chrome, Safari, Firefox, Edge, Samsung Internet, and the latest Opera Mini in its full-rendering mode. |
| Uptime and recovery | 99.5% monthly uptime for Kohort Pages, Checkout and sign-in. Failed webhooks are retried for 72 hours; zero paid learners left without access after 1 hour, checked by a daily reconciliation against Flutterwave. Database backed up daily with 7-day retention; recovery point 24 hours, recovery time 4 hours. |

### 4.2 Technology choices (v1.1)

| Layer | Choice | Why | Alternative considered |
| --- | --- | --- | --- |
| Platform | Responsive web app; installable as a PWA in v1.1 | Learners arrive from social links on phones; no app store step | Native Android app |
| Frontend and backend | Next.js with TypeScript | Same stack as Kujera, so patterns carry over; one codebase for pages and server logic | Laravel |
| Database | PostgreSQL | Same as Kujera; handles relational cohort, payment and attendance records | MySQL |
| Data access | Prisma | Same as Kujera; type-safe queries suit agent-written code | Drizzle |
| Hosting (v1.1) | Vercel, paid plan [CHECK C7] | The free plan is for non-commercial use; the paid plan covers a business launch with zero server management | Railway |
| Managed Postgres | Neon [ASSUMPTION] | Free tier, branching for test data | Supabase Postgres |
| Auth | Auth.js with email one-time codes | Works with Next.js and Prisma; no passwords to manage | Clerk (cost per user after free tier) |
| Payments | Flutterwave Standard checkout with subaccounts and split payments | Decided; accepts card, transfer and USSD in Nigeria; split payouts keep Kohorts from holding funds | Paystack split payments |
| Email | Resend [ASSUMPTION] | Free tier of 3,000 emails per month for testing; paid tier from launch (R14) | Brevo |
| File storage (assignments) | Cloudflare R2 [ASSUMPTION] | No egress fees, so file downloads by tutors and learners cost nothing extra | Vercel Blob |
| Video tool integration (v1.1) | Pasted links for Google Meet, Zoom and Teams | No Google review needed before launch; Meet links are free with any Google account | Google Calendar API for auto-created Meet links (Later) |
| Recordings | Google Picker + Google Drive API with the drive.file scope | Kohorts gets access only to files the tutor picks; avoids restricted Drive scopes | Full Drive read access (needs a paid security assessment) |
| AI model (v1.1) | Google Gemini via the Gemini API, paid tier; Flash-tier model [ASSUMPTION] | Decided by owner; cost per draft tested in A10 | Claude Haiku |
| Analytics | PostHog free tier [ASSUMPTION] | Event tracking for goals G1 to G5 | Google Analytics 4 |
| Error monitoring | Sentry free tier [ASSUMPTION] | Catches payment and webhook errors | Logtail |
| Background jobs (v1.3) | A jobs table in PostgreSQL, run by Vercel Cron every 5 minutes [CHECK C14] | No new service or bill; each job is a row that can be seen and retried | Hosted job queue service |
| Certificates and images (v1.3) | @react-pdf/renderer for certificate PDFs; sharp for image resizing | Free; certificate layout written like the app's screens; sharp is the image library Next.js uses | Browser-based PDF rendering |

**Build constraints (v1.2)**

- The Google consent screen and brand verification for the drive.file scope are owner tasks in 5.4 week 1 [CHECK C2].
- Flutterwave subaccounts, split rules and webhooks are reviewed by the owner on every payment flow. Live Flutterwave keys are stored only in Vercel environment settings and are never used in development.
- Technology is limited to the choices in this table.
- How the coding agent plans, builds, tests and reports: AGENTS.md 5.1 to 5.4.

### 4.3 Links to other context files (v1.1)

All links are filled before build week 1 starts. This is a launch gate in 5.4.

| File | Purpose | Link |
| --- | --- | --- |
| Brand guide | Logo, colours, type, tone | [add link] |
| Design files (Figma) | Screens 1 to 36 | [add link] |
| Reference screenshot: My Bootcamps | Learner dashboard model | [add link] |
| Pricing sheet | Platform fee, VAT, Flutterwave fees, tutor take-home examples | [add link] |
| Competitor notes | Selar, Nestuge, Skool, Udemy, Google Classroom | [add link] |
| User interview notes | Tutor and learner validation | [add link] |
| Technical spec | Build notes for the agent (written after this PRD) | [add link] |
| Kujera repository | Stack patterns to reuse | [add link] |
| Audit report v1.0 | Debate, fix log and verdict behind v1.1 | docs/Kohorts_PRD_v1.0_Audit.md (v1.2) |
| Agent rules (v1.2) | How the coding agent builds Kohorts | AGENTS.md (repo root) |
| Design system (v1.2) | Components and tokens for every screen | [add link] |

---

## Layer 5: When, and what if?

### 5.1 Risks, assumptions and checks (v1.1)

**Risks**

| # | Risk | Likelihood | Impact | Mitigation | Owner |
| --- | --- | --- | --- | --- | --- |
| R1 | Tutors do not switch from WhatsApp, Forms and Selar | High | High | Onboard the first 10 tutors by hand; get 3 written tutor commitments before build week 4 (5.4); set up their first cohort with them; show admin hours saved | Elvis |
| R2 (v1.1) | Tutors compare the 6.5% fee with Selar (4% + ₦50 per NGN sale) and stay on Selar | High | High | Take-home calculator on the landing page (F45); review the fee after the first 10 cohorts | Elvis |
| R3 | Payment succeeds but webhook fails or is delayed, leaving a paid learner locked out | Medium | High | Server-side verification on redirect, webhook retries for 72 hours, hourly reconciliation job, admin "grant access" action | Elvis |
| R4 | Bank transfer payments stay pending for hours | High | Medium | Pending screen with status check; email the learner when confirmed; hold the seat for 2 hours | Elvis |
| R5 | Flutterwave subaccount payouts delayed or held for compliance | Medium | High | Show payout status and expected date in Earnings; document settlement times in tutor onboarding; keep an escalation contact at Flutterwave | Elvis |
| R6 | Chargebacks under a no-refund policy hurt tutors | Medium | Medium | Terms ticked at checkout; one-click evidence export (F11); chargeback deducted from tutor payout as agreed | Tutor, Elvis |
| R7 | Google Meet recording needs a paid Google Workspace or Google One plan; tutors on free Gmail cannot record [CHECK C13] | High | Medium | State this in onboarding and help articles; allow pasted recording links (F20) | Elvis |
| R8 (v1.1) | Google consent screen setup for the drive.file scope takes longer than planned | Low | Medium | Start in build week 1; auto Meet links moved to Later so no sensitive scope is needed | Elvis |
| R9 | Learners share accounts or recording links with non-payers | Medium | Medium | Recordings visible only inside Kohorts; flag accounts signed in from 3 or more devices in 24 hours; tutor can remove a learner | Elvis |
| R10 | Drive recordings set to "anyone with the link" leak if a learner copies the link | Medium | Medium | Tutor confirms sharing (F19); accept for v1; move to per-learner sharing or hosted video in v2 | Elvis |
| R11 | Join clicks overstate attendance (learner taps Join and leaves) | High | Medium | Tutor and TA edit (F23); Google Form check-in (F24); native check-in in v2 | Tutor |
| R12 | Personal data breach (ID documents, phone numbers) | Low | High | Role checks on every request; ID files in private storage with 15-minute links and deleted 30 days after decision; 72-hour breach process | Elvis |
| R13 | Solo builder runs out of time | High | High | Build Must-have features first; Should-haves only in week 7; weekly scope review against 5.4 | Elvis |
| R14 | Free email tier caps at 100 emails per day [ASSUMPTION], below one announcement to a 100-learner cohort plus reminders | High | Medium | Start on Resend's paid tier at launch; keep it inside the $50 ceiling | Elvis |
| R15 (v1.1) | Selar or Nestuge adds attendance and certificates | Medium | High | Ship certificate verification (F31) at launch; build the weekly progress data incumbents lack; own the tutor relationship through hands-on onboarding | Elvis |
| R16 (v1.1) | 25 Dec to 1 Jan falls in build weeks 4 and 5 | High | Medium | Week 5 carries the lightest load in 5.4; no tutor-facing deadlines that week | Elvis |

**Assumptions**

| # | Assumption | How we confirm | By when |
| --- | --- | --- | --- |
| A1 | Tutors spend 6 to 10 hours a week on admin; 5% to 10% drop off between form and transfer; 20% to 40% of learners go inactive by week 4 | Interviews with 5 tutors | Before launch |
| A2 | Learner data deleted 2 years after cohort end | Legal review | Before launch |
| A3 | Payment records kept 6 years for tax | Legal review | Before launch |
| A4 | NDPA 2023 breach notice due within 72 hours | Legal review (C10) | Before launch |
| A5 (v1.1) | Monthly cost ceiling of $150 at 200 cohorts | Cost model from vendor pricing pages | Build week 2 |
| A6 (v1.1) | Hosting on Vercel's paid plan | Confirm plan price and limits (C7) | Build week 1 |
| A7 | Managed Postgres on Neon | Confirm free tier storage and compute limits | Build week 1 |
| A8 (v1.1) | Email via Resend, paid tier from launch; free tier capped at 100 emails per day | Check Resend pricing page (C8) | Build week 1 |
| A9 | Assignment files on Cloudflare R2 | Confirm pricing and Nigeria access | Build week 1 |
| A10 (v1.1) | AI writing helper uses a Gemini Flash-tier model on the paid tier | Test 20 drafts on 2 Gemini Flash-tier models for quality and cost; pick 1 | Build week 3 |
| A11 | Analytics on PostHog free tier | Confirm event limits | Build week 1 |
| A12 | Error monitoring on Sentry free tier | Confirm event limits | Build week 1 |
| A13 | Public domain is kohorts.app | Check availability and buy | Build week 1 |
| A14 (v1.1) | Average cohort price of ₦80,000, used for the G5 target | Price data from the first 10 cohorts | 90 days after launch |
| A15 (v1.1) | Build starts 1 Dec 2026 and launch is 26 Jan 2027 | Owner confirms start date | 30 Nov 2026 |

**Checks before build (v1.1)**

| # | Check | Affects | Confirm with | By when |
| --- | --- | --- | --- | --- |
| C1 | The drive.file scope lets Kohorts set "anyone with the link can view" on a file the tutor picked | F19 | Google Drive API docs and a test | Build week 1 |
| C2 | The drive.file scope needs only brand verification of the consent screen, not a sensitive-scope review | F19, 4.2 | Google OAuth docs | Build week 1 |
| C3 | In split payments, Flutterwave's processing fee can be charged to the tutor's subaccount | F9 | Flutterwave docs or account manager | Build week 1 |
| C4 | Flutterwave's settlement schedule for subaccounts | F10 | Flutterwave docs or account manager | Build week 1 |
| C5 | Flutterwave checkout accepts prefilled name, email and phone | F8 | Flutterwave docs and a test | Build week 1 |
| C6 | Flutterwave can refund a split payment, full or partial, with each party's share reversed | F44 | Flutterwave docs or account manager | Build week 1 |
| C7 | Vercel's free plan is non-commercial; price of the paid plan | 4.1, 4.2 | Vercel pricing and terms | Build week 1 |
| C8 | Resend free tier daily cap and paid tier price | 4.1, R14 | Resend pricing page | Build week 1 |
| C9 | Paid Gemini API tier terms state that prompts are not used to train Google's models | 3.3 | Gemini API terms | Build week 3 |
| C10 | NDPA: one combined consent box is valid; 18+ gate is enough to exclude children's data rules; 72-hour breach notice; retention periods | F42, 4.1 | Lawyer | Before launch |
| C11 | No-refund terms plus the F44 cancellation rule meet Nigerian consumer protection law | F42, F44 | Lawyer | Before launch |
| C12 | VAT is added on top of the 6.5% platform fee and how it is filed | F9, F10, F45 | Accountant | 7 Dec 2026 |
| C13 | Which Google plans allow Meet recording | R7, help articles | Google Workspace docs | Build week 1 |
| C14 (v1.3) | Vercel Cron on the chosen paid plan can run every 5 minutes, and each run finishes within the plan's function time limit | 4.2 Background jobs | Vercel docs and a test | Build week 1 |

### 5.2 Edge cases (v1.1)

| # | Area | Scenario | What the system does | What the user sees |
| --- | --- | --- | --- | --- |
| E1 | Payments | Payment succeeds but the invite email fails | Account is still created; email retried 3 times over 30 minutes; failure logged for admin | Payment success screen, signed in, with a "Go to My Bootcamps" button |
| E2 | Payments | Payment pending (bank transfer not confirmed) | Seat held for 2 hours; status checked every 5 minutes; seat released if not confirmed | "Payment pending. We'll email you when it clears." with a Check status button |
| E3 (v1.1) | Payments | Last seat is held by another learner in checkout | Enrolment counts the held seat (F6); a new checkout cannot start | "This cohort is full right now. A seat may open in [minutes left on the hold]." with the tutor's other open cohorts |
| E4 (v1.1) | Payments | A bank transfer clears after its 2-hour hold expired and the seat was sold | Access granted anyway; capacity exceeded by 1; tutor alerted | Learner: normal success. Tutor: "1 learner over capacity" alert |
| E5 | Payments | Tutor closes enrolment mid-checkout | Checkouts started before closing may complete for 30 minutes | Learner completes normally; new visitors see "Enrolment closed" |
| E6 | Payments | Learner pays twice for the same cohort | Second payment flagged; admin reverses it through Flutterwave within 5 working days (duplicate, not a refund) | "You are already enrolled" on second attempt; email confirming the duplicate reversal |
| E7 | Payments | Chargeback filed | Access removed; payment marked Disputed; amount deducted from tutor's next payout or invoiced (F11) | Learner loses access; tutor sees Disputed in Earnings |
| E8 | Classes | Tutor deletes a class | Class excluded from attendance %; learners notified | Class removed from schedule; email "Class on [date] cancelled" |
| E9 (v1.1) | Classes | Tutor reschedules a class | Class time updated; learners notified; Join window moves | Updated time on class page; email with new time |
| E10 | Classes | Video link broken or meeting not started | Join still logged as attendance; learner can report a problem | "Link not working? Tell your tutor" button that alerts tutor and TAs |
| E11 (v1.1) | Classes | Tutor disconnects Google | Attached recordings stay; new Drive recordings cannot be attached until the tutor reconnects; pasted links still work | Tutor: "Google disconnected. Reconnect to attach Drive recordings." |
| E12 | Certificates | Learner misses 70% by one class or one assignment | No certificate issued on end date; F32 issues one if the tutor edits records within 14 days | Progress card: "1 more class needed"; tutor sees the learner in a "Near threshold" list |
| E13 | Certificates | Cohort has zero assignments | Assignments threshold treated as met | Progress card shows attendance only |
| E14 | TAs | TA removed mid-cohort | Access cut on next request; past actions kept in the log | TA: "You no longer have access to this cohort" |
| E15 | Accounts | Learner changes email | Code sent to the new email; change confirmed only after code entry; old email notified | "Check your new email for a code" |
| E16 | Accounts | Learner uses a different email for a second cohort | Treated as a separate account in v1 | Two separate dashboards; help article on merging by request |
| E17 | Admin | Tutor suspended with an active cohort | New enrolment blocked; enrolled learners keep access to existing materials; payouts on hold | Learners: banner "This cohort is paused by Kohorts"; tutor: email with reason |
| E18 | Duration | Cohort longer than 6 months (up to 12) | Same rules; attendance and assignments % run over the full cohort; certificate on end date | Progress shown with a month-by-month filter |
| E19 | Connectivity | Connection drops during submission | Text drafts saved on the device every 10 seconds; file upload resumes or retries 3 times | "Upload failed. Retry" with the draft kept |
| E20 | Connectivity | Learner opens a recording on a 3G connection | Drive player picks a lower quality | Warning: "This video uses data. Size: [x] MB" when Drive returns the file size |
| E21 (v1.1) | Cohort | Tutor cancels a whole cohort after learners paid | F44 refund rule runs | Learners: email with refund amount; Kohort Page: "Cohort cancelled" |
| E22 (v1.1) | Accounts | Tutor asks to delete their account with an active cohort | Deletion blocked until every cohort ends or is cancelled under F44 | "Finish or cancel your active cohorts before deleting your account" |
| E23 (v1.1) | Consent | Tutor reports a learner is under 18 | Admin contacts the learner; if confirmed, access removed and a full refund issued as a cancellation for that learner | Learner: email explaining the 18+ rule and the refund |
| E24 (v1.1) | Recordings | Tutor deletes or moves the recording file in Drive | Class page detects the file is missing on next load; tutor alerted | Learner: "Recording unavailable. Your tutor has been told." Tutor: email to re-attach |
| E25 (v1.3) | Certificates | Cohort ends with zero classes held | Attendance threshold treated as not met; the certificate run skips the cohort and alerts admin | Before class 1, the progress card shows "Attendance starts after your first class on [date]." |

### 5.3 Decisions and open questions (v1.1)

**Decisions made in the v1.0 audit**

| # | Decision | Date |
| --- | --- | --- |
| D1 | Platform fee is 6.5% per sale; VAT is added on top as its own line [CHECK C12] | 23 Nov 2026 |
| D2 | Google Form responses are reconciled by hand in v1 | 23 Nov 2026 |
| D3 | Certificates carry the Kohorts logo and the tutor's name as text; no signature image in v1 | 23 Nov 2026 |
| D4 | Phone dial-in attendance is set by tutor or TA edit (F23) | 23 Nov 2026 |
| D5 | Cohort cancellation: full refund before the first class; pro rata refund after; Kohorts refunds its fee share in the same proportion (F44) [CHECK C6, C11] | 23 Nov 2026 |
| D6 | No payout hold for chargebacks; deduct, invoice and pause (F11) | 23 Nov 2026 |
| D7 | Merging two learner accounts is a manual admin task in v1 | 23 Nov 2026 |
| D8 | Meet links are pasted in v1; auto-created links move to Later | 23 Nov 2026 |
| D9 | Learners must be 18 or older in v1 | 23 Nov 2026 |
| D10 (v1.3) | Background jobs run from a jobs table in PostgreSQL through Vercel Cron every 5 minutes [CHECK C14] | 24 Nov 2026 |
| D11 (v1.3) | Zero classes held at cohort end: attendance not met; admin alerted (E25) | 24 Nov 2026 |
| D12 (v1.3) | Libraries: @react-pdf/renderer (certificates), sharp (images), @axe-core/playwright (accessibility tests) | 24 Nov 2026 |

**Open questions**

| # | Question | Why it matters | Options | Who decides | Deadline |
| --- | --- | --- | --- | --- | --- |
| OQ1 (v1.1) | If C3 shows Flutterwave's processing fee cannot sit with the tutor's subaccount, who pays it? | Kohorts would pay the processing fee out of its 6.5% on every sale | Kohorts absorbs it; raise the fee; learner pays it as a checkout line | Elvis | Build week 1 |
| OQ3 | What retention periods apply to learner and payment data? | NDPA compliance and storage cost | Per A2 and A3; shorter after legal review | Elvis with legal counsel | Before launch |
| OQ9 (v1.1) | Do we add phone-number login in v2 for learners who miss emails? | Email codes can be delayed for learners on weak networks | Add SMS code in v2; add WhatsApp code in v2; keep email only | Elvis | After 90 days of launch data |
| OQ10 (v1.1) | What happens to an F44 refund if Flutterwave cannot reverse a split payment (C6 fails)? | F44 cannot work as written | Kohorts pays learners by bank transfer and invoices the tutor; tutor refunds directly with proof uploaded | Elvis | Build week 1 |

### 5.4 Build timeline (v1.1, new)

Build runs 8 weeks from 1 Dec 2026, with launch on 26 Jan 2027 [ASSUMPTION A15]. Each week ends with the listed features passing their Done when checks.

| Week | Dates | Features and tasks | Gate at end of week |
| --- | --- | --- | --- |
| 1 | 1 to 7 Dec | Checks C1 to C9, C13 and C14 (v1.3); Google consent screen; Flutterwave test account; context file links filled (4.3); F1, F2, F42 | All week-1 checks answered; any failed check has an updated feature |
| 2 | 8 to 14 Dec | F4, F5, F6, F7, F39, F47 | A test tutor publishes a Kohort Page |
| 3 | 15 to 21 Dec | F8, F9, F10, F12, F44; webhook retries and reconciliation; A10 Gemini test | A ₦100 live test payment splits and grants access |
| 4 | 22 to 28 Dec | F13, F14, F15, F17, F18, F22, F23 | 3 tutors have committed in writing to run a cohort in the launch month; if fewer than 3, stop and rethink before week 5 |
| 5 | 29 Dec to 4 Jan | F19, F33 (lighter week, R16) | A recording plays for a signed-out test learner |
| 6 | 5 to 11 Jan | F25, F26, F27, F28, F46, F29, F30, F31 | A test learner earns and verifies a certificate |
| 7 | 12 to 18 Jan | F35, F36, F37, F40, F43; then Should haves in this order: F38, F24, F20, F21, F34, F32, F3, F11, F45 | All Must haves pass; any Should have not done moves to after launch |
| 8 | 19 to 25 Jan | Full Done when test run; accessibility checks; email inbox test; 6 help articles; pilot cohorts set up with the 3 committed tutors | Every Must have passes; C10 and C11 answered by a lawyer |
| Launch | 26 Jan 2027 | Kohort Pages for pilot cohorts go live | |

---

## Reliability check (v1.3)

Re-run after the v1.3 decisions. All 47 features pass both checks, and 0 banned vague words remain.

### 1. Done-when audit

| Feature | Priority | Has "Done when"? | Testable as pass/fail? |
| --- | --- | --- | --- |
| F1 Tutor sign-up | Must have | Yes | Yes |
| F2 Tutor verification and payout setup | Must have | Yes | Yes |
| F3 Tutor profile | Should have | Yes | Yes |
| F4 Create cohort | Must have | Yes | Yes |
| F5 Publish Kohort Page | Must have | Yes | Yes |
| F6 Close enrolment | Must have | Yes | Yes |
| F7 Social links | Must have | Yes | Yes |
| F8 Checkout | Must have | Yes | Yes |
| F9 Split payout | Must have | Yes | Yes |
| F10 Tutor earnings view | Must have | Yes | Yes |
| F11 Chargeback deduction | Should have | Yes | Yes |
| F12 Account on payment | Must have | Yes | Yes |
| F13 My Bootcamps dashboard | Must have | Yes | Yes |
| F14 Cohort home | Must have | Yes | Yes |
| F15 Class schedule | Must have | Yes | Yes |
| F16 Google Meet link creation | Later | Yes | Yes |
| F17 Pasted class links | Must have | Yes | Yes |
| F18 Join button | Must have | Yes | Yes |
| F19 Attach Meet recording | Must have | Yes | Yes |
| F20 Pasted recording link | Should have | Yes | Yes |
| F21 Recording reminder | Should have | Yes | Yes |
| F22 Join-click attendance | Must have | Yes | Yes |
| F23 Manual attendance edit | Must have | Yes | Yes |
| F24 Google Form check-in link | Should have | Yes | Yes |
| F25 Create assignment | Must have | Yes | Yes |
| F26 Submit assignment | Must have | Yes | Yes |
| F27 Review queue | Must have | Yes | Yes |
| F28 Learner progress | Must have | Yes | Yes |
| F29 Announcements | Must have | Yes | Yes |
| F30 Automatic certificates | Must have | Yes | Yes |
| F31 Certificate verification | Must have | Yes | Yes |
| F32 Late certificate issue | Should have | Yes | Yes |
| F33 Notifications | Must have | Yes | Yes |
| F34 Class reminders | Should have | Yes | Yes |
| F35 Invite TA | Must have | Yes | Yes |
| F36 TA permissions | Must have | Yes | Yes |
| F37 Remove TA | Must have | Yes | Yes |
| F38 AI writing helper | Should have | Yes | Yes |
| F39 Admin tutor approval | Must have | Yes | Yes |
| F40 Admin suspension | Must have | Yes | Yes |
| F41 Admin payment overview | Later | Yes | Yes |
| F42 Consent capture | Must have | Yes | Yes |
| F43 Account deletion | Must have | Yes | Yes |
| F44 Cohort cancellation refund | Must have | Yes | Yes |
| F45 Take-home calculator | Should have | Yes | Yes |
| F46 Review backlog alert | Must have | Yes | Yes |
| F47 Help channel | Must have | Yes | Yes |

Totals: 36 Must have, 9 Should have, 2 Later.

### 2. Vague-word audit

The full v1.3 text was scanned for every word in Hard Rule 4 of the PRD prompt. The section name "Reliability check" is a framework label and is excluded.

| Found | Where | Rewrite |
| --- | --- | --- |
| None | Full document | No change needed |

Remaining banned words: **0**.

### 3. Confirmations

- Framework order followed: Layers 1 to 5 in order, each part in the order given; 5.4 added at the end of Layer 5 to cover "When".
- No code: the PRD has no code, snippets or pseudo-code.
- No database design: the PRD has no tables, schemas, fields or data models; technology is named at tool level only.
- All assumptions listed in 5.1: A1 to A15 cover every [ASSUMPTION] tag; C1 to C14 cover every [CHECK] tag.
- No contradictions: fee (6.5%), seat holds (15 minutes and 2 hours), cost limits ($50 and $150), approval time (2 working days) and Meet links (pasted) match across all sections.
