import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import { IoMdHome, IoMdSettings } from "react-icons/io";
import { FaSearch, FaFireAlt } from "react-icons/fa";
import { FaListUl } from "react-icons/fa6";
import { FaStore } from "react-icons/fa";
import { MdDarkMode } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";

export const Home = ({ toggleTheme }) => {
  const isLightMode = document.body.className === 'light';

  return (
    <div className="home-container">
      <nav className="sidebar">
        <ul>
          <li>
            <FaSearch size={20} />
            <span className="label">Search</span>
          </li>
          <li>
            <Link to="/home">
              <IoMdHome size={20} />
              <span className="label">Home</span>
            </Link>
          </li>
          <li>
            <FaFireAlt size={20} />
            <span className="label">Top Airing</span>
          </li>
          <li>
            <FaListUl size={20} />
            <span className="label">My Lists</span>
          </li>
        </ul>
        
        <ul className="settings">
          <li>
            <a href="https://toystore-tawny.vercel.app/" target="_blank" rel="noopener noreferrer">
              <FaStore size={20} color='yellow' />
              <span className="label" style={{ color: 'white' }}>Anino's Collections</span>
            </a>
          </li>
          <li>
            <button onClick={toggleTheme} className="theme-toggle">
              {isLightMode ? <MdDarkMode size={20} /> : <MdOutlineLightMode size={20} />}
              <span className="label">{isLightMode ? 'Light Mode' : 'Dark Mode'}</span>
            </button>
          </li>
          <li>
            <IoMdSettings size={20} />
            <span className="label">Settings</span>
          </li>
        </ul>
      </nav>

      <main className="content">
        <h1 className='title'>AninoAnime</h1>
      </main>
    </div>
  );
};

export default Home;
