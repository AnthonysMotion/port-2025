import React, { useEffect, useRef } from 'react';

const CustomCursor = () => {
  const cursorRef = useRef(null);

  useEffect(() => {
    const customCursor = cursorRef.current;
    let cursorVisible = true;
    let timeout;

    const showCursor = () => {
      if (!cursorVisible) {
        customCursor.style.opacity = '1';
        cursorVisible = true;
      }
      clearTimeout(timeout);
      timeout = setTimeout(hideCursor, 1000);
    };

    const hideCursor = () => {
      customCursor.style.opacity = '0';
      cursorVisible = false;
    };

    const handleMouseMove = (e) => {
      customCursor.style.left = `${e.clientX}px`;
      customCursor.style.top = `${e.clientY}px`;
      showCursor();
    };

    const handleMouseOver = (e) => {
      if (
        (e.target.matches('a, button, input, textarea, select, img') ||
         e.target.closest('a')?.querySelector('i')) &&
        !e.target.classList.contains('parallax-header-bg')
      ) {
        customCursor.classList.add('hover');
        showCursor();
      }
    };

    const handleMouseOut = (e) => {
      if (
        (e.target.matches('a, button, input, textarea, select, img') ||
         e.target.closest('a')?.querySelector('i')) &&
        !e.target.classList.contains('parallax-header-bg')
      ) {
        customCursor.classList.remove('hover');
        showCursor();
      }
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);

    hideCursor();

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
    };
  }, []);

  return <div ref={cursorRef} className="custom-cursor" />;
};

export default CustomCursor;
