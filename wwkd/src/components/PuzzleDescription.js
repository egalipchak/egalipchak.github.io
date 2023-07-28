// PuzzleDescription.js
import React from 'react';
import './PuzzleDescription.css';

const PuzzleDescription = ({ title, description, url }) => {
  // Split the description string by newline characters and wrap each part in <div> elements
  const descriptionParts = description.split('\n').map((part, index) => (
    <div key={index}>{part}</div>
  ));

  return (
    <div className="puzzle-description">
      <div className="puzzle-title-zoom">{title}</div>
      <div className="puzzle-body left-aligned">
        <span className="description-prefix">Description: </span>
        {descriptionParts}
      </div>
      {url && (
        <div className="puzzle-link left-aligned">
          <span className="url-prefix">Solution Discussion: </span>
          <a href={url} target="_blank" rel="noopener noreferrer">
            {url}
          </a>
        </div>
      )}
    </div>
  );
};

export default PuzzleDescription;
