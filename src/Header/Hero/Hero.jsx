import React from 'react'
import "./Hero.css"; 

import group from "../../assets/Group.png";
import vector from "../../assets/Vector.png"
import xlor from "../../assets/xlor.png"
const Hero = () => {
  return (
     <>
     <div className="Hero">
    <div className="container">
        <div className="Hero-container">
            <div className="dizenfeksiya">
                <h2 className='xizmat'>Dizenfeksiya xizmati </h2>
                <p className='kop'>Bizning ko’p yillardan beri o’z faoliyatini olib kelayotgan kompaniyamiz Mijozlarimiz bizdan mamnun</p>
                <div className="dumaloq">
                    <div className="kok"></div>
                    <div className="mentol"></div>
                    <img className='siyoh' src={group} alt="" />
                </div>
                <div className="boshlanish">
                    <button>Bog’lanish</button>
                        <img src={vector} alt="" />
                </div>
            </div>
            <img className='xlor' src={xlor} alt="" />
        </div>
    </div>
     </div>
     
     </>
  )
}

export default Hero
