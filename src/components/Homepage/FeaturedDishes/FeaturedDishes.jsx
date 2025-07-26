import React, { useRef, useState, useEffect } from 'react';
import styles from './FeaturedDishes.module.css';

export default function FeaturedDishes() {
  const steps = [
    {
      img_str: '/images/pizza.jpg',
      title: 'Stone-Baked Pizza',
      /* desc: 'Describe your project and what skills you need.',*/
    },
    {
      img_str: '/images/burger.jpg',
      title: 'Juicy Angus Burger',
      /* desc: 'Freelancers apply and you review profiles.',*/
    },
    {
      img_str: '/images/pasta.jpg',
      title: 'Creamy Alfredo Pasta',
      /* desc: 'Choose your perfect match and get to work.',*/
    },
    {
      img_str: '/images/salad.jpg',
      title: 'Fresh Caeser Salad',
      /* desc: 'Only pay when the job is done right.',*/
    },
  ];

  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target); // only trigger once
        }
      },
      {
        threshold: 0.3, // trigger when 30% visible
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return (
    <section ref={ref} className={styles.container}>
      <h2 className={styles.heading}>Featured Dishes</h2>
      <div className={styles.steps}>
        {steps.map((step, index) => (
          <div className={`${styles.card} ${visible ? styles.slideIn : styles.hiddenLeft}`} key={index}
          style={{ transitionDelay: `${index * 300}ms` }}>
            <img className={styles.card_img} src={step.img_str}/>
            <h3>{step.title}</h3>
            {/*<p>{step.desc}</p>*/}
          </div>
        ))}
      </div>
    </section>
  );
}
