import Image from 'next/image'
import styles from '../styles/Home.module.css'

import IHomeData from '../types/home-data'

import Footer from '../components/footer'

import HomeData from '../constants/home'
import profilePic from '../public/images/headshot.jpg';

// Types
type IProject = IHomeData['project'][number];
type IExperience = IHomeData['experience'][number];

const heroSection = () => {

  const heroData = HomeData.hero;

  return (
    <section className={styles.hero}>
      <p className={'mono-text'} style={{
        paddingBottom: '1rem',
      }}>
        {heroData.pretext}
      </p>
      <h1 className={styles.title}>
        {heroData.name}
      </h1>
      <h1>
        {heroData.subname}
      </h1>
      <p>
        {heroData.subtext} <a href="#project">#Projects</a>.
      </p>
    </section>
  );
}

const aboutSection = () => {

  const about = HomeData.about;

  return (
    <section id="about" className={styles.about}>
      <header>
        <h2>
          About Me
        </h2>
      </header>
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
        <div>
          <div className={styles.imageContainer}>
            <Image
              src={profilePic}
              alt="Picture of Michael Leonffu"
              className={styles.image}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

const experienceSection = () => {

  const wExps: IExperience[] = HomeData.experience;

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
          <hr />
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
    <section id="experience" className={styles.experience}>
      <header>
        <h2>
          Experience
        </h2>
      </header>
      <div className={styles.content}>
        {
          wExps.map((wExp) => {
            return (
              <div key={wExp.jobTitle}>
                {experienceCard(wExp)}
              </div>
            );
          })
        }
      </div>
    </section>
  );
}

const projectSection = () => {

  const projects: IProject[] = HomeData.project;

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
    <section id="project" className={styles.project}>
      <header>
        <h2>
          Projects
        </h2>
      </header>
      <div className={styles.content}>
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
      </div>
    </section>
  );
}

const skillsSection = () => {

  return (
    <section id="skills" className={styles.skill}>
      <header>
        <h2>
          Skills
        </h2>
      </header>
      <div>
        <p>
          Photography?
        </p>
      </div>
    </section>
  );
}

export default function Page() {

  // Remove this later
  // if (process.browser){
  //   document.designMode = 'on';
  // }

  return (
    <div>
      <main className={styles.main}>
        {heroSection()}
        {aboutSection()}
        {experienceSection()}
        {projectSection()}
        {skillsSection()}
      </main>
      <Footer />
    </div>
  )
}
