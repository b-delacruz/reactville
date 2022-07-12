
const Ingredient = (props) => {
	return (
		<li>
			{props.ingredient.name}
				?<button>+</button>
				:<button>X</button>
		</li>
	)
}

export default Ingredient