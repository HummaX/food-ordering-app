import CartContext from '../Store/Cart-Context'
import { useContext } from 'react'
import classes from './MealItem.module.css'
import MealItemForm from './MealItemForm'

let MealItem = (props)=>{

    let amountCtx = useContext(CartContext) 
    let price = props.price.toFixed(2) // to show only 2 digits after decimal

    let AddToCartHandler = (amount)=>{
        console.log(amount,'amount')
amountCtx.addItem({
    id:props.id,
    name:props.name,
    amount:amount,
    price:props.price
})
    }

 
    return(
        <>
        <li className={classes.meal}>
            <div>
            <h3> {props.name} </h3>
            <div className={classes.description}>
                {props.description}
            </div>
            <div className={classes.price}>
                ${price}
            </div>
            </div>
            <div>
                <MealItemForm onAddToCart={AddToCartHandler}/>
            </div>
        </li>
        </>
    )
}

export default MealItem