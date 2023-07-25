// src/components/PuzzleGallery.js
import React, { useState } from 'react';
import BeginPuzzle from './BeginPuzzle';
import MediumPuzzle from './MediumPuzzle';
import HardPuzzle from './HardPuzzle';

const PuzzleGallery = () => {
  const [difficulty, setDifficulty] = useState('easy');

  const handleDifficultyChange = (selectedDifficulty) => {
    setDifficulty(selectedDifficulty);
  };

  const renderPuzzle = () => {
    switch (difficulty) {
      case 'easy':
        return <BeginPuzzle />;
      case 'medium':
        return <MediumPuzzle />;
      case 'hard':
        return <HardPuzzle />;
      default:
        return null;
    }
  };

  return (
    <div className="container">
      <h1>Puzzle Gallery</h1>
      <div className="button-container">
        <button onClick={() => handleDifficultyChange('easy')}>Easy</button>
        <button onClick={() => handleDifficultyChange('medium')}>Medium</button>
        <button onClick={() => handleDifficultyChange('hard')}>Hard</button>
      </div>
      <div className="gallery-container">
        {renderPuzzle()}
      </div>
    </div>
  );
};

export default PuzzleGallery;
