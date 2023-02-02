import React, { useContext } from 'react'
import { CharacterContext } from '../context/CharacterContext';




export const useSWAPI = () => {
  
    const { returnCharacter } = useContext(CharacterContext);
  

    async function fetchCharInfo(): Promise<void> {
        console.log("fetch Char Info from Swapi");
       

        const SWAPI_URL = `http://swapi.dev/api/people/?search=${returnCharacter().name}`;
      
        try {
          const response = await fetch(SWAPI_URL, { method: "GET" });
          
          if (!response.ok) {
            console.log("Error fetch Frontend todo Liste");
            throw new Error(response.statusText);
          }
      
          const charinfo = await response.json();
          console.log(charinfo.results)
      
          return charinfo;
        } catch (error) {
          console.log(error);
          
        }
      }
  
    return {
        fetchCharInfo
  }
    
  
}


