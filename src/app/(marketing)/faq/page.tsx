import { PageContainer } from "@/components/page-container";
import styles from "../marketing.module.css";

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

export default function FaqPage() {
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
