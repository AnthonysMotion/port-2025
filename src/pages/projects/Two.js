import React, { useEffect } from 'react';

const One = () => {
    useEffect(() => {
        document.title = "Anthony Thach | Contact";
    }, []);

  return (
    <div className='container'>
        <h1>nova</h1>
    </div>
  );
};

export default One;
