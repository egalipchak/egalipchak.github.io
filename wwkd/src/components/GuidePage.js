// GuidePage.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import MenuBar from './MenuBar';
import { FaEnvelope, FaDiscord, FaTwitter } from 'react-icons/fa';
import Background from '../assets/images/cru-background.jpg';
import './GuidePage.css'; // Import the new CSS file

const GuidePage = ({ guideData }) => {
  const { id } = useParams();

  // State to hold the guide data
  const [guide, setGuide] = useState(null);

  // Simulate fetching guide data from an API
  useEffect(() => {
    // Replace this with your actual guide data fetching logic
    // For now, we'll just filter the guideData array to get the selected guide
    const selectedGuide = guideData.find((guide) => guide.id === Number(id));
    setGuide(selectedGuide);
  }, [id, guideData]);

  // Check if the guide data is being fetched or not found
  if (!guide) {
    return <div>Guide not found!</div>;
  }

  const BottomBar = () => {
    return (
      <div className="bottom-bar-guidepage">
        <div className="social-icons-guidepage">
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
        <p className="legal-text-guidepage">
          WhatWouldKanoDo has no affiliation with Legend Story Studios®. Flesh and Blood™ is a registered trademark owned by Legend Story Studios. All associated images related to Flesh and Blood™ are protected under copyright © Legend Story Studios. All rights reserved.
        </p>
      </div>
    );
  };

  return (
    <div className="guide-page" style={{ backgroundImage: `url(${Background})`, backgroundAttachment: 'fixed' }}>
      <MenuBar />
      <div className="container">
        <div className="content">
          <div className="guide-container">
            <div className="guide-header">
              <h1 className="guide-title">{guide.title}</h1>
              <div className="guide-author-links">
                {/* Display author information if available */}
                {guide.author && <p className="guide-author">{guide.author}</p>}
                {guide.twitter && (
                  <a href={guide.twitter} target="_blank" rel="noopener noreferrer">
                    <FaTwitter />
                  </a>
                )}
                {guide.discord && (
                  <a href={guide.discord} target="_blank" rel="noopener noreferrer">
                    <FaDiscord />
                  </a>
                )}
                {guide.email && (
                  <a href={`mailto:${guide.email}`} target="_blank" rel="noopener noreferrer">
                    <FaEnvelope />
                  </a>
                )}
              </div>
              <p className="guide-date">{guide.date}</p>
            </div>
            <div className="guide-body">
              <p>{guide.content}</p>
            </div>
          </div>
        </div>
        <BottomBar />
      </div>
    </div>
  );
};

export default GuidePage;
