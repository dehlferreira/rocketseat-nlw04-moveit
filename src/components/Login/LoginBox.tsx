import { signIn, useSession } from 'next-auth/client';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

import { FaGithub } from 'react-icons/fa';
import styles from '../../styles/components/Login/LoginBox.module.css';

export function LoginBox() {
  const [session] = useSession();
  const router = useRouter();
  
  useEffect(() => {
    if (session) {
      router.push('/home')
    } else {
      router.push('/')
    }
  }, [session])

  return (
    <div className={styles.loginBoxContainer}>
      <img src="/icons/moveit-logo.svg" alt="Moveit Logo"/>

      <div>
        <p>Bem-vindo</p>
        <img src="/icons/git-logo.svg" alt="Github"/>
        <button type="button" onClick={() => signIn('github')}>
          <div>
            <FaGithub size={40} color="#fff"/>
          </div>
          Github
        </button>
      </div>
    </div>
  );
}