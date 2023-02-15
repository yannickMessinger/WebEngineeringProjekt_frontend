import React from 'react'
import { useSWAPI } from '../../../hooks/useSWAPI';
import { InfoDisplay } from './InfoDisplay'

export const InfoDisplayWrapper = () => {
  
    const { charInfo, starshipInfo,planetInfo} = useSWAPI();
  
  
    return (
        <InfoDisplay charInfo={charInfo} shipInfo={starshipInfo} planetInfo={planetInfo}/>
  )
}
