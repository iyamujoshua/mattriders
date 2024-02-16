import React from "react";
import img1 from "../../assets/img1.png";
import "./style.css";
const Header = () => {
  return (
    <div>
      <div className="Header_flex">
        <div className="Header_content">
          <h1>The Future of Social</h1>
          <h1>Gaming is here!</h1>
          <p>Grab your $SLOT, presale is now live</p>
          <div className="two-btn">
            <div>
            <a href="#" className="Buy">
              Buy $SLOT
            </a>
            </div>
            <div>
            <a href="#" className="whitepaper">
              WhitePaper
            </a>
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
