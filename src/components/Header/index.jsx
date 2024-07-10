import React from "react";
import img1 from "../../assets/rat1.png";
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
          <h1>Lorem ipsum dolor </h1>
          <h1>Lorem, ipsum dolor.</h1>
          <p>Lorem ipsum dolor sit amet consectetur.</p>
          <div className="two-btn">
            <div>
            <button className="Buy">
              Buy $MATTRIDER
            </button>
            </div>
            <div>
            <button className="whitepaper">
              Chart
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



