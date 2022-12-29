import React from 'react';
import Product from './Product';

const Main = ({products, onAdd}) => {
  
  return (
    <main className='main col-2'>
      <h2>Products</h2>
      <br/>
      <br/>
      <div className='row products'>
        {products.map((product)=>(
            <Product 
            onAdd={onAdd}
            key={product.id} 
            product={product}></Product>
        ))}
      </div>
    </main>
  )
}

export default Main
