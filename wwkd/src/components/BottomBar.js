/* BottomBar.js */
import React from 'react';
import { FaEnvelope, FaDiscord, FaTwitter } from 'react-icons/fa';
import './BottomBar.css';

const BottomBar = () => {
  return (
    <div className="bottom-bar">
      <div className="social-icons">
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
      <p className="legal-text">
        WhatWouldKanoDo has no affiliation with Legend Story Studios®. Flesh and Blood™ is a registered trademark owned by Legend Story Studios. All associated images related to Flesh and Blood™ are protected under copyright © Legend Story Studios. All rights reserved.
      </p>
    </div>
  );
};

export default BottomBar;
