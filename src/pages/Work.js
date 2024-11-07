import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { animateText } from '../components/gsap';
import Footer from '../components/Footer';


const About = () => {
  useEffect(() => {
    document.title = "Anthony Thach | Work";
  }, []);

  const projects = [
    { id: 0, title: 'Lenovo Hero Stories', type: 'Social Media', brand: 'Lenovo', imageUrl: 'https://cdn.myportfolio.com/0f9e9020-150b-40de-ba95-b57990ef40f8/8d09c6e6-6d67-4e51-bcc9-1c7714cb10e3_rwc_270x0x1381x1080x1381.png?h=cea9381f9782cdd73964aa511e537123', hoverImageUrl: "https://cdn.myportfolio.com/0f9e9020-150b-40de-ba95-b57990ef40f8/a456d5d3-f108-42ca-9526-251c35745f29_rwc_79x0x404x316x404.gif?h=52e8190846a81d95f72bc170371e67cc", link: '/1' },
    { id: 1, title: 'Nova Esports', type: 'Brand Direction', brand: 'Nova Esports', imageUrl: 'https://cdn.myportfolio.com/0f9e9020-150b-40de-ba95-b57990ef40f8/69e5cf63-aa9f-475c-a9bb-b1533ca8f6c6_rwc_163x40x427x334x427.jpg?h=552a564c1b1140a243268f257b1b3b34', hoverImageUrl: "https://cdn.myportfolio.com/0f9e9020-150b-40de-ba95-b57990ef40f8/b6ba1a14-ebc5-4d94-8ef0-ad169b83e501_rwc_7x0x432x337x432.gif?h=b790a0ef29d741b5b976963f0fbbcd3f", link: '/2' },
    { id: 2, title: 'One NZ Warriors', type: 'Brand Direction', brand: 'NZ Warriors', imageUrl: 'https://cdn.myportfolio.com/0f9e9020-150b-40de-ba95-b57990ef40f8/6e4e0b4c-89ba-4f56-a7a3-654385b7a47a_car_202x158.png?h=b967ce274f073ea09ef5b4020506ff62', hoverImageUrl: "https://cdn.myportfolio.com/0f9e9020-150b-40de-ba95-b57990ef40f8/9dda12b0-0938-421d-aec4-e256278501f4_rwc_0x0x1381x1080x1381.png?h=e9e50d8087c77b9937e8f595373d0213", link: '/3' },
    { id: 3, title: 'Discord Advert', type: 'Animation', brand: 'Discord', imageUrl: 'https://cdn.myportfolio.com/0f9e9020-150b-40de-ba95-b57990ef40f8/01cbcc6f-8d19-4eaf-bb23-3916cf073b3b_rwc_23x0x1036x810x1036.png?h=bbe15df7c4cb9146dc527ce6f46dcd4c', hoverImageUrl: "https://cdn.myportfolio.com/0f9e9020-150b-40de-ba95-b57990ef40f8/0b0d75e4-790f-400e-a9c6-75d686515fdb_rwc_9x0x404x316x404.gif?h=b9b2c27fc6918c31b9d1e0e77013e936", link: '/4' },
    { id: 4, title: 'NIP Logo Animation', type: 'Animation', brand: 'NIP', imageUrl: 'https://cdn.myportfolio.com/0f9e9020-150b-40de-ba95-b57990ef40f8/012fab4a-f0cf-4ddd-97f1-d52de50c4c8b_rwc_270x0x1381x1080x1381.png?h=6894b1db0dc161223cecba7eb94ef4cc', hoverImageUrl: "https://cdn.myportfolio.com/0f9e9020-150b-40de-ba95-b57990ef40f8/c84b43e7-9efe-4fa8-bb2a-48b2d200ff9d_rwc_127x34x342x268x342.gif?h=91d2ec78b78c6e6aa6b36a115770fdec", link: '/5' },
    { id: 5, title: 'R6 Esports', type: 'Brand Direction', brand: 'XP Esports', imageUrl: 'https://cdn.myportfolio.com/0f9e9020-150b-40de-ba95-b57990ef40f8/1247b338-1797-4a97-858a-806887e93e22_car_202x158.jpg?h=2a655aea3d8976442080a08988489b5e', hoverImageUrl: "https://cdn.myportfolio.com/0f9e9020-150b-40de-ba95-b57990ef40f8/91bcff94-79ca-46e1-ba0e-6981aeddc761_rwc_79x0x404x316x404.gif?h=1f5f1cdcd62e591e07fa4b7185393134", link: '/6' }
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
      <div className="works-section" onMouseMove={handleMouseMove}>
        <h2 style={{ textAlign: 'center', color: 'white' }}>FEATURED WORKS</h2>
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
