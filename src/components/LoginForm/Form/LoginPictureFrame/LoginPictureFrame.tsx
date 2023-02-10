
import React from 'react'
import css from "./LoginPictureFrameStyle.module.css"


interface LoginPictureFrameProps{
    img_path: string
}

export const LoginPictureFrame = ({img_path}:LoginPictureFrameProps) => {
  return (
    <div className={css.frame}>
        <img src={img_path} className={css.login_character_img}></img>
    </div>
  )
}
