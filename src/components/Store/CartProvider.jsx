import CartContext from "./Cart-Context"
import { useReducer } from "react"

let defaultCartState = {
    items:[],
    totalAmount:0
};

const cartReducer = (state, action) => {
    if (action.type === 'ADD') {
      const updatedTotalAmount =
        state.totalAmount + action.item.price * action.item.amount;
  
      const existingCartItemIndex = state.items.findIndex(
        (item) => item.id === action.item.id
      );
      const existingCartItem = state.items[existingCartItemIndex];
      let updatedItems;
  
      if (existingCartItem) {
        const updatedItem = {
          ...existingCartItem,
          amount: existingCartItem.amount + action.item.amount,
        };
        updatedItems = [...state.items];
        updatedItems[existingCartItemIndex] = updatedItem;
      } else {
        updatedItems = state.items.concat(action.item);
        // Here we will not use push instead we will use concat because push will add new element to array while concat will merge two arrays into new array
      }
  
      return {
        items: updatedItems,
        totalAmount: updatedTotalAmount,
      };
    }
    if (action.type === 'REMOVE') {
      const existingCartItemIndex = state.items.findIndex(
        (item) => item.id === action.id
      );
      const existingItem = state.items[existingCartItemIndex];
      const updatedTotalAmount = state.totalAmount - existingItem.price;
      let updatedItems;
      if (existingItem.amount === 1) {
        updatedItems = state.items.filter(item => item.id !== action.id);
      } else {
        const updatedItem = { ...existingItem, amount: existingItem.amount - 1 };
        updatedItems = [...state.items];
        updatedItems[existingCartItemIndex] = updatedItem;
      }
  
      return {
        items: updatedItems,
        totalAmount: updatedTotalAmount
      };
    }

  if (action.type = 'CLEAR'){
    return defaultCartState
  }
    return defaultCartState;
  };
  

let CartProvider = (props) =>{

let [cartState,dispatcher] = useReducer(cartReducer,defaultCartState)

    let cartItemRemover = (id) =>{
        dispatcher({type:'REMOVE',id:id})
        console.log(id,'remover id')
    }

    let cartItemAdder = (item) =>{
        dispatcher({type:'ADD',item:item})
    }

    let clearCartHandler = ()=>{
      dispatcher({type:'CLEAR'})
    }

    const cartContext = {
        items:cartState.items,
        totalAmount:cartState.totalAmount,
        addItem:cartItemAdder,
        removeItem:cartItemRemover,
        clearCart:clearCartHandler
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