---
name: classes-and-recordings
description: Use when building class schedules, pasted Meet, Zoom or Teams links, the Join button, Join-click attendance, manual attendance edits, Google Form check-in links, or attaching Google Drive recordings. Keywords: class, schedule, Join, meeting link, Google Meet, Zoom, Teams, attendance, register, check-in, Google Form, recording, Google Picker, Drive, drive.file, F15, F17 to F20, F22 to F24, E8 to E11, E24. Paths: src/features/classes/, src/features/attendance/.
---

Load when: the task names F15, F17 to F20, F22 to F24, E8 to E11 or E24, or touches the paths above.
Skip when: the task only reads attendance % (use progress-and-certificates) or only sends a reminder, including F21 (use notifications).

## Purpose
Get learners into the right class at the right time, record who joined, and give them the recording afterwards.

## Before you start
1. Also read PRD 5.2 E8 to E11 and E24.
2. Recording work depends on PRD 5.1 checks C1, C2 and C13. If open, stop and ask (AGENTS Boundary 7).

## Steps
1. Links
   - Parse every pasted link with the URL parser and compare the hostname exactly with the allowed domains in PRD 3.2. Never use "contains" (blocks look-alikes such as "zoom.us.example.com").
   - Store the cohort default link and an optional per-class link; resolve the link in one function.
2. Class times
   - Store start time and duration in UTC. Compute the Join window on the server; the browser only displays it.
3. Join and attendance
   - The Join button calls a server route. The route checks enrolment (auth-and-roles), checks the window, writes the attendance record, then redirects to the meeting link.
   - Never send the meeting link to the browser of a user who is not enrolled.
   - One attendance record per learner per class; a second click changes nothing.
   - Manual edits write a change log entry with editor, old value, new value and time.
4. Recordings
   - Load the Google Picker with a token limited to the drive.file scope.
   - Show the sharing confirmation from PRD F19 before any change; if declined, attach nothing.
   - Set the picked file to "anyone with the link can view" through the Drive API.
   - Store the Drive file ID, not the URL. Build the player link from the ID when the page loads.
   - On page load, if the Drive API reports the file missing, show the E24 message and alert the tutor (notifications skill).
5. Check-in forms: validate the Form domain the same way as step 1; show the TA collaborator message from PRD F24 on save.

## Never
- Request any Google scope other than drive.file.
- Expose meeting or recording links on public pages.

## Done checklist
- [ ] Unit tests: domain checks with valid, invalid and look-alike hosts; Join window edges (15 minutes before start, exact end).
- [ ] Test: a non-enrolled user gets 403 from the Join route and never receives the link.
- [ ] Test: double Join creates one attendance record.
- [ ] Test or manual check: a signed-out test learner plays an attached recording.

## Example
Task: F17 default link.
Input "https://meet.google.com/abc-defg-hij" saves; "https://meet.google.com.evil.io/x" is rejected.
Test names: "F17 accepts a Meet link", "F17 rejects a look-alike host", "F17 class without its own link uses the default".
