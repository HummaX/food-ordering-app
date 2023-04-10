import CartContext from "./Cart-Context"
import { useReducer } from "react"

let defaultCartState = {
    items:[],
    totalAmount:0
};

let cartReducer = (state,action)=>{

    if(action.type === 'ADD'){
        // let updateItem = state.items.concat(action.item)
        // Here we will not use push instead we will use concat because push will add new element to array while concat will merge two arrays into new array
        let updatedAmount = state.totalAmount + action.item.price * action.item.amount
        let existingCartItems = state.items.findIndex((item)=> item.id === action.item.id )
        let updatingExistingItem = state.items[existingCartItems]
        
        let updatedItems

        if(updatingExistingItem){
            let updatedItem={
        ...updatingExistingItem,
        amount: updatingExistingItem.amount + action.item.amount
            }
            updatedItems = [...state.items]
            updatedItems[updatingExistingItem] = updatedItem
        }
        else{
            updatedItems = state.items.concat(action.item) // this is updateItem
        }
        return{
            items: updatedItems,
totalAmount: updatedAmount
        }
    }
    if(action.type === 'Remove'){
        state.filter((id => id !== action.id))
    }
}

let CartProvider = (props) =>{

let [cartState,dispatcher] = useReducer(cartReducer,defaultCartState)

    let cartItemRemover = (id) =>{
        dispatcher({type:'REMOVE',id:id})
        console.log(id,'remover id')
    }

    let cartItemAdder = (item) =>{
        dispatcher({type:'ADD',item:item})
    }


    const cartContext = {
        items:cartState.items,
        totalAmount:cartState.totalAmount,
        addItem:cartItemAdder,
        removeItem:cartItemRemover
    }

console.log(defaultCartState,'defaut cart state')
console.log(cartContext,'cart context')
console.log(cartState,'cartState')

    return(
<CartContext.Provider value={cartContext}>
    {props.children}
</CartContext.Provider>
    )
}

export default CartProvider