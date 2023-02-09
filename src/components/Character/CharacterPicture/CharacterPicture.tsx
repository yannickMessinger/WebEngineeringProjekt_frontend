import React from 'react'
import css from "./Characterstyle.module.css";
import { Character } from "../../../typings/ICharacter"





export const CharacterPicture = ({img_path}:Character) => {
  return (
    <div className={css.imageWrapper}>
      <img src={img_path} className={css.character_img} ></img>
    </div>
  )
}
