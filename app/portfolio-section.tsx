import styles from './portfolio-section.module.css'

// Types
type AppProps = {
  sectionTitle: string,
  sectionID: string,
  children: React.ReactNode,
};

export default function PortfolioSection({ sectionTitle, sectionID, children }: AppProps) {

  return (
    <section id={sectionID} className={styles.portfolioSection}>
      <header>
        <h2>
          {sectionTitle}
        </h2>
      </header>
      <div className={styles.content}>
        {children}
      </div>
    </section>
  );
}