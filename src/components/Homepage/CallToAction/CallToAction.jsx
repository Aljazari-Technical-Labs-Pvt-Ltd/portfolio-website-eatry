import React from 'react';
import styles from './CallToAction.module.css';

export default function CallToAction() {
  return (
    <section className={styles.cta}>
      <h2>Ready to hire top tech talent?</h2>
      <p>Join now and start building your dream project.</p>
      <button className={styles.button}>Post a Job</button>
    </section>
  );
}
