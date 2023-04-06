import classes from './Modal.module.css'

let Modal = (props)=>{
    let hideModal =()=>{
        props.close(false)
    }
return(
    <>
    <div className={classes.backdrop} onClick={hideModal}></div>
    <div className={classes.modal} onClick={hideModal}>{props.children}</div>
    </>
)
}

export default Modal