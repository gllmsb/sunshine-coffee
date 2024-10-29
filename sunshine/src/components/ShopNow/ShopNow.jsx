import React from 'react';
import { Link } from 'react-router-dom';
import styles from './ShopNow.module.scss';

export const ShopNow = () => {
  return (
    <>
        <div className={styles.shopNowContainer}>
            <h2 className={styles.title}>Shop Now</h2>
            <p className={styles.description}>
            Our delicious coffees wil get you brewing the best cup of coffee you ever tasted in no time at all. And the best part of it? It is totally organic, fair trade and sustainably sourced. So get brewing
            </p>
            <Link to="/products">
            <button className={styles.shopButton}>Go To Products</button>
            </Link>
        </div>
    </>
  );
};
