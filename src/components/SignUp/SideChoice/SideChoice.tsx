import React, { useContext } from 'react'
import css from "./SideChoice.module.css";

import rebel_logo from "../../../assets/rebel_logo.png";
import empire_logo from "../../../assets/empire_logo.png";
import { CharacterContext } from '../../../context/CharacterContext';
import { ChooseSide } from '../../ChooseSide/ChooseSide';
import {side} from "../../../typings/ESide"

export const SideChoice = () => {


  
 

  return (
    
    <div>
        <div className={css.switchtheme}>
            <ChooseSide logopath={rebel_logo} className={css.rebelLogo} side={side.LIGHT}/>
            <ChooseSide logopath={empire_logo} className={css.empireLogo} side={side.DARK}/>
          </div>
    </div>
  )
}
