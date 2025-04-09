import React, { useState } from 'react'
import '../styles/Header.css'

function Header({ navigate }) {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <>
      <header className="header">
        <div className="left-section">
          <div className="hamburger-icon" onClick={() => setSidebarOpen(!sidebarOpen)}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className="logo">📚 </div>
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
          {/* <span className="search-icon">🔍</span> */}
          <input type="text" placeholder="Search stories" />
        </div>
      </header>

      {/* Sidebar */}
      {sidebarOpen && (
        <aside className="sidebar">
          <ul>
            <li><a href="#">Settings</a></li>
            {/*<li><a href="/generate_story.html">Generate</a></li> for direct to the web*/}
          </ul>
        </aside>
      )}
    </>
  )
}

export default Header
