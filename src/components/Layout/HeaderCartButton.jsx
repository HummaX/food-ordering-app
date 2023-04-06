import { useContext } from "react"
import CartIcon from "../Cart/CartIcon"
import classes from './HeaderCartButton.module.css'
import CartContext from "../Store/Cart-Context"

let HeaderCartButton =(props)=>{
    let showCart=()=>{
     props.show(true)
    }

  let cartCtx = useContext(CartContext)
  let cartItemNumber = cartCtx.items.reduce((currentNumber, Item)=>{
    return currentNumber + Item.amount;
  },0);
    
return(
    <>
    <button className={classes.button} onClick={showCart}>
        <span className={classes.icon}>
            <CartIcon/>
        </span>
        <span> Your Cart </span>
        <span className={classes.badge}> {1} </span>
    </button>
    </>
)
}

export default HeaderCartButton