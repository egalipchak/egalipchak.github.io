/* PuzzleDetailsPage.js */
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { BarLoader } from 'react-spinners';
import './PuzzleDetailsPage.css';
import BottomBar from './BottomBar';
import MenuBar from './MenuBar';

const PuzzleDetailsPage = ({ images }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const { id } = useParams();
  const puzzle = images.find((puzzle) => puzzle.id === parseInt(id, 10));

  if (!puzzle) {
    return <div>Puzzle not found!</div>;
  }

  const handleImageLoad = () => {
    setImageLoaded(true);
    setIsLoading(false);
  };

  const ogImageUrl = puzzle.src;

  return (
    <div className="puzzle-details-container">
      <MenuBar />
      {isLoading && (
        <div className="spinner-container-puzzlepage">
          <BarLoader color="#fff" loading={!imageLoaded} size={15} />
        </div>
      )}
      <div className={`puzzle-details-page ${imageLoaded ? 'show' : 'hide'}`}>
        <Helmet>
        <title>{puzzle.title}</title>
          <meta property="og:title" content={puzzle.title} />
          <meta property="og:description" content={`Difficulty: ${puzzle.difficulty}`} />
          <meta property="og:image" content={ogImageUrl} />
          <meta property="og:url" content={`https://www.whatwouldkanodo.com/#/puzzles/${puzzle.id}`} />

          {/* Twitter-specific meta tags */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content={puzzle.title} />
          <meta name="twitter:description" content={`Difficulty: ${puzzle.difficulty}`} />
          <meta name="twitter:image" content={ogImageUrl} />

          {/* Discord-specific meta tags */}
          <meta property="og:site_name" content="Your Website Name" />
          <meta property="og:type" content="website" />

          {/* General SEO meta tags */}
          <meta name="description" content={`Difficulty: ${puzzle.difficulty} - ${puzzle.description}`} />
          <meta name="image" content={ogImageUrl} />
          <link rel="canonical" href={`https://www.whatwouldkanodo.com/#/puzzles/${puzzle.id}`} />        </Helmet>
        <div className="content-container">
          <h2>{puzzle.title}</h2>
          <img src={puzzle.src} alt={`Puzzle`} onLoad={handleImageLoad} />
          <p className="text-outline">Difficulty: {puzzle.difficulty}</p>
          <p className="text-outline">Description: {puzzle.description}</p>
          <div className="solution-link-container">
            {puzzle.url !== "" && (
              <a href={puzzle.url} target="_blank" rel="noopener noreferrer" className="solution-link">
                ~~Solution Discussion Link~~
              </a>
            )}
          </div>
        </div>
      </div>
      <BottomBar />
    </div>
  );
};

export default PuzzleDetailsPage;
