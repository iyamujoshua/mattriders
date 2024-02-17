import React from 'react'
import Header from '../Header'
import Presale from '../Presale'
import Equity from '../Equity'
import Verified from '../Verified'
import Tokenomics from "../Tokenomics"
import Ect from '../Ect'
import Progressivebar from '../Progressivebar'
import Footer from '../Footer'
const Body = () => {
  return (
    <div>
        <Header/>
        <Presale/>
        <Equity/>
        <Verified></Verified>
        <Tokenomics/>
        <Ect/>
        <Progressivebar/>
        <Footer></Footer>
    </div>
  )
}

export default Body