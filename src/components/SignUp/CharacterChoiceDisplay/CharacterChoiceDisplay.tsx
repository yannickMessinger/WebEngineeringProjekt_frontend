import React, { useContext, useState } from "react";
import css from "./CharacterChoice.module.css";
import { CharacterContext } from "../../../context/CharacterContext";

import yoda from "../../../assets/yoda_fly.png";
import boba from "../../../assets/boba.png";
import darthvader from "../../../assets/darth_vader.png";
import { Character } from "../Character/Character";


export const CharacterChoice = () => {
  const { charChoiceHandlerNext, charChoiceHandlerPrev, returnCharacter } = useContext(CharacterContext);
  
  const [toggleChar, setToggleChar] = useState(false);

  const handleTogglePicture = () => {
    setToggleChar(!toggleChar);

    if (toggleChar) {
      console.log("grünen Rahmen anzeigen");
    }
  };

  return (
    <div className={css.choosechar}>
      <div
        className={css.arrowleft}
        onClick={() => charChoiceHandlerPrev()}
      ></div>
      <div
        className={`${css.characterDisplay} ${
          toggleChar ? css.characterDisplayToggle : css.characterDisplay
        }`}
        onClick={() => handleTogglePicture()}
      >
        <Character
          swapi_id={returnCharacter().swapi_id}
          name={returnCharacter().name}
          img_path={returnCharacter().img_path}
        />
      </div>
      <div
        className={css.arrowright}
        onClick={() => charChoiceHandlerNext()}
      ></div>
    </div>
  );
};
