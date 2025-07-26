import React from 'react';
import styles from './Salad.module.css';
import SaladList from '../../components/Salad/SaladList';
import Header from '../../components/Header/Header';

const SaladPage = () => {
  return (
    <div className={styles.saladPage}>
      <Header />
      <h1 className={styles.heading}>Fresh & Healthy Salads</h1>
      <p className={styles.description}>
        Discover our crisp, refreshing, and nutritious salads — perfect for a light and healthy meal!
      </p>
      <SaladList />
    </div>
  );
};

export default SaladPage;
