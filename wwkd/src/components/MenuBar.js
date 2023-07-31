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
      <Link to="/puzzles" className="menu-link">Puzzles</Link>
      <Link to="/guides" className="menu-link">Guides</Link>
      <Link to="/about" className="menu-link">About</Link>
    </div>
  );
};

export default MenuBar;
