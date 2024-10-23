import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { animateText } from '../components/gsap';

const Five = () => {
    useEffect(() => {
        document.title = "Anthony Thach | Contact";
    }, []);

  return (
    <div className='container'>
        <h1>five</h1>
    </div>
  );
};

export default Five;
