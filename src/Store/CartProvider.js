import CartContext from './cart-context'
import { useReducer } from 'react'
const defaultCartState= {
    items :[] ,
    totalAmount :0
}
const CartReducer = (state,action) =>
{
    if(action.type ==='Add'){
    const updateditem =state.items.concat(action.item)
    const updatedTotalAmount =state.totalAmount +action.item.price* action.item.amount
    return {items:updateditem,
    totalAmount:updatedTotalAmount}
    }
    return defaultCartState
}


const CartProvider =(props)=>{
    const[cartState,dispatcherAction]= useReducer(CartReducer,defaultCartState)
    const addItemToCartHandler = (item)=>{
        dispatcherAction({type:'Add' , item :item})
    }
    const removeItemToCartHandler= (id)=>{}
    const cartContext = {
        items : cartState.items,
        totalAmount:cartState.totalAmount ,
       //items :[],
       //totalAmount:0,
        addItem:addItemToCartHandler,
        removeItem : removeItemToCartHandler,
    }
   

    return (<CartContext.Provider value={cartContext} >
        {props.children}
    </CartContext.Provider>
)
}
export default CartProvider