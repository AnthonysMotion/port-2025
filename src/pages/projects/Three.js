import React, { useEffect } from 'react';

const Two = () => {
    useEffect(() => {
        document.title = "Anthony Thach | Contact";
    }, []);

  return (
    <div className='container'>
        <h1>2</h1>
    </div>
  );
};

export default Two;
