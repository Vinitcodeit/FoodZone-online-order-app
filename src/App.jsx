import React from 'react'
import LandingPage from './FoodZone/Pages/LandingPage'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import ProductMenu from './FoodZone/Components/ProductMenu'

const App = () => {
  return (
    <div>
    <Routes>
    <Route path='/' element={ <LandingPage/>}/>
    <Route path='/products/:firmId' element={<ProductMenu />}/>
    </Routes>
    </div>
  )
}

export default App
