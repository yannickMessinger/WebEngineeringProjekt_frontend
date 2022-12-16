import React, { useState } from "react";
import css from "./Choicenew.module.css";
import hyperspace from "../../assets/hyperspace.jpg";
import logo from "../../assets/logo_no_back.png";

import yoda from "../../assets/yoda.png";
import boba from "../../assets/boba.png";
import darthvader from "../../assets/darth_vader.png";

export const CharacterChoiceNew = () => {
  const [charPicPath, setCharPicPath] = useState(yoda);
  const [toggleChar, setToggleChar] = useState(false);

  //TODO: anpasse auf passende prev und next bilder!
  const charChoiceHandler = () => {
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
    <div className={css.background}>
      <div className={css.charakterbox}>
        <div className={css.charselect}>
          
          <div className={css.logo}>
          <div className={css.toptext}>
          <p>Choose your</p>
        </div>


            <img src={logo} className={css.logoSizing}></img>
            <div className={css.toptext}>
        
        <p>Character</p>
       </div>


          </div>


          <div className={css.switchtheme}>switch</div>
          
          <div className={css.choosechar}>
            
              <div
                className={css.arrowleft}
                onClick={() => charChoiceHandler()}
              ></div>
              <div
                className={`${css.characterDisplay} ${
                  toggleChar ? css.characterDisplayToggle : css.characterDisplay
                }`}
                onClick={() => handleTogglePicture()}
              >
                <img src={charPicPath} className={css.character_img} />
              </div>
              <div
                className={css.arrowright}
                onClick={() => charChoiceHandler()}
              ></div>
            
          </div>
          <div className={css.buttonbox}>button</div>
        </div>
      </div>

      <div className={css.rest}></div>
    </div>
  );
};
