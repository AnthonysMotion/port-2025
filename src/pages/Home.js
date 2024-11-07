import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { animateText } from '../components/gsap';
import Footer from '../components/Footer';


const Home = () => {
  const projects = [
    { id: 6, title: 'Photography Portfolio', type: 'Photography', brand: 'Miscellaneous', hoverImageUrl: `${process.env.PUBLIC_URL}/img/5.gif`, link: '/photography' },
    { id: 0, title: 'Lenovo Hero Stories', type: 'Social Media', brand: 'Lenovo', hoverImageUrl: `${process.env.PUBLIC_URL}/img/0.gif`, link: '/1' },
    { id: 1, title: 'Nova Esports', type: 'Brand Direction', brand: 'Nova Esports', hoverImageUrl: `${process.env.PUBLIC_URL}/img/1.gif`, link: '/2' },
    { id: 3, title: 'Discord Advert', type: 'Animation', brand: 'Discord', hoverImageUrl: `${process.env.PUBLIC_URL}/img/3.gif`, link: '/4' },
    { id: 4, title: 'Logo Animations', type: 'Animation', brand: 'Miscellaneous', hoverImageUrl: `${process.env.PUBLIC_URL}/img/4.gif`, link: '/5' }
  ];

  const images = [
    { url: `${process.env.PUBLIC_URL}/img/lenovo.png`, link: 'https://www.lenovo.com/', alt: 'Lenovo' },
    { url: `${process.env.PUBLIC_URL}/img/microsoft.png`, link: 'https://www.microsoft.com', alt: 'Microsoft' },
    { url: `${process.env.PUBLIC_URL}/img/vodafone.png`, link: 'https://one.nz/', alt: 'Vodafone' },
    { url: `${process.env.PUBLIC_URL}/img/esl.png`, link: 'https://eslfaceitgroup.com/', alt: 'ESL' }
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [fadeClass, setFadeClass] = useState('visible');

  useEffect(() => {
    const intervalId = setInterval(() => {
      setFadeClass('hidden');
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        setFadeClass('visible');
      }, 1000);
    }, 3000);

    return () => clearInterval(intervalId);
  }, [images.length]);

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
    if (window.innerWidth > 600) {
      animateText();
    }
    document.title = "Anthony Thach | Work";
  }, []);

  useEffect(() => {
    const handleFade = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;

      const fadeOpacity = 1 - (scrollPosition / windowHeight) * 1;
      const newOpacity = Math.max(0, Math.min(1, fadeOpacity));

      const scrollFraction = scrollPosition / windowHeight;

      const maxBlur = 10;
      const newBlur = `${Math.min(maxBlur, maxBlur * scrollFraction)}px`;

      const hero = document.querySelector('.hero');

      if (hero) {
        hero.style.opacity = newOpacity;
        hero.style.filter = `blur(${newBlur})`;
      }
    };

    window.addEventListener('scroll', handleFade);
    return () => window.removeEventListener('scroll', handleFade);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const [hoveredItem, setHoveredItem] = useState(null);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    setCursorPosition({ x: e.clientX, y: e.clientY });
  };

  const handleMouseEnter = (id) => {
    setHoveredItem(id);
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
  };

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
                <div className='rotating-logo'>
                  <li>
                    <a href={images[currentImageIndex].link} target="_blank" rel="noopener noreferrer">
                      <img
                        className={fadeClass}
                        src={images[currentImageIndex].url}
                        alt={images[currentImageIndex].alt}
                      />
                    </a>
                  </li>
                </div>
              </ul>
            </div>
          </div>
        </div>
        <video
          className="parallax-header-bg"
          src={`${process.env.PUBLIC_URL}/img/landing-bg.mp4`}
          autoPlay
          loop
          muted
          playsInline
        >
        </video>
      </div>

      {/* main work */}

      <div className='portfolio-slider'>
        <div className='slider-text' ref={sliderRef}>
          <p>Excellent design, at scale and speed 🡒</p><p>Excellent design, at scale and speed 🡒</p><p>Excellent design, at scale and speed 🡒</p>
        </div>
      </div>
      <div className="works-section" onMouseMove={handleMouseMove}>
        <h2 style={{ textAlign: 'center', color: 'white' }}>FEATURED WORK</h2>
        <div className="works-container">
          {projects.map((project) => (
            <div
              key={project.id}
              className={`work-item ${hoveredItem === project.id ? 'active' : ''}`}
              onMouseEnter={() => handleMouseEnter(project.id)}
              onMouseLeave={handleMouseLeave}
            >
              <a href={project.link} style={{ color: 'inherit', textDecoration: 'none', display: 'flex', width: '100%' }}>
                <p className="left-text">{project.brand}</p>
                <h1>{project.title}</h1>
                <p className="right-text">{project.type}</p>
              </a>
              {hoveredItem === project.id && (
                <img
                  src={project.hoverImageUrl}
                  alt={project.title}
                  className="hover-image"
                  style={{
                    position: 'absolute',
                    top: -cursorPosition.y / 5,
                    left: cursorPosition.x / 2,
                    pointerEvents: 'none',
                    transition: 'transform 0.5s',
                    zIndex: 10,
                  }}
                />
              )}
            </div>
          ))}
        </div>
        <Link to="/work" className='work-vaw'>View all work</Link>
      </div>

      {/* mobile work */}

      <div className='mobile-portfolio-section'>
        <div className='mobile-portfolio-grid'>
          {projects.map(project => (
            <div key={project.id} className='mobile-portfolio-item'
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

      {/* promo section 1 */}

      <div className='promo-section-one'>
        <h1>
          <span className="promo-letter">I</span> <span className="promo-letter">extract</span> <span className="promo-letter">beauty</span> <span className="promo-letter">from </span> <span className="promo-letter">purpose</span> <span className="promo-letter">to</span> <span className="promo-letter">get</span> <span className="promo-letter">your</span> <span className="promo-letter">brand </span> <span className="promo-letter color">higher</span><span className="promo-letter">,</span> <span className="promo-letter">your</span> <span className="promo-letter">vision</span> <span className="promo-letter color">farther</span><span className="promo-letter">,</span><span className="promo-letter">and</span> <span className="promo-letter">your</span> <span className="promo-letter">impact</span> <span className="promo-letter color">harder</span><span className="promo-letter">.</span>
        </h1>
        <div className='pso-img'>
          <img src={`${process.env.PUBLIC_URL}/img/img-1.png`} className='pso-img-1' alt='anth img1'></img>
          <img src={`${process.env.PUBLIC_URL}/img/img-2.png`} className='pso-img-2' alt='anth img2'></img>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
