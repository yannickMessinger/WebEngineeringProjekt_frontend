import React, { useState } from "react";
import css from "./Choice.module.css";



import { CharacterChoice } from "../../components/SignUp/CharacterChoiceDisplay/CharacterChoiceDisplay";
import { SideChoice } from "../../components/SignUp/SideChoice/SideChoice";
import { TopLogo } from "../../components/SignUp/TopLogo/TopLogo";
import { ButtonBox } from "../../components/SignUp/BottomButtonBox/ButtonBox";

export const CharacterChoiceNew = () => {
 

 

  return (
    <div className={css.background}>
      <div className={css.charakterbox}>
        <div className={css.charselect}>
          <div>
            <TopLogo></TopLogo>
          </div>

          <div >
            <SideChoice></SideChoice>
          </div>

          <div>
            <CharacterChoice></CharacterChoice>
          </div>

          <div>
            <ButtonBox></ButtonBox>
          </div>
        </div>
      </div>

      <div className={css.rest}></div>
    </div>
  );
};
