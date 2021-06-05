import React from 'react';

import styles from './HomePage.module.scss';

const HomePage = () => {
  return (
    <div className={styles.homepage}>
      <div className={styles.directoryMenu}>
        <div className={styles.menuItem}>
          <div className={styles.content}>
            <h1 className={styles.title}>TESLA</h1>
            <span className={styles.subtitle}>SHOP NOW</span>
          </div>
        </div>
        <div className={styles.menuItem}>
          <div className={styles.content}>
            <h1 className={styles.title}>TESLA</h1>
            <span className={styles.subtitle}>SHOP NOW</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
