import { PageContainer } from "@/components/page-container";
import styles from "../marketing.module.css";

export default function PricingPage() {
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
