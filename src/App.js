import React, { useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import Nav from './components/Nav';
import CustomCursor from './components/cursor';
import AnimatedRoutes from './components/AnimatedRoutes';

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
    <Router>
      <div id="root">
        <Nav />
        <CustomCursor />

        <main className="main-content">
          <AnimatedRoutes />
        </main>
      </div>
    </Router>
  );
}

export default App;
