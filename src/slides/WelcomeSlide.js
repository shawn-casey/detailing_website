// src/slides/WelcomeSlide.js

import React from 'react';
import './WelcomeSlide.css';

const WelcomeSlide = () => {
  return (
    <div className="welcome-slide">
      <div className="welcome-slide::before"></div>
      <div className="welcome-content-wrapper">
        <div className="welcome-text">
          <h1>Welcome to Casey Detailing</h1>
          <p>Exceptional mobile car detailing services tailored to your needs</p>
        </div>
      </div>
    </div>
  );
}

export default WelcomeSlide;
