import React,{useRef} from "react"
import Classes from './MealIteamForm.module.css'
import Input from "../UI/Input"

let MealItemForm = (props)=>{

    let dataRef = useRef()

let formListener = (event)=>{
    const enteredAmount = dataRef.current.value;
    const enteredAmountNumber = +enteredAmount;
    event.preventDefault()
    console.log(dataRef.current.value)
    props.onAddToCart(enteredAmountNumber)
    dataRef.current.value  = ''
}

    return(
        <>
        <div className={Classes.form}>
        <form onSubmit={formListener} >
            {/* <input type="text" ref={amountRef}/> */}
            <Input input={{min: 1, type: 'number',value: 1}} Ref={dataRef}/>
            <button>+ Add</button>
        </form>
        </div>
        </>
    )
}

export default MealItemForm