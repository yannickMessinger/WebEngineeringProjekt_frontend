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
    <div className={css.characterInfoWrapper}>
      <div className={css.header}>CharacterInfo</div>
      <div className={css.char_pic}><PictureFrame img_path={currentChar!.img_path}/></div>
      <div className={css.name}>name: {info?.name}</div>
      <div className={css.birth_year}>birth year: {info?.birth_year}</div>
      <div className={css.eye_color}>eye color: {info?.eye_color}</div>
      <div className={css.hair_color}>hair color: {info?.hair_color}</div>
      <div className={css.height}>height: {info?.height}</div>
      <div className={css.skin_color}>skin color: {info?.skin_color}</div>
    </div>
  )
}
