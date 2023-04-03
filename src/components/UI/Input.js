import classes from './Input.module.css'


let Input = ()=>{
return(
    <>
   <div className={classes.input}>
    <label> Amount: </label>
        <input type='text'/>
   </div>
    </>
)
}

export default Input