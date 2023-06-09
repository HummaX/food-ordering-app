import classes from './Modal.module.css'

let Modal = (props)=>{
return(
    <>
    <div className={classes.backdrop}></div>
    <div className={classes.modal}>{props.children}</div>
    </>
)
}

export default Modal