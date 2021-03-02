import { useContext } from 'react';
import { useSession } from 'next-auth/client';
import { ChallengesContext } from '../../contexts/Home/ChallengesContext';
import styles from '../../styles/components/Home/Profile.module.css';


export function Profile() {
  const { level } = useContext(ChallengesContext);
  const [session] = useSession();

  return(
    <div className={styles.profileContainer}>
      <img src={session.user.image} alt="André Luiz Ferreira"/>
      <div>
        <strong>{session.user.name}</strong>
        <p>
          <img src="icons/level.svg" alt="Level"/>
          Level {level}
        </p>
      </div>
    </div>
  );
}