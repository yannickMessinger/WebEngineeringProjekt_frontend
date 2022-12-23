import React, { useCallback, useMemo, useState } from "react";
import { ICharacter } from "../typings/ICharacter";

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

  const characterList: Array<ICharacter> = [
    { name: "Yoda", swapi_id: 20, img_path: yoda },
    { name: "C3PO", swapi_id: 1, img_path: c3po },
    { name: "R2D2", swapi_id: 3, img_path: r2 },
    { name: "Darth Vader", swapi_id: 4, img_path: darth_vader },
    { name: "Boba Fett", swapi_id: 22, img_path: boba },
    { name: "Tusk", swapi_id: 5, img_path: tusk },
  ];

  const charChoiceHandlerNext = () => {
    if (charIndex === 5) {
      setCharIndex(0);

      return;
    }
    setCharIndex((prevCharIndex) => prevCharIndex + 1);
  };

  const charChoiceHandlerPrev = () => {
    if (charIndex === 0) {
      setCharIndex(5);

      return;
    }
    setCharIndex((prevCharIndex) => prevCharIndex - 1);
  };

  const returnCharacter = (): ICharacter => {
    return characterList[charIndex];
  };

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
