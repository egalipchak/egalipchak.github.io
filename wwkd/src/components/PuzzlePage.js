import React from 'react';
import { useNavigate } from 'react-router-dom';
import './PuzzlePage.css';
import MenuBar from './MenuBar';
import BottomBar from './BottomBar';
import './CommonPage.css';

const PuzzlePage = ({ images }) => {
  const navigate = useNavigate();

  const redirectToPuzzleDetails = (puzzle) => {
    navigate(`/puzzles/${puzzle.id}`);
  };

  return (
    <div className="page-wrapper">
      <MenuBar />
      <div className="puzzle-flex-container">
        <div className="puzzle-page">
          {images.map((image, index) => (
            <div key={index} className="puzzle-tile" onClick={() => redirectToPuzzleDetails(image)}>
              <div className="puzzle-box">
                <div className="puzzle-title">{image.isNew && <div className="new-puzzle">NEW</div>}{image.title}</div>
                <div className="puzzle-details">
                  <p className="puzzle-difficulty">{image.difficulty}</p>
                  <p className="puzzle-date">{image.date}</p>
                </div>
                <img src={image.src} alt={`Puzzle ${index + 1}`} />
              </div>
            </div>
          ))}
        </div>
      </div>
      <BottomBar />
    </div>
  );
};

export default PuzzlePage;
