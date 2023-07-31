/* LandingPage.js */
import React from 'react';
import './LandingPage.css';
import MenuBar from './MenuBar';
import { FaEnvelope, FaDiscord, FaTwitter } from 'react-icons/fa';
import BackgroundVideoMp4 from '../assets/videos/gaze-the-ages.mp4';
import BackgroundVideoWebm from '../assets/videos/gaze-the-ages.webm';
import BackgroundWallpaper from '../assets/images/gaze-the-ages.jpg';

const BottomBar = () => {
  return (
    <div className="bottom-bar-landing">
      <div className="social-icons-landing">
        <a href="mailto:voidbufferstudios@gmail.com" target="_blank" rel="noopener noreferrer">
          <FaEnvelope />
        </a>
        <a href="https://discordapp.com/users/193506197591031810" target="_blank" rel="noopener noreferrer">
          <FaDiscord />
        </a>
        <a href="https://twitter.com/dropmaw" target="_blank" rel="noopener noreferrer">
          <FaTwitter />
        </a>
      </div>
      <p className="legal-text-landing">
        WhatWouldKanoDo has no affiliation with Legend Story Studios®. Flesh and Blood™ is a registered trademark owned by Legend Story Studios. All associated images related to Flesh and Blood™ are protected under copyright © Legend Story Studios. All rights reserved.
      </p>
    </div>
  );
};

const LandingPage = () => {
  return (
    <div className="landing-page">
      <MenuBar />
      <video playsInline webkit-playsinline autoPlay loop muted preload="auto" poster={BackgroundWallpaper}>
        <source src={BackgroundVideoMp4} type="video/mp4" />
        <source src={BackgroundVideoWebm} type="video/webm" />
      </video>
      <div className="title">WWKD</div>
      <BottomBar />
    </div>
  );
};

export default LandingPage;
