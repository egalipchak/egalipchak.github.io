// GuidesPage.js
import React from 'react';
import MenuBar from './MenuBar';
import BottomBar from './BottomBar';
import './CommonPage.css';
import './LandingPage.css';
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
    title: 'Another example of an',
    date: 'July 26, 2023',
    author: 'Jane Smith',
    imageSrc: testImage,
  },
  {
    id: 3,
    title: 'Another example of nger!',
    date: 'July 26, 2023',
    author: 'Jane Smith',
    imageSrc: testImage,
  },
  {
    id: 4,
    title: 'Another an exciting title but longer!',
    date: 'July 26, 2023',
    author: 'Jane Smith',
    imageSrc: testImage,
  },
  {
    id: 5,
    title: 'Another exag title but longer!',
    date: 'July 26, 2023',
    author: 'Jane Smith',
    imageSrc: testImage,
  },
  {
    id: 6,
    title: 'Another example of an excitibut longer!',
    date: 'July 26, 2023',
    author: 'Jane Smith',
    imageSrc: testImage,
  },
  {
    id: 15,
    title: 'This is an exciting title!',
    date: 'July 25, 2023',
    author: 'John Doe',
    imageSrc: testImage,
  },
  {
    id: 24,
    title: 'Another example of an',
    date: 'July 26, 2023',
    author: 'Jane Smith',
    imageSrc: testImage,
  },
  {
    id: 35,
    title: 'Another example of nger!',
    date: 'July 26, 2023',
    author: 'Jane Smith',
    imageSrc: testImage,
  },
  {
    id: 46,
    title: 'Another an exciting title but longer!',
    date: 'July 26, 2023',
    author: 'Jane Smith',
    imageSrc: testImage,
  },
  {
    id: 57,
    title: 'Another exag title but longer!',
    date: 'July 26, 2023',
    author: 'Jane Smith',
    imageSrc: testImage,
  },
  {
    id: 68,
    title: 'Another example of an excitibut longer!',
    date: 'July 26, 2023',
    author: 'Jane Smith',
    imageSrc: testImage,
  },
  {
    id: 81,
    title: 'This is an exciting title!',
    date: 'July 25, 2023',
    author: 'John Doe',
    imageSrc: testImage,
  },
  {
    id: 72,
    title: 'Another example of an',
    date: 'July 26, 2023',
    author: 'Jane Smith',
    imageSrc: testImage,
  },
  {
    id: 13,
    title: 'Another example of nger!',
    date: 'July 26, 2023',
    author: 'Jane Smith',
    imageSrc: testImage,
  },
  {
    id: 54,
    title: 'Another an exciting title but longer!',
    date: 'July 26, 2023',
    author: 'Jane Smith',
    imageSrc: testImage,
  },
  {
    id: 25,
    title: 'Another exag title but longer!',
    date: 'July 26, 2023',
    author: 'Jane Smith',
    imageSrc: testImage,
  },
  {
    id: 36,
    title: 'Another example of an excitibut longer!',
    date: 'July 26, 2023',
    author: 'Jane Smith',
    imageSrc: testImage,
  },
  {
    id: 336,
    title: 'Another example of an excitibut longer!',
    date: 'July 26, 2023',
    author: 'Jane Smith',
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
          <p>{guide.date} ○	{guide.author}</p>
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
