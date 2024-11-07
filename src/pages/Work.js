import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { animateText } from '../components/gsap';
import Footer from '../components/Footer';


const About = () => {
  useEffect(() => {
    document.title = "Anthony Thach | Work";
  }, []);

  const projects = [
    { id: 0, title: 'Lenovo Hero Stories', type: 'Social Media', brand: 'Lenovo', hoverImageUrl: `${process.env.PUBLIC_URL}/img/0.gif`, link: '/1' },
    { id: 1, title: 'Nova Esports', type: 'Brand Direction', brand: 'Nova Esports', hoverImageUrl: `${process.env.PUBLIC_URL}/img/1.gif`, link: '/2' },
    { id: 2, title: 'One NZ Warriors', type: 'Brand Direction', brand: 'NZ Warriors', hoverImageUrl: `${process.env.PUBLIC_URL}/img/2.png`, link: '/3' },
    { id: 3, title: 'Discord Advert', type: 'Animation', brand: 'Discord', hoverImageUrl: `${process.env.PUBLIC_URL}/img/3.gif`, link: '/4' },
    { id: 4, title: 'NIP Logo Animation', type: 'Animation', brand: 'NIP', hoverImageUrl: `${process.env.PUBLIC_URL}/img/4.gif`, link: '/5' },
    { id: 5, title: 'R6 Esports', type: 'Brand Direction', brand: 'XP Esports', hoverImageUrl: `${process.env.PUBLIC_URL}/img/5.gif`, link: '/6' }
  ];

  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });


  const [hoveredItem, setHoveredItem] = useState(null);

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
      <div className="works-section" onMouseMove={handleMouseMove} style={{ 'padding-top': '4rem' }}>
        <h2 style={{ textAlign: 'center', color: 'white' }}>ALL WORK</h2>
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
      </div>
      <Footer />
    </div>
  );
};

export default About;
