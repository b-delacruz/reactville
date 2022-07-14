import Product from './Product'

const DisplayProducts = (props) => {
  

  return (
    <div className="product-list">
     {props.products.map((product,idx) => {
      if (product.category === props.productCategory) {
        return <Product key={idx} product={product}/>}
    })}
    </div>
  )
}

export default DisplayProducts

