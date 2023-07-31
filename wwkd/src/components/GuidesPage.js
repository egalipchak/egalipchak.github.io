// GuidesPage.js
import React from 'react';
import MenuBar from './MenuBar';
import BottomBar from './BottomBar';
import './CommonPage.css';
import { Link } from 'react-router-dom';
import testImage0 from '../assets/images/test-image.png';
import testImage1 from '../assets/images/cru-background.jpg';
import testImage2 from '../assets/images/test-image-1.jpg';
import testImage3 from '../assets/images/gaze-the-ages.jpg';
import testImage4 from '../assets/images/kano-adult.jpg';

// Define some dummy guide data for demonstration
const guideData = [
  {
    id: 1,
    title: 'Blitz primer guide',
    date: 'July 30, 2023',
    author: 'Kotarou',
    imageSrc: testImage0,
  },
  {
    id: 2,
    title: 'Kano CC sideboard guide',
    date: 'July 30, 2023',
    author: 'Tog',
    imageSrc: testImage3,
  },
  {
    id: 3,
    title: 'Blackjack card counting strat',
    date: 'July 30, 2023',
    author: 'Dropmaw',
    imageSrc: testImage2,
  },
  // Add more guide data as needed
];

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

const GuidesPage = () => {
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
