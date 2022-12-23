import React, { useState } from "react";
import css from "./CharacterChoice.module.css";

import yoda from "../../../assets/yoda_fly.png";
import boba from "../../../assets/boba.png";
import darthvader from "../../../assets/darth_vader.png";


export const CharacterChoice = () => {
  const [charPicPath, setCharPicPath] = useState(yoda);
  const [toggleChar, setToggleChar] = useState(false);

  const charChoiceHandler = () => {
    console.log("choice");
    if (charPicPath === yoda) {
      setCharPicPath(boba);
    } else if (charPicPath === boba) {
      setCharPicPath(darthvader);
    } else if (charPicPath === darthvader) {
      setCharPicPath(yoda);
    }
  };

  const handleTogglePicture = () => {
    setToggleChar(!toggleChar);

    if (toggleChar) {
      console.log("grünen Rahmen anzeigen");
    }
  };

  return (
    <div className={css.choosechar}>
      <div className={css.arrowleft} onClick={() => charChoiceHandler()}></div>
      <div
        className={`${css.characterDisplay} ${
          toggleChar ? css.characterDisplayToggle : css.characterDisplay
        }`}
        onClick={() => handleTogglePicture()}
      >
        <img src={charPicPath} className={css.character_img} />
      </div>
      <div className={css.arrowright} onClick={() => charChoiceHandler()}></div>
    </div>
  );
};
