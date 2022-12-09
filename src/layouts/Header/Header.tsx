import React from "react";
import logo from "../../assets/star_wars_logo.png";
import css from "./Header.module.css";

export const Header = () => {
    return (
        <>
            <img src={logo} className={css.logo}/>
        </>
    )
}