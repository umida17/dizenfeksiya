import React from 'react'
import "./Main.css"
import mask from  '../assets/Mask.png'

const Main = () => {
  return (
    <div>
       <div className="section1">
          <div className="container">
             <div className="section1-containeri">
               <h2>Avfzalliklarimiz</h2>
               <div className="cards">
                <div className="card">
                    <img src={mask} alt="" />    
                    <h3>Tezda xizmat ko’rsatish</h3>
                    <p>Bizning ko’p yillardan beri o’z faoliyatini olib kelayotgan kompaniyamiz Mijozlarimiz bizdan mamnun</p> 

                </div>

                 <div className="card">
                    <img src={mask} alt="" />    
                    <h3>Tezda xizmat ko’rsatish</h3>
                    <p>Bizning ko’p yillardan beri o’z faoliyatini olib kelayotgan kompaniyamiz Mijozlarimiz bizdan mamnun</p> 
                           
                </div>

                 <div className="card">
                    <img src={mask} alt="" />    
                    <h3>Tezda xizmat ko’rsatish</h3>
                    <p>Bizning ko’p yillardan beri o’z faoliyatini olib kelayotgan kompaniyamiz Mijozlarimiz bizdan mamnun</p> 
                           
                </div>

                
               </div>
             </div>
          </div>
       </div>
    </div>
  )
}

export default Main