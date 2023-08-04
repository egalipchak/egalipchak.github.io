import { Link } from 'react-router-dom';
import './MenuBar.css';

const MenuBar = () => {
  // const [showDropdown, setShowDropdown] = useState(false);

  // const handlePuzzlesLinkEnter = () => {
  //   setShowDropdown(true);
  // };

  // const handlePuzzlesLinkLeave = () => {
  //   // Delay hiding the dropdown to give the user some time to move the cursor to the dropdown
  //   setTimeout(() => {
  //     setShowDropdown(false);
  //   }, 200);
  // };

  // const handleDropdownMouseEnter = () => {
  //   setShowDropdown(true);
  // };

  // const handleDropdownMouseLeave = () => {
  //   setShowDropdown(false);
  // };

  return (
    <div className="menu-bar">
      <div className="menu-links">
        <Link to="/" className="menu-link">Home</Link>
        <Link to="/puzzles" className="menu-link">Puzzles</Link>
        <Link to="/guides" className="menu-link">Guides</Link>
        <Link to="/about" className="menu-link">About</Link>
      </div>
    </div>
  );
};

export default MenuBar;
