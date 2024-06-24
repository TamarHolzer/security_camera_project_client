import React from 'react';
import '../css/Header.css';
import logo from '../pics/ללוגו-removebg-preview.png'

const Header = () => {
  return (
    <header className="header">
      
      <img src={logo} width="5%" alt="My Website Logo" className="logo" />
      {/* <nav>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav> */}
    </header>
  );
};

export default Header;
