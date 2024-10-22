import React, { useEffect } from 'react';

const CustomCursor = () => {
  useEffect(() => {
    const customCursor = document.createElement('div');
    customCursor.classList.add('custom-cursor');
    document.body.appendChild(customCursor);

    let cursorVisible = true;
    let timeout;

    function showCursor() {
      if (!cursorVisible) {
        customCursor.style.opacity = '1';
        cursorVisible = true;
      }
      clearTimeout(timeout);
      timeout = setTimeout(hideCursor, 1000);
    }

    function hideCursor() {
      customCursor.style.opacity = '0';
      cursorVisible = false;
    }

    const handleMouseMove = (e) => {
      customCursor.style.left = `${e.clientX}px`;
      customCursor.style.top = `${e.clientY}px`;
      showCursor();
    };

    const handleMouseOver = (e) => {
      const tagNamesToTrack = ['A', 'BUTTON', 'INPUT', 'SELECT', 'TEXTAREA', 'IMG'];
      if (tagNamesToTrack.includes(e.target.tagName)) {
        customCursor.classList.add('hover');
        showCursor();
      }
    };

    const handleMouseOut = (e) => {
      const tagNamesToTrack = ['A', 'BUTTON', 'INPUT', 'SELECT', 'TEXTAREA', 'IMG'];
      if (tagNamesToTrack.includes(e.target.tagName)) {
        customCursor.classList.remove('hover');
        showCursor();
      }
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);

    hideCursor();

    // Cleanup the event listeners on component unmount
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
      document.body.removeChild(customCursor);
    };
  }, []);

  return null; // This component doesn't render any JSX
};

export default CustomCursor;
