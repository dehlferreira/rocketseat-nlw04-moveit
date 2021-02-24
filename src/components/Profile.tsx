import styles from '../styles/components/Profile.module.css';

export function Profile() {
  return(
    <div className={styles.profileContainer}>
      <img src="https://github.com/dehlferreira.png" alt="André Luiz Ferreira"/>
      <div>
        <strong>André Luiz Ferreira</strong>
        <p>Level 1</p>
      </div>
    </div>
  );
}