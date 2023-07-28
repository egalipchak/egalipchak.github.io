// PuzzleModal.js
import React from 'react';
import './PuzzleModal.css';
import PuzzleDescription from './PuzzleDescription';

const PuzzleModal = ({ puzzle, onClose }) => {
  return (
    <div className="puzzle-modal-overlay" onClick={onClose}>
      <div className="puzzle-modal">
        <img src={puzzle.src} alt={puzzle.title} />
        <PuzzleDescription
          title={puzzle.title}
          description={puzzle.description}
          url={puzzle.url}
        />
      </div>
    </div>
  );
};

export default PuzzleModal;
