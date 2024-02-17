import React from 'react'
import Header from '../Header'
import Presale from '../Presale'
import Equity from '../Equity'
import Verified from '../Verified'
import Tokenomics from "../Tokenomics"
const Body = () => {
  return (
    <div>
        <Header/>
        <Presale/>
        <Equity/>
        <Verified></Verified>
        <Tokenomics/>
    </div>
  )
}

export default Body