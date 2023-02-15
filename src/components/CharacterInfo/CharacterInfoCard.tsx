import { useContext, useEffect, useRef } from 'react'
import { CharacterStylingContext } from '../../context/CharacterStylingContext';
import { CharacterInfo } from '../../typings/CharacterInfo'
import { PictureFrame } from '../LoginForm/Form/LoginPictureFrame/PictureFrame';
import css from './CharacterInfoCardStyle.module.css'


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
      <div className={css.header}>Charakter Info</div>
      <div className={css.char_pic}><PictureFrame img_path={currentChar!.img_path} testid={currentChar.name!}/></div>
      <div className={css.name}>Name: {info?.name}</div>
      <div className={css.birth_year}>Geburtsjahr: {info?.birth_year}</div>
      <div className={css.eye_color}>Augenfarbe: {info?.eye_color}</div>
      <div className={css.hair_color}>Haarfarbe: {info?.hair_color}</div>
      <div className={css.height}>Groesse: {info?.height} cm</div>
      <div className={css.skin_color}>Hautfarbe: {info?.skin_color}</div>
    </div>
  )
}
