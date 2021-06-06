import React from 'react';

import styles from './MenuItem.module.scss';

type MenuItemProps = {
  title: string
  imageUrl: string,
  size?: string
}

const MenuItem = ({ title, imageUrl, size }: MenuItemProps) => {
  return (
    <div 
      className={`${styles.menuItem} ${size ? styles[size] : ''}`} 
    >
      <div 
        className={styles.backgroundImage}
        style={{ backgroundImage: `url(${imageUrl})` }} 
      />
      <div className={styles.content}>
        <h1 className={styles.title}>{ title.toLocaleUpperCase() }</h1>
        <span className={styles.subtitle}>SHOP NOW</span>
      </div>
    </div>
  );
};

export default MenuItem;
