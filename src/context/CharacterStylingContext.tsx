import React, { useMemo, useState } from "react";
import { Character } from "../typings/ICharacter";
import { side } from "../typings/ESide";
import {charList} from "./charList"

const lightCharsList: Array<Character> = charList.filter((char) => {
  console.log("light")
  return char.side === side.LIGHT;
});

const darkCharsList: Array<Character> = charList.filter((char) => {
  console.log("dark")
  return char.side === side.DARK;
});


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

  const [characterList, setCharacterlist] =
    useState<Array<Character>>(charList);

  const [currentChar, setCurrentChar] = useState<Character>(
    characterList[charIndex]
  );

  function setDarkCharacters(): void {
    console.log("setDarkChar")
    const newList = darkCharsList;
    setCharacterlist(newList);
    setCharIndex(0);

    setCurrentChar(newList[0]);
  }

  function setLightCharacters(): void {
    console.log("setLightChar")
    const newList = lightCharsList;
    setCharacterlist(newList);
    setCharIndex(0);

    setCurrentChar(newList[0]);
  }

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
      currentChar
    ]
  );

  return (
    <CharacterStylingContext.Provider value={value}>
      {children}
    </CharacterStylingContext.Provider>
  );
}
