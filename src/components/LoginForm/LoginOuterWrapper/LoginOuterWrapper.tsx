import React from 'react'
import { LoginForm } from '../Form/LoginForm'
import css from "./LoginOuterWrapperStyle.module.css"

export const LoginFormRework = () => {

  //div für button noch?

  return (
    <div className={css.outerWrapper}>
      <div className={css.saber_left}>
        Lightsaberleft</div>
      <div className={css.login_form}>
        <LoginForm/></div>
      <div className={css.saber_right}>
        Lightsaberright</div>
    </div>
  )
}
