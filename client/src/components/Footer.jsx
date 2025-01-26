
const Footer = ({ isProductPage, isMobile }) => {
  return (
    isProductPage && isMobile ? (
            <footer className="absolute top-[1000vh]">
              <div className="footer-info mobile">
                <div className="footer-shop mobile">SHOP <span>&#43;</span></div>
                <div className="footer-about mobile">CUSTOMER ASSISTANCE <span>&#43;</span></div>
                <div className="footer-contact mobile">ABOUT US <span>&#43;</span></div>
                <img id="footer-img" src="/images/footer-img.png" alt="Footer image" />
              </div>
      
              <div className="footer-content-wrapper">
                <div className="footer-logo-icons">
                  <img src="/images/logo.png" alt="Popped Perfection Logo" />
                  <div className="footer-socials-wrapper">
                    <i className="fa-brands fa-instagram fa-3x"></i>
                    <i className="fa-brands fa-facebook fa-3x"></i>
                    <i className="fa-brands fa-x-twitter fa-3x"></i>
                    <i className="fa-brands fa-tiktok fa-3x"></i>
                    <i className="fa-brands fa-linkedin fa-3x"></i>
                    <i className="fa-brands fa-youtube fa-3x"></i>
                  </div>
      
                  <div className="footer-help-container">
                    <p>
                      Popped Perfection. The popcorn that pierces the sky. Need help? Call us at
                      323-133-9876—because we believe in the kernel that believes in you!
                    </p>
                    <br />
                    <p className="small-text">
                      &copy;2024 Popped Perfection LLC and Affiliates. All rights reserved.<br />
                    </p>
                    <p className="small-text">Privacy Policies<br /></p>
                    <p className="small-text">Sitemap<br /></p>
                    <p className="small-text">Privacy & Cookies</p>
                  </div>
                </div>
      
                <img id="first-popcorn" src="/images/single-popcorn.png" alt="A single popcorn" />
                <img id="second-popcorn" src="/images/single-popcorn.png" alt="A single popcorn" />
                <img id="third-popcorn" src="/images/caramel-corn.png" alt="Two caramel-flavored popcorn" />
      
                <div className="footer-shop">
                  <p>SHOP PERFECTED</p>
                  <a href="#">PERFECTED POPCORN</a>
                  <a href="#">Indulgent Delight</a>
                  <a href="#">HOW TO GIFT</a>
                  <a href="#">PROMOS & DISCOUNTS</a>
                  <a href="#">AFFILIATES</a>
                </div>
      
                <div className="footer-about">
                  <p>ABOUT US</p>
                  <a href="#">YONJOU STORY</a>
                  <a href="#">DELIGHT STORY</a>
                  <a href="#">JOBS IN PERFECTION</a>
                  <a href="#">MEDIA RELEASE</a>
                  <a href="#">COMMUNITY</a>
                </div>
                <div className="footer-contact">
                  <p>CUSTOMER ASSISTANCE</p>
                  <a href="#">CONTACT US</a>
                  <a href="#">FAQ</a>
                  <a href="#">SHIPPING & DELIVERY</a>
                  <a href="#">REFUNDING</a>
                  <a href="#">GIFT CARDS</a>
                </div>
      
                <img id="footer-img" src="/images/footer-img.png" alt="Footer image" />
              </div>
            </footer>
            // positioning for product page on desktop
      ) : isProductPage && !isMobile ? (
        <footer className="translate-y-[-75vh]">
            <div className="footer-info mobile">
              <div className="footer-shop mobile">SHOP <span>&#43;</span></div>
              <div className="footer-about mobile">CUSTOMER ASSISTANCE <span>&#43;</span></div>
              <div className="footer-contact mobile">ABOUT US <span>&#43;</span></div>
              <img id="footer-img" src="/images/footer-img.png" alt="Footer image" />
            </div>

            <div className="footer-content-wrapper">
              <div className="footer-logo-icons">
                <img src="/images/logo.png" alt="Popped Perfection Logo" />
                <div className="footer-socials-wrapper">
                  <i className="fa-brands fa-instagram fa-3x"></i>
                  <i className="fa-brands fa-facebook fa-3x"></i>
                  <i className="fa-brands fa-x-twitter fa-3x"></i>
                  <i className="fa-brands fa-tiktok fa-3x"></i>
                  <i className="fa-brands fa-linkedin fa-3x"></i>
                  <i className="fa-brands fa-youtube fa-3x"></i>
                </div>

                <div className="footer-help-container">
                  <p>
                    Popped Perfection. The popcorn that pierces the sky. Need help? Call us at
                    323-133-9876—because we believe in the kernel that believes in you!
                  </p>
                  <br />
                  <p className="small-text">
                    &copy;2024 Popped Perfection LLC and Affiliates. All rights reserved.<br />
                  </p>
                  <p className="small-text">Privacy Policies<br /></p>
                  <p className="small-text">Sitemap<br /></p>
                  <p className="small-text">Privacy & Cookies</p>
                </div>
              </div>

              <img id="first-popcorn" src="/images/single-popcorn.png" alt="A single popcorn" />
              <img id="second-popcorn" src="/images/single-popcorn.png" alt="A single popcorn" />
              <img id="third-popcorn" src="/images/caramel-corn.png" alt="Two caramel-flavored popcorn" />

              <div className="footer-shop">
                <p>SHOP PERFECTED</p>
                <a href="#">PERFECTED POPCORN</a>
                <a href="#">Indulgent Delight</a>
                <a href="#">HOW TO GIFT</a>
                <a href="#">PROMOS & DISCOUNTS</a>
                <a href="#">AFFILIATES</a>
              </div>

              <div className="footer-about">
                <p>ABOUT US</p>
                <a href="#">YONJOU STORY</a>
                <a href="#">DELIGHT STORY</a>
                <a href="#">JOBS IN PERFECTION</a>
                <a href="#">MEDIA RELEASE</a>
                <a href="#">COMMUNITY</a>
              </div>
              <div className="footer-contact">
                <p>CUSTOMER ASSISTANCE</p>
                <a href="#">CONTACT US</a>
                <a href="#">FAQ</a>
                <a href="#">SHIPPING & DELIVERY</a>
                <a href="#">REFUNDING</a>
                <a href="#">GIFT CARDS</a>
              </div>

              <img id="footer-img" src="/images/footer-img.png" alt="Footer image" />
            </div>
          </footer>
      ) : ( //default positioning for footer 
            <footer>
            <div className="footer-info mobile">
              <div className="footer-shop mobile">SHOP <span>&#43;</span></div>
              <div className="footer-about mobile">CUSTOMER ASSISTANCE <span>&#43;</span></div>
              <div className="footer-contact mobile">ABOUT US <span>&#43;</span></div>
              <img id="footer-img" src="/images/footer-img.png" alt="Footer image" />
            </div>

            <div className="footer-content-wrapper">
              <div className="footer-logo-icons">
                <img src="/images/logo.png" alt="Popped Perfection Logo" />
                <div className="footer-socials-wrapper">
                  <i className="fa-brands fa-instagram fa-3x"></i>
                  <i className="fa-brands fa-facebook fa-3x"></i>
                  <i className="fa-brands fa-x-twitter fa-3x"></i>
                  <i className="fa-brands fa-tiktok fa-3x"></i>
                  <i className="fa-brands fa-linkedin fa-3x"></i>
                  <i className="fa-brands fa-youtube fa-3x"></i>
                </div>

                <div className="footer-help-container">
                  <p>
                    Popped Perfection. The popcorn that pierces the sky. Need help? Call us at
                    323-133-9876—because we believe in the kernel that believes in you!
                  </p>
                  <br />
                  <p className="small-text">
                    &copy;2024 Popped Perfection LLC and Affiliates. All rights reserved.<br />
                  </p>
                  <p className="small-text">Privacy Policies<br /></p>
                  <p className="small-text">Sitemap<br /></p>
                  <p className="small-text">Privacy & Cookies</p>
                </div>
              </div>

              <img id="first-popcorn" src="/images/single-popcorn.png" alt="A single popcorn" />
              <img id="second-popcorn" src="/images/single-popcorn.png" alt="A single popcorn" />
              <img id="third-popcorn" src="/images/caramel-corn.png" alt="Two caramel-flavored popcorn" />

              <div className="footer-shop">
                <p>SHOP PERFECTED</p>
                <a href="#">PERFECTED POPCORN</a>
                <a href="#">Indulgent Delight</a>
                <a href="#">HOW TO GIFT</a>
                <a href="#">PROMOS & DISCOUNTS</a>
                <a href="#">AFFILIATES</a>
              </div>

              <div className="footer-about">
                <p>ABOUT US</p>
                <a href="#">YONJOU STORY</a>
                <a href="#">DELIGHT STORY</a>
                <a href="#">JOBS IN PERFECTION</a>
                <a href="#">MEDIA RELEASE</a>
                <a href="#">COMMUNITY</a>
              </div>
              <div className="footer-contact">
                <p>CUSTOMER ASSISTANCE</p>
                <a href="#">CONTACT US</a>
                <a href="#">FAQ</a>
                <a href="#">SHIPPING & DELIVERY</a>
                <a href="#">REFUNDING</a>
                <a href="#">GIFT CARDS</a>
              </div>

              <img id="footer-img" src="/images/footer-img.png" alt="Footer image" />
            </div>
          </footer>
      )
    )
  };
  
  export default Footer;
  