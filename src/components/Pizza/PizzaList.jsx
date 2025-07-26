import React from 'react';
import styles from './PizzaList.module.css';
import PizzaItem from './PizzaItem';

const pizzas = [
  {
    id: 1,
    name: 'Margherita',
    description: 'Classic delight with 100% real mozzarella cheese.',
    price: '$8.99',
    image: '/images/pizza-margherita.jpg',
  },
  {
    id: 2,
    name: 'Pepperoni',
    description: 'Loaded with pepperoni and cheese.',
    price: '$10.99',
    image: '/images/pizza-pepperoni.jpg',
  },
  {
    id: 3,
    name: 'Veggie Supreme',
    description: 'Packed with fresh veggies and spices.',
    price: '$9.99',
    image: '/images/pizza-veggie.jpg',
  },
];

const PizzaList = () => {
  return (
    <div className={styles.pizzaListWrapper}>
      <div className={styles.pizzaList}>
        {pizzas.map((pizza) => (
          <PizzaItem key={pizza.id} {...pizza} />
        ))}
      </div>
    </div>
  );
};

export default PizzaList;
