import React from 'react'
import img2 from "../../assets/sp.png"
import img3 from "../../assets/cultcoin.png"
import "./style.css"

export default function Verified() {
  return (
    <div>
      <div className="Big-container">
        <div className='verify-parent'>
            <div className='verify-logo'>
                <img src={img2} alt=""  height={151.22}  width={153.6}/>
                <img src={img3} alt="" height={151.22}  width={153.6}/>
            </div>
        </div>

        <div className='verify-content'>
        <h1>100% Verified</h1>
            <p>Contract fully audited bu Coinsult and shown to be 100% secure <br />
KYC passed by solidproof. Learn more in the whitepaper</p>

<a href="#" className="Buy">
              Whitepaper
            </a>
        </div>
        </div>
    </div>
  )
}
