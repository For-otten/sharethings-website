import React from 'react';
import './navbar.css';
import image from './SHARETHINGSLogo.png';
import { Link } from 'react-router-dom';

export default function Navbar({ searchTerm, setSearchTerm }) {
  return (
    <nav className="navbar">
      <div className="leftBar">
        <Link to="/"><img className="logo" src={image} alt="Logo" /></Link>
        <ul className="options">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/videos">Videos</Link></li>
          <li><Link to="/games">Games</Link></li>
          <li><Link to="/arts">Arts</Link></li>
          <li><Link to="/musics">Music</Link></li>
        </ul>
      </div>
      <div className="rightBar">
        <input
          type="text"
          placeholder="Search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
    </nav>
  );
}
