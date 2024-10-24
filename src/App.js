import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Nav from './components/Nav';

import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import One from './pages/One';
import Two from './pages/Two';
import Three from './pages/Three';
import Four from './pages/Four';
import Five from './pages/Five';
import Six from './pages/Six';

import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import SmoothScroll from './components/smoothscroll';
import CustomCursor from './components/cursor';

gsap.registerPlugin(TextPlugin);

function App() {
  return (
    <Router>
      <div id="root">
        <Nav />
        <CustomCursor />
        <SmoothScroll />

        <main className="main-content"> {/* This div will allow the content to grow and push the footer down */}
          <Routes>
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

          
        </main>
        
        
      </div>
    </Router>
  );
}


export default App;
