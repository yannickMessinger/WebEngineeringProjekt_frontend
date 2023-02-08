import React, { useEffect } from 'react'
import css from "./CharInfoTransitionScreenStyle.module.css"
import xwing from "../../assets/xwing.png"
import { useSWAPI } from '../../hooks/useSWAPI';
import { CharacterInfo } from '../Character/CharacterInfo/CharacterInfo';

//hier ggf schon data fetchen für Character info??

export const CharInfoTransisitonScreen = () => {

  const { charInfo, starshipInfo, loading, error} = useSWAPI();
 
  
  return (
    <div className={css.backgroundimg}>
      {loading ? (
       <div className={css.xwing}>
          <img src={xwing} width='50px' height='50px'/>
      </div>
      ) : (
        <CharacterInfo charInfo={charInfo} shipInfo={starshipInfo}/>
      )}
      
    </div>
  )
}
