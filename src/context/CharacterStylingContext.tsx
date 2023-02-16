import React, { useMemo, useState } from "react";
import { CharacterStyle } from "../typings/ICharacter";
import { side } from "../typings/ESide";
import { charList } from "./context_data/charList";

const lightCharsList: Array<CharacterStyle> = charList.filter((char) => {
  return char.side === side.LIGHT;
});

const darkCharsList: Array<CharacterStyle> = charList.filter((char) => {
  return char.side === side.DARK;
});

interface CharacterStylingContextReturnType {
  charChoiceHandlerNext: () => void;
  charChoiceHandlerPrev: () => void;
  setDarkCharacters: () => void;
  setLightCharacters: () => void;
  currentChar: CharacterStyle;
}

type Props = {
  children: React.ReactNode;
};

/**
 * Context to pass Styling display information to every component that needs it. Is used to give the application individual styling, based
 * on the character that the user has choosen. Also contains list of available characters and function to filter between light and dark side.
 * Characterlist is imported from dataclass charList
 */
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
    useState<Array<CharacterStyle>>(charList);

  const [currentChar, setCurrentChar] = useState<CharacterStyle>(
    characterList[charIndex]
  );

  //sets current list to list of dark/bad characters
  function setDarkCharacters(): void {
    const newList = darkCharsList;
    setCharacterlist(newList);
    setCharIndex(0);

    setCurrentChar(newList[0]);
  }

  //sets current list to list of light/good characters
  function setLightCharacters(): void {
    const newList = lightCharsList;
    setCharacterlist(newList);
    setCharIndex(0);

    setCurrentChar(newList[0]);
  }

  //function to choose next character. Sets index to 0 if list needs to be iterated from beginning.
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

   //function to choose previous character. Sets index to 0 if list needs to be iterated from beginning.
  function charChoiceHandlerPrev(): void {
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

    [currentChar]
  );

  return (
    <CharacterStylingContext.Provider value={value}>
      {children}
    </CharacterStylingContext.Provider>
  );
}
