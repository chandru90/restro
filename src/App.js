import Header from './components/Layout/Header'
import React,{useState} from 'react';
import Meals from './components/Meals/Meals'
import Cart from './components/Cart/Cart'
import CartProvider from'./Store/CartProvider'
function App() {
  const[cartisshown,setcartisshown]=useState(false)
  const cartshowhandler=()=>{
    setcartisshown(true)
  }
  const cartnotshowhandler=()=>{
    setcartisshown(false)
  }
  return <CartProvider>
    {cartisshown &&<Cart onclose={cartnotshowhandler} />}
      <Header setcart={cartshowhandler} />
      <main>
        <Meals></Meals>
      </main>
 </CartProvider>
    
 
}

export default App;
