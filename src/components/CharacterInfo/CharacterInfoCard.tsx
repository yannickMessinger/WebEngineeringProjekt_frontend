import React, { useContext } from 'react'
import { CharacterStylingContext } from '../../context/CharacterStylingContext';
import { CharacterInfo } from '../../typings/CharacterInfo'
import { LoginPictureFrame } from '../LoginForm/Form/LoginPictureFrame/LoginPictureFrame';
import css from './CharacterInfoCardStyle.module.css'

//InfoCards in eine gesamte Komponente transformieren
interface CharacterInfoCardProps{
  info: CharacterInfo | undefined
}


export const CharacterInfoCard = ({info}:CharacterInfoCardProps) => {
  const {returnCharacter} = useContext(CharacterStylingContext);
  return (
    <div className={css.wrapper}>
      <LoginPictureFrame img_path={returnCharacter().img_path}></LoginPictureFrame>
      <div>name: {info?.name}</div>
      <div>birth year: {info?.birth_year}</div>
      <div>eye color: {info?.eye_color}</div>
      <div>hair color: {info?.hair_color}</div>
      <div>height: {info?.height}</div>
      <div>skin color: {info?.skin_color}</div>
      <div>starships:{info?.starships}</div>
    </div>
  )
}
