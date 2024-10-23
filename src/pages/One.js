import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { animateText } from '../components/gsap';

const One = () => {
    useEffect(() => {
        document.title = "Anthony Thach | Lenovo";
    }, []);
    
    return (
        <div className='container'>
            <h1>project 1</h1>
        </div>
    );
};

export default One;
