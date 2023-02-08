import React from 'react'
import css from "./CharInfoTransitionScreenStyle.module.css"
import xwing from "../../assets/xwing.png"

export const CharInfoTransisitonScreen = () => {
  return (
    <div className={css.backgroundimg}>
      <div className={css.xwing}>
          <img src={xwing} width='50px' height='50px'/>
      </div>
    </div>
  )
}
