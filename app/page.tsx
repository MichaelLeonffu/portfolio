import styles from './styles.module.css'

// Global Components
import Footer from '../components/footer'

// Local Components
import HeroSection from './hero-section'
import PortfolioSection from './portfolio-section'
import AboutSection from './about-section'
import ExperienceSection from './experience-section'
import ProjectSection from './project-section'
import SkillSection from './skill-section'

// Constant Data
import HomeData from '../constants/home'

export default function Page() {

  // Remove this later
  // if (process.browser){
  //   document.designMode = 'on';
  // }

  return (
    <div>
      <main className={styles.main}>
        <HeroSection hero={HomeData.hero}/>
        <PortfolioSection sectionID={'about'} sectionTitle={'About Me'}>
          <AboutSection about={HomeData.about} />
        </PortfolioSection>
        <PortfolioSection sectionID={'experience'} sectionTitle={'Experiences'}>
          <ExperienceSection experiences={HomeData.experience} />
        </PortfolioSection>
        <PortfolioSection sectionID={'project'} sectionTitle={'Projects'}>
          <ProjectSection projects={HomeData.project} />
        </PortfolioSection>
        <PortfolioSection sectionID={'skill'} sectionTitle={'Skills'}>
          <SkillSection skills={HomeData.skill} />
        </PortfolioSection>
      </main>
      <Footer />
    </div>
  )
}