import React from 'react';
import './LandingPage.css';
import MenuBar from './MenuBar';
import BackgroundVideoMp4 from '../assets/videos/gaze-the-ages.mp4';
import BackgroundVideoWebm from '../assets/videos/gaze-the-ages.webm';
import BackgroundWallpaper from '../assets/images/gaze-the-ages.jpg';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <video playsInline webkit-playsinline={true} autoPlay={true} loop muted poster={BackgroundWallpaper}>
        <source src={BackgroundVideoMp4} type="video/mp4" />
        <source src={BackgroundVideoWebm} type="video/webm" />
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
