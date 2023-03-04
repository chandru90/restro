import classes from './MealItem.module.css'
import MealItemForm from './MealItemForm';
import { useContext } from 'react';
import CartContext from '../../../Store/cart-context';
const MealItem =(props)=>{
   const cartCtx = useContext(CartContext)
   //const price ='$${props.price.toFixed(2)}';
   const price = `Rs ${props.price.toFixed(2)}`;

   const addToCartHandler=(amount)=>{
    cartCtx.addItem({
        id :props.id,
        name: props.name,
        amount:amount,
        price:props.price
      }  )
   }
    return<li>
        <div className={classes.meal}>
        <h3>discription</h3>
        <div >{props.name}</div>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
        <MealItemForm onAddToCart ={addToCartHandler}></MealItemForm>
        </div>
        <div> 
            
        </div>
        </li>
      
        
        
    
     
}
export default MealItem
