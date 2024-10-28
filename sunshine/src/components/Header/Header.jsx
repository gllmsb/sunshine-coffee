import React from 'react';
import styles from './Header.module.scss';
import { RegionButton } from '../RegionButton/RegionButton';

const LogoIcon = '/src/assets/images/coffee.png';
const CartIcon = '/src/assets/images/cart.png';
const ProfileIcon = '/src/assets/images/user.png';
const HeaderImage = '/src/assets/images/header.png';

export const Header = () => {
    return (
    <>
      <header className={styles.header}>
        <div className={styles.centerContent}>
          <h1>Sunshine Coffee</h1>
          <div className={styles.floatingIcon}>
            <img src={LogoIcon} alt="Coffee icon" />
          </div>
        </div>
        <div className={styles.navIcons}>
          <div className={styles.regionButtonContainer}>
            <RegionButton />
          </div>
          <img src={CartIcon} alt="Cart" className={styles.icon} />
          <img src={ProfileIcon} alt="Profile" className={styles.icon} />
        </div>
      </header>
        <div className={styles.headerImageContainer}>
          <img src={HeaderImage} alt="Header Background" className={styles.headerImage} />
            <div className={styles.headerText}>
              <h2>We Love Coffee</h2>
              <p>And all the people who make it</p>
            </div>
        </div>
    </>
  );
};
