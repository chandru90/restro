import classes from './MealItemForm.module.css'
import Input from '../../UI/Input'
const MealItemForm=(props)=>{
    return <form className={classes.form}>
    <Input label='amount' input={{id:'number',type:'number',min:1,defaultValue :1}}/>
        <button>+ Add Item</button>
    </form>
}
export default MealItemForm