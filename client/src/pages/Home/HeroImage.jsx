import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default function HeroImage() {
    return (
        <>
          <section className="hero-img">
            <img src="/images/home-hero.png" alt=""></img>
            
            
            <div className="hero-text-container">
                <h2>Gourmet Popcorn Flavors</h2>
                <p>Looking for a delicious snack?</p>
                <p>Our gourmet popcorn selection offers a variety of</p>
                <p>unique and bold flavors, like sweet, savory, or spicy,</p>
                <p>we have the flavor to satisfy your craving.</p>
                
                <button><a href="">INDULGE NOW!</a></button> 
            </div>
            
        </section>

        </>
      )
    
}