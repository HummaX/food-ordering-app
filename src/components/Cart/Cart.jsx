import { useContext, useState } from 'react'
import CartContext from '../Store/Cart-Context'

import classes from './Cart.module.css'
import Modal from '../UI/Modal'
import CartItem from './CartItem'

let Cart = (props)=>{

  let modalCloser=()=>{
    props.close(true)
  }

let cartCtx = useContext(CartContext)

let cartItemRemoveHandler = (id)=>{
 cartCtx.removeItem(id)
}
let cartItemAddHandler = (item)=>{
  cartCtx.addItem({...item, amount: 1})
}

let cartTotal = cartCtx.totalAmount.toFixed(2)
let hasItems = cartCtx.items.length > 0

let itemsDisplay = cartCtx.items.map((item)=>{
  return <CartItem 
  name={item.name} 
  amount={item.amount} 
  price={item.price} 
  add={cartItemAddHandler.bind(null,item)} 
  remove={cartItemRemoveHandler.bind(null,item.id)}/>
})

return(
    <>
    <Modal close={props.close}>
  <div className={classes['cart-items']}>
    <ul>
      {itemsDisplay}
    </ul>
</div>
    <div className={classes.total}>
       Total Amount: {cartTotal}
    </div>
    <div className={classes.actions}>
    <button className={classes['button--alt']} onClick={modalCloser}> Close </button>
    {hasItems && <button className={classes.button}> Order </button>}
    </div>
    </Modal>
    </>
)
}

export default Cart