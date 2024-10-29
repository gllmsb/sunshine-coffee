import React from 'react'
import styles from './Testimonies.module.scss';

const testimoniesData = [
    {name: "John", text: "Sunshine Coffee really delivers a great product. I love their coffee and the guided flow is great."},
    {name: "Eva", text: "Sunshine Coffee really delivers a great product. I love their coffee and the guided flow is great."},
    {name: "Peter", text: "Sunshine Coffee really delivers a great product. I love their coffee and the guided flow is great."},
    {name: "Michelle", text: "Sunshine Coffee really delivers a great product. I love their coffee and the guided flow is great."},
];

export const Testimonies = () => {
    return (
      <div className={styles.testimoniesContainer}>
        <h2 className={styles.title}>Testimonies</h2>
        <div className={styles.testimonyGrid}>
          {testimoniesData.map((testimony, index) => (
            <div key={index} className={styles.testimonyCard}>
              <h3 className={styles.name}>{testimony.name}</h3>
              <p className={styles.text}>"{testimony.text}"</p>
            </div>
          ))}
        </div>
      </div>
    );
  };
