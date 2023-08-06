/* LandingPage.js */
import React, { useState } from 'react';
import './LandingPage.css';
import MenuBar from './MenuBar';
import { FaEnvelope, FaDiscord, FaTwitter } from 'react-icons/fa';
import { BarLoader } from 'react-spinners';
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
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [videoError, setVideoError] = useState(false); // Add state for video error

  const handleVideoLoad = () => {
    setVideoLoaded(true);
  };

  const handleVideoError = () => {
    setVideoError(true);
    setVideoLoaded(true);
  };

  return (
    <div>
      <MenuBar />
      <div className="landing-page">
        <video
          playsInline
          webkit-playsinline
          loop
          muted
          poster={videoError ? BackgroundWallpaper : null} // Conditionally set poster
          onLoadedData={handleVideoLoad}
          onError={handleVideoError} // Handle video error
          autoPlay
        >
          <source src={BackgroundVideoMp4} type="video/mp4" />
          <source src={BackgroundVideoWebm} type="video/webm" />
        </video>
        {videoLoaded ? 
          (<div className="title">WWKD</div>) : 
          (  
            <div className="spinner-container">
              <BarLoader color="#fff" loading={!videoLoaded} size={15} />
            </div>
          )
        };
      </div>
      <BottomBar />
    </div>
  );
};

export default LandingPage;
