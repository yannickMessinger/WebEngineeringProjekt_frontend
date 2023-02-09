import React from "react";
import logo from "../../assets/star_wars_logo.png";
import css from "./Header.module.css";

export const Header = () => {
    return (
        <div className={css.style}>
            <img src={logo} className={css.logo}/>
        </div>
    )
}