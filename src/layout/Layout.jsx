import React from 'react';
import { Link } from 'react-router-dom';
import { IoMdHome, IoMdSettings } from "react-icons/io";
import { FaSearch, FaFireAlt, FaListUl } from "react-icons/fa";
import { FaStore } from "react-icons/fa";
import { MdDarkMode, MdOutlineLightMode } from "react-icons/md";
import UserImg from "../assets/bryan.webp";
import './Layout.css'

const Layout = ({ children, toggleTheme, isLightMode, isUserDropdownOpen, handleUserClick, handleLogout }) => {
    return (
        <div className="layout-container">
            <nav className="sidebar">
                <img 
                    onClick={handleUserClick} 
                    className='User-img' 
                    style={{height: 'auto', width: '40px'}} 
                    src={UserImg} 
                    alt="User" 
                />
                
                {isUserDropdownOpen && (
                    <div className="user-dropdown">
                        <ul>
                            <li onClick={() => alert("Navigating to Profile Settings")}>
                                Profile Settings
                            </li>
                            <li onClick={handleLogout}>
                                Logout
                            </li>
                        </ul>
                    </div>
                )}

                <ul>
                    <li>
                        <FaSearch size={20} />
                        <span className="label">Search</span>
                    </li>
                    <li>
                        <Link to="/home">
                            <IoMdHome size={25} />
                            <span className="label">Home</span>
                        </Link>
                    </li>
                    <li>
                        <FaFireAlt size={20} />
                        <span className="label">Top Airing</span>
                    </li>
                    <li>
                        <Link to="/mylists"> 
                            <FaListUl size={20} />
                            <span className="label">My Lists</span>
                        </Link>
                    </li>
                </ul>

                <ul className="settings">
                    <li>
                        <a href="https://toystore-tawny.vercel.app/" target="_blank" rel="noopener noreferrer">
                            <FaStore size={25} color='yellow' />
                            <span className="label" style={{ color: 'white' }}>Anino's Collections</span>
                        </a>
                    </li>
                    <li>
                        <button onClick={toggleTheme} className="theme-toggle">
                            {isLightMode ? <MdDarkMode size={25} /> : <MdOutlineLightMode size={25} />}
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
                {children} 
            </main>
        </div>
    );
};

export default Layout;
