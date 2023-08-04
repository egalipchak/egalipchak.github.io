// SortDropdown.js
import React from 'react';
import './SortDropdown.css';

const SortDropdown = ({ sortBy, sortOrder, handleSortChange, setSortOrder }) => {
  const handleSortOrderChange = (event) => {
    setSortOrder(event.target.value);
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
