import React, { useState } from 'react';
import '../styles/Header.css';
import { auth } from '../firebaseConfig';  
import { useNavigate } from 'react-router-dom'; 
import { signOut } from 'firebase/auth';  

  function Header({ navigate, setSelectedStoryId }) {
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
        <div className="hamburger-icon" onClick={() => setSidebarOpen(!sidebarOpen)}>
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
            <li><a href="#" onClick={e => { e.preventDefault(); navigate('menu'); }}>Home</a></li>
            <li>
              <a href="#" onClick={e => {
                e.preventDefault();
                setSelectedStoryId(1); //TODO
                navigate('read');
              }}>
                Current Read
              </a>
            </li>
            <li><a href="#" onClick={e => { e.preventDefault(); navigate('generate'); }}>Generate New Story</a></li>
            <li><a href="#" onClick={e => { e.preventDefault(); navigate('library'); }}>Library</a></li>
            <li><a href="#" onClick={e => { e.preventDefault(); navigate('edit'); }}>Character Editor</a></li>
            <li><a href="#" onClick={e => { e.preventDefault(); navigate('settings'); }}>Settings</a></li>
            <li><button className="logout-button" onClick={handleLogout}>Logout</button></li>
          </ul>
        </aside>
      )}
    </>
  );
}

export default Header;