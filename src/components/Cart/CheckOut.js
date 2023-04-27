import classes from './Checkout.module.css'

let CheckOut = ()=>{

return(
    <div className={classes.from}>
        <form className={classes.control}>
            <label for='fullName'> Enter Your Full Name </label>
            <input type='text' id='fullName'></input>

            <label htmlFor='Address'> Street Address </label>
            <input type='text' id='Address'></input>

            <label htmlFor='secondAddress'> Street Address 2 </label>
            <input type='text' id='secondAddress'></input>

            <label htmlFor='city'> City </label>
            <input type='text' id='city'></input>

            <label htmlFor='state'> State/Province </label>
            <input type='text' id='state'></input>
        </form>
    </div>
)
}

export default CheckOut;