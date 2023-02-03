import React, {useEffect, useMemo, useState } from "react";
import { ICharacter } from "../typings/ICharacter";
import {side} from "../typings/ESide"

import boba from "../assets/boba.png";
import c3po from "../assets/c3_complete.png";
import darth_vader from "../assets/darth_vader.png";
import r2 from "../assets/r2.png";
import yoda from "../assets/yoda_fly.png";
import darthmaul from "../assets/darthmaul.png";
import ig88 from "../assets/ig88.png";
import hanyolo from "../assets/hanyolo.png";
import imperator from "../assets/imperator.png";
import obiwan from "../assets/obiwan.png";
import jarajr from "../assets/jarjar.png";
import bossk from "../assets/bossk.png";
import macewindu from "../assets/macewindu.png";

interface CharacterContextProps {
  charChoiceHandlerNext: () => void;
  charChoiceHandlerPrev: () => void;
  returnCharacter: () => ICharacter;
  setDarkCharacters:() => void;
  setLightCharacters:() => void;
 }

export const CharacterContext = React.createContext<CharacterContextProps>({
  charChoiceHandlerNext: () => {},
  charChoiceHandlerPrev: () => {},
  returnCharacter: (): any => {},
  setDarkCharacters:() => {},
  setLightCharacters:() => {}
 
});

export function CharacterContextProvider({ children }: any) {
  const [charPicPath, setCharPicPath] = useState(yoda);
  const [charIndex, setCharIndex] = useState(0);
  const charList: Array<ICharacter> = [
    { name: "Yoda", img_path: yoda, side: side.LIGHT},
    { name: "C-3PO",  img_path: c3po,side: side.LIGHT},
    { name: "R2-D2", img_path: r2, side:side.LIGHT},
    { name: "Darth Vader", img_path: darth_vader, side: side.DARK},
    { name: "Boba Fett", img_path: boba,side:side.DARK},
    { name: "Darth Maul", img_path: darthmaul,side:side.DARK},
    {name:"Bossk", img_path:bossk, side: side.DARK},
    {name:"Han Solo", img_path:hanyolo, side: side.LIGHT},
    {name:"IG-88", img_path:ig88, side:side.DARK},
    {name:"Palpatine", img_path:imperator, side: side.DARK},
    {name:"Jar Jar Bink", img_path:jarajr, side:side.LIGHT},
    {name:"Mace Windu", img_path:macewindu, side:side.LIGHT},
    {name:"Obi Wan Kenobi", img_path:obiwan, side:side.LIGHT}
  ];

  


  const [characterList, setCharacterlist] = useState(charList)
  
  function setDarkCharacters():void{
    
    const newList = darkCharsList
    setCharacterlist(newList)
    setCharIndex(0)
  }

  function setLightCharacters():void{
   
    const newList = lightCharsList
    setCharacterlist(newList)
    setCharIndex(0)
  }

  const lightCharsList:Array<ICharacter> = charList.filter((char) =>{
    return char.side === side.LIGHT
  })

  const darkCharsList:Array<ICharacter>  = charList.filter((char) =>{
    return char.side === side.DARK
  })

  function charChoiceHandlerNext(){
    if (charIndex === (characterList.length - 1)) {
      setCharIndex(0);

      return;
    }
    setCharIndex((prevCharIndex) => prevCharIndex + 1);
  };

  function charChoiceHandlerPrev(){
    if (charIndex === 0) {
      setCharIndex((characterList.length - 1));

      return;
    }
    setCharIndex((prevCharIndex) => (prevCharIndex - 1));
  };

  function returnCharacter(): ICharacter{
    return characterList[charIndex];
  };

  


  

  const value = useMemo(
    () => ({
      charChoiceHandlerNext,
      charChoiceHandlerPrev,
      returnCharacter,
      setDarkCharacters,
      setLightCharacters
    }),
    [charChoiceHandlerNext,charChoiceHandlerPrev,returnCharacter, setLightCharacters,setDarkCharacters]
  );

  // wrap the context around all children
  return (
    <CharacterContext.Provider value={value}>
      {children}
    </CharacterContext.Provider>
  );
}
