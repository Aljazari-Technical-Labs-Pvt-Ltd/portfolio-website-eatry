import React from 'react';
import styles from './PastaList.module.css';
import PastaItem from './PastaItem';

const pastas = [
  {
    id: 1,
    name: 'Spaghetti Bolognese',
    description: 'Classic Italian spaghetti with rich meat sauce.',
    price: '$10.99',
    image: '/images/spaghetti-bolognese.jpg',
  },
  {
    id: 2,
    name: 'Fettuccine Alfredo',
    description: 'Creamy Alfredo sauce over soft fettuccine noodles.',
    price: '$11.49',
    image: '/images/fettuccine-alfredo.jpg',
  },
  {
    id: 3,
    name: 'Penne Arrabiata',
    description: 'Spicy tomato sauce with garlic and chili over penne.',
    price: '$9.99',
    image: '/images/penne-arrabiata.jpg',
  },
];

const PastaList = () => {
  return (
    <div className={styles.pastaListWrapper}>
      <div className={styles.pastaList}>
        {pastas.map((pasta) => (
          <PastaItem key={pasta.id} {...pasta} />
        ))}
      </div>
    </div>
  );
};

export default PastaList;
