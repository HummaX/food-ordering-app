import { useContext } from "react"
import CartIcon from "../Cart/CartIcon"
import classes from './HeaderCartButton.module.css'
import CartContext from "../Store/Cart-Context"

let HeaderCartButton =(props)=>{
    let showCart=()=>{
     props.show(true)
    }

  // this will return unDefined because in provider we have given different values, which not defined yet

  let cartCtx = useContext(CartContext)
  
  // let cartItemNumber = cartCtx.items.reduce((currentNumber,Item)=>{
  //   return currentNumber + Item.amount;
  // }, 0);

  let data = 0
  let cartItemNumber = cartCtx.items.map((item)=>{
    return data += item.amount
  })


return(
    <>
    <button className={classes.button} onClick={showCart}>
        <span className={classes.icon}>
            <CartIcon/>
        </span>
        <span> Your Cart </span>
        <span className={classes.badge}> {cartItemNumber} </span>
    </button>
    </>
)
}

export default HeaderCartButton