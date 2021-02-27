import { LoginBox } from '../components/Login/LoginBox';
import { PictureBox } from '../components/Login/PictureBox';
import styles from '../styles/pages/Login.module.css';

export default function Login() {
  return (
    <div className={styles.container}>
      <section>
        <div>
          <PictureBox />
        </div>
        <div>
          <LoginBox />
        </div>
      </section>
    </div>
  )
}