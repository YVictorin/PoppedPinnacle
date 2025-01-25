import React from 'react';
import styles from './HeroSection.module.css'

const HeroSection = () => {
    return (
        <section className={styles.heroImgSection}>
        <img className={styles.heroImgSection} src="images/products-hero.png" alt="A hero image of multiple flavors of popcorn"></img>
     </section>
    );
}

export default HeroSection;
