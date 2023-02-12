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
    <div className={css.wrapper}>
       <PictureFrame img_path={currentChar?.ship_img_path!}/>
      <div>name: {info?.name}</div>
      <div>model: {info?.model}</div>
      <div>manufacturer: {info?.manufacturer}</div>
      <div>length: {info?.length}</div>
      <div>hyperdrive rating: {info?.hyperdrive_rating}</div>
      <div>max speed: {info?.max_atmosphering_speed}</div>
    </div>
  )
}
