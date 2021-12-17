import { GoPerson } from 'react-icons/go';
import styles from './Header.module.css';

const Header = () => (
  <header className="header">
    <h1>BookStore</h1>
    <nav className="nav">
      <a href="/">Books</a>
      <a href="/Categories">categories</a>
      <GoPerson className={styles.person} />
    </nav>
  </header>
);

export default Header;
