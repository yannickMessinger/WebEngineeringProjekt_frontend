import React, { useContext, useEffect, useRef } from 'react'
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

  const characterInfoWrapper = useRef<HTMLInputElement>(null);

  useEffect(() => {
    characterInfoWrapper.current?.style.setProperty("--color", `rgba(${currentChar?.charInfoFrameColor!.r},${currentChar?.charInfoFrameColor!.g},${currentChar?.charInfoFrameColor!.b},${currentChar?.charInfoFrameColor!.a})`);
  },[])
  return (
    <div className={css.characterInfoWrapper} ref={characterInfoWrapper}>
      <div className={css.header}>Character Info</div>
      <div className={css.char_pic}><PictureFrame img_path={currentChar!.img_path} testid={currentChar.name!}/></div>
      <div className={css.name}>Name: {info?.name}</div>
      <div className={css.birth_year}>Birth year: {info?.birth_year}</div>
      <div className={css.eye_color}>Eyecolor: {info?.eye_color}</div>
      <div className={css.hair_color}>Haircolor: {info?.hair_color}</div>
      <div className={css.height}>Height: {info?.height} cm</div>
      <div className={css.skin_color}>Skincolor: {info?.skin_color}</div>
    </div>
  )
}
