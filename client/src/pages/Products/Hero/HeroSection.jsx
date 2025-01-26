import styles from './HeroSection.module.css'

const HeroSection = () => {
    return (
        <section className={styles.heroImgSection}>
           <div className={styles.heroSectionText}>
            <p>Experience popcorn like never before!</p>
            <h2>Gourmet Popcorn Flavors</h2>
            <p>From classic caramel to perppermint hot chocolate, we have a flavor for every taste. Explore our array of <br></br> both classics and innovative popcorn flavors.</p></div>
        <img className={styles.heroImgSection} src="images/products-hero.png" alt="A hero image of multiple flavors of popcorn"></img>
     </section>
    );
}

export default HeroSection;
