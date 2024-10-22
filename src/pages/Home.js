import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { animateText } from '../components/gsap';

const Home = () => {
  const projects = [
    { id: 1, title: 'Lenovo', imageUrl: 'https://cdn.myportfolio.com/0f9e9020-150b-40de-ba95-b57990ef40f8/8d09c6e6-6d67-4e51-bcc9-1c7714cb10e3_rwc_270x0x1381x1080x1381.png?h=cea9381f9782cdd73964aa511e537123', hoverImageUrl: "https://cdn.myportfolio.com/0f9e9020-150b-40de-ba95-b57990ef40f8/a456d5d3-f108-42ca-9526-251c35745f29_rwc_79x0x404x316x404.gif?h=52e8190846a81d95f72bc170371e67cc", link: '/project1' },
    { id: 2, title: 'Nova Esports', imageUrl: 'https://cdn.myportfolio.com/0f9e9020-150b-40de-ba95-b57990ef40f8/69e5cf63-aa9f-475c-a9bb-b1533ca8f6c6_rwc_163x40x427x334x427.jpg?h=552a564c1b1140a243268f257b1b3b34', hoverImageUrl: "https://cdn.myportfolio.com/0f9e9020-150b-40de-ba95-b57990ef40f8/b6ba1a14-ebc5-4d94-8ef0-ad169b83e501_rwc_7x0x432x337x432.gif?h=b790a0ef29d741b5b976963f0fbbcd3f", link: '/project2' },
    { id: 3, title: 'One NZ Warriors', imageUrl: 'https://cdn.myportfolio.com/0f9e9020-150b-40de-ba95-b57990ef40f8/6e4e0b4c-89ba-4f56-a7a3-654385b7a47a_car_202x158.png?h=b967ce274f073ea09ef5b4020506ff62', hoverImageUrl: "https://cdn.myportfolio.com/0f9e9020-150b-40de-ba95-b57990ef40f8/9dda12b0-0938-421d-aec4-e256278501f4_rwc_0x0x1381x1080x1381.png?h=e9e50d8087c77b9937e8f595373d0213", link: '/project3' },
    { id: 4, title: 'Discord', imageUrl: 'https://cdn.myportfolio.com/0f9e9020-150b-40de-ba95-b57990ef40f8/01cbcc6f-8d19-4eaf-bb23-3916cf073b3b_rwc_23x0x1036x810x1036.png?h=bbe15df7c4cb9146dc527ce6f46dcd4c', hoverImageUrl: "https://cdn.myportfolio.com/0f9e9020-150b-40de-ba95-b57990ef40f8/0b0d75e4-790f-400e-a9c6-75d686515fdb_rwc_9x0x404x316x404.gif?h=b9b2c27fc6918c31b9d1e0e77013e936", link: '/project4' },
    { id: 5, title: 'Ninjas in Pyjamas', imageUrl: 'https://cdn.myportfolio.com/0f9e9020-150b-40de-ba95-b57990ef40f8/012fab4a-f0cf-4ddd-97f1-d52de50c4c8b_rwc_270x0x1381x1080x1381.png?h=6894b1db0dc161223cecba7eb94ef4cc', hoverImageUrl: "https://cdn.myportfolio.com/0f9e9020-150b-40de-ba95-b57990ef40f8/c84b43e7-9efe-4fa8-bb2a-48b2d200ff9d_rwc_127x34x342x268x342.gif?h=91d2ec78b78c6e6aa6b36a115770fdec", link: '/project5' },
    { id: 6, title: 'XP Esports', imageUrl: 'https://cdn.myportfolio.com/0f9e9020-150b-40de-ba95-b57990ef40f8/1247b338-1797-4a97-858a-806887e93e22_car_202x158.jpg?h=2a655aea3d8976442080a08988489b5e', hoverImageUrl: "https://cdn.myportfolio.com/0f9e9020-150b-40de-ba95-b57990ef40f8/91bcff94-79ca-46e1-ba0e-6981aeddc761_rwc_79x0x404x316x404.gif?h=1f5f1cdcd62e591e07fa4b7185393134", link: '/project5' }
  ];

  const [offsetY, setOffsetY] = useState(0);
  const [hoveredProjectId, setHoveredProjectId] = useState(null);

  const handleScroll = () => {
    setOffsetY(window.pageYOffset);
  };

  const sliderRef = useRef(null);
  const speed = 1;

  useEffect(() => {
    const slider = sliderRef.current;
    let position = -slider.offsetWidth;
    slider.innerHTML += slider.innerHTML;

    const animateSlider = () => {
      position += speed;
      slider.style.transform = `translateX(${position}px)`;

      if (position > 0) {
        position = -slider.offsetWidth / 2;
      }
    };

    const interval = setInterval(animateSlider, 20);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    animateText();
  }, []);

  return (
    <div className='container'>
      <div className='parallax-header'>
        <div className='hero' style={{ transform: `translateY(${offsetY * 0.5}px)` }}>
          <h1>
            <span class="letter">D</span>
            <span class="letter">e</span>
            <span class="letter">s</span>
            <span class="letter">i</span>
            <span class="letter">g</span>
            <span class="letter">n</span>
            <span>&nbsp;</span>
            <span class="letter">f</span>
            <span class="letter">o</span>
            <span class="letter">r</span>
            <span>&nbsp;</span>
            <span class="letter">t</span>
            <span class="letter">h</span>
            <span class="letter">e</span>
            <span>&nbsp;</span>
            <span class="ph-font">( future )</span><br />
            <span class="ph-icon">🡒</span>
            <span>&nbsp;</span>
            <span class="letter">w</span>
            <span class="letter">i</span>
            <span class="letter">t</span>
            <span class="letter">h</span>
            <span>&nbsp;</span>
            <span class="letter">a</span>
            <span class="letter">n</span>
            <span>&nbsp;</span>
            <span class="letter">i</span>
            <span class="letter">m</span>
            <span class="letter">p</span>
            <span class="letter">a</span>
            <span class="letter">c</span>
            <span class="letter">t</span>
            <span>&nbsp;</span>
            <span class="letter">n</span>
            <span class="letter">o</span>
            <span class="letter">w</span>
            <span class="letter">.</span>
          </h1>
          <div className="accents" id="two">
            <div className="accent-1">
              <p>ART DIRECTION<br />WEB & DIGITAL DESIGN</p>
            </div>
            <div className="accent-2">
              <p>AUCKLAND<br />NEW ZEALAND</p>
            </div>
            <div className="accent-3">
              <ul className="trusted-logos">
                <li><p>PROUDLY<br />TRUSTED BY:</p></li>
                <li>
                  <a href="https://www.lenovo.com/" target="_blank" rel="noopener noreferrer">
                    <img src="/img/lenovo.png" alt="lenovo logo" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <img
          className='parallax-header-bg'
          src='https://images.unsplash.com/photo-1651085349238-75cac5c9258b?q=80&w=2127&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          alt='Background'
          style={{ transform: `translateY(${offsetY * 1}px)` }}
        />
      </div>
      <div className='portfolio-section'>
        <div className='portfolio-slider'>
          <div className='slider-text' ref={sliderRef}>
            <p>Excellent design, at scale and speed 🡒</p><p>Excellent design, at scale and speed 🡒</p><p>Excellent design, at scale and speed 🡒</p>
          </div>
        </div>
        <div className='portfolio-grid'>
          {projects.map(project => (
            <div key={project.id} className='portfolio-item'
              onMouseEnter={() => setHoveredProjectId(project.id)}
              onMouseLeave={() => setHoveredProjectId(null)}>
              <Link to={project.link}>
                <img
                  src={hoveredProjectId === project.id ? project.hoverImageUrl : project.imageUrl}
                  alt={project.title}
                />
                <h3>{project.title}</h3>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <div className=''></div>
    </div>
  );
};

export default Home;
