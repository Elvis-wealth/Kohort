import { Button } from "@/components/button";
import { MarketingHeader } from "@/components/marketing-header";
import { PageContainer } from "@/components/page-container";
import styles from "./page.module.css";

export default function HomePage() {
  return (
    <div className={styles.page}>
      <MarketingHeader />
      <main className={styles.hero}>
        <PageContainer>
          <section className={styles.heroContent}>
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
          </section>
        </PageContainer>
      </main>
    </div>
  );
}
