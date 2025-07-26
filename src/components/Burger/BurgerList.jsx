import React from 'react';
import styles from './BurgerList.module.css';
import BurgerItem from './BurgerItem';

const burgers = [
  {
    id: 1,
    name: 'Classic Cheeseburger',
    description: 'Grilled beef patty, melted cheese, lettuce, and tomato.',
    price: '$7.49',
    image: '/images/classic-cheeseburger.jpg',
  },
  {
    id: 2,
    name: 'Bacon BBQ Burger',
    description: 'Smoky bacon, BBQ sauce, cheddar cheese, and crispy onions.',
    price: '$8.99',
    image: '/images/bacon-bbq.jpg',
  },
  {
    id: 3,
    name: 'Veggie Delight',
    description: 'Grilled plant-based patty with fresh veggies and vegan mayo.',
    price: '$7.99',
    image: '/images/veggie-burger.jpg',
  },
];

const BurgerList = () => {
  return (
    <div className={styles.burgerListWrapper}>
      <div className={styles.burgerList}>
        {burgers.map((burger) => (
          <BurgerItem key={burger.id} {...burger} />
        ))}
      </div>
    </div>
  );
};

export default BurgerList;
