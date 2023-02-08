import React from 'react'
import { ICharacterInfo } from '../../../typings/ICharacterInfo';
import { StarshipInfo } from '../../../typings/IStarshipInfo';
import css from "./CharacterInfoStyle.module.css"

interface CharInfoProps{
  charInfo: ICharacterInfo | undefined
}

interface ShipInfoProps{
  shipInfo: StarshipInfo | undefined
}



export const CharacterInfo = ({charInfo}:CharInfoProps) => {
  
  return (
    <div className={css.charInfo}>
      <div>Name: {charInfo?.name}</div>
      <div>birthday: {charInfo?.birth_year}</div>
      <div>eye color:{charInfo?.eye_color}</div>
      <div>hair color:{charInfo?.hair_color}</div>
      <div>height:{charInfo?.height}</div>
      <div>home world:{charInfo?.homeworld}</div>
      <div>skin color:{charInfo?.skin_color}</div>
    </div>
  )
}
