import React from 'react';
import './NavBar.css';

const NavBar: React.FC = () => {
  return (
    <nav className="navbar">
      {/* Top section with icons */}
      <div className="icon-section">
      <div className="icon-item">
        <img src="src/icons/480px-Processing_Foundation_2021_logo 1.svg" alt="Processing Foundation" />
        <div className="text">
          <span className="text-1">Processing</span>
          <span className="text-1">Foundation</span>
        </div>
      </div>
      <div className="icon-item">
        <img src="src/icons/Processing_2021_logo 1.svg" alt="Processing" />
        <div className="text">
          <span className="text-2">Processing</span>
        </div>
      </div>
      <div className="icon-item">
        <img src="src/icons/P5.js_icon 1.svg" alt="p5.js" />
        <div className="text">
          <span className="text-3">p5.js</span>
        </div>
      </div>
      <div className="icon-item">
        <img src="src/icons/Processing_Android_2021_logo 1.svg" alt="Processing Android" />
        <div className="text">
          <span className="text-4">Processing</span>
          <span className="text-4">Android</span>
        </div>
      </div>
      <div className="icon-item">
        <img src="/src/icons/Processing_Python_2021_logo 1.svg" alt="Processing Python" />
        <div className="text">
          <span className="text-5">Processing</span>
          <span className="text-5">Python</span>
        </div>
      </div>
    </div>
      {/* Bottom section with logo, nav links, and search */}
      <div className="bottom-section">
        <img src="/src/icons/Processing_2021_logo 2.svg" alt="Logo" className="logo" />
        <ul className="nav-links">
          <li><a href="#download">Processing</a></li>
          <li><a href="#documentation">Download</a></li>
          <li><a href="#learn">Documentation</a></li>
          <li><a href="#teach">Learn</a></li>
          <li><a href="#about">Teach</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#donate">Donate</a></li>
        </ul>
        <div className="search-container">
          <input type="text" placeholder="Search" className="search-bar" />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

