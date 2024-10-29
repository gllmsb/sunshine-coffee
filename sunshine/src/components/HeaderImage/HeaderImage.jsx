import React from 'react'
import styles from './HeaderImage.module.scss';

const Header = '/src/assets/images/header.png';

export const HeaderImage = () => {
  return (
    <>
        <div className={styles.headerImageContainer}>
          <img src={Header} alt="Header Background" className={styles.headerImage} />
            <div className={styles.headerText}>
              <h2>We Love Coffee</h2>
              <p>And all the people who make it</p>
            </div>
        </div>
    </>
  )
}
