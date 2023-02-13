import React, { useContext, useEffect, useRef } from 'react'
import { CharacterStylingContext } from '../../context/CharacterStylingContext'
import { StarshipInfo } from '../../typings/IStarshipInfo'
import { PictureFrame } from '../LoginForm/Form/LoginPictureFrame/PictureFrame'
import css from './StarshipInfoCardStyle.module.css'


interface StarshipInfoProps{
  info:StarshipInfo | undefined
}


export const StarshipInfoCard = ({info}:StarshipInfoProps) => {
  const {currentChar} = useContext(CharacterStylingContext);
  const starShipInfoWrapper = useRef<HTMLInputElement>(null);

  useEffect(() => {
    starShipInfoWrapper.current?.style.setProperty("--color", `rgba(${currentChar?.charInfoFrameColor!.r},${currentChar?.charInfoFrameColor!.g},${currentChar?.charInfoFrameColor!.b},${currentChar?.charInfoFrameColor!.a})`);
  },[])

  return (
    <div className={css.starshipInfoWrapper} ref={starShipInfoWrapper}>
      <div className={css.header}>Ship Info</div>
      <div className={css.ship_pic}><PictureFrame img_path={currentChar?.ship_img_path!}/></div>
       <div className={css.name}>Name: {info?.name}</div>
      <div className={css.model}>Model: {info?.model}</div>
      <div className={css.manufacturer}>Manufacturer: {info?.manufacturer}</div>
      {info?.length ==='no info available' ? <div className={css.length}>Length: {info?.length}</div> :  <div className={css.length}>Length: {info?.length} m</div>}
      {info?.hyperdrive_rating ==='no info available' ? <div className={css.hyperdrive}>Hyperdrive rating: {info?.hyperdrive_rating}</div> : <div className={css.hyperdrive}>Hyperdrive rating: {info?.hyperdrive_rating} points</div>}
      {info?.max_atmosphering_speed==='no info available' ?  <div className={css.max_speed}>Max. athmospheric speed: {info?.max_atmosphering_speed}</div> : <div className={css.max_speed}>Max. athmospheric speed: {info?.max_atmosphering_speed} km/h</div>}

      
    </div>
  )
}
