import React, { useContext } from 'react'
import { CharacterContext } from '../../context/CharacterContext';
import { ICharacter } from '../../typings/ICharacter';
import { ICharacterInfo } from '../../typings/ICharacterInfo';





export const CharacterInfo = ({name,birth_year,eye_color,hair_color,height,homeworld,skin_color}:ICharacterInfo) => {
  

 
 

 return (
    <div>
      <div>{name}</div>
      <div>{birth_year}</div>
      <div>{eye_color}</div>
      <div>{hair_color}</div>
      <div>{height}</div>
      <div>{homeworld}</div>
      <div>{skin_color}</div>
    </div>
  )
}
