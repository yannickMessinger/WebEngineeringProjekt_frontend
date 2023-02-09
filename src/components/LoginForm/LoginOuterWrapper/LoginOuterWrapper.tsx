import React, { useContext } from 'react'
import { LoginForm } from '../Form/LoginForm'
import css from "./LoginOuterWrapperStyle.module.css"
import lightsaber_green from "../../../assets/assets_login_screen/lightsaber_green.png"
import lightsaber_red from "../../../assets/assets_login_screen/lightsaber_red.png"
import { CharacterStylingContext } from '../../../context/CharacterStylingContext'


export const LoginFormRework = () => {

  //TODO: Background bilde vllt noch verbessern / anpassen
  //TODO: Farbverlauf weiter nach unten um Schirft besser lesbar zu machen
  //TODO: Schriftfarbe bei hellen Hintergründen mit mehr Kontrast auf dunkel setzen
  
  //Transition Screen mit Übergang zur Info Seite
  const { returnCharacter } = useContext(CharacterStylingContext);
  
  const imgStyles = {
    backgroundImage:`url(${returnCharacter().login_img_path})`,
    height:'100%',
    minHeight: '100vh',
    overflow:'auto',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'
  }

//hier auch noch style variabel durchgeben je nach character
  return (
    <div className={css.outerWrapper} style={imgStyles}>
      <div className={css.saber_left}>
        <img src={lightsaber_green}></img></div>
      <div className={css.login_form}>
        <LoginForm loginFormStyle={returnCharacter().loginStyle!} /></div>
      <div className={css.saber_right}>
        <img src={lightsaber_red}></img></div>
    </div>
  )
}
