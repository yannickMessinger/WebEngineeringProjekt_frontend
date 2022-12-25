import React from "react";
import css from "./Menu.module.css";
import { MenuButton } from "./MenuButton";

export const Menu = () => {
    return (
        <div className={css.menubox}>
        <MenuButton display={"quiz"} to={"/quiz"} />
        <MenuButton display={"Wetter"} to={"/weather"} />
      </div>
    )
}
