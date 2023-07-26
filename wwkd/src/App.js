import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import PuzzlePage from './components/PuzzlePage';

const App = () => {
  // Dummy image data, replace these with your actual image URLs and descriptions
  const easyImages = [
    { src: './assets/images/test-image.png', description: 'Easy Puzzle 1' },
    { src: './assets/images/test-image.png', description: 'Easy Puzzle 2' },
  ];
  const mediumImages = [
    { src: '/images/medium-puzzle-1.jpg', description: 'Medium Puzzle 1' },
    { src: '/images/medium-puzzle-2.jpg', description: 'Medium Puzzle 2' },
  ];
  const hardImages = [
    { src: '/images/hard-puzzle-1.jpg', description: 'Hard Puzzle 1' },
    { src: '/images/hard-puzzle-2.jpg', description: 'Hard Puzzle 2' },
  ];
  const recentImages = [
    { src: '/images/hard-puzzle-1.jpg', description: 'Hard Puzzle 1' },
    { src: '/images/hard-puzzle-2.jpg', description: 'Hard Puzzle 2' },
  ];

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/easy" element={<PuzzlePage images={easyImages} />} />
        <Route path="/medium" element={<PuzzlePage images={mediumImages} />} />
        <Route path="/hard" element={<PuzzlePage images={hardImages} />} />
        <Route path="/recent" element={<PuzzlePage images={recentImages} />} />
      </Routes>
    </Router>
  );
};

export default App;
