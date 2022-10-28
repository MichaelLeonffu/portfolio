import styles from './hero-section.module.css'
import IHomeData from '../types/home-data';

// Types
type AppProps = {
  hero: IHomeData['hero']
};

export default function HeroSection({ hero }: AppProps) {

  return (
    <section className={styles.hero}>
      <p className={'mono-text'} style={{
        paddingBottom: '1rem',
      }}>
        {hero.pretext}
      </p>
      <h1 className={styles.title}>
        {hero.name}
      </h1>
      <h1>
        {hero.subname}
      </h1>
      <p>
        {hero.subtext} <a href="#project">#Projects</a>.
      </p>
    </section>
  );
}