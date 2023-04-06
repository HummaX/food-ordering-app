import { useState } from 'react'

import classes from './Cart.module.css'
import Modal from '../UI/Modal'

let Cart = (props)=>{
let cartItems = [{id: 'c1' ,name: 'Sushi', amount: 2}].map((items) => items.name)
let totalAmount = 0
let cartTotal = [{id: 'c1' ,name: 'Sushi', amount: 2},{id: 'c1' ,name: 'Sushi', amount: 2},{id: 'c1' ,name: 'Sushi', amount: 10}]
.map((amount)=>{
    return totalAmount += amount.amount
})

return(
    <>
    <Modal close={props.close}>
  <div className={classes['cart-items']}>
     <ul>
       {cartItems}
       </ul>
    </div>
    <div className={classes.total}>
       Total Amount: {totalAmount}
    </div>
    <div className={classes.actions}>
    <button className={classes['button--alt']}> Close </button>
    <button className={classes.button}> Order </button>
    </div>
    </Modal>
    </>
)
}

export default Cart