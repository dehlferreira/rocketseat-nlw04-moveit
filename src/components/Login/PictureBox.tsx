import styles from '../../styles/components/Login/PictureBox.module.css';

export function PictureBox() {
  return (
    <div className={styles.pictureBoxContainer}>
      <img src="/icons/three-lines.svg" alt="Logo Moveit"/>
    </div>
  );
}