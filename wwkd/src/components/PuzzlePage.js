import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import MenuBar from './MenuBar';
import BottomBar from './BottomBar';
import SortDropdown from './SortDropdown';
import { BarLoader } from 'react-spinners';
import './PuzzlePage.css';

const PuzzlePage = ({ images }) => {
  const navigate = useNavigate();
  const [sortBy, setSortBy] = useState('date');
  const [sortOrder, setSortOrder] = useState('desc');
  const [allImagesLoaded, setAllImagesLoaded] = useState(false);

  const redirectToPuzzleDetails = (puzzle) => {
    navigate(`/puzzles/${puzzle.id}`);
  };

  const handleSortChange = (event) => {
    setSortBy(event.target.value);
    setSortOrder('asc');
  };

  useEffect(() => {
    const imagePromises = images.map((image) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = image.thumbnail;
        img.onload = resolve;
        img.onerror = reject;
      });
    });

    Promise.all(imagePromises)
      .then(() => setAllImagesLoaded(true))
      .catch(() => setAllImagesLoaded(true));
  }, [images]);

  const sortedImages = images.slice().sort((a, b) => {
    if (sortBy === 'date') {
      return sortOrder === 'asc' ? new Date(a.date) - new Date(b.date) : new Date(b.date) - new Date(a.date);
    } else if (sortBy === 'difficulty') {
      const difficultyOrder = ['Easy', 'Medium', 'Hard'];
      if (sortOrder === 'asc') {
        return difficultyOrder.indexOf(a.difficulty) - difficultyOrder.indexOf(b.difficulty);
      } else {
        return difficultyOrder.indexOf(b.difficulty) - difficultyOrder.indexOf(a.difficulty);
      }
    }
    return 0;
  });

  return (
    <div className="page-wrapper">
      <MenuBar />
      <SortDropdown sortBy={sortBy} sortOrder={sortOrder} handleSortChange={handleSortChange} setSortOrder={setSortOrder} />
      {allImagesLoaded ? (
        <div className="puzzle-flex-container">
          <div className="puzzle-page">
            {sortedImages.map((image, index) => (
              <div key={index} className="puzzle-tile" onClick={() => redirectToPuzzleDetails(image)}>
                <div className="puzzle-box">
                  <div className="puzzle-title">
                    {image.isNew && <div className="new-puzzle">NEW</div>}
                    {image.title}
                  </div>
                  <div className="puzzle-details">
                    <p className="puzzle-difficulty">{image.difficulty}</p>
                    <p className="puzzle-date">{image.date}</p>
                  </div>
                  <img className="blurred-image" src={image.thumbnail} alt={`Puzzle ${index + 1}`} />
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="loader-container">
          <BarLoader color="#fff" loading={!allImagesLoaded} />
        </div>
      )}
      <div className="footer">
        <BottomBar />
      </div>
    </div>
  );
};

export default PuzzlePage;
