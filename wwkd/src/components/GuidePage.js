// GuidePage.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import MenuBar from './MenuBar';
import { FaEnvelope, FaDiscord, FaTwitter } from 'react-icons/fa';
import Background from '../assets/images/cru-background.jpg';
import './GuidePage.css';

const GuidePage = ({ guideData }) => {
  const { id } = useParams();

  const [guide, setGuide] = useState(null);

  useEffect(() => {
    const selectedGuide = guideData.find((guide) => guide.id === Number(id));
    setGuide(selectedGuide);
  }, [id, guideData]);

  if (!guide) {
    return <div>Guide not found!</div>;
  }

  const BottomBar = () => (
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

  return (
    <div className="guide-page" style={{ backgroundImage: `url(${Background})`, backgroundAttachment: 'fixed' }}>
      <MenuBar />
      <div className="guide-container">
        <div className="guide-header">
          <h1 className="guide-title">{guide.title}</h1>
          <div className="guide-author-links">
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
          <hr className="guide-line" />
        </div>
        <div className="guide-body">
          {guide.content}
        </div>
      </div>
      <BottomBar />
    </div>
  );
};

export default GuidePage;
