# Kohorts — User Flowcharts (MVP v1.1)

## Flowchart Rules

- Linear, deterministic flows
- Clear success & failure paths
- Explicit automation boundaries
- Manual override always exists

---

## 1️⃣ Founder Onboarding Flow

```
Start
↓
Founder visits Kohorts
↓
Sign up / Login
↓
Redirectto Founder Dashboard
↓
System checks:
  - Has Paystackkey? → NO
↓
Show setup checklist
↓
Founder adds:
  - Paystackpublickey
  - (Optional) test payment link
↓
Setup complete
↓
End

```

---

## 2️⃣ Create Cohort Flow (Founder)

```
Start
↓
Founder clicks "Create Cohort"
↓
Fill cohort details:
  - Name
  - Description
  - Dates
  - Banner
↓
Configure payment:
  - Paystack payment link
  - Reference pattern
↓
Configure community:
  - Platform type
  - Invite link
↓
Save cohort
↓
Cohort status = Draft
↓
Founder clicks "Publish"
↓
Cohort status = Live
↓
Public cohort page generated
↓
End

```

---

## 3️⃣ Student Enrollment + Payment Flow

```
Start
↓
Student visitsPublic Cohort Page
↓
Clicks "Enroll Now"
↓
Redirectto Paystack payment page
↓
Student completes payment
↓
Paystack processestransaction
↓
Paystack sends webhookto Kohorts
↓
Goto Payment Verification Flow

```

---

## 4️⃣ Payment Verification Flow (System)

```
Webhook received
↓
Validate webhook signature
↓
Extract payment reference
↓
Match referenceto cohort
↓
Is payment successful?
  ├─NO → Mark enrollmentas Failed →Notify founder →End
  └─ YES
↓
Create /update studentrecord
↓
Enrollment status = Verified
↓
TriggerAccess Flow

```

---

## 5️⃣ Automated Access Flow (Paid Automation Tier)

```
Enrollment verified
↓
Is automation enabled?
  ├─NO → Stop → Manual handling
  └─ YES
↓
Send receipt email
↓
Attach community invite link
↓
Updateaccess status = Sent
↓
Log automation event
↓
End

```

---

## 6️⃣ Manual Override Flow (Founder)

```
FounderopensInternalCohortPage
↓
Viewsenrollmenttable
↓
Selectsstudent
↓
Manualaction:
-Markaspaid
-Resendaccesslink
-Removestudent
↓
Systemupdatesrecord
↓
Logmanualaction
↓
End

```

---

## 7️⃣ Payment Failure / Edge Case Flow

```
Payment received
↓
Reference not matched OR amount incorrect
↓
Flag enrollment
↓
Notify founder
↓
Founder reviews
↓
Manual resolution:
  - Approve
  - Reject
↓
End

```

---

## 8️⃣ Free Tier Flow (No Automation)

```
Student pays via Paystack
↓
No webhook automation
↓
Founder manually confirms payment
↓
Founder manually adds studentto community
↓
End

```

---

## 9️⃣ Plan Enforcement Flow

```
System checks plan limits
↓
Limit exceeded?
  ├─NO →Continue normal flow
  └─ YES
↓
Disable automation
↓
Notify founder
↓
Prompt upgrade
↓
End

```

---

## 10️⃣ System Error Handling Flow

```
Automation fails
↓
Logerror
↓
Retry (x times)
↓
If still failing:
  - Notify founder
  - Fall backto manual
↓
End

```

---

## Flowchart Lock Statement

> These flows define all valid behaviors in Kohorts MVP v1.1.
>
> Claude must not invent new flows, skip steps, or merge flows without instruction.
