import { MdArrowForward } from 'react-icons/md';
import styles from '../../styles/components/Login/LoginBox.module.css';

export function LoginBox() {
  return (
    <div className={styles.loginBoxContainer}>
      <img src="/icons/moveit-logo.svg" alt="Moveit Logo"/>

      <div>
        <p>Bem-vindo</p>
        <img src="/icons/git-logo.svg" alt="Github"/>
        <input type="text" placeholder="Digite seu username"/>
        <button type="button" onClick={() => {}}>
          <MdArrowForward color="#fff"/>
        </button>
      </div>
    </div>
  );
}