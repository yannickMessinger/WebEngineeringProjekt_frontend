import React, { useContext, useState } from "react";
import css from "./CharacterChoiceDisplay.module.css";
import { CharacterStylingContext } from "../../../context/CharacterStylingContext";



export const CharacterChoiceDisplay= () => {
  const { charChoiceHandlerNext, charChoiceHandlerPrev,currentChar} = useContext(CharacterStylingContext);
  
  

  

  return (
    <div className={css.choosechar}>
      <div
        className={css.arrowleft}
        onClick={() => charChoiceHandlerPrev()}
      ></div>
      <div
        className={`${css.characterDisplay}`}
        
      >
         <img src={currentChar.img_path} className={css.character_img} ></img>
      </div>
      <div
        className={css.arrowright}
        onClick={() => charChoiceHandlerNext()}
      ></div>
    </div>
  );
};
