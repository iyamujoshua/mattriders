import React from 'react'
import story1 from "../../assets/story1.jpeg"
import story2 from "../../assets/story2.jpeg"
import story3 from "../../assets/story3.jpeg"
import story4 from "../../assets/story4.jpeg"
import story5 from "../../assets/story5.jpeg"
import story6 from "../../assets/story6.jpeg"
import story7 from "../../assets/story7.jpeg"
import story8 from "../../assets/story8.jpeg"
import story9 from "../../assets/story9.jpeg"
import story10 from "../../assets/story10.jpeg"
import story11 from "../../assets/story11.jpeg"
import "./style.css"
import Marquee from 'react-fast-marquee'
function Gallery2() {
  return (
    <div className='gala' id='Story'>
      <marquee speed={400} direction="left">
        <img src={story1} alt="" />
        <img src={story2} alt="" />
        <img src={story3} alt="" />
        <img src={story4} alt="" />
        <img src={story5} alt="" />
        <img src={story6} alt="" />
        <img src={story7} alt="" />
        <img src={story8} alt="" />
        <img src={story9} alt="" />
        <img src={story10} alt="" />
        <img src={story11} alt="" />
      </marquee>
    </div>
  )
}

export default Gallery2
