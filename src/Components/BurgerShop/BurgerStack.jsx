import Ingredient from "./Ingredient"

const BurgerStack = (props) => {
  return (
    <>
    {props.stack.length ?
    <ul className="burger-stack">
    {props.stack.map(ingredient =>
      <Ingredient 
      ingredient={ingredient}
      />
		)}
    </ul>
    :
    <ul>
      <h2>Empty</h2>
    </ul>
    
    }
    </>
  )
}

export default BurgerStack