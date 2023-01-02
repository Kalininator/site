import Link from "next/link";
import menuItems from "../menuItems";

import styles from "../styles/Header.module.css";

const Header = () => {
  return (
    <header className={styles.site__header}>
      <div className={`${styles.nav__area} ${styles.inner}`}>
        <Link href="/" className={styles.logo}>
          Alex Kalinin
        </Link>
        <nav>
          <ul className={styles.menus}>
            {menuItems.map(({ url, label }, index) => (
              <li className={styles.menu__items} key={index}>
                <Link href={url}>{label}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
