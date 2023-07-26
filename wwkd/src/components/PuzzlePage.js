import React from 'react';
import './PuzzlePage.css';

const PuzzlePage = ({ images }) => {
  return (
    <div className="puzzle-page">
      {images.map((image, index) => (
        <div key={index} className="puzzle-tile">
          <div className="puzzle-box">
            <img src={image.src} alt={`Puzzle ${index + 1}`} />
            <div className="description">{image.description}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PuzzlePage;
