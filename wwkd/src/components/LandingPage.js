import React from 'react';
import { Link } from 'react-router-dom';
import BackgroundVideo from '../assets/videos/gaze-the-ages.mp4';
import './LandingPage.css';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <video autoPlay loop playsInLine muted>
        <source src={BackgroundVideo} type="video/mp4" />
      </video>
      <div className="title">WWKD</div>
      <div className="links">
        <Link to="/recent">Recent Puzzles</Link>
        <Link to="/easy">Easy Puzzles</Link>
        <Link to="/medium">Medium Puzzles</Link>
        <Link to="/hard">Hard Puzzles</Link>
      </div>
    </div>
  );
};

export default LandingPage;
