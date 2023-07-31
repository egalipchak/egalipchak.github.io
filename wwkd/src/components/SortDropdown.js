// SortDropdown.js
import React from 'react';
import './SortDropdown.css'; // Import the CSS for the SortDropdown component

const SortDropdown = ({ sortBy, sortOrder, handleSortChange, setSortOrder }) => {
  const handleSortOrderChange = (event) => {
    setSortOrder(event.target.value); // Update the sortOrder state when the user selects a new order
  };

  return (
    <div className="sort-dropdown">
      <div className="sort-section">
        <label htmlFor="sort-by">Sort by:</label>
        <select id="sort-by" value={sortBy} onChange={handleSortChange}>
          <option value="date">Date</option>
          <option value="difficulty">Difficulty</option>
        </select>
      </div>
      <div className="sort-section">
        <label htmlFor="sort-order">Sort order:</label>
        <select id="sort-order" value={sortOrder} onChange={handleSortOrderChange}>
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>
      </div>
    </div>
  );
};

export default SortDropdown;
