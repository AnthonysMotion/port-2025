import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { animateText } from '../components/gsap';

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
      <div className='content-1'>
        <div class="youtube-container">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/6s7njaPa_Yw?si=wKx3vCVv9eBoPyHN" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>        </div>      </div>
    </div>
  );
};

export default Home;
