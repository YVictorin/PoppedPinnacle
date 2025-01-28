import Container from 'react-bootstrap/Container';
import ImageSlider from './ImageSlider';

import img1 from "/images/home-hero.png";
import img2 from "/images/CinnamonApple-product-2.png"
import img3 from "/images/Garlic-product-2.png"
import img4 from "/images/PeanutButter-product-2.png"

const InfoSection = () => {
    const IMAGES = [img1, img2, img3, img4]
    return (
        <>
        <div className=" w-full h-3/6 grid place-content-center" id="info-section">
            <div style={{
                maxWidth: "1200px",
                width: "100%",
                aspectRatio: "10/6",
                margin: "0 auto",
                overflow: "hidden"
            }}>
                 <ImageSlider imgSrc={IMAGES}/>
            </div>
        </div>
       <div className='seperator'></div>

       </>
    );
}

export default InfoSection;
