import React, { useEffect } from 'react';

const Five = () => {
    useEffect(() => {
        document.title = "Anthony Thach | Contact";
    }, []);

  return (
    <div className='container'>
        <h1>5</h1>
    </div>
  );
};

export default Five;
