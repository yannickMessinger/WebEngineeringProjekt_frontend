import { Dispatch, SetStateAction, useContext } from 'react'
import css from "./SideChoice.module.css";

import rebel_logo from "../../../assets/assets_characterChoice/logo_blue.png";
import empire_logo from "../../../assets/assets_characterChoice/empire_logo.png";
import { CharacterStylingContext } from '../../../context/CharacterStylingContext';
import { SideImageButton} from './SideImageButton/SideImageButton';
import {side} from "../../../typings/ESide"

interface LightDarkSideChoiceProps {
  setSideChoosen:  Dispatch<SetStateAction<boolean>>
}

export const LightDarkSideChoice = ({setSideChoosen} : LightDarkSideChoiceProps) => {

  const {setDarkCharacters,setLightCharacters} = useContext(CharacterStylingContext);
  
 

  return (
    
    
        <div className={css.switchtheme}>
            <SideImageButton logopath={rebel_logo} className={css.rebelLogo} side={side.LIGHT} setSide={setLightCharacters} altTitle={'rebel_logo'} setSideChoosen={setSideChoosen}/>
            <SideImageButton logopath={empire_logo} className={css.empireLogo} side={side.DARK} setSide={setDarkCharacters} altTitle={'empire_logo'} setSideChoosen={setSideChoosen}/>
          </div>
    
  )
}
