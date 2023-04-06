import React from 'react'
import classes from './Input.module.css'



let Input = React.forwardRef((props,ref)=>{

return(
    <>
   <div className={classes.input}>
    <label> Amount: </label>
        <input type={props.input.type}  ref={props.dataRef}/>
   </div>
    </>
)
})

export default Input