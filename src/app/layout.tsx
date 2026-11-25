import type { Metadata } from "next";
import type { ReactNode } from "react";
import "@/design-system/token.css";
import "./globals.css";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

const DEFAULT_TITLE =
  "Kohorts — Sell, run and certify paid cohorts in one place";
const DESCRIPTION =
  "Sell, run and certify paid cohorts in one place. See who is falling behind every week and issue verified certificates automatically — replacing forms, spreadsheets and scattered links.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: DEFAULT_TITLE,
    template: "%s | Kohorts",
  },
  description: DESCRIPTION,
  keywords: [
    "cohorts",
    "online courses",
    "tutors",
    "certificates",
    "cohort-based learning",
    "Kohorts",
  ],
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "Kohorts",
    title: DEFAULT_TITLE,
    description: DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: DEFAULT_TITLE,
    description: DESCRIPTION,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
