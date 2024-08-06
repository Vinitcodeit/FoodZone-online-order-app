import React from 'react'
import TopBar from '../Components/TopBar'
import ItemsDisplay from '../Components/ItemsDisplay'


const LandingPage = () => {
  return (
    <div>
      <TopBar />
      <div className="landigSection">
      <ItemsDisplay />
      </div>
    </div>
  )
}

export default LandingPage
