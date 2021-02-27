import { useContext } from 'react';
import { ChallengesContext } from '../../contexts/ChallengesContext';
import styles from '../../styles/components/Home/Profile.module.css';

export function Profile() {
  const { level } = useContext(ChallengesContext);

  return(
    <div className={styles.profileContainer}>
      <img src="https://github.com/dehlferreira.png" alt="André Luiz Ferreira"/>
      <div>
        <strong>André Luiz Ferreira</strong>
        <p>
          <img src="icons/level.svg" alt="Level"/>
          Level {level}
        </p>
      </div>
    </div>
  );
}