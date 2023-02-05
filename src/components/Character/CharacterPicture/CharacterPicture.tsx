import React from 'react'
import css from "./Characterstyle.module.css";
import { ICharacter } from "../../../typings/ICharacter"





export const Character = ({img_path}:ICharacter) => {
  return (
    <div className={css.imageWrapper}>
      <img src={img_path} className={css.character_img} ></img>
    </div>
  )
}
