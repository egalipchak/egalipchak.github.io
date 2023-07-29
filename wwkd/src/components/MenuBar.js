import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './MenuBar.css';

const MenuBar = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const handlePuzzlesLinkEnter = () => {
    setShowDropdown(true);
  };

  const handlePuzzlesLinkLeave = () => {
    // Delay hiding the dropdown to give the user some time to move the cursor to the dropdown
    setTimeout(() => {
      setShowDropdown(false);
    }, 200);
  };

  const handleDropdownMouseEnter = () => {
    setShowDropdown(true);
  };

  const handleDropdownMouseLeave = () => {
    setShowDropdown(false);
  };

  return (
    <div className="menu-bar"> {/* Use .menu-bar instead of .links */}
      <Link to="/" className="menu-link">Home</Link> {/* Update the class name to .menu-link */}
      <div
        className="menu-link puzzles-link"
        onMouseEnter={handlePuzzlesLinkEnter}
        onMouseLeave={handlePuzzlesLinkLeave}
      >
        Puzzles
        {showDropdown && (
          <div className="dropdown" onMouseEnter={handleDropdownMouseEnter} onMouseLeave={handleDropdownMouseLeave}>
            {/*Link to="/recent" className="dropdown-link">Recent</Link>*/}
            <Link to="/easy" className="dropdown-link">Easy</Link>
            <Link to="/medium" className="dropdown-link">Medium</Link>
            <Link to="/hard" className="dropdown-link">Hard</Link>
          </div>
        )}
      </div>
      <Link to="/guides" className="menu-link">Guides</Link>
      <Link to="/about" className="menu-link">About</Link>
      {/*<Link to="/kanomatches" className="menu-link">Kano Matches</Link>*/}
    </div>
  );
};

export default MenuBar;
