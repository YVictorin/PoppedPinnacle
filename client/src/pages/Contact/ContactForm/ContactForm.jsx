import { useState, useRef } from 'react';
import { Link, useOutletContext, useNavigate } from 'react-router-dom';

import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import styles from './ContactForm.module.css';
import ContactSubmitButton from '../ContactSubmitButton';


export default function ContactForm() {
  const [isOpen, setIsOpen] = useState(false);
  const [formError, setFormErrors] = useState({});

  const contactContainerRef = useRef(null);
  const contactOverlayRef = useRef(null);
  const timeline = useRef(gsap.timeline({ paused: true }));

  const sendHeading = useRef(null);
  const headerText = useRef(null);
  const contactNavRef = useRef(null);
  const ctaRef = useRef(null);

  const toggleBtn1 = useRef(null);
  const toggleBtn2 = useRef(null);

  // refs for form validation
  const nameRef = useRef(null);
  const phoneNumRef = useRef(null);
  const emailRef = useRef(null);
  const textAreaRef = useRef(null);

  const navigate = useNavigate();

  const { isMobile } = useOutletContext()


    // function to split text into spans for animation
    function splitTextIntoSpans(ref) {
        if (ref.current) {
            const text = ref.current.innerText;
            const splitText = text.split('').map((char) => {
                const span = document.createElement('span');
                span.innerText = char;
                span.style.position = 'relative'; //relative positioning for animation
                span.style.display = 'inline-block'; 
                return span;
            });
            ref.current.innerHTML = '';  //must clear out html each time
            splitText.forEach((span) => ref.current.appendChild(span)); 

        }
    }

    // main animation hook for the initial screen
    useGSAP(() => {
      //have to make sure that the elements are ready before doing gsap animations
        if (sendHeading.current) {
            splitTextIntoSpans(sendHeading);
            const headerSpans = sendHeading.current.querySelectorAll('span');

            gsap.to(headerSpans, {
                top: 0,
                duration: 1,
                ease: 'power4.out',
                stagger: 0.1,
            });

            gsap.from([ctaRef.current, contactNavRef.current], {
                opacity: 0,
                duration: 1,
                stagger: 0.1,
                delay: 1,
            });
        }
    }, { scope: contactContainerRef });

    // form overlay animation with timeline
    useGSAP(() => {
        if (contactOverlayRef.current && headerText.current) {
            splitTextIntoSpans(headerText);
            const textSpans = headerText.current.querySelectorAll('span');

            timeline.current
                .to(contactOverlayRef.current, {
                    opacity: 1,
                    duration: 0.4,
                    pointerEvents: 'all',
                })
                .to(textSpans, {
                    top: 0,
                    duration: 1,
                    ease: 'power4.out',
                    stagger: 0.1,
                }, '-=0.3'); // start the span animation slightly before the overlay finishes
        }
    }, { scope: contactOverlayRef });


    function toggleContactOverlay() {
      if (isOpen) {
          timeline.current.timeScale(2).reverse();  //speeds up for reversing 
      } else {
          timeline.current.timeScale(1.5).play();  //changes speed back to normal
      }
      setIsOpen(prev => !prev); 
  }

  function handleFormValidation(e) {
    e.preventDefault();
    const errors = {};
    const name = nameRef.current.value.trim();
    const phone = phoneNumRef.current.value.trim();
    const email = emailRef.current.value.trim();

    if (!name) errors.name = 'Name is required';
    if (!/^[\d]{3}[-.\s]?[\d]{3}[-.\s]?[\d]{4}$/.test(phone)) errors.phone = 'Invalid phone number';
    if (!/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/.test(email)) errors.email = 'Invalid email address';

    setFormErrors(errors);
    // reset form if there are no errors
    if(Object.keys(errors).length === 0) {
      nameRef.current.value = ''
      phoneNumRef.current.value = ''
      emailRef.current.value = ''
      textAreaRef.current.value = ''
      navigate(0)  //refreshes the page
    }
}
  

  return (
    <>
      {/* v1 JSX and css classes */}
      <section ref={contactContainerRef} className={styles['contact-hero']}>
        <div ref={contactNavRef} className={styles['contact-nav']}>
          <p>
            The Popped Perfection company is a creation by{' '}
            <Link to="/" className='visited:text-purple-900'>Yonjou Victorin</Link> and his ever so compassionate team
          </p>
        </div>

        <div className={styles['contact-header']}>
          <div className={styles['contact-header-text']}>
            <h1 ref={sendHeading}>POPLINE</h1>
          </div>
          <div ref={ctaRef} className={styles['cta']}>
            <button onClick={toggleContactOverlay} ref={toggleBtn1} id="toggle" style={{ 
                                backgroundColor: '#262625', 
                                color: '#fff', 
                                outline: 'none',
                                textTransform: 'uppercase',
                                padding: '0.5em 1em',
                                borderRadius: "2em",
                                cursor: "pointer"
                                }}>
              CORN-TACT US
            </button>
          </div>
        </div>
      </section>

      <div ref={contactOverlayRef} className={styles['contact-overlay']}>
        <div className={styles.col}>
          <div className={styles['contact-overlay-logo']}>
            <Link to="/">Popped Pinnacle</Link>
          </div>
          <div className={styles['form-container']}>
            <form onSubmit={handleFormValidation} className="group" id="submit-form">
              <label htmlFor="fname">Name</label>
                  <input
                    ref={nameRef}
                    type="text"
                    id="fname"
                    name="fname"
                    placeholder="First + Last"
                    style={{
                      width: '50%',
                      outline: 'none',
                      border: 'none',
                      borderBottom: '1px solid #f8f9fa',
                      padding: '0.5rem 0',
                      margin: '1rem 0',
                      color: '#f8f9fa',
                    }}
                    className=" peer invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500"
                  /> 
                  <br></br> 
                  <span className={!formError.name ? "hidden text-sm text-red-500 peer-[&:not(:placeholder-shown):not(:focus):invalid]:block" : 
                                                      "text-sm text-red-500 peer-[&:not(:placeholder-shown):not(:focus):invalid]:block" }>
                    A name is required
                  </span>
                  <br />

                  <label htmlFor="phone">Phone</label>
                  <input
                    ref={phoneNumRef}
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="(XXX) XXX-XXXX"
                    style={{
                      width: '50%',
                      outline: 'none',
                      border: 'none',
                      borderBottom: '1px solid #f8f9fa',
                      padding: '0.5rem 0',
                      margin: '1rem 0',
                      color: '#f8f9fa',
                    }}
                    className=" invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500"
                  />
                    <br></br>
                  <span className={!formError.phone ? "hidden text-sm text-red-500 peer-[&:not(:placeholder-shown):not(:focus):invalid]:block" : 
                                                      "text-sm text-red-500 peer-[&:not(:placeholder-shown):not(:focus):invalid]:block" }>
                    {formError.phone}
                  </span>

                  <br />

                  <label htmlFor="email">Email</label>
                  <input
                    ref={emailRef}
                    type="email"
                    id="email"
                    name="email"
                    placeholder="example@gmail.com"
                    style={{
                      width: '50%',
                      outline: 'none',
                      border: 'none',
                      borderBottom: '1px solid #f8f9fa',
                      padding: '0.5rem 0',
                      margin: '1rem 0',
                      color: '#f8f9fa',
                    }}
                    className=" invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500"
                  />
                  <br></br>
                  <span className={!formError.email ? "hidden text-sm text-red-500 peer-[&:not(:placeholder-shown):not(:focus):invalid]:block" : 
                                                      "text-sm text-red-500 peer-[&:not(:placeholder-shown):not(:focus):invalid]:block" }>
                    {formError.email}
                  </span>

              <br />
              <label>Support</label>
              <div className={styles.jobs}>
               <textarea ref={textAreaRef} name="" id="" cols="36" rows="5"></textarea>
              </div>
              <ContactSubmitButton className={Object.values(formError).length !== 0 ? "group-invalid:pointer-events-none group-invalid:opacity-30" : ""}/>
            </form>
          </div>
        </div>

        <div className={styles.col}>
          <div className={styles.copy}>
            <p>[any concerns]</p>
            <p onClick={toggleContactOverlay} ref={toggleBtn2} id="form-back" className='cursor-pointer'>[back]</p>
          </div>

          <div className={styles.about}>
            <p> {!isMobile ?  "Have a question or need assistance? Fill out your details below, and our team will get back to you as soon as possible." : null }</p>
          </div>
          <div className={styles.send}>
            <h1 ref={headerText}>{!isMobile ? "kernel" : null}</h1>
          </div>
        </div>
      </div>
    </>
  );
}
