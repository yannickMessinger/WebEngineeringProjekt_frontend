import React, { useContext } from 'react'
import { CharacterStylingContext } from '../../context/CharacterStylingContext'
import { StarshipInfo } from '../../typings/IStarshipinfo'
import { LoginPictureFrame } from '../LoginForm/Form/LoginPictureFrame/LoginPictureFrame'
import css from './StarshipInfoCardStyle.module.css'
//InfoCards in eine gesamte Komponente transformieren

interface StarshipInfoProps{
  info:StarshipInfo | undefined
}


export const StarshipInfoCard = ({info}:StarshipInfoProps) => {
  const {returnCharacter} = useContext(CharacterStylingContext);

  return (
    <div className={css.wrapper}>
       <LoginPictureFrame img_path={returnCharacter().ship_img_path!}></LoginPictureFrame>
      <div>name: {info?.name}</div>
      <div>model: {info?.model}</div>
      <div>manufacturer: {info?.manufacturer}</div>
      <div>length: {info?.length}</div>
      <div>hyperdrive rating: {info?.hyperdrive_rating}</div>
      <div>max speed: {info?.max_atmosphering_speed}</div>
    </div>
  )
}
