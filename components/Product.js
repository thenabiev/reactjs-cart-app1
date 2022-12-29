import React from 'react'

const Product = ({product, onAdd}) => {
  return (
    <div className='product'>
      <div className='imgBox'>
        <img className='small'
        src={product.image}
        alt={product.name}
        />
      </div>
      <div className='details'>
        <h3>{product.name}</h3>
        <br/>
        <div><b>{product.price}</b>  {product.value}</div>
        <br/>

        <button 
        onClick={()=>onAdd(product)}
        className='addToCart'>Add to Cart</button>
      
      </div>

    </div>
  )
}

export default Product;
