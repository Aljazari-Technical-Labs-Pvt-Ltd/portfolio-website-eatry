import React from 'react';
import styles from './Pizza.module.css';
import PizzaList from '../../components/Pizza/PizzaList';
import Header from '../../components/Header/Header';

const PizzaPage = () => {
  return (
    <div className={styles.pizzaPage}>
      <Header />
      <h1 className={styles.heading}>Our Delicious Pizzas</h1>
      <p className={styles.description}>
        Explore our wide variety of freshly baked pizzas, made with love and the best ingredients.
      </p>
      <PizzaList />
    </div>
  );
};

export default PizzaPage;
