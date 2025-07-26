import React from 'react';
import { Link, useLocation } from 'react-router-dom'; // using useLocation for active link detection
import styles from './Header.module.css';

export default function Header() {
  const location = useLocation();

  // Helper to check if path is active
  const isActive = (path) => location.pathname === path;

  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <Link to="/" className={styles.logoLink}>
          <h1 className={styles.logo}>Gourmet House</h1>
        </Link>
        <nav className={styles.navbar}>
          <Link
            to="/allitems"
            className={`${styles.navLink} ${isActive('/allitems') ? styles.active : ''}`}
          >
            Everything in House
          </Link>
          <Link
            to="/pizza"
            className={`${styles.navLink} ${isActive('/pizza') ? styles.active : ''}`}
          >
            Pizza
          </Link>
          <Link
            to="/burger"
            className={`${styles.navLink} ${isActive('/burger') ? styles.active : ''}`}
          >
            Burger
          </Link>
          <Link
            to="/pasta"
            className={`${styles.navLink} ${isActive('/pasta') ? styles.active : ''}`}
          >
            Pasta
          </Link>
          <Link
            to="/salad"
            className={`${styles.navLink} ${isActive('/salad') ? styles.active : ''}`}
          >
            Salad
          </Link>
        </nav>
      </div>
    </header>
  );
}
