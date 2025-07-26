import React from 'react';
import styles from './Categories.module.css';

export default function Categories() {
  const categories = [
    'Web Development',
    'Mobile Apps',
    'UI/UX Design',
    'DevOps',
    'Machine Learning',
    'Data Science',
  ];

  return (
    <section className={styles.categories}>
      <h2 className={styles.heading}>Explore Categories</h2>
      <div className={styles.grid}>
        {categories.map((category, index) => (
          <div key={index} className={styles.card}>
            {category}
          </div>
        ))}
      </div>
    </section>
  );
}
