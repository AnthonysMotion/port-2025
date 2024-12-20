import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link for client-side routing
import Footer from '../components/Footer';

const About = () => {
  useEffect(() => {
    document.title = "Anthony Thach | Work";
  }, []);

  const projects = [
    { id: 6, title: 'Photography Portfolio', type: 'Photography', brand: 'Miscellaneous', imageUrl: `${process.env.PUBLIC_URL}/img/6.png`, hoverImageUrl: `${process.env.PUBLIC_URL}/img/6.png`, link: '/photography' },
    { id: 0, title: 'Lenovo Hero Stories', type: 'Social Media', brand: 'Lenovo', imageUrl: `${process.env.PUBLIC_URL}/img/projects/5.png`, hoverImageUrl: `${process.env.PUBLIC_URL}/img/0.gif`, link: '/lenovo' },
    { id: 1, title: 'Nova Esports', type: 'Brand Direction', brand: 'Nova Esports', imageUrl: `${process.env.PUBLIC_URL}/img/projects/4.png`, hoverImageUrl: `${process.env.PUBLIC_URL}/img/1.gif`, link: '/nova-esports' },
    { id: 2, title: 'One NZ Warriors', type: 'Brand Direction', brand: 'NZ Warriors', imageUrl: `${process.env.PUBLIC_URL}/img/projects/9.png`, hoverImageUrl: `${process.env.PUBLIC_URL}/img/2.png`, link: '/nz-warriors' },
  ];

  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  const [hoveredItem, setHoveredItem] = useState(null);

  const [hoveredProjectId, setHoveredProjectId] = useState(null);

  const handleMouseMove = (e) => {
    setCursorPosition({ x: e.clientX, y: e.clientY });
  };

  const handleMouseEnter = (id) => {
    setHoveredItem(id);
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='container'>
      <div className="works-section" onMouseMove={handleMouseMove} style={{ 'padding-top': '4rem' }}>
        <div className="works-container">
          {projects.map((project) => (
            <div
              key={project.id}
              className={`work-item ${hoveredItem === project.id ? 'active' : ''}`}
              onMouseEnter={() => handleMouseEnter(project.id)}
              onMouseLeave={handleMouseLeave}
            >
              {/* Replacing anchor <a> with Link */}
              <Link to={project.link} style={{ color: 'inherit', textDecoration: 'none', display: 'flex', width: '100%' }}>
                <p className="left-text">{project.brand}</p>
                <h1>{project.title}</h1>
                <p className="right-text">{project.type}</p>
              </Link>
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
      <Footer />
    </div>
  );
};

export default About;
