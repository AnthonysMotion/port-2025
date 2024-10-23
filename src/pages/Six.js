import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { animateText } from '../components/gsap';

const Six = () => {
    useEffect(() => {
        document.title = "Anthony Thach | Contact";
    }, []);

  return (
    <div className='container'>
        <h1>six</h1>
    </div>
  );
};

export default Six;
