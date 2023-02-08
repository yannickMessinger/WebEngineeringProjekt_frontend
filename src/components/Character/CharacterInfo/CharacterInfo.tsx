import React from 'react'
import { ICharacterInfo } from '../../../typings/ICharacterInfo';
import { StarshipInfo } from '../../../typings/IStarshipInfo';
import { Char3D } from './Char3D';
import css from "./CharacterInfoStyle.module.css"

interface InfoProps{
  charInfo: ICharacterInfo | undefined
  shipInfo: StarshipInfo | undefined
}





export const CharacterInfo = ({charInfo,shipInfo}:InfoProps) => {
  
  return (
    <div className={css.charInfo}>
      <div>Name: {charInfo?.name}</div>
      <div>birthday: {charInfo?.birth_year}</div>
      <div>eye color:{charInfo?.eye_color}</div>
      <div>hair color:{charInfo?.hair_color}</div>
      <div>height:{charInfo?.height}</div>
      <div>home world:{charInfo?.homeworld}</div>
      <div>skin color:{charInfo?.skin_color}</div>
      <br></br>
      <h4>Shipinfooo</h4>
      <div>name: {shipInfo?.name}</div>
      <div>model:{shipInfo?.model}</div>
      <div>manufacturer:{shipInfo?.manufacturer}</div>
      <div>length:{shipInfo?.length}</div>
      <div>hyperdrive_rating:{shipInfo?.hyperdrive_rating}</div>
      <div>max_atmosphering_speed:{shipInfo?.max_atmosphering_speed}</div>

      
    </div>
  )
}
