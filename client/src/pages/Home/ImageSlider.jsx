import { useState } from 'react'
import { ArrowBigLeft, ArrowBigRight } from 'lucide-react'


export default function ImageSlider({ imgSrc }) {
    const [imageIndex, setImageIndex] = useState(0);

    function showNextImage() {
        setImageIndex(index => {
            if(index === imgSrc.length - 1) return 0 //makes the slider work if you backwards
            return index + 1 //increments the slider one img forward
        }) 
    }

    function showPrevImage() {
        setImageIndex(index => {
            if(index === 0) return imgSrc.length - 1 //makes the slider work if you backwards
            return index - 1 //decrements the slider one img backward
        })
    }


    return (
        <div className="w-full h-full relative">
            <img src={imgSrc[imageIndex]} className="img-slider-img" alt=""></img>
            <button onClick={showPrevImage} style={{ left: 0 }} className="img-slider-btn"><ArrowBigLeft/></button>
            <button onClick={showNextImage} style={{ right: 0 }}  className="img-slider-btn"><ArrowBigRight/></button>
        </div>
    )
}