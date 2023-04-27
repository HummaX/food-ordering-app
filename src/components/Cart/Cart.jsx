import { useContext,useState } from 'react'
import CartContext from '../Store/Cart-Context'
import CheckOut from './CheckOut'

import classes from './Cart.module.css'
import Modal from '../UI/Modal'
import CartItem from './CartItem'

let Cart = (props)=>{

  let [showCheckout,setShowCheckout] = useState(false)
  let [closeCheckout,setCloseCheckOut] = useState(false)
  let [isSubmiting,setIsSubmiting] = useState(false)
  let [isSubmited,setIsSubmited] = useState(false)

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
let checkoutClose = (data) =>{
  setCloseCheckOut(data) //true
  setShowCheckout(false)
  }

  let submitMessageHandler =()=>{
    setIsSubmited(false)
    props.close(true)
    setCloseCheckOut(true)
  }

let CheckoutHandler = ()=>{
setShowCheckout(true)
setCloseCheckOut(false) //false
// either dont use it in condtion or put it to false as it will not update previous state of checkout and remove order button
}

let submitOrderHandler = async(userData)=>{

// let itemDetails = cartCtx.items.map((items)=>{
//   return({
//     name:items.name,
//     amount:items.amount
//   })
// })

// let fullData = {customerDetails:userData,items:itemDetails}
setIsSubmiting(true)
fetch('https://react-api-project-e7084-default-rtdb.asia-southeast1.firebasedatabase.app/order.json',{
  method: 'POST',
  body:JSON.stringify({customerDetails:userData,order:cartCtx.items}),
  headers:{
    'Content-Type':'application/json'
}
})
setIsSubmiting(false)
setIsSubmited(true)
cartCtx.clearCart()
}

let cartTotal = `$${cartCtx.totalAmount.toFixed(2)}`
let hasItems = cartCtx.items.length > 0

let itemsDisplay = cartCtx.items.map((item)=>{
  return <CartItem 
  name={item.name} 
  amount={item.amount} 
  price={item.price} 
  add={cartItemAddHandler.bind(null,item)} 
  remove={cartItemRemoveHandler.bind(null,item.id)}/>
})

let modalActions = <>
<button className={classes['button-alt']} onClick={modalCloser}> Close </button> 
{/* According to Maxima onClick={props.onClose} */}
{/* it will trigger thta function where we have put state as false */}
{hasItems && <button className={classes.button} onClick={CheckoutHandler}> Order </button>}
</>

if(isSubmiting){
  return(
  <p> Data is submiting </p>
  )
}

if(isSubmited){
  return(
  <Modal>
    <p> Data is submited</p>
    <button onClick={submitMessageHandler}> Close </button>
  </Modal>
  )
}

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
    {!closeCheckout && showCheckout && <CheckOut closeCheckOut={checkoutClose} userData={submitOrderHandler}/>}
    {!showCheckout && modalActions}
    </div>
    </Modal>
    </>
)
}

export default Cart