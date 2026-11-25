import { PageContainer } from "@/components/page-container";
import styles from "./views.module.css";

export function PricingView() {
  return (
    <section className={styles.section}>
      <PageContainer size="narrow">
        <div className={styles.stack}>
          <h1 className={styles.heading}>Pricing</h1>
          <div className={styles.card}>
            <p className={styles.feeValue}>6.5% per sale</p>
            <p className={styles.body}>
              Kohorts charges a 6.5% platform fee on each paid enrolment, with
              VAT added on top as a separate line.
            </p>
            <p className={styles.lead}>
              Flutterwave processing fees also apply.
            </p>
          </div>
        </div>
      </PageContainer>
    </section>
  );
}

const PLACEHOLDER_CARDS = [1, 2, 3] as const;

export function TestimonialsView() {
  return (
    <section className={styles.section}>
      <PageContainer>
        <div className={styles.stack}>
          <h1 className={styles.heading}>Testimonials</h1>
          <div className={styles.grid}>
            {PLACEHOLDER_CARDS.map((slot) => (
              <article key={slot} className={styles.card}>
                <p className={styles.body}>
                  Placeholder: real tutor quote goes here
                </p>
              </article>
            ))}
          </div>
        </div>
      </PageContainer>
    </section>
  );
}

export function AboutView() {
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

const FAQ_ITEMS = [
  {
    question: "What is the platform fee?",
    answer:
      "Kohorts charges a 6.5% platform fee per sale, with VAT added on top as its own line. Flutterwave processing fees also apply.",
  },
  {
    question: "How do payments and payouts work?",
    answer:
      "Learners pay the full cohort price through Flutterwave using card, bank transfer or USSD. Each payment splits to the tutor's verified Nigerian bank subaccount, so Kohorts never holds the tutor's share.",
  },
  {
    question: "How are class recordings shared?",
    answer:
      "Tutors attach Google Meet recordings from their Google Drive using Google Picker or paste recording links from Zoom, Teams or other tools. Enrolled learners watch recordings from the class page.",
  },
  {
    question: "How do learners earn certificates?",
    answer:
      "On the cohort end date, Kohorts automatically issues a PDF certificate with a public verification page to every learner who reaches at least 70% attendance and 70% reviewed assignments.",
  },
  {
    question: "What is the refund policy?",
    answer:
      "There are no refunds after payment, except when a tutor cancels a cohort. Before the first class, learners receive a full refund; after the first class, learners receive a pro-rata refund for classes not held.",
  },
  {
    question: "Who is Kohorts for?",
    answer:
      "Kohorts is built for solo tutors in Nigeria running paid, live online bootcamps of up to 100 learners, their teaching assistants, and adult learners aged 18 or older.",
  },
] as const;

export function FaqView() {
  return (
    <section className={styles.section}>
      <PageContainer size="narrow">
        <div className={styles.stack}>
          <h1 className={styles.heading}>Frequently asked questions</h1>
          <div className={styles.accordionList}>
            {FAQ_ITEMS.map((item) => (
              <details key={item.question} className={styles.accordionItem}>
                <summary className={styles.accordionTrigger}>
                  {item.question}
                </summary>
                <p className={styles.accordionBody}>{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </PageContainer>
    </section>
  );
}
