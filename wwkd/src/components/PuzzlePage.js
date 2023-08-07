/* PuzzlePage.js */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MenuBar from './MenuBar';
import BottomBar from './BottomBar';
import SortDropdown from './SortDropdown';
import './PuzzlePage.css';

const PuzzlePage = ({ images }) => {
  const navigate = useNavigate();
  const [sortBy, setSortBy] = useState('date');
  const [sortOrder, setSortOrder] = useState('desc');

  const redirectToPuzzleDetails = (puzzle) => {
    navigate(`/puzzles/${puzzle.id}`);
  };

  const handleSortChange = (event) => {
    setSortBy(event.target.value);
    setSortOrder('asc');
  };

  const sortedImages = images.slice().sort((a, b) => {
    if (sortBy === 'date') {
      return sortOrder === 'asc' ? new Date(a.date) - new Date(b.date) : new Date(b.date) - new Date(a.date);
    } else if (sortBy === 'difficulty') {
      const difficultyOrder = ['Easy', 'Medium', 'Hard'];
      if (sortOrder === 'asc') {
        return difficultyOrder.indexOf(a.difficulty) - difficultyOrder.indexOf(b.difficulty);
      } else {
        return difficultyOrder.indexOf(b.difficulty) - difficultyOrder.indexOf(a.difficulty);
      }
    }
    return 0;
  });

  return (
    <div className="page-wrapper">
      <MenuBar />
      <SortDropdown sortBy={sortBy} sortOrder={sortOrder} handleSortChange={handleSortChange} setSortOrder={setSortOrder} />
      <div className="puzzle-flex-container">
        <div className="puzzle-page">
          {sortedImages.map((image, index) => (
            <div key={index} className="puzzle-tile" onClick={() => redirectToPuzzleDetails(image)}>
              <div className="puzzle-box">
                <div className="puzzle-title">
                  {image.isNew && <div className="new-puzzle">NEW</div>}
                  {image.title}
                </div>
                <div className="puzzle-details">
                  <p className="puzzle-difficulty">{image.difficulty}</p>
                  <p className="puzzle-date">{image.date}</p>
                </div>
                <img className="blurred-image" src={image.thumbnail} alt={`Puzzle ${index + 1}`} />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="footer">
        <BottomBar />
      </div>
    </div>
  );
};

export default PuzzlePage;
