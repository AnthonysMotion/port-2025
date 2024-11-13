import React, { useEffect } from 'react';
import Footer from '../../components/Footer';

const Two = () => {
  useEffect(() => {
    document.title = "Anthony Thach | Contact";
  }, []);

  return (
    <div className='container'>
      <div className='warriors-landing'>
        <h1>One NZ Warriors</h1>
        <p className='uncap'>The esports team at the One NZ Warriors dedicated lots of attention to fostering social media growth. A distinct design system was conceptualized to set the team apart in a competitive landscape. <br /><br />Sticking to the existing identity of the One NZ Warriors rugby team and aligning with the primary naming sponsors, Vodafone (now One NZ), a comprehensive sub-brand and design system was developed.</p>
        <div className="nova-image-grid warriors-grid1">
          <img src={`${process.env.PUBLIC_URL}/img/projects/6.png`} alt="Nova Esports 1" />
          <img src={`${process.env.PUBLIC_URL}/img/projects/7.png`} alt="Nova Esports 2" />
          <img src={`${process.env.PUBLIC_URL}/img/projects/8.png`} alt="Nova Esports 3" />
        </div>
        <div className='warriors-desc'>
          <p>a sample of the existing design system for vodafone warriors, used for reference for this project</p>
          <h2>Re-imagined for esports</h2>
          <p></p>
          <div className='warriors-desc-grid'>
            <img src={`${process.env.PUBLIC_URL}/img/projects/9.png`} alt="Nova Esports 3" />
            <img src={`${process.env.PUBLIC_URL}/img/projects/10.png`} alt="Nova Esports 3" />
            <img src={`${process.env.PUBLIC_URL}/img/projects/11.png`} alt="Nova Esports 3" />
            <img src={`${process.env.PUBLIC_URL}/img/projects/12.png`} alt="Nova Esports 3" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Two;
