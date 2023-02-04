import React, { useContext, useEffect, useState } from 'react'
import { CharacterContext } from '../context/CharacterContext';
import { ICharacterInfo } from '../typings/ICharacterInfo';
import { StarshipInfo } from '../typings/IStarshipinfo';

//brauche noch zweiten fetch falls notwneige Daten für Home Planet oder Straship nötig sind
//ladescreen,error etc hinzufügen

export const useSWAPI = () => {
  
    const [charInfo, setCharInfo] = useState<ICharacterInfo>()
    const [starshipInfo, setStarShipInfo] = useState<StarshipInfo>()
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
    const { returnCharacter } = useContext(CharacterContext);
  
    //const controller = new AbortController() nutzen?

    useEffect(() => {
      setError(false);
      setLoading(true);
      fetchCharInfo().then((result) => {
        setCharInfo(result);
      }).catch((e) => setError(e))
      .finally(() => setLoading(false));
    },[returnCharacter]);

    
  
    return {
        fetchCharInfo,
        charInfo,
        error,
        loading
  }

  async function fetchCharInfo(): Promise<ICharacterInfo | undefined> {
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
      
      return {name:"error",
        birth_year:"error",
        eye_color:"error",
        hair_color:"error",
        height:"error",
        homeworld:"error",
        skin_color:"error"}
    }
  }

  async function fetchStarShipInfo():Promise<StarshipInfo | undefined>{
    let STARSHIP_URL = `value from first fetch`


    try {
      const response = await fetch(STARSHIP_URL, { method: "GET" });
      
      if (!response.ok) {
        console.log("Error fetch swapi starship");
        throw new Error(response.statusText);
      }
  
      const rawInfo = await response.json()
      const starshipInfo:StarshipInfo = rawInfo.results[0]
     
      console.log(starshipInfo)
  
      return starshipInfo
    

  }  catch (error) {
    console.log(error);
    return {name:"error",
        model:"error",
        manufacturer:"error",
        length:"error",
        hyperdrive_rating:"error",
        max_atmosphering_speed:"errors"
      }
    }
    
  }
    
  
}


