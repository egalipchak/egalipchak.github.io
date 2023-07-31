import React from 'react';
import './PuzzleModal.css';

const PuzzleModal = ({ puzzle, onClose }) => {
  return (
    <div className="puzzle-modal-overlay" onClick={onClose}>
      <div className="puzzle-modal">
        <img src={puzzle.src} alt={puzzle.title} />
        <div className="description">{puzzle.description}</div>
      </div>
    </div>
  );
};

export default PuzzleModal;
