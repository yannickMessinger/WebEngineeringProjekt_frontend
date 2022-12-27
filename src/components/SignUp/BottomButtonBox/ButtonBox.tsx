import React from 'react'
import { useSWAPI } from '../../../hooks/useSWAPI';
import css from "./ButtonBoxStyle.module.css";

export const ButtonBox = () => {

  const {fetchCharInfo} = useSWAPI();

  return (
    <div className={css.buttonbox}>
    <button className={css.startbutton} onClick = {() => {fetchCharInfo()}}>GO</button>
  </div>
  )
}
