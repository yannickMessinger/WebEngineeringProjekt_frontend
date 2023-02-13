import React, { useContext } from 'react'
import { CharacterStylingContext } from '../../context/CharacterStylingContext'
import { PlanetInfo } from '../../typings/IPlanetInfo'
import { PictureFrame } from '../LoginForm/Form/LoginPictureFrame/PictureFrame'
import css from "./PlanetInfoCardStyle.module.css"

//InfoCards in eine gesamte Komponente transformieren

//Planetenbilder raussuchen
interface PlanetInfoCardProps{
  info: PlanetInfo | undefined
}


export const PlanetInfoCard = ({info}: PlanetInfoCardProps) => {
  const {currentChar} = useContext(CharacterStylingContext);
  return (
    <div className={css.planetInfoWrapper}>
      <div className={css.header}>planetinfo</div>
      <div className={css.planet_pic}><PictureFrame img_path={currentChar?.planet_img_path!}/></div>
      <div className={css.name}>Name: {info?.name}</div>
      <div className={css.diameter}>diameter: {info?.diameter}</div>
      <div className={css.gravity}>Gravity: {info?.gravity}</div>
      <div className={css.climate}>climate: {info?.climate}</div>
      <div className={css.population}>population: {info?.population}</div>
      <div className={css.terrain}>terrain: {info?.terrain}</div>
    </div>
  )
}
