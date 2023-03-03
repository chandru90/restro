import Header from './components/Layout/Header'
import React,{Fragment, useState} from 'react';
import Meals from './components/Meals/Meals'
import Cart from './components/Cart/Cart'
function App() {
  const[cartisshown,setcartisshown]=useState(false)
  const cartshowhandler=()=>{
    setcartisshown(true)
  }
  const cartnotshowhandler=()=>{
    setcartisshown(false)
  }
  return <Fragment>
    {cartisshown &&<Cart onclose={cartnotshowhandler} />}
      <Header setcart={cartshowhandler} />
      <main>
        <Meals></Meals>
      </main>
    </Fragment>
    
 
}

export default App;
