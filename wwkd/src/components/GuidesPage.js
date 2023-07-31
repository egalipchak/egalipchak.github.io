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

// Define some dummy guide data for demonstration
const guideData = [
  {
    id: 1,
    title: 'This is an exciting title!',
    date: 'July 25, 2023',
    author: 'John Doe',
    imageSrc: testImage0,
  },
  {
    id: 2,
    title: 'This is also an exciting title!',
    date: 'July 25, 2023',
    author: 'John Doe',
    imageSrc: testImage1,
  },
  {
    id: 3,
    title: 'Another title!',
    date: 'July 25, 2023',
    author: 'John Doe',
    imageSrc: testImage2,
  },
  {
    id: 4,
    title: 'Titles!',
    date: 'July 25, 2023',
    author: 'John Doe',
    imageSrc: testImage3,
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
