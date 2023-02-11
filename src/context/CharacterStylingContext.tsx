import React, {useEffect, useMemo, useState } from "react";
import { Character } from "../typings/ICharacter";
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

//pics for transition screen

import yodasship from "../assets/shipassets/yodasship.png"
import vadersship from "../assets/shipassets/vaderstie.png"
import r2d2ship from "../assets/shipassets/r2andc3ship.png"
import macewinduship from "../assets/shipassets/starfighter.png"
import slave1 from "../assets/shipassets/slave1.png"
import maulsship from "../assets/shipassets/maulship.png"
import bossksship from "../assets/shipassets/bossksship2.png"
import falcon from "../assets/shipassets/millfalcon.png"
import ig88ship from "../assets/shipassets/ig88ship.png"
import stardestroyer from "../assets/shipassets/sidiousship.png"
import jarjarsship from "../assets/shipassets/jarjarship.png"
import winduship from "../assets/shipassets/macewinduship.png"
import starfighter from "../assets/shipassets/starfighter.png"


//planetpics
import yodaplanet from "../assets/planets/yodaplanet.png"
import c3poplanet from "../assets/planets/c3poplanet.png" //auch für r2 und darth vader
import bobaplanet from "../assets/planets/bobaplanet.png"
import maulplanet from "../assets/planets/darthmaulplanet.png"
import bosskplanet from "../assets/planets/bosskplanet.png"
import hanplanet from "../assets/planets/hanplanet.png"
import ig88planet from "../assets/planets/iggiplanet.png"
import sidiousplanet from "../assets/planets/sidiousplanet.png"
import jarjarplanet from "../assets/planets/jarjarplanet.png"
import maceplanet from "../assets/planets/maceplanet.png"
import obiplanet from "../assets/planets/obiplanet.png"



//sounds for characters?



interface CharacterStylingContextReturnType {
  charChoiceHandlerNext: () => void;
  charChoiceHandlerPrev: () => void;
  setDarkCharacters:() => void;
  setLightCharacters:() => void;
  currentChar:Character
 }

type Props = {
  children: React.ReactNode
};


export const CharacterStylingContext = React.createContext<CharacterStylingContextReturnType>({
  charChoiceHandlerNext: () => { },
  charChoiceHandlerPrev: () => { },
  setDarkCharacters: () => { },
  setLightCharacters: () => { },
  currentChar: {name: "", img_path: '', side: side.LIGHT, validationErrorMsg:"", login_img_path: '', loginStyle:{background:''}, ship_img_path:'', charInfoFrameColor:{r:0,g:0,b:0, a:0}, planet_img_path:''}
});

export function CharacterStylingContextProvider({ children }: Props) {
  
  

  const [charIndex, setCharIndex] = useState<number>(0);
  
  console.log("init context", charIndex)

  const charList: Array<Character> = [
    {name: "Yoda", img_path: yoda, side: side.LIGHT, validationErrorMsg:"correcting alle errors you must!", login_img_path: yoda_login, loginStyle:{background:'linear-gradient(0deg, rgba(255,255,255,0) 30%, rgba(9,69,6,1) 80%)'}, ship_img_path:yodasship, charInfoFrameColor:{r:9,g:69,b:6, a:1}, planet_img_path:yodaplanet},
    {name: "C-3PO",  img_path: c3po,side: side.LIGHT, validationErrorMsg:"sir, please correct your input!", login_img_path: c3po_login, loginStyle:{background:'linear-gradient(0deg, rgba(255,255,255,0) 30%, rgba(233,224,19,1) 80%)'}, ship_img_path:r2d2ship,charInfoFrameColor:{r:233,g:224,b:19, a:1}, planet_img_path:c3poplanet},
    {name: "R2-D2", img_path: r2, side:side.LIGHT, validationErrorMsg:"beep boop beep error beep!", login_img_path:r2d2_login,loginStyle:{background:'linear-gradient(0deg, rgba(255,255,255,0) 30%, rgba(19,34,233,1) 80%)'}, ship_img_path:r2d2ship,charInfoFrameColor:{r:19,g:34,b:233, a:1}, planet_img_path:c3poplanet},
    {name: "Darth Vader", img_path: darth_vader, side: side.DARK, validationErrorMsg:"I find your lack of data disturbing!", login_img_path:vader_login, loginStyle:{background:'linear-gradient(0deg, rgba(255,255,255,0) 30%, rgba(0,0,0,1) 80%)'}, ship_img_path:vadersship,charInfoFrameColor:{r:255,g:0,b:0, a:1},planet_img_path:c3poplanet},
    {name: "Boba Fett", img_path: boba,side:side.DARK, validationErrorMsg:"There is a bounty on every error!", login_img_path:boba_login, loginStyle:{background:'linear-gradient(0deg, rgba(255,255,255,0) 30%, rgba(8,34,0,1) 80%)'}, ship_img_path:slave1,charInfoFrameColor:{r:8,g:34,b:0, a:1}, planet_img_path:bobaplanet},
    {name: "Darth Maul", img_path: darthmaul,side:side.DARK, validationErrorMsg:"errors will only lead to failure!", login_img_path:maul_login,loginStyle:{background:'linear-gradient(0deg, rgba(255,255,255,0) 30%, rgba(0,0,0,1) 80%)'}, ship_img_path:maulsship,charInfoFrameColor:{r:255,g:0,b:0, a:1}, planet_img_path:maulplanet},
    {name:"Bossk", img_path:bossk, side: side.DARK, validationErrorMsg:"time to hunt errors!", login_img_path:bosk1_login, loginStyle:{background:'linear-gradient(0deg, rgba(255,255,255,0) 30%, rgba(40,34,0,1) 80%)'},ship_img_path:bossksship,charInfoFrameColor:{r:40,g:34,b:0, a:1}, planet_img_path:bosskplanet},
    {name:"Han Solo", img_path:hanyolo, side: side.LIGHT, validationErrorMsg:"Never tell me the errors!", login_img_path:hansolo_login,loginStyle:{background:'linear-gradient(0deg, rgba(255,255,255,0) 30%, rgba(163,157,112,1) 80%'},ship_img_path:falcon,charInfoFrameColor:{r:163,g:157,b:112, a:1}, planet_img_path:hanplanet},
    {name:"IG-88", img_path:ig88, side:side.DARK, validationErrorMsg:"He is no good to me with errors!", login_img_path:ig88_login, loginStyle:{background:'linear-gradient(0deg, rgba(255,255,255,0) 30%, rgba(69,69,69,1) 80%)'}, ship_img_path:ig88ship,charInfoFrameColor:{r:69,g:69,b:69, a:1}, planet_img_path:ig88planet},
    {name:"Palpatine", img_path:imperator, side: side.DARK, validationErrorMsg:"correct the errors now! DO IT!", login_img_path:sidious_login ,loginStyle:{background:'linear-gradient(0deg, rgba(255,255,255,0) 30%, rgba(0,0,0,1) 80%)'}, ship_img_path:stardestroyer,charInfoFrameColor:{r:255,g:0,b:0, a:1},planet_img_path:sidiousplanet},
    {name:"Jar Jar Bink", img_path:jarajr, side:side.LIGHT, validationErrorMsg:"yousa musta correct the erroaa!", login_img_path:jarjar_login, loginStyle:{background:'linear-gradient(0deg, rgba(255,255,255,0) 30%, rgba(172,108,3,1) 80%)'}, ship_img_path:jarjarsship,charInfoFrameColor:{r:172,g:108,b:3, a:1},planet_img_path:jarjarplanet},
    {name:"Mace Windu", img_path:macewindu, side:side.LIGHT, validationErrorMsg:"this error is over!", login_img_path:windu1_login,loginStyle:{background:'linear-gradient(0deg, rgba(255,255,255,0) 30%, rgba(46,24,0,1) 80%)'}, ship_img_path:winduship,charInfoFrameColor:{r:46,g:24,b:0, a:1},planet_img_path:maceplanet},
    {name:"Obi Wan Kenobi", img_path:obiwan, side:side.LIGHT, validationErrorMsg:"you were supposed to correct the errors, not create them!", login_img_path:obiwan_login,loginStyle:{background:'linear-gradient(0deg, rgba(255,255,255,0) 30%, rgba(150,84,12,1) 80%)'}, ship_img_path:starfighter,charInfoFrameColor:{r:150,g:84,b:12, a:1},planet_img_path:obiplanet}
  ];

  


  const [characterList, setCharacterlist] = useState<Array<Character>>(charList)
  const [currentChar, setCurrentChar] = useState<Character>(characterList[charIndex])
  
  function setDarkCharacters():void{
    
    const newList = darkCharsList
    setCharacterlist(newList)
    setCharIndex(0)

    setCurrentChar(newList[0])
  }

  function setLightCharacters():void{
   
    const newList = lightCharsList
    setCharacterlist(newList)
    setCharIndex(0)

    setCurrentChar(newList[0])
  }

  const lightCharsList:Array<Character> = charList.filter((char) =>{
    return char.side === side.LIGHT
  })

  const darkCharsList:Array<Character>  = charList.filter((char) =>{
    return char.side === side.DARK
  })

  function charChoiceHandlerNext():void{
   
    
    let newCharIndex
    if (charIndex === (characterList.length - 1)) {
      newCharIndex = 0
      setCharIndex(newCharIndex);
      setCurrentChar(characterList[newCharIndex])
      return;
    }
    
    newCharIndex = charIndex + 1
    setCharIndex(newCharIndex => newCharIndex + 1);
   
    setCurrentChar(characterList[newCharIndex])
  };

  function charChoiceHandlerPrev():void{
    
    console.log(charIndex)
  
    let newCharIndex
    if (charIndex === 0) {
      let newCharIndex = characterList.length - 1
      setCharIndex(newCharIndex);
      setCurrentChar(characterList[newCharIndex])
      return;
    }

    newCharIndex = charIndex - 1
    setCharIndex(newCharIndex => (newCharIndex - 1));
    
    setCurrentChar(characterList[newCharIndex])
  };

  



  

  const value = useMemo(
    () => ({
      charChoiceHandlerNext,
      charChoiceHandlerPrev,
      setDarkCharacters,
      setLightCharacters,
      currentChar
    }),
    [charChoiceHandlerNext,charChoiceHandlerPrev,setLightCharacters,setDarkCharacters,currentChar]
  );

  
  return (
    <CharacterStylingContext.Provider value={value}>
      {children}
    </CharacterStylingContext.Provider>
  );
}
