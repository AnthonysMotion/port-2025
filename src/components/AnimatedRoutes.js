import { Routes, Route, useLocation } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Home from '../pages/Home';
import About from '../pages/About';
import Contact from '../pages/Contact';
import One from '../pages/One';
import Two from '../pages/Two';
import Three from '../pages/Three';
import Four from '../pages/Four';
import Five from '../pages/Five';
import Six from '../pages/Six';
import React, { useState } from 'react';

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
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/1" element={<One />} />
            <Route path="/2" element={<Two />} />
            <Route path="/3" element={<Three />} />
            <Route path="/4" element={<Four />} />
            <Route path="/5" element={<Five />} />
            <Route path="/6" element={<Six />} />
          </Routes>
        </CSSTransition>
      </TransitionGroup>
    );
  }
  
  export default AnimatedRoutes;