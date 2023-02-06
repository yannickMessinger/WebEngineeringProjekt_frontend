import React, {useEffect, useMemo, useState } from "react";
import { ICharacter } from "../typings/ICharacter";
import {side} from "../typings/ESide"

//pics for char choice
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

//pics for loginform

import boba_login from "../assets/assets_login_screen/boba.jpg";
import bosk1_login from "../assets/assets_login_screen/bosk1.jpg";
import bosk2_login from "../assets/assets_login_screen/bosk2.jpg";
import c3po_login from "../assets/assets_login_screen/c3po.png";
import r2d2_login from "../assets/assets_login_screen/r2d2.jpg";
import hansolo_login from "../assets/assets_login_screen/hansolo.jpg";
import ig88_login from "../assets/assets_login_screen/ig88.jpg";
import jarjar_login from "../assets/assets_login_screen/jarjar.jpg";
import maul_login from "../assets/assets_login_screen/maul.jpg";
import obiwan_login from "../assets/assets_login_screen/obiwan.jpg";
import sidious_login from "../assets/assets_login_screen/sidious.jpg";
import vader_login from "../assets/assets_login_screen/vader_login.jpg";
import windu1_login from "../assets/assets_login_screen/windu1.jpg";
import windu2_login from "../assets/assets_login_screen/windu2.jpg";
import yoda_login from "../assets/assets_login_screen/yoda.jpg";
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
  
  const [charIndex, setCharIndex] = useState(0);
  const charList: Array<ICharacter> = [
    { name: "Yoda", img_path: yoda, side: side.LIGHT, validationErrorMsg:"correcting alle errors you must!", login_img_path: yoda_login},
    { name: "C-3PO",  img_path: c3po,side: side.LIGHT, validationErrorMsg:"sir, please correct your input!", login_img_path: c3po_login},
    { name: "R2-D2", img_path: r2, side:side.LIGHT, validationErrorMsg:"beep boop beep error beep!", login_img_path:r2d2_login},
    { name: "Darth Vader", img_path: darth_vader, side: side.DARK, validationErrorMsg:"I find your lack of data disturbing!", login_img_path:vader_login},
    { name: "Boba Fett", img_path: boba,side:side.DARK, validationErrorMsg:"There is a bounty on every error!", login_img_path:boba_login},
    { name: "Darth Maul", img_path: darthmaul,side:side.DARK, validationErrorMsg:"errors will only lead to failure!", login_img_path:maul_login},
    {name:"Bossk", img_path:bossk, side: side.DARK, validationErrorMsg:"time to hunt errors!", login_img_path:bosk1_login},
    {name:"Han Solo", img_path:hanyolo, side: side.LIGHT, validationErrorMsg:"Never tell me the errors!", login_img_path:hansolo_login},
    {name:"IG-88", img_path:ig88, side:side.DARK, validationErrorMsg:"He is no good to me with errors!", login_img_path:ig88_login},
    {name:"Palpatine", img_path:imperator, side: side.DARK, validationErrorMsg:"correct the errors now! DO IT!", login_img_path:sidious_login},
    {name:"Jar Jar Bink", img_path:jarajr, side:side.LIGHT, validationErrorMsg:"yousa musta correct the erroaa!", login_img_path:jarjar_login},
    {name:"Mace Windu", img_path:macewindu, side:side.LIGHT, validationErrorMsg:"this error is over!", login_img_path:windu1_login},
    {name:"Obi Wan Kenobi", img_path:obiwan, side:side.LIGHT, validationErrorMsg:"you were supposed to correct the errors, not create them!", login_img_path:obiwan_login}
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
