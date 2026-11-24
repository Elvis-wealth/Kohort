---
name: files-and-uploads
description: Use when building any file upload, download or preview: assignment files, tutor photos, cohort cover images, ID documents, or files in the review queue. Keywords: upload, file, image, PDF, Word, Excel, ID document, photo, cover image, resize, storage, Cloudflare R2, signed URL, presigned URL, preview, download, F2, F3, F5, F26, F27. Paths: src/lib/ storage client, upload code in src/features/onboarding/, src/features/cohorts/, src/features/assignments/.
---

Load when: the task names F2, F3, F5 (cover image), F26 or F27, or adds any upload or file link.
Skip when: the file is a Google Drive recording (use classes-and-recordings).

## Purpose
Accept only allowed files, store them privately, and serve them through short-lived links.

## Before you start
1. Also read PRD 4.1 Speed (image width) and PRD 4.1 Privacy (ID retention).
2. Resize images with sharp (AGENTS 2.1). Any other library is a new dependency: ask first (AGENTS Boundary 2).

## Steps
1. Keep all storage calls in one storage client in `src/lib/`.
2. Use one private bucket. Separate keys by purpose: `assignments/`, `profiles/`, `covers/`, `id-documents/`.
3. Name every object with a random ID. Never put the user's file name, email or cohort title in the key. Store the original name in the database for display only.
4. Upload flow:
   - The browser checks size and type first, to save the learner's data.
   - The server issues a presigned upload URL (a one-time upload link) that fixes the content type and maximum size.
   - After upload, the server reads the file's first bytes to confirm the real type. Wrong type: delete the object and show the learner the same message as the browser check.
5. Images: resize on the server to the width in PRD 4.1 Speed before saving the version the app shows.
6. Downloads and previews: generate a signed GET link with the expiry in PRD 4.1 Security, only after the access check (auth-and-roles). Links to `id-documents/` go to admin only (PRD screen 32).
7. Preview: show images and PDFs inline; send Word and Excel as downloads with the original file name.
8. ID documents: store under `id-documents/` only; delete them with a job in the jobs table, PRD 4.2 Background jobs counted from the admin decision date as PRD 4.1 Privacy states; keep the decision record.
9. Track uploads in progress so that E19 retries resume instead of starting over.

## Never
- Make the bucket or any object public.
- Store a signed URL in the database. Store the key; sign on request.
- Log file contents or signed URLs.

## Done checklist
- [ ] Unit tests: type check by content (a renamed .exe as .pdf is rejected), size limit, random key format.
- [ ] Test: a user without access gets 403 and no signed link; a tutor gets 403 for an `id-documents/` link.
- [ ] Test: a signed link stops working after its expiry (use a short expiry in the test).
- [ ] Test or manual check: an uploaded 4,000 px image is stored at the PRD width.

## Example
Task: F26 file upload.
A learner uploads "ledger.jpg" (3 MB). Key: `assignments/9f3c...e1`. The server confirms JPEG bytes, resizes, saves.
Test names: "F26 rejects an 11 MB file before upload", "F26 rejects a file whose bytes do not match its type".
