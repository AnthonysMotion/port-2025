import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
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
        imgRef.current.style.transform = `translateY(${scrollY * 0.3}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='container'>
      <div className="about-container">
        <div className="about-landing">
          <h1>Hello! 初めまして！</h1>
          <p>My name is Anthony — a digital designer & photographer based in Auckland, New Zealand.<br />I've been creating animations, designs, photographs, and videos for over 6 years.</p>
          <p><br />I think of myself as a full-stack creative, and despite being multidisciplinary, you'll find that my work touches base motion and graphic design, focusing on creating unique visual experiences for advertising and marketing purposes.</p>
          <p><br />If you have a project in mind, <Link to="/contact">reach out!</Link> Let's create something extraordinary.</p>
        </div>
        <div className="about-img">
          <img src={`${process.env.PUBLIC_URL}/img/img-2.png`} alt='anth img' />
        </div>
      </div>

      <div className='experience-section'>
        <h1>Experience</h1>
        <div className='experience-container'>
          <div className='figures1'>
            <p>Work:</p>
            <ul>
              <li>2019 to 2020 — Creative Director at Overt</li>
              <li>2020 to 2024 — Motion & Graphic Designer at Nova Esports</li>
              <li>2022 to 2023 — Graphic Designer at One NZ Warriors</li>
              <li>2022 to 2024 — Motion Designer at ESL FACEIT Group</li>
            </ul>
          </div>
          <div className='figures2'>
            <p>Education:</p>
            <ul>
              <li>2022 to 2025 — Bachelor of Science, CS at the University of Auckland</li>
            </ul>
          </div>
        </div>
      </div>

      <div className='figures-section'>
        <h1>Figures</h1>
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
