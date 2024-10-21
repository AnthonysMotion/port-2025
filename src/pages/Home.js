import React from 'react';
import { useEffect, useState } from 'react';
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

  const [offsetY, setOffsetY] = useState(0);

  const handleScroll = () => {
    setOffsetY(window.pageYOffset);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <div className='container'>
      <div className='parallax-header'>
        <div className='hero' style={{ transform: `translateY(${offsetY * 0.5}px)` }}>
          <h1>Hi, my name is Anthony</h1>
        </div>
        <img
          className='parallax-header-bg'
          src='https://images.unsplash.com/photo-1729494130269-c5610ddbd300?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          alt='Background'
          style={{ transform: `translateY(${offsetY * 0.3}px)` }}
        />
      </div>
    </div>
  );
};

export default Home;
