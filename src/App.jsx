import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import HomePage from './components/HomePage/HomePage'
import CountryPage from './components/CountryPage/CountryPage'
import CurrentLocation from './components/CurrentLocation/CurrentLocation'


function App() {


  return (
    <div className='pageWidth'>
    <BrowserRouter>
      <Routes>
        
        <Route path='/' element={<HomePage />}></Route>
        <Route path='/currentLocation' element={<CurrentLocation />}></Route>
        <Route path='/countryPage' element={<CountryPage />}></Route>
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
