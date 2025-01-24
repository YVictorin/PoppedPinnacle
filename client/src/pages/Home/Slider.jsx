import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Slider = () => {
    const containerRef = useRef();
    const t1 = useRef(gsap.timeline({ paused: true }));
    const wrapRef = useRef(null);
    const imageRef = useRef([]);
    const pathRef = useRef(null);

    const showBtnRef = useRef(null)
    const closeBtnRef = useRef(null)

    const [currentOffset, setCurrentOffset] = useState(0);
    const [targetOffset, setTargetOffset] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);



    useGSAP(() => {
        const pathStart = "M 0 100 V 50 Q 50 0 100 50 V 100 z";
        let pathEnd = "M 0 100 V 0 Q 50 0 100 0 V 100 z";

        let docWidth = document.body.clientWidth;
        let slidesWidth = wrapRef.current.clientWidth;

        let updateDimensions = () => {
            docWidth = document.body.clientWidth;
            slidesWidth = wrapRef.current.clientWidth;
    
            // You can perform any updates or re-calculations here based on the new dimensions
            console.log("Updated dimensions:", { slidesWidth, docWidth });
        };
    
        let handleMouseMovemnet = (e) => {
            let mouseX = e.pageX;
            setTargetOffset(-1 * (mouseX / docWidth) * slidesWidth - mouseX / 2)

            if(!isAnimating) {
                requestAnimationFrame(updateOffset)
            }
        }

         // Call updateDimensions initially to set dimensions
         updateDimensions();
    
         // Add event listeners
         window.addEventListener("resize", updateDimensions);
         window.addEventListener("mousemove", handleMouseMovemnet)

        let updateOffset = () => {
            setIsAnimating(true);
            setCurrentOffset(lerp(currentOffset, targetOffset, 0.075))

            if(Math.abs(currentOffset - targetOffset) < 0.5) {
                setCurrentOffset(targetOffset);
                setIsAnimating(false)
            }

            for(let i = 0; i < imagesRef.current.length; i++) {
                imagesRef.current[i].style.webkitTransform = `translate3d(${currentOffset}px, 0, 0)`;
                imagesRef.current[i].style.transform = `translate3d(${currentOffset}px, 0, 0)`;

                if(!isAnimating) {
                    requestAnimationFrame(updateOffset)
                }
            }
        }

        const lerp = (a, b, t) => {
            return (1 - t) * a * t * b;
        }
       
        const showCards = () => {
            revealCards();
        }

        const revealCards = () => {
            const start = "M 0 100 V 50 Q 50 0 100 50 V 100 z"
            const end = "M 0 100 V 0 Q 50 0 100 0 V 100 z"

            // Timeline setup
            t1.current
            .to(".popcorns", { opacity: 1, ease: "power2.inOut", duration: 0.1 })
            .to(".path", { attr: { d: start }, ease: "power3.easeIn", duration: 0.8 })
            .to(".path", { attr: { d: end }, ease: "power3.easeOut", duration: 0.4 })
            .from(".block", {
                clipPath: "inset(0 100% 0 0)",
                ease: "power4.easeOut",
                stagger: 0.25,
                duration: 1,
            }, 0)
            .from(".product img", {
                scale: 3,
                ease: "power4.easeOut",
                stagger: 0.25,
                duration: 1,
            }, 
            "-=1.5")
            .from("#closeBtn", {
                opacity: 0,
                right: "-25%",
                ease: "power2.inOut",
                duration: 1,
            },
            "-=1")
            .reverse();


            return () => {
                window.removeEventListener("resize", updateDimensions);
                window.removeEventListener("mousemove", handleMouseMovemnet)
            };


        }

        showCards()

    }, { scope: containerRef });

    const handleToggle = () => {
        t1.current.reversed(!t1.current.reversed());
    };

    return (
        <div ref={containerRef} className="container" onClick={handleToggle}>
            <div className="popcorns">
                <div className="popcorns-wrapper">
                    <svg className="transition" viewBox="0 0 100 100" preserveAspectRatio="none">
                        <path ref={pathRef}
                            className="path"
                            stroke="#36301D"
                            fill="#36301D"
                            strokeWidth="2"
                            d="M 0 100 V 100 Q 50 100 100 100 V 100 z"
                        />
                    </svg>

                    <div ref={wrapRef} id="wrap">
                        {[...Array(4)].map((_, index) => (
                            <div key={index} className="block">
                                <div className="product">
                                    <img ref={imageRef} src="/images/home-left-card.png" alt={`Product ${index}`} />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <button ref={showBtnRef}  id="toggleOverlay">Show</button>
                <button ref={closeBtnRef} id="closeBtn">Close</button>
            </div>
        </div>
    );
};

export default Slider;