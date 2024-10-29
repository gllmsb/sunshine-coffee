import React from 'react';
import styles from './InfoSection.module.scss';

const infoCardsData = [
  {
    title: "The right beans",
    description: "Our journey begins with a deep-rooted connection to the land, as we seek out farmers who uphold environmentally friendly practices and prioritize the well-being of their communities. Through personal relationships and mutual respect, we collaborate closely with these farmers, understanding their methods and values.",
    image: '/src/assets/images/card1.png',
    imageId: 'beans-image'
  },
  {
    title: "Carefully handled",
    description: "Each bean is carefully handpicked at the peak of ripeness, ensuring optimal flavor and aroma. We embrace diversity in our selection, cherishing the unique characteristics of each region and varietal. From the lush mountainsides to the sunkissed valleys, we traverse the landscapes in search of perfection.",
    image: '/src/assets/images/card2.png',
    imageId: 'handled-image'
  },
  {
    title: "From us to you",
    description: "Our commitment to organic farming means that our beans are free from harmful chemicals, allowing the natural flavors to shine through. We believe in transparency and traceability, providing our customers with a genuine connection to the origins of their coffee.",
    image: '/src/assets/images/card3.png',
    imageId: 'coffee-image'
  },
];

export const InfoSection = () => (
  <div className={styles.infoSection}>
    {infoCardsData.map((card, index) => (
      <div key={index} className={styles.infoCard}>
        <h2>{card.title}</h2>
        <p>{card.description}</p>
        <div className={styles.imageContainer}>
          <img src={card.image} alt={card.title} id={card.imageId} className={styles.image} />
        </div>
      </div>
    ))}
  </div>
);
