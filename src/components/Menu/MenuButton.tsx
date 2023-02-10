import React from "react";
import css from "./MenuButton.module.css";
import { Link } from "react-router-dom";

interface MenuButtonProps {
    display: string;
    to: string;
}

export const MenuButton = ({ display, to }: MenuButtonProps) => {
    return (
        <div className={css.style}>
            <Link to={to} className={css.link_style}>
                <div className={css.menu_button}>{display}</div>
            </Link>
        </div>
    );
};
