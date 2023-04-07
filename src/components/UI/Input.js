import React from 'react'
import classes from './Input.module.css'



let Input = (props)=>{

return(
    <>
   <div className={classes.input}>
    <label> Amount: </label>
        <input type={props.input.type}  ref={props.Ref}/>
   </div>
    </>
)
}

export default Input