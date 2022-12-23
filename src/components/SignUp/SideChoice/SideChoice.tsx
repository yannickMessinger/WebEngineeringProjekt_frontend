import React from 'react'
import css from "./SideChoice.module.css";

import rebel_logo from "../../../assets/rebel_logo.png";
import empire_logo from "../../../assets/empire_logo.png";

export const SideChoice = () => {
  return (
    
    <div>
        <div className={css.switchtheme}>
            <img src={rebel_logo} className={css.rebelLogo} />
            <img src={empire_logo} className={css.empireLogo} />
          </div>
    </div>
  )
}
