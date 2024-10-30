import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.scss';
import { RegionButton } from '../RegionButton/RegionButton';
import cartIcon from '/src/assets/images/cart.png'; 

export const Header = ({ openCart }) => { 
  return (
    <header className={styles.header}>
      <div className={styles.centerContent}>
        <Link to="/" className={styles.titleLink}>
          <h1>Sunshine Coffee</h1>
        </Link>
        <div className={styles.floatingIcon}>
          <Link to="/">
            <img src="/src/assets/images/coffee.png" alt="Coffee icon" />
          </Link>
        </div>
      </div>
      <div className={styles.navIcons}>
        <div className={styles.regionButtonContainer}>
          <RegionButton />
        </div>
        <img 
          src={cartIcon} 
          alt="Cart" 
          className={styles.icon} 
          onClick={openCart} 
        />
        <Link to="/login">
          <img src="/src/assets/images/user.png" alt="Profile" className={styles.icon} />
        </Link>
      </div>
    </header>
  );
};
