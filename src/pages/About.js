import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { animateText } from '../components/gsap';

const About = () => {
    useEffect(() => {
        document.title = "Anthony Thach | About";
    }, []);
    
    return (
        <div className='container'>
            <h1>about</h1>
        </div>
    );
};

export default About;
