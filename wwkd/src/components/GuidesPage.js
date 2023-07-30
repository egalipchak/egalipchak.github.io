// GuidesPage.js
import React from 'react';
import MenuBar from './MenuBar';
import BottomBar from './BottomBar';
import './CommonPage.css';
import { Link } from 'react-router-dom';
import testImage from '../assets/images/test-image.png';

// Define some dummy guide data for demonstration
const guideData = [
  {
    id: 1,
    title: 'This is an exciting title!',
    date: 'July 25, 2023',
    author: 'John Doe',
    imageSrc: testImage,
  },
  {
    id: 2,
    title: 'This is an exciting title!',
    date: 'July 25, 2023',
    author: 'John Doe',
    imageSrc: testImage,
  },
  {
    id: 2,
    title: 'This is an exciting title!',
    date: 'July 25, 2023',
    author: 'John Doe',
    imageSrc: testImage,
  },
  {
    id: 2,
    title: 'This is an exciting title!',
    date: 'July 25, 2023',
    author: 'John Doe',
    imageSrc: testImage,
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
          <p>{guide.date} ○ {guide.author}</p>
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
