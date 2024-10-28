import React, { useState } from 'react';
import styles from './RegionButton.module.scss';

export const RegionButton = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedLanguage, setSelectedLanguage] = useState('Europe');

    const toggleDropdown = () => setIsOpen(!isOpen);

    const selectedLangauge = (language) => {
        setSelectedLanguage(language);
        setIsOpen(false);
    };

  return (
    <div className={styles.regionButtonContainer}>
        <button onClick={toggleDropdown}  className={styles.regionButton}>
            {selectedLanguage}
        </button>
        {isOpen && (
            <div className={styles.dropdownMenu}>
                <div onClick={() => selectedLangauge('Danish')}>Danish</div>
                <div onClick={() => selectedLangauge('English')}>English</div>
            </div>
        )}
    </div>
  );
};
