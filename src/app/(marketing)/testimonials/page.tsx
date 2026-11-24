import { PageContainer } from "@/components/page-container";
import styles from "../marketing.module.css";

const PLACEHOLDER_CARDS = [1, 2, 3] as const;

export default function TestimonialsPage() {
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
