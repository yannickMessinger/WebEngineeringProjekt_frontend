import React from "react";
import logo from "../../assets/star_wars_logo.png";
import css from "./Header.module.css";
import { useNavigate } from "react-router";

export const Header = () => {
    const navigate = useNavigate();
    return (
        <div className={css.style} onClick={() => navigate("/")}>
            <img src={logo} className={css.logo} />
        </div>
    );
};
