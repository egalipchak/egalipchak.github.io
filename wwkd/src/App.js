/* App.js */
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import PuzzlePage from './components/PuzzlePage';
import GuidesPage from './components/GuidesPage';
import AboutPage from './components/AboutPage';
import GuidePage from './components/GuidePage';
import PuzzleDetailsPage from './components/PuzzleDetailsPage';
import PuzzleData from './data/PuzzleData';
import GuideData from './data/GuideData';
import './common.css';

const App = () => {
  const puzzles = PuzzleData;
  const guideData = GuideData;

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/puzzles" element={<PuzzlePage images={puzzles} />} />
          <Route path="/puzzles/:id" element={<PuzzleDetailsPage images={puzzles} />} />
          <Route path="/guides" element={<GuidesPage guideData={guideData} />} />
          <Route path="/guides/:id" element={<GuidePage guideData={guideData} />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
