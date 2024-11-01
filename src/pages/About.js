import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { animateText } from '../components/gsap';
import Footer from '../components/Footer';


const About = () => {
  useEffect(() => {
    document.title = "Anthony Thach | About";
  }, []);

  const imgRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (imgRef.current) {
        // Move the image slower than the scroll
        imgRef.current.style.transform = `translateY(${scrollY * 0.3}px)`; // Adjust the factor as needed
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className='container'>
      <div className='about-landing'>
        <p>Hello!👋 I am a</p>
        <h1>
          <span className='font'>(</span>
          <span className='font color'> Digital Designer </span>
          <span className='font'>)</span><br />
          <code>&lt;<span className='color'>DEVELOPER</span>/&gt;</code>
        </h1>
        <p>Based in Auckland, New Zealand.</p>
      </div>

      <div className='about-main-section'>
        <h1>THE PATHFINDER</h1>
        <p>aye the beat go off?</p>
      </div>

      <div className='figures-section'>
        <h1>FIGURES</h1>
        <div className='figures-container'>
          <div className='figures1'>
            <p>Scope:</p>
            <ul>
              <li>Motion & Graphic Design</li>
              <li>Photography</li>
              <li>Web Design & Development</li>
              <li>Video Editing</li>
              <li>Brand & Art Direction</li>
            </ul>
          </div>
          <div className='figures2'>
            <p>Awards:</p>
            <ul>
              <li>Best Design Award - Motion Design</li>
              <li>Behance Featured 1x</li>
            </ul>
          </div>
          <div className='figures3'>
            <p>Past Clients:</p>
            <ul>
              <li>Lenovo</li>
              <li>One NZ Warriors</li>
              <li>Microsoft Windows 11</li>
              <li>Nova Esports</li>
              <li>Sony Xperia</li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </div>


  );
};

export default About;
