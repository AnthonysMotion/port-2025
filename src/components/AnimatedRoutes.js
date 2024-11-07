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
            <Route path="/0" element={<One />} />
            <Route path="/1" element={<Two />} />
            <Route path="/2" element={<Three />} />
            <Route path="/3" element={<Four />} />
            <Route path="/4" element={<Five />} />
            <Route path="/5" element={<Six />} />
          </Routes>
        </CSSTransition>
      </TransitionGroup>
    );
  }
  
  export default AnimatedRoutes;