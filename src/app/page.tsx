"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/button";
import { MarketingHeader } from "@/components/marketing-header";
import { PageContainer } from "@/components/page-container";
import {
  AboutView,
  FaqView,
  PricingView,
  TestimonialsView,
} from "@/components/marketing/views";
import {
  MARKETING_VIEW_TITLES,
  type MarketingViewId,
} from "@/components/marketing/nav";
import styles from "./page.module.css";

function HomeHero() {
  return (
    <section className={styles.hero}>
      <PageContainer>
        <div className={styles.heroContent}>
          <h1 className={styles.headline}>
            Sell, run and certify paid cohorts in one place.
          </h1>
          <p className={styles.supporting}>
            See who is falling behind every week, and issue verified
            certificates automatically—replacing forms, spreadsheets and
            scattered links.
          </p>
          <Button href="/signup" variant="primary">
            Sign up
          </Button>
        </div>
      </PageContainer>
    </section>
  );
}

export default function HomePage() {
  const [view, setView] = useState<MarketingViewId>("home");

  useEffect(() => {
    document.title = MARKETING_VIEW_TITLES[view];
  }, [view]);

  return (
    <div className={styles.page}>
      <MarketingHeader activeView={view} onNavigate={setView} />
      <main className={styles.main}>
        {view === "home" && <HomeHero />}
        {view === "pricing" && <PricingView />}
        {view === "testimonials" && <TestimonialsView />}
        {view === "about" && <AboutView />}
        {view === "faq" && <FaqView />}
      </main>
    </div>
  );
}
