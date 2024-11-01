import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { IoMdHome, IoMdSettings } from "react-icons/io";
import { FaSearch, FaFireAlt, FaListUl, FaStore } from "react-icons/fa";
import { MdDarkMode, MdOutlineLightMode } from "react-icons/md";
import UserImg from "../assets/bryan.webp";
import LoadingGif from "../assets/loading.gif";
import './Layout.css';

const Layout = ({ children, toggleTheme, isLightMode, isUserDropdownOpen, handleUserClick, handleLogout, loading }) => { // Added loading prop
    const navigate = useNavigate();
    const location = useLocation();

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
                            <FaStore size={25} className='store'/>
                            <span className="label" style={{ color: 'white' }}>Anino's Collections</span>
                        </a>
                    </li>
                    <li>
                        <button onClick={toggleTheme} className="theme-toggle">
                            {isLightMode ? <MdDarkMode size={25} /> : <MdOutlineLightMode size={25} />}
                            <span className="label">{isLightMode ? 'Switch to Dark Mode' : 'Switch to Light Mode'}</span>
                        </button>
                    </li>
                    <li>
                        <IoMdSettings size={20} />
                        <span className="label">Settings</span>
                    </li>
                </ul>
            </nav>

            <main className="content">
                {loading ? (
                    <div className="loading-container" style={{ 
                        backgroundColor: isLightMode ? "var(--content-background-light)" : "var(--content-background-dark)", 
                        color: isLightMode ? "var(--text-color-light)" : "var(--text-color-dark)"
                    }}>
                        <img src={LoadingGif} alt="Loading..." className="loading-gif" />
                        <p className="loading-text">Loading.....</p>
                    </div>
                ) : (
                    children
                )}
            </main>
        </div>
    );
};

export default Layout;
