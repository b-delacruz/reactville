import './styles/App.css'
import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Nav from './Components/Nav/Nav'

// Components
import Landing from './Components/Landing/Landing'
import BurgerShop from './Components/BurgerShop/BurgerShop'
import SuperMarket from './Components/SuperMarket/SuperMarket'

const App = () => {
  return (
    <>
      <Nav/>
      <main>
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/burgers' element={<BurgerShop />} />
          <Route path='/market' element={<SuperMarket />} />
        </Routes>
      </main>
    </>
  )
}

export default App