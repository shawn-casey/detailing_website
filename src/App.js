// src/App.js

import React from 'react';
import './App.css';
import WelcomeSlide from './slides/WelcomeSlide';
import AboutSlide from './slides/AboutSlide';
import Package1Slide from './slides/Package1Slide';
import ProcessSlide from './slides/ProcessSlide';

function App() {
  return (
    <div className="App">
      <WelcomeSlide />
      <AboutSlide />
      <Package1Slide />
      <ProcessSlide />
      {/* Additional slides can be added here */}
    </div>
  );
}

export default App;
