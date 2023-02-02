import React, { useCallback, useMemo, useState } from "react";
import { ICharacter } from "../typings/ICharacter";
import {side} from "../typings/ESide"

import boba from "../assets/boba.png";
import c3po from "../assets/c3_complete.png";
import darth_vader from "../assets/darth_vader.png";
import r2 from "../assets/r2.png";
import tusk from "../assets/tusk.png";
import yoda from "../assets/yoda_fly.png";

interface CharacterContextProps {
  charChoiceHandlerNext: () => void;
  charChoiceHandlerPrev: () => void;
  returnCharacter: () => ICharacter;
}

export const CharacterContext = React.createContext<CharacterContextProps>({
  charChoiceHandlerNext: () => {},
  charChoiceHandlerPrev: () => {},
  returnCharacter: (): any => {},
});

export function CharacterContextProvider({ children }: any) {
  const [charPicPath, setCharPicPath] = useState(yoda);
  const [charIndex, setCharIndex] = useState(0);
  //const [charList, setCharlist] = useState(Array<ICharacter>)

  const characterList: Array<ICharacter> = [
    { name: "Yoda", swapi_id: 20, img_path: yoda, side: side.LIGHT},
    { name: "C3PO", swapi_id: 1, img_path: c3po,side: side.LIGHT},
    { name: "R2D2", swapi_id: 3, img_path: r2, side:side.LIGHT},
    { name: "Darth Vader", swapi_id: 4, img_path: darth_vader, side: side.DARK},
    { name: "Boba Fett", swapi_id: 22, img_path: boba,side:side.DARK},
    { name: "Tusk", swapi_id: 5, img_path: tusk,side:side.DARK},
  ];

  //setCharlist(characterList)

  const lightCharsList:Array<ICharacter> = characterList.filter((char) =>{
    return char.side === side.LIGHT
  })

  const darkCharsList:Array<ICharacter>  = characterList.filter((char) =>{
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
    setCharIndex((prevCharIndex) => prevCharIndex - 1);
  };

  function returnCharacter(): ICharacter{
    return characterList[charIndex];
  };

  function setFilterList(filter:string){

  }


  

  const value = useMemo(
    () => ({
      charChoiceHandlerNext,
      charChoiceHandlerPrev,
      returnCharacter,
    }),
    [charChoiceHandlerNext, charChoiceHandlerPrev,returnCharacter]
  );

  // wrap the context around all children
  return (
    <CharacterContext.Provider value={value}>
      {children}
    </CharacterContext.Provider>
  );
}
