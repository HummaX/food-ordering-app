import React,{useRef} from "react"
import Classes from './MealIteamForm.module.css'
import Input from "../UI/Input"

let MealItemForm = ()=>{


let formListener = (event)=>{
    event.preventDefault()
    console.log(amountRef.current.value)
}

let amountRef = useRef(10)

    return(
        <>
        <div className={Classes.form}>
        <form onSubmit={formListener} >
            {/* <input type="text" ref={amountRef}/> */}
            <Input/>
            <button>+ Add</button>
        </form>
        </div>
        </>
    )
}

export default MealItemForm