import React, { useState } from "react";
import css from "./Choice.module.css";



import { CharacterChoiceDisplay } from "../../components/Character/CharacterChoiceDisplay/CharacterChoiceDisplay";
import { LightDarkSideChoice} from "../../components/Character/LightDarkSideChoice/LightDarkSideChoice";
import { TopLogo } from "../../components/Character/TopLogo/TopLogo";
import { ButtonBox } from "../../components/Character/BottomButtonBox/ButtonBox";

export const CharacterChoice = () => {
 

 

  return (
    <div className={css.background}>
      <div className={css.charakterbox}>
        <div className={css.charselect}>
          <div>
            <TopLogo/>
          </div>

          <div >
            <LightDarkSideChoice/>
          </div>

          <div>
            <CharacterChoiceDisplay/>
          </div>

          <div>
            <ButtonBox/>
          </div>
        </div>
      </div>

      <div className={css.rest}></div>
    </div>
  );
};
