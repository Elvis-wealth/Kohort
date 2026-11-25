import { NextResponse } from "next/server";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export function GET() {
  const body = `# Kohorts

> Sell, run and certify paid cohorts in one place.

Kohorts helps tutors sell, run and certify paid cohorts. See who is falling behind every week and issue verified certificates automatically — replacing forms, spreadsheets and scattered links.

The marketing site is a single page at the root URL. Selecting a navigation link shows its section in place, and the URL stays at the root.

## Sections

- [Home](${SITE_URL}/): Landing hero and core value proposition.
- [Pricing](${SITE_URL}/): 6.5% platform fee plus VAT; Flutterwave processing fees apply on top.
- [Testimonials](${SITE_URL}/): Tutor quotes (placeholders in v1).
- [About](${SITE_URL}/): The problem Kohorts solves and its core bet.
- [FAQ](${SITE_URL}/): Fees, payments, recordings, certificates and refunds.
`;

  return new NextResponse(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
