import React, { useEffect } from 'react';

const Zero = () => {
    useEffect(() => {
        document.title = "Anthony Thach | Contact";
    }, []);

  return (
    <div className='container'>
        <h1>0</h1>
    </div>
  );
};

export default Zero;
