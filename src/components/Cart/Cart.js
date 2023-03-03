import classes from './Cart.module.css'
import Modal from '../UI/Modal'
const Cart =()=>{
    const cartdetails=(<ul className={classes['cart-items']}>{ [{ id:1 , name: 'idli', price: '15'}].map((item) =>( <li>{item.name}</li>))}</ul>)
    return ( <Modal>
{cartdetails}
<div className={classes.total}>
    <span>total amount</span>
    <span>35</span>

</div>
<div className={classes.actions}>
<button className={classes['button--alt']}>close</button>
<button className={classes.button}>order</button>
    </div>
</Modal>
    )
} 
export default Cart