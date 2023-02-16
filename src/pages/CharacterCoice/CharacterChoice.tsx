import css from "./Choice.module.css";

import { CharacterChoiceDisplay } from "../../components/Character/CharacterChoiceDisplay/CharacterChoiceDisplay";
import { LightDarkSideChoice } from "../../components/Character/LightDarkSideChoice/LightDarkSideChoice";
import { TopLogo } from "../../components/Character/TopLogo/TopLogo";
import { ButtonBox } from "../../components/Character/BottomButtonBox/ButtonBox";
import { useState } from "react";

export const CharacterChoice = () => {

  const [sideChoosen, setSideChoosen] = useState(false)

  return (
    <div className={css.background}>
      <div className={css.charakterbox}>
        <div className={css.charselect}>
          {sideChoosen ?  
          <TopLogo textOverLogo={"Waehle deinen"} textUnderLogo={"Charakter"} /> 
          :  
          <TopLogo textOverLogo={"Waehle deine "} textUnderLogo={"Seite"} />
          }
          {sideChoosen ?   
          <CharacterChoiceDisplay /> :
           <></>
           }

         
          <LightDarkSideChoice setSideChoosen={setSideChoosen}/>
          {sideChoosen ?  <ButtonBox /> : <></>} 
         
        </div>
      </div>

      <div className={css.rest}></div>
    </div>
  );
};
