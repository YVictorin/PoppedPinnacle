import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Slider = () => {
    const containerRef = useRef();
    const t1 = useRef(gsap.timeline({ paused: true }));

    useGSAP(() => {
        const pathStart = "M 0 100 V 50 Q 50 0 100 50 V 100 z";
        const pathEnd = "M 0 100 V 0 Q 50 0 100 0 V 100 z";

        // Timeline setup
        t1.current
            .to(".popcorns", { opacity: 1, ease: "power2.inOut", duration: 0.1 })
            .to(".path", { attr: { d: pathStart }, ease: "power3.easeIn", duration: 0.8 })
            .to(".path", { attr: { d: pathEnd }, ease: "power3.easeOut", duration: 0.4 })
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
                onStart: function () {
                    // Set initial position if needed
                    gsap.set(".product img", { x: 0, y: 0 });
                }
            }, "-=1.5")
            .from("#closeBtn", {
                opacity: 0,
                right: "-25%",
                ease: "power2.inOut",
                duration: 1,
            }, "-=1")
            .reverse();
    }, { scope: containerRef });

    const handleToggle = () => {
        t1.current.reversed(!t1.current.reversed());
    };

    return (
        <div ref={containerRef} className="container" onClick={handleToggle}>
            <div className="popcorns">
                <div className="popcorns-wrapper">
                    <svg className="transition" viewBox="0 0 100 100" preserveAspectRatio="none">
                        <path
                            className="path"
                            stroke="#36301D"
                            fill="#36301D"
                            strokeWidth="2"
                            d="M 0 100 V 100 Q 50 100 100 100 V 100 z"
                        />
                    </svg>

                    <div id="wrap">
                        {[...Array(4)].map((_, index) => (
                            <div key={index} className="block">
                                <div className="product">
                                    <img src="/images/home-left-card.png" alt={`Product ${index}`} />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <button id="toggleOverlay">Show</button>
                <button id="closeBtn">Close</button>
            </div>
        </div>
    );
};

export default Slider;