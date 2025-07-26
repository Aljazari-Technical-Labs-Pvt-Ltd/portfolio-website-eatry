import React from 'react';
import styles from './Burger.module.css';
import BurgerList from '../../components/Burger/BurgerList';
import Header from '../../components/Header/Header';

const BurgerPage = () => {
  return (
    <div className={styles.burgerPage}>
      <Header />
      <h1 className={styles.heading}>Our Juicy Burgers</h1>
      <p className={styles.description}>
        Sink your teeth into our range of freshly grilled, cheesy, and mouth-watering burgers!
      </p>
      <BurgerList />
    </div>
  );
};

export default BurgerPage;
