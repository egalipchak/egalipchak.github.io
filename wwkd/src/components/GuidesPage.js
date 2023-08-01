// GuidesPage.js
import React from 'react';
import MenuBar from './MenuBar';
import BottomBar from './BottomBar';
import './CommonPage.css';
import { Link } from 'react-router-dom';

const GuideModal = ({ guide }) => {
  return (
    <Link to={`/guides/${guide.id}`} className="guide-modal">
      <img src={guide.imageSrc} alt={guide.title} />
      <div className="guide-info-container">
        <div className="guide-info">
          <h3>{guide.title}</h3>
          <p>{guide.date} ⦿ {guide.author}</p>
        </div>
      </div>
    </Link>
  );
};

const GuidesPage = ({ guideData }) => {
  return (
    <div>
      <MenuBar />
      <div className="content">
        <h1>Guides</h1>
        <div className="guide-list">
          {guideData.map((guide) => (
            <GuideModal key={guide.id} guide={guide} />
          ))}
        </div>
      </div>
      <BottomBar />
    </div>
  );
};

export default GuidesPage;
