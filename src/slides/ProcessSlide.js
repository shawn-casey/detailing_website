// src/slides/ProcessSlide.js

import React from 'react';
import './ProcessSlide.css';
import processImage from './assets/car3.jpg'; // Replace with your actual image path

const ProcessSlide = () => {
  return (
    <div className="process-slide">
      <div className="process-content-wrapper">
        <div className="process-content">
          <h2>The Cleaning Process</h2>
          <div className="process-steps">
            <div className="process-step">
              <div className="step-number">1</div>
              <div className="step-text">
                <h3>Inspection</h3>
                <p>We thoroughly inspect your vehicle to identify any problem areas and develop a customized cleaning plan.</p>
              </div>
            </div>
            <div className="process-step">
              <div className="step-number">2</div>
              <div className="step-text">
                <h3>Preparation</h3>
                <p>Our team prepares the vehicle by pre-treating and gently removing any built-up dirt or debris.</p>
              </div>
            </div>
            <div className="process-step">
              <div className="step-number">3</div>
              <div className="step-text">
                <h3>Detailed Cleaning</h3>
                <p>We use the latest techniques and high-quality products to meticulously clean every inch of your vehicle.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="process-image">
          <img src={processImage} alt="Cleaning Process" />
        </div>
      </div>
    </div>
  );
}

export default ProcessSlide;
