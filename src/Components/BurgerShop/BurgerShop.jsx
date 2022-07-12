import '../../styles/burger.css'
import IngredientList from '../BurgerShop/IngredientList'
import BurgerStack from '../BurgerShop/BurgerStack'
import { ingredients } from '../../data/burger-data'
import { useState } from 'react'

const BurgerShop = () => {
  const [stack, setStack] = useState([])
  
  const addToBurger = (ingredient) => {
    setStack([...stack, ingredient])
  }
  
    const removeFromBurger = (idx) => {
      setStack(stack.filter((ing, i) => i !== idx))
  }

  return (
    <div className="burger-shop">
      <nav>
        <h1>Burger Shop</h1>
        <button onClick={() => setStack([])}>Clear Order</button>
      </nav>

      <section>
        <IngredientList 
        ingredients={ingredients} 
        addToBurger={addToBurger}
        stack={stack}
        />
        <BurgerStack 
        ingredients={stack}
        removeFromBurger={removeFromBurger}
        />
      </section>
    </div>
  )
}

export default BurgerShop

