import React from "react"

let CartContext  = React.createContext(
    {items:[],
    totalAmount:0,
    addItem:((item)=>{}),
    removeItem:((id)=>{}),}
    )

// this will return unDefined because in provider we have given different values, which not defined yet

export default CartContext