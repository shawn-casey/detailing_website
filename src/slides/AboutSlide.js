// src/slides/AboutSlide.js

import React from 'react';
import './AboutSlide.css';
import aboutImage from './assets/car2.jpg'; // Replace with your actual image path

const AboutSlide = () => {
  return (
    <div className="about-slide">
      <div className="about-content-wrapper">
        <div className="about-text">
          <h2>About the Detailing Services</h2>
          <p>I use the latest techniques and products to transform your vehicle, inside and out, restoring its showroom finish.</p>
        </div>
        <div className="about-image">
          <img src={aboutImage} alt="Detailing Services" />
        </div>
      </div>
    </div>
  );
}

export default AboutSlide;
