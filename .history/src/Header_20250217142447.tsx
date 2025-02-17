// src/components/Header.tsx
import React from 'react'
import './Header.css' // Optional: Create a separate CSS file for Header styles if desired

const Header = () => {
  return (
    <header className="header">
      <nav className="nav">
        <a href="#home" className="nav-link">Home</a>
        <a href="#about" className="nav-link">About</a>
        <a href="#contact" className="nav-link">Contact</a>
      </nav>
    </header>
  )
}

export default Header
