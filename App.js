import Header from './components/Header';
import Main from './components/Main';
import Basket from './components/Basket';
import data from './data';
import {useState} from 'react'


function App() {

const {products}=data;
const [cartItems, setCartIems]=useState([]);

const onAdd=(product)=>{
  const exist=cartItems.find(x=>x.id===product.id);
  if(exist){
    setCartIems(cartItems.map
      (x=>x.id===product.id ? 
        {...exist, qty: exist.qty+1} : x)
      )
  }
  else{
    setCartIems([...cartItems, {...product, qty: 1}])
  }
};
const onRemove=(product)=>{
  const exist=cartItems.find(x=>x.id===product.id);
  if(exist.qty===1){
    setCartIems(cartItems.filter(x=>x.id !==product.id));
  }
  else{
    setCartIems(cartItems.map
      (x=>x.id===product.id ? 
        {...exist, qty: exist.qty-1} : x)
      )
  }
}

  return (
    <div className="App">
      <Header countCartItems={cartItems.length}></Header>
      <section className='row'>
        <Main onAdd={onAdd} products={products}></Main>
        <Basket onAdd={onAdd} onRemove={onRemove} cartItems={cartItems}></Basket>
      </section>
    </div>
  );
}

export default App;
