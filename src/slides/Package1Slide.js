// src/slides/Package1Slide.js

import React from 'react';
import './Package1Slide.css';

const Package1Slide = () => {
  return (
    <div className="package1-slide">
      <div className="package1-content-wrapper">
        <div className="package1-content">
          <h2>Basic Cleaning Package</h2>
          <div className="package1-boxes">
            <div className="package1-box">
              <h3>Exterior</h3>
              <p>Thorough hand wash, tire dressing, and clear coat protection.</p>
            </div>
            <div className="package1-box">
              <h3>Interior</h3>
              <p>Vacuum, wipe down surfaces, and windows cleaned.</p>
            </div>
          </div>
        </div>

        <div className="package1-content">
          <h2>Deluxe Cleaning Package</h2>
          <div className="package1-boxes">
            <div className="package1-box">
              <h3>Exterior</h3>
              <p>Hand wash, tire dressing, clear coat protection, and wax polish.</p>
            </div>
            <div className="package1-box">
              <h3>Interior</h3>
              <p>Vacuum, wipe down surfaces, windows cleaned, and upholstery treatment.</p>
            </div>
          </div>
        </div>

        <div className="package1-content">
          <h2>Premium Cleaning Package</h2>
          <div className="package1-boxes">
            <div className="package1-box">
              <h3>Exterior</h3>
              <p>Hand wash, tire dressing, clear coat protection, wax polish, and ceramic coating.</p>
            </div>
            <div className="package1-box">
              <h3>Interior</h3>
              <p>Vacuum, wipe down surfaces, windows cleaned, upholstery treatment, and leather conditioning.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Package1Slide;
