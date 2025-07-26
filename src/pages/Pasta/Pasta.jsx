import React from 'react';
import styles from './Pasta.module.css';
import PastaList from '../../components/Pasta/PastaList';
import Header from '../../components/Header/Header';

const PastaPage = () => {
  return (
    <div className={styles.pastaPage}>
      <Header />
      <h1 className={styles.heading}>Authentic Pasta Dishes</h1>
      <p className={styles.description}>
        Enjoy our rich, creamy, and perfectly seasoned pastas — a true Italian delight!
      </p>
      <PastaList />
    </div>
  );
};

export default PastaPage;