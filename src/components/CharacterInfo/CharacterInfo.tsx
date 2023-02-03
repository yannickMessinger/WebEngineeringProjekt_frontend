import React from 'react'
import { ICharacterInfo } from '../../typings/ICharacterInfo';





export const CharacterInfo = ({name,birth_year,eye_color,hair_color,height,homeworld,skin_color}:ICharacterInfo) => {
  
//error u loading state hier oder ggf in eigene component  

 
 

 return (
    <div>
      <div>Name: {name}</div>
      <div>birthday: {birth_year}</div>
      <div>eye color:{eye_color}</div>
      <div>hair color:{hair_color}</div>
      <div>height:{height}</div>
      <div>home world:{homeworld}</div>
      <div>skin color:{skin_color}</div>
    </div>
  )
}
