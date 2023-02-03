import React from 'react'
import { Link } from 'react-router-dom';
import { useSWAPI } from '../../../hooks/useSWAPI';
import css from "./ButtonBoxStyle.module.css";

export const ButtonBox = () => {

  const {fetchCharInfo} = useSWAPI();

  return (
    <div className={css.buttonbox}>
    <Link to={`/charinfo`}><button className={css.startbutton} onClick = {() => {fetchCharInfo()}}>GO</button></Link>
  </div>
  )
}
