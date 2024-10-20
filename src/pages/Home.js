import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="container">
      <header className="header">
        <h1>hello</h1>
      </header>

      <section className="portfolio">
        {/* Left section (Rectangles) */}
        <div className="portfolio-left">
          <Link to="/project1" className="rectangle">
            <div className="label">project</div>
            <img src="https://images.unsplash.com/photo-1726853546098-380e29da9e31?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Project 1" />
          </Link>
          <Link to="/project2" className="rectangle">
            <div className="label">project</div>
            <img src="https://images.unsplash.com/photo-1726853546098-380e29da9e31?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Project 2" />
          </Link>
          <Link to="/project4" className="rectangle">
            <div className="label">project</div>
            <img src="https://images.unsplash.com/photo-1726853546098-380e29da9e31?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Project 4" />
          </Link>
        </div>

        {/* Middle section (Squares) */}
        <div className="portfolio-middle">
          <Link to="/project3" className="square">
            <div className="label">project</div>
            <img src="https://images.unsplash.com/photo-1726853546098-380e29da9e31?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Project 3" />
          </Link>
          <Link to="/project4" className="square">
            <div className="label">project</div>
            <img src="https://images.unsplash.com/photo-1726853546098-380e29da9e31?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Project 4" />
          </Link>
        </div>

        {/* Right section (Square, Rectangle, Square) */}
        <div className="portfolio-right">
          <Link to="/project5" className="square">
            <div className="label">project</div>
            <img src="https://images.unsplash.com/photo-1726853546098-380e29da9e31?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Project 5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
