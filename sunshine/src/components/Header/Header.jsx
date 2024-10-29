import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.scss';
import { RegionButton } from '../RegionButton/RegionButton';

const LogoIcon = '/src/assets/images/coffee.png';
const CartIcon = '/src/assets/images/cart.png';
const ProfileIcon = '/src/assets/images/user.png';

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.centerContent}>
        <Link to="/" className={styles.titleLink}>
          <h1>Sunshine Coffee</h1>
        </Link>
        <div className={styles.floatingIcon}>
          <Link to="/">
            <img src={LogoIcon} alt="Coffee icon" />
          </Link>
        </div>
      </div>
      <div className={styles.navIcons}>
        <div className={styles.regionButtonContainer}>
          <RegionButton />
        </div>
        <img src={CartIcon} alt="Cart" className={styles.icon} />
        <Link to="/login">
          <img src={ProfileIcon} alt="Profile" className={styles.icon} />
        </Link>
      </div>
    </header>
  );
};
