import styles from './Footer.module.css';

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles['upper-footer']}>
        <div className={styles.kontakt}>Kontakt</div>

        <div className={styles.strony}>Strony - linki</div>

        <div className={styles.socials}>Social media</div>
      </div>
      <div className={styles['down-footer']}>Polityka prywatności</div>
    </div>
  );
};

export default Footer;
