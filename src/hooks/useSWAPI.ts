import React, { useContext } from 'react'
import { CharacterContext } from '../context/CharacterContext';
import { ICharacterInfo } from '../typings/ICharacterInfo';




export const useSWAPI = () => {
  
    const { returnCharacter } = useContext(CharacterContext);
  
    //brauche noch zweiten fetch falls notwneige Daten für Home Planet oder Straship nötig sind

    async function fetchCharInfo(): Promise<ICharacterInfo> {
        console.log("fetch Char Info from Swapi");
       

        const SWAPI_URL = `http://swapi.dev/api/people/?search=${returnCharacter().name}`;
      
        try {
          const response = await fetch(SWAPI_URL, { method: "GET" });
          
          if (!response.ok) {
            console.log("Error fetch swapi");
            throw new Error(response.statusText);
          }
      
          const rawInfo = await response.json()
          const charInfo:ICharacterInfo = rawInfo.results[0]
         
          console.log(charInfo)
      
          return charInfo;
        } catch (error) {
          console.log(error);
          
          return {name:"",
            birth_year:"",
            eye_color:"",
            hair_color:"",
            height:"",
            homeworld:"",
            skin_color:""}
        }
      }
  
    return {
        fetchCharInfo
  }
    
  
}


