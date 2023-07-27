import React, { useState } from 'react';
import './PuzzlePage.css';
import PuzzleModal from './PuzzleModal';
import MenuBar from './MenuBar';
import './CommonPage.css';

const PuzzlePage = ({ images }) => {
  const [selectedPuzzle, setSelectedPuzzle] = useState(null);

  const openModal = (puzzle) => {
    setSelectedPuzzle(puzzle);
  };

  const closeModal = () => {
    setSelectedPuzzle(null);
  };

  return (
    <div className="puzzle-page">
      {images.map((image, index) => (
        <div key={index} className="puzzle-tile" onClick={() => openModal(image)}>
          <div className="puzzle-box">
            <img src={image.src} alt={`Puzzle ${index + 1}`} />
            <div className="description">{image.description}</div>
          </div>
        </div>
      ))}
      {selectedPuzzle && <PuzzleModal puzzle={selectedPuzzle} onClose={closeModal} />}
      <MenuBar />
    </div>
  );
};

export default PuzzlePage;
