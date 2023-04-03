import React,{useRef,useState} from "react"

let MealItemForm = ()=>{


let formListener = (event)=>{
    event.preventDefault()
    console.log(amountRef.current.value)
}


let amountRef = useRef()

    return(
        <>
        <form onSubmit={formListener}>
            <input type="text" ref={amountRef}/>
            <button> +Add </button>
        </form>
        </>
    )
}

export default MealItemForm