import React, { useState } from 'react';
import '../styles/Header.css';
import { auth } from '../firebaseConfig';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';

function Header({ navigate, stories, setSelectedStory }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const routerNavigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      routerNavigate('/'); // Redirect to login page after logout
    } catch (error) {
      console.error('Failed to logout:', error.message);
    }
  };

  const handleCurrentRead = () => {
    if (stories && stories.length > 0) {
      const lastActiveStory = stories[0]; // Open the first story in the list
      setSelectedStory(lastActiveStory);
      navigate('read');
    } else {
      alert('No stories available to read.');
    }
  };

  return (
    <>
      <header className="header">
        <div className="fa fa-bars fa-2x hamburger-icon" onClick={() => setSidebarOpen(!sidebarOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <h1 className="header-title">Once Upon a Bedtime...</h1>
      </header>

      {/* Sidebar */}
      {sidebarOpen && (
        <aside className="sidebar">
          <ul>
            <li>
              <a href="#" onClick={(e) => { e.preventDefault(); navigate('menu'); }}>
              <i className="fas fa-home"></i>Home
              </a>
            </li>
            <li>
              <a href="#" onClick={(e) => { e.preventDefault(); handleCurrentRead(); }}>
              <i className="fas fa-bookmark"></i>Last Read
              </a>
            </li>
            <li>
              <a href="#" onClick={(e) => { e.preventDefault(); navigate('generate'); }}>
              <i className="fas fa-pencil-alt"></i>Generate New Story
              </a>
            </li>
            <li>
              <a href="#" onClick={(e) => { e.preventDefault(); navigate('library'); }}>
              <i className="fas fa-book"></i>Library
              </a>
            </li>
            <li>
              <a href="#" onClick={(e) => { e.preventDefault(); navigate('edit'); }}>
              <i className="fas fa-users"></i>Character Editor
              </a>
            </li>
            <li>
              <a href="#" onClick={(e) => { e.preventDefault(); navigate('settings'); }}>
              <i className="fas fa-cog"></i>Settings
              </a>
            </li>
            <li>
              <button className="logout-button" onClick={handleLogout}>
              <i className="fas fa-sign-out-alt"></i>Logout
              </button>
            </li>
          </ul>
        </aside>
      )}
    </>
  );
}

export default Header;