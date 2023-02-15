import { useContext, useEffect, useRef } from 'react'
import { CharacterStylingContext } from '../../context/CharacterStylingContext'
import { PlanetInfo } from '../../typings/IPlanetInfo'
import { PictureFrame } from '../LoginForm/Form/LoginPictureFrame/PictureFrame'
import css from "./PlanetInfoCardStyle.module.css"
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
      {info?.name === 'unknown' ? <div className={css.name}>Name: unbekannt</div> : <div className={css.name}>Name: {info?.name}</div>}
      <div className={css.diameter}>Durchmesser: {info?.diameter} km</div>
      {info?.gravity === 'unknown' ? <div className={css.gravity}>Schwerkraft: unbekannt</div> : <div className={css.gravity}>Schwerkraft: {info?.gravity} g</div>}
      {info?.climate === 'unknown' ? <div className={css.climate}>Klima: unbekannt</div> : <div className={css.climate}>Klima: {info?.climate}</div>}
      {info?.population === 'unknown' ?  <div className={css.population}>Einwohner: unbekannt</div> : <div className={css.population}>Einwohner: {info?.population} Einw.</div>}
      {info?.terrain === 'unknown' ? <div className={css.terrain}>Terrain: unbekannt</div> : <div className={css.terrain}>Terrain: {info?.terrain}</div>}
    </div>
  )
}
