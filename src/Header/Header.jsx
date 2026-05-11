import React from 'react';
import "./Header.css"; 

import frame from '../assets/Frame.png'; 

const Header = () => {
  return (
    <header>
      <div className="container">
        
        <div className="header-container">
           <img src={frame} alt="Logo" />
        </div>
      </div>
    </header>
  );
};

export default Header;