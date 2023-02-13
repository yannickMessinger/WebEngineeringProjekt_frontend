import React, { useContext } from 'react'
import css from "./SideChoice.module.css";

import rebel_logo from "../../../assets/assets_characterChoice/rebel_logo.png";
import empire_logo from "../../../assets/assets_characterChoice/empire_logo.png";
import { CharacterStylingContext } from '../../../context/CharacterStylingContext';
import { SideImageButton} from './SideImageButton/SideImageButton';
import {side} from "../../../typings/ESide"

export const LightDarkSideChoice = () => {

  const {setDarkCharacters,setLightCharacters} = useContext(CharacterStylingContext);
  
 

  return (
    
    
        <div className={css.switchtheme}>
            <SideImageButton logopath={rebel_logo} className={css.rebelLogo} side={side.LIGHT} setSide={setLightCharacters}/>
            <SideImageButton logopath={empire_logo} className={css.empireLogo} side={side.DARK} setSide={setDarkCharacters}/>
          </div>
    
  )
}
