import React, { useEffect } from 'react';

const Four = () => {
    useEffect(() => {
        document.title = "Anthony Thach | Contact";
    }, []);

  return (
    <div className='container'>
        <h1>4</h1>
    </div>
  );
};

export default Four;
