import React from 'react';
import { Link } from 'react-router-dom';
import './PuzzleLink.css';

const PuzzleLink = ({ linkTo, title }) => {
  return (
    <Link to={linkTo} className="puzzle-link">
      {title}
    </Link>
  );
};

export default PuzzleLink;
