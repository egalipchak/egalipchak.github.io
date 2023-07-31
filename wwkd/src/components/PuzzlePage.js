import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './PuzzlePage.css';
import MenuBar from './MenuBar';
import BottomBar from './BottomBar';
import SortDropdown from './SortDropdown';

const PuzzlePage = ({ images }) => {
  const navigate = useNavigate();
  const [sortBy, setSortBy] = useState('date'); // State to keep track of the selected sort option
  const [sortOrder, setSortOrder] = useState('desc'); // State to keep track of the sort order

  const redirectToPuzzleDetails = (puzzle) => {
    navigate(`/puzzles/${puzzle.id}`);
  };

  const handleSortChange = (event) => {
    setSortBy(event.target.value); // Update the sortBy state when the user selects a new option
    setSortOrder('asc'); // Reset the sort order to ascending when the sort option changes
  };

  // Sort the images array based on the selected sort option and sort order
  const sortedImages = images.slice().sort((a, b) => {
    if (sortBy === 'date') {
      // Sort by date
      return sortOrder === 'asc' ? new Date(a.date) - new Date(b.date) : new Date(b.date) - new Date(a.date);
    } else if (sortBy === 'difficulty') {
      // Sort by difficulty
      const difficultyOrder = ['Easy', 'Medium', 'Hard'];
      if (sortOrder === 'asc') {
        // Ascending order: Easy -> Medium -> Hard
        return difficultyOrder.indexOf(a.difficulty) - difficultyOrder.indexOf(b.difficulty);
      } else {
        // Descending order: Hard -> Medium -> Easy
        return difficultyOrder.indexOf(b.difficulty) - difficultyOrder.indexOf(a.difficulty);
      }
    }
    return 0;
  });

  return (
    <div className="page-wrapper">
      <MenuBar />
      <SortDropdown sortBy={sortBy} sortOrder={sortOrder} handleSortChange={handleSortChange} setSortOrder={setSortOrder} /> {/* Add the SortDropdown component */}
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
