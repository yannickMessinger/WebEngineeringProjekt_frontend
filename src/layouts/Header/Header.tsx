import React, { useContext } from "react";
import logo from "../../assets/assets_characterChoice/star_wars_logo.png";
import css from "./Header.module.css";
import { useNavigate } from "react-router";
import { LoginContext } from "../../context/LoginContext";

export const Header = () => {
    const navigate = useNavigate();
    const { isLoggedIn } = useContext(LoginContext);
    if (!isLoggedIn) {
        return <></>;
    }
    return (
        <div className={css.style}>
            <img
                onClick={() => navigate("/")}
                src={logo}
                className={css.logo}
            />
        </div>
    );
};
