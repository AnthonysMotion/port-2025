import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import Nav from './components/Nav';
import CustomCursor from './components/cursor';
import Home from './pages/Home';
import Work from './pages/Work';
import About from './pages/About';
import Contact from './pages/Contact';
import One from './pages/projects/One';
import Two from './pages/projects/Two';
import Three from './pages/projects/Three';
import Four from './pages/projects/Four';
import Five from './pages/projects/Five';
import Six from './pages/projects/Six';
import Seven from './pages/projects/Seven';

gsap.registerPlugin(TextPlugin);

function App() {
  useEffect(() => {
    const disableRightClick = (e) => {
      e.preventDefault();
    };

    document.addEventListener('contextmenu', disableRightClick);

    return () => {
      document.removeEventListener('contextmenu', disableRightClick);
    };
  }, []);

  return (
    <Router basename="/">
      <div id="root">
        <Nav />
        <CustomCursor />
        <main className="main-content">
          <Routes>
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
        </main>
      </div>
    </Router>
  );
}

export default App;
