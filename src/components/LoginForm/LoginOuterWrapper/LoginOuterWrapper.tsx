import React from 'react'
import { LoginForm } from '../Form/LoginForm'
import css from "./LoginOuterWrapperStyle.module.css"
import lightsaber_green from "../../../assets/assets_login_screen/lightsaber_green.png"
import lightsaber_red from "../../../assets/assets_login_screen/lightsaber_red.png"

export const LoginFormRework = () => {

  //div für button noch?

  return (
    <div className={css.outerWrapper}>
      <div className={css.saber_left}>
        <img src={lightsaber_green}></img></div>
      <div className={css.login_form}>
        <LoginForm/></div>
      <div className={css.saber_right}>
        <img src={lightsaber_red}></img></div>
    </div>
  )
}
