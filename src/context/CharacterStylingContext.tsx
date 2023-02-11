import React, { useMemo, useState } from "react";
import { Character } from "../typings/ICharacter";
import { side } from "../typings/ESide";
import { charMap } from "./imageData";
import { CHARACTER } from "./imageData";

console.log(charMap);

interface CharacterStylingContextReturnType {
  charChoiceHandlerNext: () => void;
  charChoiceHandlerPrev: () => void;
  setDarkCharacters: () => void;
  setLightCharacters: () => void;
  currentChar: Character;
}

type Props = {
  children: React.ReactNode;
};

export const CharacterStylingContext =
  React.createContext<CharacterStylingContextReturnType>({
    charChoiceHandlerNext: () => {},
    charChoiceHandlerPrev: () => {},
    setDarkCharacters: () => {},
    setLightCharacters: () => {},
    currentChar: {
      name: "",
      img_path: "",
      side: side.LIGHT,
      validationErrorMsg: "",
      login_img_path: "",
      loginStyle: { background: "" },
      ship_img_path: "",
      charInfoFrameColor: { r: 0, g: 0, b: 0, a: 0 },
      planet_img_path: "",
    },
  });

export function CharacterStylingContextProvider({ children }: Props) {
  const [charIndex, setCharIndex] = useState<number>(0);

  const charList: Array<Character> = [
    {
      name: "Yoda",
      img_path: charMap.get(CHARACTER.YODA)?.choiceImgPath,
      side: side.LIGHT,
      login_img_path: charMap.get(CHARACTER.YODA)?.loginFormImgPath,
      loginStyle: {
        background:
          "linear-gradient(0deg, rgba(255,255,255,0) 30%, rgba(9,69,6,1) 80%)",
      },
      ship_img_path: charMap.get(CHARACTER.YODA)?.shipImgPath,
      charInfoFrameColor: { r: 9, g: 69, b: 6, a: 1 },
      planet_img_path: charMap.get(CHARACTER.YODA)?.planetImgPath,
    },
    {
      name: "C-3PO",
      img_path: charMap.get(CHARACTER.C3PO)?.choiceImgPath,
      side: side.LIGHT,
      login_img_path: charMap.get(CHARACTER.C3PO)?.loginFormImgPath,
      loginStyle: {
        background:
          "linear-gradient(0deg, rgba(255,255,255,0) 30%, rgba(233,224,19,1) 80%)",
      },
      ship_img_path: charMap.get(CHARACTER.C3PO)?.shipImgPath,
      charInfoFrameColor: { r: 233, g: 224, b: 19, a: 1 },
      planet_img_path: charMap.get(CHARACTER.C3PO)?.planetImgPath,
    },
    {
      name: "R2-D2",
      img_path: charMap.get(CHARACTER.R2D2)?.choiceImgPath,
      side: side.LIGHT,
      login_img_path: charMap.get(CHARACTER.R2D2)?.loginFormImgPath,
      loginStyle: {
        background:
          "linear-gradient(0deg, rgba(255,255,255,0) 30%, rgba(19,34,233,1) 80%)",
      },
      ship_img_path: charMap.get(CHARACTER.R2D2)?.shipImgPath,
      charInfoFrameColor: { r: 19, g: 34, b: 233, a: 1 },
      planet_img_path: charMap.get(CHARACTER.R2D2)?.planetImgPath,
    },
    {
      name: "Darth Vader",
      img_path: charMap.get(CHARACTER.DARTHVADER)?.choiceImgPath,
      side: side.DARK,
      login_img_path: charMap.get(CHARACTER.DARTHVADER)?.loginFormImgPath,
      loginStyle: {
        background:
          "linear-gradient(0deg, rgba(255,255,255,0) 30%, rgba(0,0,0,1) 80%)",
      },
      ship_img_path: charMap.get(CHARACTER.DARTHVADER)?.shipImgPath,
      charInfoFrameColor: { r: 255, g: 0, b: 0, a: 1 },
      planet_img_path: charMap.get(CHARACTER.DARTHVADER)?.planetImgPath,
    },
    {
      name: "Boba Fett",
      img_path: charMap.get(CHARACTER.BOBAFETT)?.choiceImgPath,
      side: side.DARK,
      login_img_path: charMap.get(CHARACTER.BOBAFETT)?.loginFormImgPath,
      loginStyle: {
        background:
          "linear-gradient(0deg, rgba(255,255,255,0) 30%, rgba(8,34,0,1) 80%)",
      },
      ship_img_path: charMap.get(CHARACTER.BOBAFETT)?.shipImgPath,
      charInfoFrameColor: { r: 8, g: 34, b: 0, a: 1 },
      planet_img_path: charMap.get(CHARACTER.BOBAFETT)?.planetImgPath,
    },
    {
      name: "Darth Maul",
      img_path: charMap.get(CHARACTER.DARTHMAUL)?.choiceImgPath,
      side: side.DARK,
      login_img_path: charMap.get(CHARACTER.DARTHMAUL)?.loginFormImgPath,
      loginStyle: {
        background:
          "linear-gradient(0deg, rgba(255,255,255,0) 30%, rgba(0,0,0,1) 80%)",
      },
      ship_img_path: charMap.get(CHARACTER.DARTHMAUL)?.shipImgPath,
      charInfoFrameColor: { r: 255, g: 0, b: 0, a: 1 },
      planet_img_path: charMap.get(CHARACTER.DARTHMAUL)?.planetImgPath,
    },
    {
      name: "Bossk",
      img_path: charMap.get(CHARACTER.BOSSK)?.choiceImgPath,
      side: side.DARK,
      login_img_path: charMap.get(CHARACTER.BOSSK)?.loginFormImgPath,
      loginStyle: {
        background:
          "linear-gradient(0deg, rgba(255,255,255,0) 30%, rgba(40,34,0,1) 80%)",
      },
      ship_img_path: charMap.get(CHARACTER.BOSSK)?.shipImgPath,
      charInfoFrameColor: { r: 40, g: 34, b: 0, a: 1 },
      planet_img_path: charMap.get(CHARACTER.BOSSK)?.planetImgPath,
    },
    {
      name: "Han Solo",
      img_path: charMap.get(CHARACTER.HANSOLO)?.choiceImgPath,
      side: side.LIGHT,
      login_img_path: charMap.get(CHARACTER.HANSOLO)?.loginFormImgPath,
      loginStyle: {
        background:
          "linear-gradient(0deg, rgba(255,255,255,0) 30%, rgba(163,157,112,1) 80%",
      },
      ship_img_path: charMap.get(CHARACTER.HANSOLO)?.shipImgPath,
      charInfoFrameColor: { r: 163, g: 157, b: 112, a: 1 },
      planet_img_path: charMap.get(CHARACTER.HANSOLO)?.planetImgPath,
    },
    {
      name: "IG-88",
      img_path: charMap.get(CHARACTER.IG88)?.choiceImgPath,
      side: side.DARK,
      login_img_path: charMap.get(CHARACTER.IG88)?.loginFormImgPath,
      loginStyle: {
        background:
          "linear-gradient(0deg, rgba(255,255,255,0) 30%, rgba(69,69,69,1) 80%)",
      },
      ship_img_path: charMap.get(CHARACTER.IG88)?.shipImgPath,
      charInfoFrameColor: { r: 69, g: 69, b: 69, a: 1 },
      planet_img_path: charMap.get(CHARACTER.IG88)?.planetImgPath,
    },
    {
      name: "Palpatine",
      img_path: charMap.get(CHARACTER.PALPATINE)?.choiceImgPath,
      side: side.DARK,
      login_img_path: charMap.get(CHARACTER.PALPATINE)?.loginFormImgPath,
      loginStyle: {
        background:
          "linear-gradient(0deg, rgba(255,255,255,0) 30%, rgba(0,0,0,1) 80%)",
      },
      ship_img_path: charMap.get(CHARACTER.PALPATINE)?.shipImgPath,
      charInfoFrameColor: { r: 255, g: 0, b: 0, a: 1 },
      planet_img_path: charMap.get(CHARACTER.PALPATINE)?.planetImgPath,
    },
    {
      name: "Jar Jar Bink",
      img_path: charMap.get(CHARACTER.JARJAR)?.choiceImgPath,
      side: side.LIGHT,
      login_img_path: charMap.get(CHARACTER.JARJAR)?.loginFormImgPath,
      loginStyle: {
        background:
          "linear-gradient(0deg, rgba(255,255,255,0) 30%, rgba(172,108,3,1) 80%)",
      },
      ship_img_path: charMap.get(CHARACTER.JARJAR)?.shipImgPath,
      charInfoFrameColor: { r: 172, g: 108, b: 3, a: 1 },
      planet_img_path: charMap.get(CHARACTER.JARJAR)?.planetImgPath,
    },
    {
      name: "Mace Windu",
      img_path: charMap.get(CHARACTER.MACEWINDU)?.choiceImgPath,
      side: side.LIGHT,
      login_img_path: charMap.get(CHARACTER.MACEWINDU)?.loginFormImgPath,
      loginStyle: {
        background:
          "linear-gradient(0deg, rgba(255,255,255,0) 30%, rgba(46,24,0,1) 80%)",
      },
      ship_img_path: charMap.get(CHARACTER.MACEWINDU)?.shipImgPath,
      charInfoFrameColor: { r: 46, g: 24, b: 0, a: 1 },
      planet_img_path: charMap.get(CHARACTER.MACEWINDU)?.planetImgPath,
    },
    {
      name: "Obi Wan Kenobi",
      img_path: charMap.get(CHARACTER.OBIWAN)?.choiceImgPath,
      side: side.LIGHT,
      login_img_path: charMap.get(CHARACTER.OBIWAN)?.loginFormImgPath,
      loginStyle: {
        background:
          "linear-gradient(0deg, rgba(255,255,255,0) 30%, rgba(150,84,12,1) 80%)",
      },
      ship_img_path: charMap.get(CHARACTER.OBIWAN)?.shipImgPath,
      charInfoFrameColor: { r: 150, g: 84, b: 12, a: 1 },
      planet_img_path: charMap.get(CHARACTER.OBIWAN)?.planetImgPath,
    },
  ];

  const [characterList, setCharacterlist] =
    useState<Array<Character>>(charList);
  const [currentChar, setCurrentChar] = useState<Character>(
    characterList[charIndex]
  );

  function setDarkCharacters(): void {
    const newList = darkCharsList;
    setCharacterlist(newList);
    setCharIndex(0);

    setCurrentChar(newList[0]);
  }

  function setLightCharacters(): void {
    const newList = lightCharsList;
    setCharacterlist(newList);
    setCharIndex(0);

    setCurrentChar(newList[0]);
  }

  const lightCharsList: Array<Character> = charList.filter((char) => {
    return char.side === side.LIGHT;
  });

  const darkCharsList: Array<Character> = charList.filter((char) => {
    return char.side === side.DARK;
  });

  function charChoiceHandlerNext(): void {
    let newCharIndex;
    if (charIndex === characterList.length - 1) {
      newCharIndex = 0;
      setCharIndex(newCharIndex);
      setCurrentChar(characterList[newCharIndex]);
      return;
    }

    newCharIndex = charIndex + 1;
    setCharIndex((newCharIndex) => newCharIndex + 1);

    setCurrentChar(characterList[newCharIndex]);
  }

  function charChoiceHandlerPrev(): void {
    console.log(charIndex);

    let newCharIndex;
    if (charIndex === 0) {
      let newCharIndex = characterList.length - 1;
      setCharIndex(newCharIndex);
      setCurrentChar(characterList[newCharIndex]);
      return;
    }

    newCharIndex = charIndex - 1;
    setCharIndex((newCharIndex) => newCharIndex - 1);

    setCurrentChar(characterList[newCharIndex]);
  }

  const value = useMemo(
    () => ({
      charChoiceHandlerNext,
      charChoiceHandlerPrev,
      setDarkCharacters,
      setLightCharacters,
      currentChar,
    }),
    [
      charChoiceHandlerNext,
      charChoiceHandlerPrev,
      setLightCharacters,
      setDarkCharacters,
      currentChar,
    ]
  );

  return (
    <CharacterStylingContext.Provider value={value}>
      {children}
    </CharacterStylingContext.Provider>
  );
}
