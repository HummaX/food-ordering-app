import React,{useRef} from "react"
import Classes from './MealIteamForm.module.css'

let MealItemForm = ()=>{


let formListener = (event)=>{
    event.preventDefault()
    console.log(amountRef.current.value)
}


let amountRef = useRef()
    return(
        <>
        <div className={Classes.form}>
        <form onSubmit={formListener} >
            <input type="text" ref={amountRef}/>
            <button> +Add </button>
        </form>
        </div>
        </>
    )
}

export default MealItemForm