import React,{useState} from "react";

import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./components/Store/CartProvider";


function App() {

let [cartIsShown,setCartIsShown] = useState(false)

let showCartHandler = (data)=>{
  console.log(data,'james')
  setCartIsShown(data)
}

let hideCartHandler = (data)=>{
  setCartIsShown(false)
}

  return (
    <CartProvider>
    {cartIsShown && <Cart close={hideCartHandler}/>}
   <Header show={showCartHandler}/>
   <Meals/>
   </CartProvider>
  );
}

export default App;
