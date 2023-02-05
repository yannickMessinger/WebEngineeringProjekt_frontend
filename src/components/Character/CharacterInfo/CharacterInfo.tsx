import React from 'react'
import { ICharacterInfo } from '../../../typings/ICharacterInfo';

interface CharInfoProps{
  charInfo: ICharacterInfo | undefined
}



export const CharacterInfo = ({charInfo}:CharInfoProps) => {
  
//error u loading state hier oder ggf in eigene component  

 
 

 return (
    <div>
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
