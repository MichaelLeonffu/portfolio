import Image from 'next/image'
import styles from './about-section.module.css'
import IHomeData from '../types/home-data';
import profilePic from '../public/images/headshot.jpg';

// Types
type AppProps = {
  about: IHomeData['about']
};

export default function AboutSection({ about }: AppProps) {

  return (
    <div className={styles.about}>
      <div className={styles.aboutGrid}>
        <div>
          {
            about.body.map((bodyText) => {
              return (
                <p key={bodyText} className={styles.bodyText}>
                  {bodyText}
                </p>
              );
            })
          }
        </div>
        <div className={styles.imageContainer}>
          <Image
            className={styles.image}
            src={profilePic}
            alt="Picture of Michael Leonffu"
            />
        </div>
      </div>
    </div>
  );
}