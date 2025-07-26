import React from 'react';
import styles from './Testimonials.module.css'

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Sarah J.',
      title: 'Startup Founder',
      quote: '“Devlance helped us hire a developer in 24 hours. Incredible platform!”',
    },
    {
      name: 'Mike T.',
      title: 'CTO at FinTech Co.',
      quote: '“Super easy to use and the freelancers were top-notch.”',
    },
    {
      name: 'Anita D.',
      title: 'Project Manager',
      quote: '“Saved us weeks of recruiting — the results were fast and on point.”',
    },
  ];

  return (
    <section className={styles.testimonials_section}>
      <h2>What Clients Are Saying</h2>
      <div className={styles.testimonial_grid}>
        {testimonials.map((t, index) => (
          <blockquote
            key={index}
            className={styles.testimonial_card}
          >
            <p className={styles.testimonial_quote}>{t.quote}</p>
            <footer className={styles.testimonial_footer}>
              — {t.name}, <span className="italic">{t.title}</span>
            </footer>
          </blockquote>
        ))}
      </div>
    </section>
  );
}