import React, { useContext, useEffect } from 'react'
import css from "./CharInfoTransitionScreenStyle.module.css"
import xwing from "../../assets/shipassets/xwing.png"
import { useSWAPI } from '../../hooks/useSWAPI';
import { InfoDisplay } from '../Character/InfoDisplay/InfoDisplay';
import { CharacterContext } from '../../context/CharacterContext';

//hier ggf schon data fetchen für Character info??

export const CharInfoTransisitonScreen = () => {

  const { charInfo, starshipInfo, loading, error} = useSWAPI();
  const {returnCharacter } = useContext(CharacterContext);
 
  
  return (
    <div className={css.backgroundimg}>
      {loading ? (
       <div className={css.xwing}>
          <img src={returnCharacter().ship_img_path} width='50px' height='50px'/>
      </div>
      ) : (
        <InfoDisplay charInfo={charInfo} shipInfo={starshipInfo} planetInfo={undefined}/>
      )}
      
    </div>
  )
}
