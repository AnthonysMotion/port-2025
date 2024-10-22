import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nav from './components/Nav';
//import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import SmoothScroll from './components/smoothscroll';

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
    
import { TextPlugin } from "gsap/TextPlugin";


gsap.registerPlugin(useGSAP,TextPlugin);

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <SmoothScroll />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}
//
//<Footer />

export default App;
