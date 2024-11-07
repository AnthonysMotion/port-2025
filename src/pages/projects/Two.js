import React, { useEffect } from 'react';
import Footer from '../../components/Footer';

const One = () => {
  useEffect(() => {
    document.title = "Anthony Thach | Contact";
  }, []);

  return (
    <div className='container'>
      <div className='lenovo-section-one'>
        <h1>Nova Esports</h1>
        <p className='uncap'>
          Nova Esports is a global leader in mobile esports, boasting over 14 titles and 7 world championship victories across multiple games.<br /><br />
          As a freelance motion and graphics designer, I had the privilege of working with Nova, supporting their social media presence by creating unique, visually striking media that amplified their brand and showcased their esports dominance.
        </p>
        <div className="nova-image-grid">
          <img src={`${process.env.PUBLIC_URL}/img/projects/nv3.png`} alt="Nova Esports 1" />
          <img src={`${process.env.PUBLIC_URL}/img/projects/nv1.png`} alt="Nova Esports 2" />
          <img src={`${process.env.PUBLIC_URL}/img/projects/nv2.png`} alt="Nova Esports 3" />
        </div>

        <div className='nova-video-container'>
          <video
            className='nova-responsive-video'
            src={`${process.env.PUBLIC_URL}/img/projects/nv-wr.mp4`}
            controls
          >
          </video>
        </div>

        <div className="nova-image-grid">
          <img src={`${process.env.PUBLIC_URL}/img/projects/nv4.gif`} alt="Nova Esports 1" />
          <img src={`${process.env.PUBLIC_URL}/img/projects/nv5.gif`} alt="Nova Esports 1" />
          <img src={`${process.env.PUBLIC_URL}/img/projects/nv6.gif`} alt="Nova Esports 1" />
        </div>

        <div className='nova-video-container'>
          <video
            className='nova-responsive-video'
            src={`${process.env.PUBLIC_URL}/img/projects/nv-discord.mp4`}
            controls
          >
          </video>
        </div>

        <h1>N HYPER ESPORTS</h1>
        <p>A sub brand of Nova Esports, sponsored by HyperLive, is a brand created to compete in the North American PUBG Mobile League</p>
        <div className="nova-image-grid">
          <img src={`${process.env.PUBLIC_URL}/img/projects/nh1.png`} alt="Nova Esports 1" />
          <img src={`${process.env.PUBLIC_URL}/img/projects/nh2.png`} alt="Nova Esports 1" />
          <img src={`${process.env.PUBLIC_URL}/img/projects/nh3.png`} alt="Nova Esports 1" />
          <img src={`${process.env.PUBLIC_URL}/img/projects/nh4.png`} alt="Nova Esports 1" />
          <img src={`${process.env.PUBLIC_URL}/img/projects/nh5.png`} alt="Nova Esports 1" />
          <img src={`${process.env.PUBLIC_URL}/img/projects/nh6.gif`} alt="Nova Esports 1" />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default One;
