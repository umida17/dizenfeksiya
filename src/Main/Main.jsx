import React from 'react'
import "./Main.css"
import mask from  '../assets/Mask.png'
import xat from '../assets/xat.png'
import maqul from '../assets/maqul.png'
import xaworat from '../assets/xaworat.png'

const Main = () => {
  return (
    <div>
       <div className="section1">
          <div className="container">
             <div className="section1-containeri">
               <h2 className='avf'>Avfzalliklarimiz</h2>
               <div className="cards">
                <div className="card">
                    <img className='mas' src={mask} alt="" />    
                    <h3 className='tezda'>Tezda xizmat ko’rsatish</h3>
                    <p className='olib'>Bizning ko’p yillardan beri o’z faoliyatini olib kelayotgan kompaniyamiz Mijozlarimiz bizdan mamnun</p> 

                </div>

                <div className="card">
                    <img className='mas' src={xat} alt="" />    
                    <h3 className='tezda'>Yetuk mutahasislaimiz</h3>
                    <p className='olib'>Bizning ko’p yillardan beri o’z faoliyatini olib kelayotgan kompaniyamiz Mijozlarimiz bizdan mamnun</p> 

                </div>

                 <div className="card">
                    <img className='mas' src={maqul} alt="" />    
                    <h3 className='tezda'>Sizga maqul vaqtda</h3>
                    <p className='olib'>Bizning ko’p yillardan beri o’z faoliyatini olib kelayotgan kompaniyamiz Mijozlarimiz bizdan mamnun</p> 

                </div>


               </div>
             </div>
          </div>
       </div>

       <div className="section2">
        <div className="container">
            <div className="section2-container">
                <div className="klapa">
                    <h2 className='zararli'>Klapa va zararli hashorot endi yo’q deb hisoblang !!!</h2>
                    <p className='yillar'>Bizning ko’p yillardan beri o’z faoliyatini olib kelayotgan kompaniyamiz Mijozlarimiz bizdan mamnun</p>
                    <button className='ulash'>Bog’lanish</button>
                </div>
            </div>
        </div>
       </div>
    </div>
  )
}

export default Main