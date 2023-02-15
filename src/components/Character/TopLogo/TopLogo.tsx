import React from "react";
import css from "./TopLogo.module.css";
import logo from "../../../assets/assets_characterChoice/logo_no_back.png";

export const TopLogo = () => {
  return (
    <div className={css.logo}>
      <div className={css.toptext}>
        <p>Waehle deinen</p>
      </div>

      <div className={css.logoWrapper}>
        <img src={logo} className={css.logoSizing} alt={'StarWarsLogo'}/>
      </div>

      <div className={css.toptext}>
        <p>Character</p>
      </div>
    </div>
  );
};
