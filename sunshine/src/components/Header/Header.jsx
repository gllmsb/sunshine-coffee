import React from 'react';
import styles from './Header.module.scss';
import { RegionButton } from '../RegionButton/RegionButton';

const LogoIcon = '/src/assets/images/coffee.png';
const CartIcon = '/src/assets/images/cart.png';
const ProfileIcon = '/src/assets/images/user.png';

export const Header = () => {
  return (
    <header className={styles.header}>
        <div className={styles.logoSection}>
            <h1>Sunshine Coffee</h1>   
            <div className={styles.logoIcon}>
                <img src={LogoIcon} alt="logo" />
            </div> 
        </div>
        <div className={styles.navIcons}>
            <RegionButton/>
            <img src={CartIcon} alt="cart" />
            <img src={ProfileIcon} alt="profile"/>
        </div>
    </header>
  );
};

