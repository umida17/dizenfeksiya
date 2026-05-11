import React from 'react';
import "./Header.css"; 

import frame from '../assets/Frame.png'; 

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="header-container">
           <img src={frame} alt="Logo" />
           <div className="home">
            <a href="#">Service</a>
            <a href="#">About</a>
            <a href="#">Faq</a>
            <a href="#">Contact</a>
           </div>

           <button>Kirish</button>
        </div>
      </div>
    </header>
  );
};

export default Header;