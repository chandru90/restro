import classes from './MealItem.module.css'
import MealItemForm from './MealItemForm';

const MealItem =(props)=>{
   //const price ='$${props.price.toFixed(2)}';
   const price = `Rs ${props.price.toFixed(2)}`;
    return<li>
        <div className={classes.meal}>
        <h3>discription</h3>
        <div >{props.name}</div>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
        <MealItemForm></MealItemForm>
        </div>
        <div> 
            
        </div>
        </li>
      
        
        
    
     
}
export default MealItem