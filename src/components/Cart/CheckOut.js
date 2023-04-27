import classes from './Checkout.module.css'
import { useRef } from 'react'

let isEmpty = (value) =>{
    return value.trim().length !== ''
}

let isHavingFiveCharacters = (value) => {
    return value.trim().length <= 5 
}

let CheckOut = (props)=>{

// Start of Refs
let fullNameRef= useRef('')
let addressRef= useRef('')
let postalRef= useRef('')
let cityRef= useRef('')

    let checkOutClose =()=>{
        props.closeCheckOut(true) 
    }

    let fromEventListener = (event)=>{
        event.preventDefault()
        let fullName = fullNameRef.current.value
        let address = addressRef.current.value
        let postalCode = postalRef.current.value
        let cityName = cityRef.current.value

        isEmpty(fullName,address,postalCode,cityName)
        isHavingFiveCharacters(fullName,address,postalCode,cityName)

        console.log('form is working ')
    }



return(
    <div className={classes.form}>
        <form className={classes.control} onSubmit={fromEventListener}>
            <label for='fullName'>Your Name</label>
            <input type='text' id='fullName' ref={fullNameRef}></input>

            <label htmlFor='Address'> Street Address </label>
            <input type='text' id='Address' ref={addressRef}></input>

            <label htmlFor='postal'>Postal Code</label>
            <input type='number' id='postal' ref={postalRef}></input>

            <label htmlFor='city'> City </label>
            <input type='text' id='city' ref={cityRef}></input>

            <div className={classes.actions}>
                <button type='button' onClick={checkOutClose}> Cancel </button>
 <button> Confirm </button>
 </div>
 {isEmpty && isHavingFiveCharacters && <p> Please Enter Complete Details </p>}
        </form>
    </div>
)
}

export default CheckOut;