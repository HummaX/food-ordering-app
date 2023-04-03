import Classes from './Card.module.css'

let  Card = (props) => {
    // let cardClasses = Classes.card + props.className

    return(
        <div className={Classes.card}>
{props.children}
        </div>
    )
}

export default Card