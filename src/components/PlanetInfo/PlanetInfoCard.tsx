import React, { useContext, useEffect, useRef } from 'react'
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

  const planetInfoWrapper = useRef<HTMLInputElement>(null);

  useEffect(() => {
    planetInfoWrapper.current?.style.setProperty("--color", `rgba(${currentChar?.charInfoFrameColor!.r},${currentChar?.charInfoFrameColor!.g},${currentChar?.charInfoFrameColor!.b},${currentChar?.charInfoFrameColor!.a})`);
  },[])

  return (
    <div className={css.planetInfoWrapper} ref={planetInfoWrapper}>
      <div className={css.header}>Planet Info</div>
      <div className={css.planet_pic}><PictureFrame img_path={currentChar?.planet_img_path!} testid={currentChar.name!}/></div>
      <div className={css.name}>Name: {info?.name}</div>
      <div className={css.diameter}>Diameter: {info?.diameter} km</div>
      <div className={css.gravity}>Gravity: {info?.gravity} g</div>
      <div className={css.climate}>Climate: {info?.climate}</div>
      <div className={css.population}>Population: {info?.population} inhabitants</div>
      <div className={css.terrain}>Existing Terrain: {info?.terrain}</div>
    </div>
  )
}
