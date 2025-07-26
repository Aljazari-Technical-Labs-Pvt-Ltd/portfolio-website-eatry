import React from 'react';
import styles from './AllItems.module.css';

import Header from '../../components/Header/Header';

import PizzaItem from '../../components/Pizza/PizzaItem';
import BurgerItem from '../../components/Burger/BurgerItem';
import PastaItem from '../../components/Pasta/PastaItem';
import SaladItem from '../../components/Salad/SaladItem';

const pizzas = [
  { id: 1, name: 'Margherita', description: 'Tomato, mozzarella, basil', price: '$8.99', image: '/images/pizza-margherita.jpg' },
  { id: 2, name: 'Pepperoni', description: 'Pepperoni, cheese, tomato sauce', price: '$9.99', image: '/images/pizza-pepperoni.jpg' },
  { id: 3, name: 'Veggie Delight', description: 'Bell peppers, olives, onions, mushrooms', price: '$9.49', image: '/images/pizza-veggie.jpg' },
];

const burgers = [
  { id: 1, name: 'Classic Cheeseburger', description: 'Grilled beef patty, melted cheese, lettuce, and tomato.', price: '$7.49', image: '/images/classic-cheeseburger.jpg' },
  { id: 2, name: 'Bacon BBQ Burger', description: 'Smoky bacon, BBQ sauce, cheddar cheese, and crispy onions.', price: '$8.99', image: '/images/bacon-bbq.jpg' },
  { id: 3, name: 'Veggie Delight', description: 'Grilled plant-based patty with fresh veggies and vegan mayo.', price: '$7.99', image: '/images/veggie-burger.jpg' },
];

const pastas = [
  { id: 1, name: 'Spaghetti Bolognese', description: 'Classic Italian spaghetti with rich meat sauce.', price: '$10.99', image: '/images/spaghetti-bolognese.jpg' },
  { id: 2, name: 'Fettuccine Alfredo', description: 'Creamy Alfredo sauce over soft fettuccine noodles.', price: '$11.49', image: '/images/fettuccine-alfredo.jpg' },
  { id: 3, name: 'Penne Arrabiata', description: 'Spicy tomato sauce with garlic and chili over penne.', price: '$9.99', image: '/images/penne-arrabiata.jpg' },
];

const salads = [
  { id: 1, name: 'Caesar Salad', description: 'Romaine lettuce, parmesan, croutons, and creamy Caesar dressing.', price: '$6.99', image: '/images/caesar-salad.jpg' },
  { id: 2, name: 'Greek Salad', description: 'Tomatoes, cucumbers, olives, red onion, feta, and olive oil.', price: '$7.49', image: '/images/greek-salad.jpg' },
  { id: 3, name: 'Garden Salad', description: 'Fresh greens with tomatoes, cucumbers, and carrots.', price: '$5.99', image: '/images/garden-salad.jpg' },
];

const AllItems = () => {
  return (
    <div className={styles.container}>
      <Header />
      <h1 className={styles.pageTitle}>Explore Our Full Menu</h1>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Pizzas</h2>
        <div className={styles.grid}>
          {pizzas.map((item) => (
            <PizzaItem key={item.id} {...item} />
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Burgers</h2>
        <div className={styles.grid}>
          {burgers.map((item) => (
            <BurgerItem key={item.id} {...item} />
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Pastas</h2>
        <div className={styles.grid}>
          {pastas.map((item) => (
            <PastaItem key={item.id} {...item} />
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Salads</h2>
        <div className={styles.grid}>
          {salads.map((item) => (
            <SaladItem key={item.id} {...item} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default AllItems;
