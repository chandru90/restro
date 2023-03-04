import CartContext from './cart-context'
import { useReducer } from 'react'
const defaultCartState= {
    items :[] ,
    totalAmount :0
}
const CartReducer = (state,action) =>
{
    if(action.type ==='Add'){
    
    const updatedTotalAmount =state.totalAmount +action.item.price* action.item.amount
    const existingCartIndexItem =state.items.findIndex((item)=>item.id===action.item.id)
    const existingCartItem =state.items[existingCartIndexItem]
    
    let updateditems
    if(existingCartItem){
       const updateditem ={...existingCartItem ,amount : existingCartItem.amount+action.item.amount}
    
    updateditems=[...state.items]
    updateditems[existingCartIndexItem] =updateditem
    }else{
        
        updateditems =state.items.concat(action.item)
}
    return {items:updateditems,
    totalAmount:updatedTotalAmount}
    }

    if(action.type ==='Remove')
    {
        
       const existingCartIndexItem =state.items.findIndex((item)=>item.id===action.id)
        const existingItem =state.items[existingCartIndexItem]
        const updatedTotalAmount =state.totalAmount-existingItem.price
        let updateditems
        if(existingItem.amount===1){
            updateditems =state.items.filter(item => item.id !==action.id)
        }
        else{
            const updateditem = {...existingItem,amount :existingItem.amount-1}
            updateditems =[...state.items]
            updateditems[existingCartIndexItem] =updateditem
        }
        return{
            items :updateditems,
            totalAmount : updatedTotalAmount
        }
    }
    return defaultCartState
}


const CartProvider =(props)=>{
    const[cartState,dispatcherAction]= useReducer(CartReducer,defaultCartState)
    const addItemToCartHandler = (item)=>{
        dispatcherAction({type:'Add' , item :item})
    }
    const removeItemToCartHandler= (id)=>{
        dispatcherAction({type:'Remove' , id :id})
    }
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