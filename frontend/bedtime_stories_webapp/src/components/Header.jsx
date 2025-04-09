import React, { useState } from 'react';
import '../styles/Header.css';
import { auth } from '../firebaseConfig';  
import { useNavigate } from 'react-router-dom'; 
import { signOut } from 'firebase/auth';  

function Header({ navigate }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const routerNavigate = useNavigate(); 

  const handleLogout = async () => {
    try {
      await signOut(auth);
      routerNavigate("/");  // Redirect to login page after logout
    } catch (error) {
      console.error("Failed to logout:", error.message);
    }
  };

  return (
    <>
      <header className="header">
        <div className="left-section">
          <div className="hamburger-icon" onClick={() => setSidebarOpen(!sidebarOpen)}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className="logo">📚</div>
        </div>

        <nav className="nav-links">
          <a href="#" onClick={e => { e.preventDefault(); navigate('menu'); }}>
            Home
          </a>
          <a href="#" onClick={e => { e.preventDefault(); navigate('library'); }}>
            Story Library
          </a>
          <a href="#" onClick={e => { e.preventDefault(); navigate('edit'); }}>
            Character Editor
          </a>
          <a href="#" onClick={e => { e.preventDefault(); navigate('settings'); }}>
            Story Settings
          </a>
          <a href="#" onClick={e => { e.preventDefault(); navigate('generate'); }}>
            Generate Story
          </a>
        </nav>

        <div className="search-bar">
          <input type="text" placeholder="Search stories" />
        </div>
      </header>

      {/* Sidebar */}
      {sidebarOpen && (
        <aside className="sidebar">
          <ul>
            <li><a href="#" onClick={e => { e.preventDefault(); navigate('settings'); }}>Settings</a></li>
            <li><button className="logout-button" onClick={handleLogout}>Logout</button></li>
          </ul>
        </aside>
      )}
    </>
  );
}

export default Header;
