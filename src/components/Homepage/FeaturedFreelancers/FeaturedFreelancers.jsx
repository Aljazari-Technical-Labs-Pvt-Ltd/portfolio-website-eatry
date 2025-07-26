import React from 'react';
import styles from './FeaturedFreelancers.module.css';

export default function FeaturedFreelancers() {
  const freelancers = [
    {
      name: 'Alice R.',
      role: 'React Developer',
      rate: '$40/hr',
    },
    {
      name: 'John M.',
      role: 'Full Stack Developer',
      rate: '$55/hr',
    },
    {
      name: 'Lena P.',
      role: 'UI/UX Designer',
      rate: '$45/hr',
    },
  ];

  return (
    <section className={styles.featured}>
      <h2 className={styles.heading}>Featured Freelancers</h2>
      <div className={styles.grid}>
        {freelancers.map((freelancer, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.avatar}></div>
            <h3>{freelancer.name}</h3>
            <p>{freelancer.role}</p>
            <span className={styles.rate}>{freelancer.rate}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
