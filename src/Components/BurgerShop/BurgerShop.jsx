import '../../styles/burger.css'
import IngredientList from '../BurgerShop/IngredientList'
import BurgerStack from '../BurgerShop/BurgerStack'
import { ingredients } from '../../data/burger-data'
import { useState } from 'react'

const BurgerShop = () => {
  const [stack] = useState({})
  console.log(ingredients)
  
  return (
    <div className="burger-shop">
      <nav>
        <h1>Burger Shop</h1>
        <button>Clear Order</button>
      </nav>
      <section>

        <IngredientList ingredients={ingredients}/>
        <BurgerStack stack={stack}/>
      </section>
    </div>
  )
}

export default BurgerShop

