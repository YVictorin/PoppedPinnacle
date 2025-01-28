import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { useState, useEffect } from "react"

export default function SupportTextBox({ text, user = false }) {
    const [isLoading, setIsLoading] = useState(true);

    
    function wait() {
       setTimeout(() => {
        setIsLoading(false)
       }, 2000)
    }

    useEffect(() => {
        wait();
    }, [])

    return !user ? (
        // AI loding animation
        isLoading ? 
            (
                <div               
                    className="w-fit bg-blue-900 p-2 mr-3 mt-3 text-left text-white"
                    style={{ borderRadius: "0.75rem 0.75rem 0.75rem 0rem" }}
                >
                <DotLottieReact
                    src="https://lottie.host/1bdeb9f0-4fad-4c14-aabb-d9e125ce9e26/kbjPxsyAeB.lottie"
                    loop
                    autoplay
                    className='w-16 h-10 aspect-square'
                />                  
                </div>
            // AI response text box
            ) : (<div               
                    className="w-fit bg-blue-900 p-2 mr-3  mt-3  text-left text-white"
                    style={{ borderRadius: "0.75rem 0.75rem 0.75rem 0rem" }}
                >
                {text}
                </div>)
    ) : (
        // Human response text box
        text && (
            <div
                className="w-fit justify-self-end bg-gray-200 ml-16 mt-4 p-2 text-left text-black"
                style={{ borderRadius: "0.75rem 0.75rem 0rem 0.75rem" }}
            >
                {text}
            </div>
        )
    );
}

