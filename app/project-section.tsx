import styles from './project-section.module.css'
import IHomeData from '../types/home-data';

// Types
type IProject = IHomeData['project'][number];
type AppProps = {
  projects: IHomeData['project']
};

export default function ProjectSection({ projects }: AppProps) {

  const projectCard = (project: IProject) => {
    return (
      <a 
        href={project.url}
        className={styles.projectCard}
        >
        <header>
          <h5>
            {project.title}
            <p>
              {project.subtitle}
            </p>
          </h5>
          <p>
            {project.content}
          </p>
        </header>
        <footer>
          <ul>
            {
              project.topics.map(element => {
                return (
                  <li key={element}>
                    <p>{element}</p>
                  </li>
                );
              })
            }
          </ul>
        </footer>
      </a>
    );
  }

  return (
    <div className={styles.projectCardGrid}>
      {
        projects.map((project: IProject) => {
          return (
            <div key={project.title}>
              {projectCard(project)}
            </div>
          );
        })
      }
    </div>
  );
}