import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { animateText } from '../components/gsap';

const Four = () => {
    useEffect(() => {
        document.title = "Anthony Thach | Contact";
    }, []);

  return (
    <div className='container'>
        <h1>four</h1>
    </div>
  );
};

export default Four;
