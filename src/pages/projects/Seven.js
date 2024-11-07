import React, { useEffect } from 'react';

const Seven = () => {
    useEffect(() => {
        document.title = "Anthony Thach | Contact";
    }, []);

  return (
    <div className='container'>
        <h1>Photography</h1>
    </div>
  );
};

export default Seven;
