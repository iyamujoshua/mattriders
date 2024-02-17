import React from 'react'
import Header from '../Header'
import Presale from '../Presale'
import Equity from '../Equity'
import Verified from '../Verified'
const Body = () => {
  return (
    <div>
        <Header/>
        <Presale/>
        <Equity/>
        <Verified></Verified>
    </div>
  )
}

export default Body