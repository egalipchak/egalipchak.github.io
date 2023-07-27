import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import PuzzlePage from './components/PuzzlePage';

// Import the new components
import GuidesPage from './components/GuidesPage';
import KanoMatchesPage from './components/KanoMatchesPage';

const App = () => {
  const recentImages = [
    { src: require('./assets/images/mediumPuzzles/WWKDGoldfish1.png'), description: 'Recent Puzzle 1' },
  ];
  const easyImages = [
    { src: require('./assets/images/easyPuzzles/WWKD12.png'), description: 'Easy Puzzle 1' },
  ];
  const mediumImages = [
    { src: require('./assets/images/mediumPuzzles/WWKD4.png'), description: 'Medium Puzzle 1' },
    { src: require('./assets/images/mediumPuzzles/WWKD6.png'), description: 'Medium Puzzle 2' },
    { src: require('./assets/images/mediumPuzzles/WWKD7.png'), description: 'Medium Puzzle 2' },
    { src: require('./assets/images/mediumPuzzles/WWKDGoldfish1.png'), description: 'Medium Puzzle 2' },
  ];
  const hardImages = [
    { src: require('./assets/images/hardPuzzles/WWKD8.png'), description: 'Hard Puzzle 1' },
    { src: require('./assets/images/hardPuzzles/WWKD9.png'), description: 'Hard Puzzle 2' },
    { src: require('./assets/images/hardPuzzles/WWKD11.png'), description: 'Medium Puzzle 2' },
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
