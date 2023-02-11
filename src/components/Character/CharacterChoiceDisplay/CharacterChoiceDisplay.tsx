import React, { useContext, useState } from "react";
import css from "./CharacterChoiceDisplay.module.css";
import { CharacterStylingContext } from "../../../context/CharacterStylingContext";
import { CharacterPicture } from "../CharacterPicture/CharacterPicture";


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
        <CharacterPicture
          name={currentChar!.name}
          img_path={currentChar!.img_path}
        />
      </div>
      <div
        className={css.arrowright}
        onClick={() => charChoiceHandlerNext()}
      ></div>
    </div>
  );
};
