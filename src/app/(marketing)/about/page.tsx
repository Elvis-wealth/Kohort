import { PageContainer } from "@/components/page-container";
import styles from "../marketing.module.css";

export default function AboutPage() {
  return (
    <section className={styles.section}>
      <PageContainer size="narrow">
        <div className={styles.stack}>
          <h1 className={styles.heading}>About Kohorts</h1>
          <p className={styles.lead}>
            Kohorts is a web app where bootcamp tutors sell, run and certify
            paid cohorts in one place, replacing forms, spreadsheets and
            scattered links.
          </p>
          <div className={styles.card}>
            <h2 className={styles.subheading}>The problem</h2>
            <p className={styles.body}>
              Bootcamp tutors often run paid cohorts across separate forms,
              payment screenshots, spreadsheets and chat threads. Class links,
              recordings and assignments get lost, tutors cannot see who is
              falling behind in time, and certificates are made by hand.
            </p>
          </div>
          <div className={styles.card}>
            <h2 className={styles.subheading}>Our core bet</h2>
            <p className={styles.body}>
              Tutors see who is falling behind every week, and learners earn
              verified certificates automatically.
            </p>
          </div>
        </div>
      </PageContainer>
    </section>
  );
}
