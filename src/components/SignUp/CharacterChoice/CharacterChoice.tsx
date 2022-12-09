import React from 'react'
import css from './Choice.module.css';
import logo from '../../../assets/pngwing.com.png'
import yoda from '../../../assets/yoda.png';


export const CharacterChoice = () => {
  return (
    
    <div className={css.characterChoice}>
      
      <div className={css.top}>
        <img src={logo} className={css.logo}/>
      </div>

      <div className={css.choice}>
        <div className={css.arrowleft}></div>
          <div className={css.characterDisplay}>
            <img src={yoda} className={css.character_img}/>
          </div>
        <div className={css.arrowright}></div>

      </div>

      <div className={css.footer}>

      </div>
    </div>
    
  )
}
