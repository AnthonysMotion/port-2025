import { Routes, Route, useLocation } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import React from 'react';

import Home from '../pages/Home';
import Work from '../pages/Work';
import About from '../pages/About';
import Contact from '../pages/Contact';

import One from '../pages/projects/One';
import Two from '../pages/projects/Two';
import Three from '../pages/projects/Three';
import Four from '../pages/projects/Four';
import Five from '../pages/projects/Five';
import Six from '../pages/projects/Six';
import Seven from '../pages/projects/Seven';

function AnimatedRoutes() {
    const location = useLocation();
  
    return (
      <TransitionGroup>
        <CSSTransition
          key={location.key}
          classNames="fade"
          timeout={500}
        >
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/work" element={<Work />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/lenovo" element={<One />} />
            <Route path="/nova-esports" element={<Two />} />
            <Route path="/nz-warriors" element={<Three />} />
            <Route path="/discord" element={<Four />} />
            <Route path="/logo-animations" element={<Five />} />
            <Route path="/xpe" element={<Six />} />
            <Route path="/photography" element={<Seven />} />
          </Routes>
        </CSSTransition>
      </TransitionGroup>
    );
  }
  
  export default AnimatedRoutes;