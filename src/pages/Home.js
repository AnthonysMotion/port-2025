// src/pages/Home.js
import React from 'react';

const Home = () => {
  return (
    <div className="home-container">
      <div className="landing-area">
        <h1>header</h1>
        <p>hi</p>
      </div>
      <div className="portfolio-section">
        <div className="portfolio-left">
          <div className="rect"></div>
          <div className="rect"></div>
          <div className="rect"></div>
        </div>
        <div className="portfolio-center">
          <div className="square"></div>
          <div className="square"></div>
          <div className="square"></div>
        </div>
        <div className="portfolio-right">
          <div className="rect"></div>
          <div className="square"></div>
          <div className="rect"></div>
        </div>
      </div>
    </div>
  );
};

export default Home;
