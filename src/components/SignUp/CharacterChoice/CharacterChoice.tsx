import React, { useState } from 'react'
import css from './Choice.module.css';
import logo from '../../../assets/pngwing.com.png'
import yoda from '../../../assets/yoda.png';
import boba from '../../../assets/boba.png'
import darthvader from '../../../assets/darth_vader.png'




export const CharacterChoice = () => {

  const [charPicPath, setCharPicPath] = useState(yoda);
  const [toggleChar, setToggleChar] = useState(true);

  //TODO: anpasse auf passende prev und next bilder!
  const charChoiceHandler = () => {
    
    if(charPicPath === yoda){
      setCharPicPath(boba);
    }else if(charPicPath === boba){
      setCharPicPath(darthvader);
    }else if(charPicPath === darthvader){
      setCharPicPath(yoda);
    }
  }

  const handleTogglePicture = () => {
    setToggleChar(!toggleChar);
    
    if(toggleChar){
      console.log("grünen Rahmen anzeigen")
    }
  }

  

  

  return (
    
    <div className={css.characterChoice}>
      
      <div className={css.top}>
        <div className={css.toptext}>
          <p>Choose your</p>
        </div>
       
       <div className={css.toplogo}>
          <img src={logo} className={css.logoSizing}/>
       </div>

       <div className={css.toptext}>
        <p>Character</p>
       </div>
       
      </div>

      <div className={css.choice}>
        <div className={css.arrowleft} onClick = {() => charChoiceHandler()}></div>
          <div className={`${css.characterDisplay} ${toggleChar ? css.characterDisplayToggle : css.characterDisplay}`} onClick = {() => handleTogglePicture()}>
            <img src={charPicPath} className={css.character_img}/>
          </div>
        <div className={css.arrowright}  onClick = {() => charChoiceHandler()}></div>

      </div>

      <div className={css.footer}>

      </div>
    </div>
    
  )
}
