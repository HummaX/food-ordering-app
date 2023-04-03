import React from "react"
import mealsImage from '../Assets/meals.jpg'
import HeaderCartButton from "./HeaderCartButton"

import Classes from './Header.module.css'

export default function Header (props){

return(
    <>
    <header className={Classes.header}>
        <h1>
            ReactMeals
        </h1>
        <HeaderCartButton/>
        </header>

        <div className={Classes['main-image']}>
        <img src={mealsImage} alt='a Table Full of Food!'/>
        </div>
    </>
)
}