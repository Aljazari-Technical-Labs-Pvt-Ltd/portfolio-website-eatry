import React from 'react';
import styles from './SaladList.module.css';
import SaladItem from './SaladItem';

const salads = [
  {
    id: 1,
    name: 'Caesar Salad',
    description: 'Romaine lettuce, parmesan, croutons, and creamy Caesar dressing.',
    price: '$6.99',
    image: '/images/caesar-salad.jpg',
  },
  {
    id: 2,
    name: 'Greek Salad',
    description: 'Tomatoes, cucumbers, olives, red onion, feta, and olive oil.',
    price: '$7.49',
    image: '/images/greek-salad.jpg',
  },
  {
    id: 3,
    name: 'Garden Salad',
    description: 'Fresh greens with tomatoes, cucumbers, and carrots.',
    price: '$5.99',
    image: '/images/garden-salad.jpg',
  },
];

const SaladList = () => {
  return (
    <div className={styles.saladListWrapper}>
      <div className={styles.saladList}>
        {salads.map((salad) => (
          <SaladItem key={salad.id} {...salad} />
        ))}
      </div>
    </div>
  );
};

export default SaladList;
