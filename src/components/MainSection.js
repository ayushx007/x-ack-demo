import React from 'react';
import './MainSection.css';

function MainSection() {
  return (
    <section className="main-section fade-in">
      <img src={`${process.env.PUBLIC_URL}/top-left.png`} alt="design" className="design-element top-left" />
      <img src={`${process.env.PUBLIC_URL}/top-right.png`} alt="design" className="design-element top-right" />
      <h1>Most Awaited!</h1>
      <p>A world of cyber security to learn, compete and grow.<br /> Some more content about what we offer will come here</p>
      <button className="start-button">
        Get Started Now
        <span className="top"></span>
        <span className="right"></span>
        <span className="bottom"></span>
        <span className="left"></span>
      </button>
      <img src={`${process.env.PUBLIC_URL}/background.png`} alt="background" className="background" />
      <img src={`${process.env.PUBLIC_URL}/dashboard.png`} alt="Dashboard" className="dashboard-image" />
    </section>
  );
}

export default MainSection;
