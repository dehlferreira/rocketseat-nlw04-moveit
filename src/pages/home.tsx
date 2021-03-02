import Head from 'next/head';
import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import { useSession } from 'next-auth/client';

import { CompletedChallenges } from "../components/Home/CompletedChallenges";
import { Countdown } from "../components/Home/Countdown";
import { ExperienceBar } from "../components/Home/ExperienceBar";
import { Profile } from "../components/Home/Profile";


import styles from '../styles/pages/Home.module.css';
import { ChallengeBox } from "../components/Home/ChallengeBox";
import { CountdownProvider } from "../contexts/Home/CountdownContext";
import { ChallengesProvider } from '../contexts/Home/ChallengesContext';
import { useEffect } from 'react';

interface HomeProps {
  level: number;
  currentExperience: number;
  challengeCompleted: number;
}

export default function Home(props: HomeProps) {
  const [session, loading] = useSession();
  const router = useRouter();

  useEffect(() => {
    if (!session) {
      router.push('/');
      return;
    }
    router.push('/home')
  }, [session])

  return (
    <>
      {session ? (
        <ChallengesProvider
          level={props.level}
          currentExperience={props.currentExperience}
          challengeCompleted={props.challengeCompleted}
        >
          <div className={styles.container}>
            <Head>
              <title>Início | move.it</title>
            </Head>
    
            <ExperienceBar />
    
            <CountdownProvider>
              <section>
                <div>
                  <Profile />
                  <CompletedChallenges />
                  <Countdown />
                </div>
                <div>
                  <ChallengeBox />
                </div>
              </section>
            </CountdownProvider>
          </div>
        </ChallengesProvider>
      ) : (
        <h1>Efetuar Login</h1>
      )}
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { level, currentExperience, challengeCompleted} = ctx.req.cookies;

  return {
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengeCompleted: Number(challengeCompleted),
    },
  }
}