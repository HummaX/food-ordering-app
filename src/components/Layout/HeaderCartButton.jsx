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
  
//   let cartItemNumber = cartCtx.items.reduce((currentNumber,Item)=>{
//     // return currentNumber + Item.amount;
//     return Item.amount + currentNumber
//   },0);

let numberValue =  cartCtx.items.length

  console.log(numberValue,'total amount')

return(
    <>
    <button className={classes.button} onClick={showCart}>
        <span className={classes.icon}>
            <CartIcon/>
        </span>
        <span> Your Cart </span>
        <span className={classes.badge}> {numberValue} </span>
    </button>
    </>
)
}

export default HeaderCartButton