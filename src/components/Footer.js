import React from 'react';
import './Footer.css';

const Footer = () => {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className='footer'>
      <footer>
        <button onClick={scrollToTop} className="scroll-up-button" style={{
          width: "50px",
          height: "50px"
        }}>
          <i class="fas fa-arrow-up"></i>
        </button>
        <h2>
          Get in touch — <a href="mailto:hello@anthonythach.com" className='color email-hover'>hello@anthonythach.com</a>
        </h2>
        <h1>EXCELLENT DESIGN, AT SCALE AND SPEED</h1>
        <p>© ANTHONY THACH 2024</p>
      </footer>
    </div>
  );
};

export default Footer;
