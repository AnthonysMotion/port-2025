import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nav from './components/Nav';
// import Footer from './components/Footer'; // Uncomment if needed
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
//import SmoothScroll from './components/smoothscroll';
import CustomCursor from './components/cursor';

import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(TextPlugin);

function App() {

  return (
    <Router>
      <div>
        <Nav />
        <CustomCursor />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
