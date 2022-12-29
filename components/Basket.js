import React from 'react'

const Basket = ({cartItems, onAdd, onRemove}) => {
  const itemsPrice=cartItems.reduce((a,c)=>a+c.price*c.qty, 0);
  const taxPrice=itemsPrice*0.11;
  const shippingPrice=itemsPrice>2000?0 : 50;
  const totalPrice=itemsPrice+taxPrice+shippingPrice;

  function submitCart(){
    alert("Checked out");
  }
  return (
    <aside className='col-1 basket'>
      <div className='row'>
      <h2>Cart</h2>
      
      </div>
      <br/>
      <br/>
      <div>
        {cartItems.length===0 && <div>Your cart is empty</div>}
      </div>
      {cartItems.map((item)=>(
        <div key={item.id} className='row align-center basketItem'>
          <div className='col-2'>{item.name} ({item.qty})</div>
          <div className='col-2'>
            <button onClick={()=>onRemove(item)} className='cartBtn'>-</button>
            <button onClick={()=>onAdd(item)} className='cartBtn'>+</button>
          </div>
          <div className='col-2 text-right'>
            {item.price } {item.value}
          </div>
        </div>
      ))}
      <br/>
      <hr/>
      <br/>
      {cartItems.length!==0 && (
        <>
          <div className='row'>
           <div className='col-2'>Items Price</div>
           <div className='col-1 text-right'>{itemsPrice.toFixed(2)} AZN</div>
          </div>
          <div className='row'>
           <div className='col-2'>Tax</div>
           <div className='col-1 text-right'>{taxPrice.toFixed(2)} AZN</div>
          </div>
          <div className='row'>
           <div className='col-2'>Shipping Price</div>
           <div className='col-1 text-right'>{shippingPrice.toFixed(2)} AZN</div>
          </div>
          <div className='row'>
           <div className='col-2'>Total Price</div>
           <div className='col-1 text-right'>
            <strong>{totalPrice.toFixed(2)}</strong> AZN</div>
          </div>
          <br/>
          <hr/>
          <br/>
          <button className='btn'
          onClick={()=>submitCart()}>Chectout</button>
        </>
      )}
    </aside>
  )
}

export default Basket
