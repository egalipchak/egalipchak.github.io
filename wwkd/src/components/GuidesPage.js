import React, { useState, useEffect } from 'react';
import MenuBar from './MenuBar';
import BottomBar from './BottomBar';
import './CommonPage.css';
import { Link } from 'react-router-dom';
import { BarLoader } from 'react-spinners';

const GuideModal = ({ guide, onLoad }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  const guideModalStyle = {
    filter: guide.isGuideDisabled ? 'grayscale(100%)' : 'none',
    display: imageLoaded ? 'block' : 'none',
  };

  const handleImageLoad = () => {
    setImageLoaded(true);
    onLoad(); // Notify the parent that the image is loaded
  };

  if (guide.isGuideDisabled) {
    return (
      <div className="guide-modal">
        <img
          src={guide.imageSrc}
          alt={guide.title}
          style={guideModalStyle}
          onLoad={handleImageLoad}
        />
        <div className="guide-info-container">
          <div className="guide-info">
            <h3>{guide.title}</h3>
            <p>
              {guide.date} ⦿ {guide.author}
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <Link to={`/guides/${guide.id}`} className="guide-modal">
      <img
        src={guide.imageSrc}
        alt={guide.title}
        style={guideModalStyle}
        onLoad={handleImageLoad}
      />
      <div className="guide-info-container">
        <div className="guide-info">
          <h3>{guide.title}</h3>
          <p>
            {guide.date} ⦿ {guide.author}
          </p>
        </div>
      </div>
    </Link>
  );
};

const GuidesPage = ({ guideData }) => {
  const [allImagesLoaded, setAllImagesLoaded] = useState(false);

  useEffect(() => {
    const images = guideData.map(
      (guide) =>
        new Promise((resolve, reject) => {
          const img = new Image();
          img.src = guide.imageSrc;
          img.onload = resolve;
          img.onerror = reject;
        })
    );

    Promise.all(images)
      .then(() => setAllImagesLoaded(true))
      .catch(() => setAllImagesLoaded(true)); // Handle error if some images fail to load
  }, [guideData]);

  return (
    <div className="page-container">
      <MenuBar />
      <div className="content-wrapper">
        {allImagesLoaded ? (
          <div className="content">
            <h1>Guides</h1>
            <div className="guide-list">
              {guideData.map((guide) => (
                <GuideModal key={guide.id} guide={guide} onLoad={() => {}} />
              ))}
            </div>
          </div>
        ) : (
          <div className="loader-container">
            <div className="loader-wrapper">
              <BarLoader color="#fff" loading={!allImagesLoaded} />
            </div>
          </div>
        )}
      </div>
      <BottomBar />
    </div>
  );
};

export default GuidesPage;
