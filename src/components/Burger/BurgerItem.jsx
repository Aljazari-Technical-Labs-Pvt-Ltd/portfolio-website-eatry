import React from 'react';
import styles from './BurgerItem.module.css';

const BurgerItem = ({ name, description, price, image }) => {
  return (
    <div className={styles.burgerItem}>
      <img src={image} alt={name} className={styles.image} />
      <h3 className={styles.name}>{name}</h3>
      <p className={styles.description}>{description}</p>
      <p className={styles.price}>{price}</p>
    </div>
  );
};

export default BurgerItem;
