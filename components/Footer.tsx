import styles from "../styles/Footer.module.css";
const Footer = () => {
  return (
    <footer>
      <div className={styles.inner}>
        <div className={styles.footer__content}>
          <p>&copy; {new Date().getFullYear().toString()} by Alex Kalinin</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
