import React from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const projects = [
    { id: 1, title: 'Project 1', imageUrl: 'https://images.unsplash.com/photo-1726853546098-380e29da9e31?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', link: '/project1', type: 'rectangle', section: 'left' },
    { id: 2, title: 'Project 2', imageUrl: 'https://images.unsplash.com/photo-1726853546098-380e29da9e31?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', link: '/project2', type: 'rectangle', section: 'left' },
    { id: 3, title: 'Project 3', imageUrl: 'https://images.unsplash.com/photo-1726853546098-380e29da9e31?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', link: '/project3', type: 'square', section: 'middle' },
    { id: 4, title: 'Project 4', imageUrl: 'https://images.unsplash.com/photo-1726853546098-380e29da9e31?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', link: '/project4', type: 'square', section: 'middle' },
    { id: 5, title: 'Project 5', imageUrl: 'https://images.unsplash.com/photo-1726853546098-380e29da9e31?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', link: '/project5', type: 'square', section: 'right' },
  ];

  const leftColumnProjects = projects.filter(project => project.section === 'left');
  const middleColumnProjects = projects.filter(project => project.section === 'middle');
  const rightColumnProjects = projects.filter(project => project.section === 'right');

  useEffect(() => {
    const imageContainers = document.querySelectorAll('.rectangle, .square');

    imageContainers.forEach(container => {
      const img = container.querySelector('img');
      
      container.addEventListener('mouseenter', () => {
        img.style.transform = 'translateY(100%)';
      });

      container.addEventListener('mouseleave', () => {
        img.style.transition = 'none';
        img.style.transform = 'translateY(-100%)';

        setTimeout(() => {
          img.style.transition = 'transform 0.5s ease';
          img.style.transform = 'translateY(0)';
        }, 10);
      });
    });
  }, []);

  

  return (
    <div className="container">
      <header className="header">
        <h1>hello</h1>
      </header>

      <section className="portfolio">
        {/* Left section */}
        <div className="portfolio-left">
          {leftColumnProjects.map(project => (
            <Link to={project.link} className={project.type} key={project.id}>
              <div className="label">{project.title}</div>
              <img src={project.imageUrl} alt={project.title} />
            </Link>
          ))}
        </div>

        {/* Middle section */}
        <div className="portfolio-middle">
          {middleColumnProjects.map(project => (
            <Link to={project.link} className={project.type} key={project.id}>
              <div className="label">{project.title}</div>
              <img src={project.imageUrl} alt={project.title} />
            </Link>
          ))}
        </div>

        {/* Right section */}
        <div className="portfolio-right">
          {rightColumnProjects.map(project => (
            <Link to={project.link} className={project.type} key={project.id}>
              <div className="label">{project.title}</div>
              <img src={project.imageUrl} alt={project.title} />
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
