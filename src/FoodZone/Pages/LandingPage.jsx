import React from 'react'
import TopBar from '../Components/TopBar'
import ItemsDisplay from '../Components/ItemsDisplay'
import Chains from '../Components/Chains'
import FirmCollection from '../Components/FirmCollection'
import ProductMenu from '../Components/ProductMenu'


const LandingPage = () => {
  return (
    <div>
      <TopBar />
      <div className="landigSection">
      <ItemsDisplay />
      <Chains />
      <FirmCollection />
      <ProductMenu />
      </div>
    </div>
  )
}

export default LandingPage
