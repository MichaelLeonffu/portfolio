import styles from './experience-section.module.css'
import IHomeData from '../types/home-data'

// Types
type IExperience = IHomeData['experience'][number];
type AppProps = {
  experiences: IHomeData['experience']
};

export default function ExperienceSection({ experiences }: AppProps) {

  const experienceCard = (wExp: IExperience) => {
    return (
      <div className={styles.experienceCard}>
        <header>
          <h3>
            {wExp.jobTitle}, <a href={wExp.company.url}>{wExp.company.name}</a>
          </h3>
          <p>
            {wExp.date.start} - {wExp.date.end}; {wExp.company.location}
          </p>
          <ul>
            {
              wExp.description.map((des: string) => {
                return (<li key={des}>{des}</li>);
              })
            }
          </ul>
        </header>
      </div>
    );
  }

  return (
    <div className={styles.experience}>
      {
        experiences.map((wExp) => {
          return (
            <div key={wExp.jobTitle}>
              {experienceCard(wExp)}
            </div>
          );
        })
      }
    </div>
  );
}