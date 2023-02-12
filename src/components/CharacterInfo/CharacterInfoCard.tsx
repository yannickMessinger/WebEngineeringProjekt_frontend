import React, { useContext } from 'react'
import { CharacterStylingContext } from '../../context/CharacterStylingContext';
import { CharacterInfo } from '../../typings/CharacterInfo'
import { PictureFrame } from '../LoginForm/Form/LoginPictureFrame/PictureFrame';
import css from './CharacterInfoCardStyle.module.css'

//InfoCards in eine gesamte Komponente transformieren
interface CharacterInfoCardProps{
  info: CharacterInfo | undefined
}


export const CharacterInfoCard = ({info}:CharacterInfoCardProps) => {
  const {currentChar} = useContext(CharacterStylingContext);
  return (
    <div className={css.wrapper}>
      <PictureFrame img_path={currentChar!.img_path}/>
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
