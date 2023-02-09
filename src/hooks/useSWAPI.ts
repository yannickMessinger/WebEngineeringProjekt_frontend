import React, { useContext, useEffect, useState } from 'react'
import { CharacterContext } from '../context/CharacterContext';
import { ICharacterInfo } from '../typings/ICharacterInfo';
import { PlanetInfo } from '../typings/IPlanetInfo';
import { StarshipInfo } from '../typings/IStarshipInfo';


//Promise.all?

export const useSWAPI = () => {
  
    const [charInfo, setCharInfo] = useState<ICharacterInfo>()
    const [starshipInfo, setStarShipInfo] = useState<StarshipInfo>()
    const [planetInfo, setPlanetInfo] = useState<PlanetInfo>()
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
    const { returnCharacter } = useContext(CharacterContext);
  
   

    
    useEffect(() => {
      setError(false);
      setLoading(true);
      fetchCharInfo().then((result) => {
        
        if(result!.starships!.length > 0){
          fetchStarShipInfo(result!.starships![0]).then((starship) =>{
            setStarShipInfo(starship)
          }).catch((error) =>{
            setError(error)
          })
        }
        
      if(result?.homeworld !== ""){
        fetchPlanetInfo(result?.homeworld!).then((planetinfo) =>{
          setPlanetInfo(planetInfo)
        }).catch((error) => {
          setError(error)
        })
      }
        
        
        setCharInfo(result);

      }).catch((e) => setError(e))
      .finally(() => {
        setTimeout(() =>{
          setLoading(false)
        },10000)});
    },[]);
    
    
  
    return {
        fetchCharInfo,
        charInfo,
        starshipInfo,
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

  async function fetchStarShipInfo(STARSHIP_URL:string):Promise<StarshipInfo | undefined>{
   
    

    try {
      const response = await fetch(STARSHIP_URL, { method: "GET" });
      
      if (!response.ok) {
        console.log("Error fetch swapi starship");
        throw new Error(response.statusText);
      }
  
      const rawInfo = await response.json()
      
      const starshipInfo:StarshipInfo = rawInfo
      

      
  
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


  async function fetchPlanetInfo(PLANET_URL:string):Promise<PlanetInfo | undefined>{
   
    

    try {
      const response = await fetch(PLANET_URL, { method: "GET" });
      
      if (!response.ok) {
        console.log("Error fetch swapi starship");
        throw new Error(response.statusText);
      }
  
      const rawInfo = await response.json()
      console.log(rawInfo)
      const planetInfo:PlanetInfo = rawInfo
      

     
  
      return planetInfo
    

  }  catch (error) {
    console.log(error);
    return {climate:"error",
    diameter:"error",
    gravity:"error",
    name:"error",
    population:"error",
    terrain:"errors"
      }
    }
    
  }
    
  
}


