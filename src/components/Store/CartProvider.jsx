import CartContext from "./Cart-Context"
import { useReducer } from "react"

let defaultCartState = [{
    items:[],
    totalAmount:0
}]

let cartReducer = (state,action)=>{
    if(action.type === 'ADD'){
        let updateData = state.items.push(action.payload.item)
        let updatedAmount = state.totalAmount + action.item.price * action.item.amount
        return{
            items: updateData,
totalAmount: updatedAmount
        }
    }
    if(action.type === 'Remove'){
        state.filter((id => id !== action.payload.id))
    }
}

let CartProvider = (props) =>{

let [cartState,dispatcher] = useReducer(cartReducer,defaultCartState)

    let cartItemRemover = (id) =>{
        dispatcher({type:'REMOVE',payload:{id:id}})
    }

    let cartItemAdder = (item) =>{
        dispatcher({type:'ADD',payload:{item:item}})
    }


    let cartContext ={
        items:cartState.items,
        totalAmount:cartState.amount,
        addItem:cartItemAdder,
        removeItem:cartItemRemover
    }
    return(
<CartContext.Provider value={cartContext}>
    {props.children}
</CartContext.Provider>
    )
}

export default CartProvider