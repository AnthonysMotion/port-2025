
import React, { useEffect } from 'react';

const SmoothScroll = () => {
  useEffect(() => {
    const body = document.body;
    const scrollWrap = document.getElementsByClassName("container")[0];
    const height = scrollWrap.getBoundingClientRect().height - 1;
    const speed = 0.08;
    
    let offset = 0;
    
    body.style.height = Math.floor(height) + "px";

    const smoothScroll = () => {
      offset += (window.pageYOffset - offset) * speed;
      const scroll = "translateY(-" + offset + "px) translateZ(0)";
      scrollWrap.style.transform = scroll;
      requestAnimationFrame(smoothScroll);
    };

    smoothScroll();
  }, []);

  return null; // This component doesn't render anything
};

export default SmoothScroll;
