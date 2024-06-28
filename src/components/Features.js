import React from 'react';
import './Features.css';

function Features() {
  return (
    <section className="features slide-in">
      <h2>
        <span className="highlight">Things users love <br /></span> about X-ACK
      </h2>
      <div className="feature-cards">
        <div className="card">
          <h3>Users appreciate X-ACK's intuitive interface</h3>
          <p>An intuitive interface means that users can quickly understand how to use the platform without the need for extensive training or guidance.</p>
        </div>
        <div className="card">
          <h3>Robust Learning Tools</h3>
          <p>Something about our learning tools and features goes here.</p>
        </div>
        <div className="card">
          <h3>Flexible Difficulty</h3>
          <p>We have sophisticatedly designed machines for all beginner to advanced level players.</p>
        </div>
        <div className="card">
          <h3>Community</h3>
          <p>We fostered a nurturing community...some more lines about the community.</p>
        </div>
        <div className="card">
          <h3>Gamified UI elements</h3>
          <p>Info about earning badges and respect from players and machines. Gamified features.</p>
        </div>
      </div>
    </section>
  );
}

export default Features;
