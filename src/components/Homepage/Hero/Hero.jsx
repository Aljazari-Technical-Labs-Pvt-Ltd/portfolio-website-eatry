import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section className={styles.hero} id="hero">
      <video autoPlay muted loop playsInline className={styles.hero_video}>
        <source src="/videos/hero.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className={styles.hero_content}>
        <h2>Welcome to Gourmet House</h2>
        <p>Where flavor meets the soul.</p>
      </div>
    </section>
  );
}