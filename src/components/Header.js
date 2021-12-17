import { GoPerson } from 'react-icons/go';
import styles from './Header.module.css';

const Header = () => (
  <header className={styles.header}>
    <h1 className={styles.title}>BookStore</h1>
    <nav className={styles.navLinks}>
      <a className={styles.navLink} href="/">Books</a>
      <a className={styles.navLink} href="/Categories">categories</a>
      <GoPerson className={styles.person} />
    </nav>
  </header>
);

export default Header;
