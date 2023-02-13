import React, { useContext } from 'react'
import { CharacterStylingContext } from '../../context/CharacterStylingContext'
import { StarshipInfo } from '../../typings/IStarshipInfo'
import { PictureFrame } from '../LoginForm/Form/LoginPictureFrame/PictureFrame'
import css from './StarshipInfoCardStyle.module.css'


interface StarshipInfoProps{
  info:StarshipInfo | undefined
}


export const StarshipInfoCard = ({info}:StarshipInfoProps) => {
  const {currentChar} = useContext(CharacterStylingContext);

  return (
    <div className={css.starshipInfoWrapper}>
      <div className={css.header}>Shipinfo</div>
      <div className={css.ship_pic}><PictureFrame img_path={currentChar?.ship_img_path!}/></div>
       <div className={css.name}>name: {info?.name}</div>
      <div className={css.model}>model: {info?.model}</div>
      <div className={css.manufacturer}>manufacturer: {info?.manufacturer}</div>
      <div className={css.length}>length: {info?.length}</div>
      <div className={css.hyperdrive}>hyperdrive rating: {info?.hyperdrive_rating}</div>
      <div className={css.max_speed}>max speed: {info?.max_atmosphering_speed}</div>
    </div>
  )
}
