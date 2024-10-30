import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import { IoMdHome, IoMdSettings } from "react-icons/io";
import { FaSearch, FaFireAlt } from "react-icons/fa";
import { FaListUl } from "react-icons/fa6";
import { FaStore } from "react-icons/fa";

export const Home = () => {
  return (
    <div className="home-container">
      <nav className="sidebar">
        <ul>
          <li>
            <FaSearch  size={20}/>
            <span className="label">Search</span>
          </li>
          <li>
            <Link to="/home">
            <IoMdHome size={20}/>
            <span className="label">Home</span>
            </Link>
          </li>
          <li>
            <FaFireAlt size={20}/>
            <span className="label">Top Airing</span>
          </li>
          <li>
            <FaListUl size={20}/>
            <span className="label">My Lists</span>
          </li>
        </ul>
        
        <ul className="settings">
        <li>
       <a href="https://toystore-tawny.vercel.app/" target="_blank" rel="noopener noreferrer">
    <FaStore size={20} color='yellow'/>
    <span className="label" style={{color: 'white'}}>Anino's Collections</span>
  </a>
</li>
          <li>
            <IoMdSettings size={20}/>
            <span className="label">Settings</span>
          </li>
        </ul>
      </nav>
      <main className="content">
        <h1 className='title'>AninoAnimeHub</h1>
      </main>
    </div>
  );
};

export default Home;
