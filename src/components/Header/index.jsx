import React from "react";
import img1 from "../../assets/img1.png";
import circle2 from "../../assets/circle2.png"
import circle3 from "../../assets/circle_blur.svg"
import "./style.css";
const Header = () => {
  return (
    <div>
      <div className="Header_flex">
      <div className="circle-background">
          <img src={circle2} alt="" />
        </div>
        <div className="circle-background1">
          <img src={circle3} alt="" />
        </div>
        <div className="Header_content">
          <h1>The Future of Social</h1>
          <h1>Gaming is here!</h1>
          <p>Grab your $SLOT, presale is now live</p>
          <div className="two-btn">
            <div>
            <button className="Buy">
              Buy $SLOT
            </button>
            </div>
            <div>
            <button className="whitepaper">
              WhitePaper
            </button>
            </div>
          </div>
        </div>
        <div className="header_bg">
          <img src={img1} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Header;



