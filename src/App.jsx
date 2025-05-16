import React from 'react'
import Header from './components/Header'
import Sliderr from './components/Sliderr'
import ProductionHouse from './components/ProductionHouse'
import Genres from './components/Genres'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className='bg-gradient-to-b   to-[#19377e] from-[#0f0d31]'>
      <Header/>
      <Sliderr/>
      <ProductionHouse/>
      <Genres/>
      <Footer/>
    </div>
  )
}

export default App
