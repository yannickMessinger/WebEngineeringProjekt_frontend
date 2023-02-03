import React, { useContext } from 'react'
import css from "./SideChoice.module.css";

import rebel_logo from "../../../assets/rebel_logo.png";
import empire_logo from "../../../assets/empire_logo.png";
import { CharacterContext } from '../../../context/CharacterContext';
import { SideImageButton} from '../../ChooseSide/SideImageButton';
import {side} from "../../../typings/ESide"

export const SideChoice = () => {

  const {setDarkCharacters,setLightCharacters} = useContext(CharacterContext);
  
 

  return (
    
    <div>
        <div className={css.switchtheme}>
            <SideImageButton logopath={rebel_logo} className={css.rebelLogo} side={side.LIGHT} setSide={setLightCharacters}/>
            <SideImageButton logopath={empire_logo} className={css.empireLogo} side={side.DARK} setSide={setDarkCharacters}/>
          </div>
    </div>
  )
}
