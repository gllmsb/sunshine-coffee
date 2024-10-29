import React from 'react';
import styles from './Footer.module.scss';

export const Footer = () => {
  return (
    <div className={styles.footerContainer}>
      <footer className={styles.footer}>
        <div className={styles.footerColumn}>
          <h3>Contact</h3>
          <p>Supercoffeeroad 223b</p>
          <p>92203 New Coffeeland</p>
          <p>Phone: 22331122</p>
          <p>Mail: coffeeland@info.com</p>
        </div>
        <div className={styles.footerColumn}>
          <h3>Legal</h3>
          <p>Cookie policy</p>
          <p>Return policy</p>
          <p>Shipping</p>
          <p>Terms and Conditions</p>
        </div>
        <div className={styles.footerColumn}>
          <h3>About</h3>
          <p>History</p>
          <p>The people behind</p>
          <p>Partnerships</p>
          <p>International</p>
        </div>
      </footer>
    </div>
  );
};
