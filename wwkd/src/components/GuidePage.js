// GuidePage.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import MenuBar from './MenuBar';
import BottomBar from './BottomBar';
import { FaEnvelope, FaDiscord, FaTwitter } from 'react-icons/fa';
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

  return (
    <div>
      <MenuBar />

      {/* Add some spacing to separate the content from the MenuBar and BottomBar */}
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
  );
};

export default GuidePage;
