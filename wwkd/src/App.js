import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import PuzzlePage from './components/PuzzlePage';
import testImage from './assets/images/test-image-1.jpg';

// Import the new components
import GuidesPage from './components/GuidesPage';
import KanoMatchesPage from './components/KanoMatchesPage';

const App = () => {
  // Dummy image data, replace these with your actual image URLs and descriptions
  const recentImages = [
    { src: testImage, description: 'Recent Puzzle 1' },
    { src: testImage, description: 'Recent Puzzle 2' },
  ];
  const easyImages = [
    { src: testImage, description: 'Easy Puzzle 1' },
    { src: testImage, description: 'Easy Puzzle 2' },
  ];
  const mediumImages = [
    { src: testImage, description: 'Medium Puzzle 1' },
    { src: testImage, description: 'Medium Puzzle 2' },
  ];
  const hardImages = [
    { src: testImage, description: 'Hard Puzzle 1' },
    { src: testImage, description: 'Hard Puzzle 2' },
  ];

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/recent" element={<PuzzlePage images={recentImages} />} />
        <Route path="/easy" element={<PuzzlePage images={easyImages} />} />
        <Route path="/medium" element={<PuzzlePage images={mediumImages} />} />
        <Route path="/hard" element={<PuzzlePage images={hardImages} />} />
        {/* Add the new routes */}
        <Route path="/guides" element={<GuidesPage />} />
        <Route path="/kanomatches" element={<KanoMatchesPage />} />
      </Routes>
    </Router>
  );
};

export default App;
