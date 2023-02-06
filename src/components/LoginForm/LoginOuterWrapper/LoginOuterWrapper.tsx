import React, { useContext } from 'react'
import { LoginForm } from '../Form/LoginForm'
import css from "./LoginOuterWrapperStyle.module.css"
import lightsaber_green from "../../../assets/assets_login_screen/lightsaber_green.png"
import lightsaber_red from "../../../assets/assets_login_screen/lightsaber_red.png"
import { CharacterContext } from '../../../context/CharacterContext'
import Background from '../../../assets/assets_login_screen/bosk1.jpg';

export const LoginFormRework = () => {

  //TODO: FormStyle dynamisch zum background
  const { returnCharacter } = useContext(CharacterContext);
  
  const imgStyles = {
    backgroundImage:`url(${returnCharacter().login_img_path})`,
    height:'100%',
    minHeight: '100vh',
    overflow:'auto',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'
  }


  return (
    <div className={css.outerWrapper} style={imgStyles}>
      <div className={css.saber_left}>
        <img src={lightsaber_green}></img></div>
      <div className={css.login_form}>
        <LoginForm/></div>
      <div className={css.saber_right}>
        <img src={lightsaber_red}></img></div>
    </div>
  )
}
