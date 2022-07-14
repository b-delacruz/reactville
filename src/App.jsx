import './styles/App.css'
import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Nav from './Components/Nav/Nav'

// Components
import Landing from './Components/Landing/Landing'
import BurgerShop from './Components/BurgerShop/BurgerShop'
import SuperMarket from './Components/SuperMarket/SuperMarket'
import { useState } from 'react'

const App = () => {
  const [cash, setCash] = useState (100)

  const handleExchange = (amt) => {
    if (cash - amt > 0) setCash((cash - amt).toFixed(2))
  }

  return (
    <>
      <Nav cash={cash}/>
      <main>
        <Routes>
          <Route path='/' 
            element={<Landing />} />
          <Route path='/burgers' 
            element={<BurgerShop />} />
          <Route path='/market' 
            element={<SuperMarket handleExchange={handleExchange} />} />
        </Routes>
      </main>
    </>
  )
}

export default App