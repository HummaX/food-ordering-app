import classes from './Checkout.module.css'
import { useRef,useState } from 'react'

// let isEmpty = (value => value.trim() === '')
let isEmpty = (value) =>{
    return value.trim() === ''
}

let isHavingFiveCharacters = (postalCode) => {
    return postalCode.trim().length !== 5
}

let CheckOut = (props)=>{

let [formValidity,setFormValidity] = useState({
    fullName:true,
    address:true,
    postalCode:true,
    cityName:true
})

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

       let  nameIsValid = !isEmpty(fullName)
       let addressIsValid = !isEmpty(address)
       let cityNameIsValid = !isEmpty(cityName)
       let postalCodeIsValid = !isHavingFiveCharacters(postalCode)

        let formIsValid = nameIsValid && addressIsValid && cityNameIsValid && postalCodeIsValid

        setFormValidity({
            fullName:nameIsValid,
            address:addressIsValid,
            postalCode:postalCodeIsValid,
            cityName:cityNameIsValid
        })

        if(!formIsValid){
         return
        }

props.userData({
    name:fullName,
    address:address,
    postalCode:postalCode,
    cityName:cityName
})
fullNameRef.current.value=''
postalRef.current.value=''
cityRef.current.value = ''
addressRef.current.value = ''
    }

    let nameControlClasses = `${classes.control} ${formValidity.fullName ? '' : classes.invalid}`
    let addressControlClass = `${classes.control} ${formValidity.address ? '' : classes.invalid} `
    let postalCodeControlClass = `${classes.control} ${formValidity.postalCode ? '' : classes.invalid}`
    let cityControClass = `${classes.control} ${formValidity.cityName ? '' : classes.invalid}`
return(
    <form className={classes.from} onSubmit={fromEventListener}>

    {/* <div className={`${classes.control} ${formValidity.fullName ? '' : classes.invalid}`}> */}
    <div className={nameControlClasses}>
    <label for='fullName'>Your Name</label>
                <input type='text' id='fullName' ref={fullNameRef} ></input>
                {!formValidity.fullName && <p> Please Enter a valid Name </p>}
    </div>
    
    {/* <div className={`${classes.control} ${formValidity.address ? '' : classes.invalid}`}> */}
    <div className={addressControlClass}>
    <label htmlFor='Address'> Street Address </label>
                <input type='text' id='Address' ref={addressRef}></input>
                {!formValidity.address && <p> Please Enter a valid Address </p>}
    </div>
                
    {/* <div className={`${classes.control} ${formValidity.postalCode ? '' : classes.invalid}`}> */}
    <div className={postalCodeControlClass}>
      <label htmlFor='postal'>Postal Code</label>
                <input type='number' id='postal' ref={postalRef}></input>
                {!formValidity.postalCode && <p> Please Enter a valid Postal code </p>}  
    </div>
                
     {/* <div className={`${classes.control} ${formValidity.cityName ? '' : classes.invalid}`}> */}
     <div className={cityControClass}>
      <label htmlFor='city'> City </label>
                <input type='text' id='city' ref={cityRef}></input>
                {!formValidity.cityName && <p> Please Enter a valid city name </p>}   
    </div>
    
                <div className={classes.actions}>
                    <button type='button' onClick={checkOutClose}> Cancel </button>
     <button> Confirm </button>
     </div>
            </form>
)
}

export default CheckOut;
