import React, { useRef, useState } from 'react'

export const useLightsaber = () => {
  
    const [activateSaber, setActivateSaber] = useState(false)
    const bladeRef = useRef<HTMLInputElement>(null);

    function toogleSaberRed(){
        bladeRef.current?.style.setProperty("--blade-hue", `1`);
    }
    
    function toogleSaberGreen(){
        bladeRef.current?.style.setProperty("--blade-hue", `120`);
    }

    function activateBlade(){
        setActivateSaber(!activateSaber)
    }
  
  
   
  
  
    return {
        activateSaber, 
        setActivateSaber,
        bladeRef,
        toogleSaberRed,
        toogleSaberGreen,
        activateBlade
    }
    
  
}
