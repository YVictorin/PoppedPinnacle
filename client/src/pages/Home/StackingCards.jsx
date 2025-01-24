import Container from "react-bootstrap/Container";
import InfoSection from "./InfoSection"


const StackingCards = () => {
    return (
        <>
        <main>
       <section className="alternating-cards">
            
            <div className="left-card-wrapper">
                <img src="/images/home-left-card.png" alt="gourmet caramel, cheddar, and different flavors of popcorn in wooden bowl in an old Italian town hero image"></img>

                <div className="mutliple-card-container">
                    <div className="left-bottom-card"></div>
                    <div className="left-middle-card">
                        <p>A Perfect Blend</p>
                        <h2>Yonjou Yodol</h2>
                        <p className="left-middle-card-msg">Inspired by a passion for yodaling, Yonjou's Yodal combines sweer caramel with a hint a savory for an irresistible snack.</p>                      
                    </div>

                    <div className="left-top-card"><button><a href="">SHOP NOW</a></button></div>
                </div>
            </div>

            <div className="right-card-wrapper">
                <img src="/images/home-right-card.png" alt="gourmet chocolate covered popcorn in different flavors of popcorn in a bowl on a rock in a misty, tree dense forest area hero image angled towards the left "></img>

                <div className="right-mutliple-card-container">
                    <div className="right-bottom-card"></div>
                    <div className="right-middle-card">
                        <p>Chocolate Bliss</p>
                        <h2>Indulgent Delight</h2>
                        <p className="right-middle-card-msg">Treat yourself to our Crio Bru Chocolate-covered popcorn, crafted to bring you an experience like no other</p>            
                    </div>

                    <div className="right-top-card"><button><a href="">SHOP NOW</a></button></div>
                </div>
            </div>    
       </section>

       <InfoSection/>

       </main>
        </>
    );
}

export default StackingCards;
