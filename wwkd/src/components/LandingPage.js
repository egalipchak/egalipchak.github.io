import React from 'react';
import BackgroundVideo from '../assets/videos/gaze-the-ages.mp4';
import './LandingPage.css';
import MenuBar from './MenuBar';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <video autoPlay loop playsInLine muted>
        <source src={BackgroundVideo} type="video/mp4" />
      </video>
      <div className="bottom-bar">
        <p className="legal-text">
          WhatWouldKanoDo has no affiliation with Legend Story Studios®. Flesh and Blood™ is a registered trademark owned by Legend Story Studios. All associated images related to Flesh and Blood™ are protected under copyright © Legend Story Studios. All rights reserved.
        </p>
      </div>
      <div className="title">WWKD</div>
      <MenuBar />
    </div>
  );
};

export default LandingPage;
