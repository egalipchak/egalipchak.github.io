import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import BackgroundVideo from '../assets/videos/gaze-the-ages.mp4';
import './LandingPage.css';
import GuidesPage from './GuidesPage';
import KanoMatchesPage from './KanoMatchesPage';

const LandingPage = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const handlePuzzlesLinkEnter = () => {
    setShowDropdown(true);
  };

  const handlePuzzlesLinkLeave = () => {
    // Delay hiding the dropdown to give the user some time to move the cursor to the dropdown
    setTimeout(() => {
      setShowDropdown(false);
    }, 200);
  };

  const handleDropdownMouseEnter = () => {
    setShowDropdown(true);
  };

  const handleDropdownMouseLeave = () => {
    setShowDropdown(false);
  };

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
      <div className="links">
        <div
          className="menu-link puzzles-link"
          onMouseEnter={handlePuzzlesLinkEnter}
          onMouseLeave={handlePuzzlesLinkLeave}
        >
          Puzzles
          {showDropdown && (
            <div className="dropdown" onMouseEnter={handleDropdownMouseEnter} onMouseLeave={handleDropdownMouseLeave}>
              <Link to="/recent" className="dropdown-link">Recent</Link>
              <Link to="/easy" className="dropdown-link">Easy</Link>
              <Link to="/medium" className="dropdown-link">Medium</Link>
              <Link to="/hard" className="dropdown-link">Hard</Link>
            </div>
          )}
        </div>
        {/* Add the new links */}
        <Link to="/guides" className="menu-link">Guides</Link>
        <Link to="/kanomatches" className="menu-link">Kano Matches</Link>
      </div>
    </div>
  );
};

export default LandingPage;
