import styles from './skill-section.module.css'
import IHomeData from '../types/home-data';

// Types
type AppProps = {
  skills: IHomeData['skill']
};

export default function SkillSection({ skills }: AppProps) {

  return (
    <div>
      <p>
        Photography?
      </p>
    </div>
  );
}