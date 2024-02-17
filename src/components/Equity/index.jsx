import React from "react";
import "./style.css";
import img1 from "../../assets/pinkflash.png"

export default function Equity() {
  return (
    <div className="Get_started">
    <div className="Get_started_content">
      <h1>$1.2M RAISED IN EQUITY</h1>
      <div className="Get_started_btn"></div>
    </div>
    <img src={img1} alt="" className="CenteredImage" />
  </div>
  );
}
