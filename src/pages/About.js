import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { animateText } from '../components/gsap';

const About = () => {
    useEffect(() => {
        document.title = "Anthony Thach | About";
    }, []);
    
    return (
        <div className='container'>
            <div className='about-landing'>
                <h1>sup g im the goat</h1>
            </div>
        </div>
    );
};

export default About;
