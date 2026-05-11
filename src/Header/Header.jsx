
import "./src/Header/Header.css"
import frame from './assets/Frame.png'

import React from 'react'

const Header = () => {
  return (
    <>
    <header>
        <div className="container">
            <div className="herader-container">
            <img src={frame} alt="" />
            </div>
        </div>
    </header>
    </>
  )
}

export default Header
