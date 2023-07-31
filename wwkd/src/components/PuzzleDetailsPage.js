// PuzzleDetailsPage.js
import React from 'react';
import { useParams } from 'react-router-dom';
import './PuzzleDetailsPage.css';
import BottomBar from './BottomBar';
import MenuBar from './MenuBar';

const PuzzleDetailsPage = ({ images }) => {
  const { id } = useParams();
  const puzzle = images.find((puzzle) => puzzle.id === parseInt(id, 10));

  if (!puzzle) {
    return <div>Puzzle not found</div>;
  }

  return (
    <div className="page-wrapper">
      <MenuBar />
      <div className="content-container">
        <div className="puzzle-details-page">
          <h2>{puzzle.title}</h2>
          <img src={puzzle.src} alt={`Puzzle`} />
          <p className="text-outline">Difficulty: {puzzle.difficulty}</p>
          <p className="text-outline">Description: {puzzle.description}</p>
          <div className="solution-link-container">
            {puzzle.url !== "" && <a href={puzzle.url} target="_blank" rel="noopener noreferrer" className="solution-link">
              ~~Solution Discussion Link~~
            </a>}
          </div>
        </div>
      </div>
      <BottomBar />
    </div>
  );
};

export default PuzzleDetailsPage;