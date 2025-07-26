import React from 'react';
import styles from './PizzaItem.module.css';

const PizzaItem = ({ name, description, price, image }) => {
  return (
    <div className={styles.pizzaItem}>
      <img src={image} alt={name} className={styles.image} />
      <h3 className={styles.name}>{name}</h3>
      <p className={styles.description}>{description}</p>
      <p className={styles.price}>{price}</p>
    </div>
  );
};

export default PizzaItem;
