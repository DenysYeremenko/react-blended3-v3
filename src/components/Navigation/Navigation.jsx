import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.css';

export const Navigation = () => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.navList}>
        <li className={styles.navItem}>
          <NavLink to="/">Main</NavLink>
        </li>
        <li className={styles.navItem}>
          <NavLink to="events">Events</NavLink>
        </li>
      </ul>
    </nav>
  );
};
