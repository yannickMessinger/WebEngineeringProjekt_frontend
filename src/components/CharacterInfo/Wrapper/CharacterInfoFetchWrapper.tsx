import React from "react";
import { useSWAPI } from "../../../hooks/useSWAPI";
import { CharacterInfo } from "../CharacterInfo";
import css from "./CharacterInfoWrapperStyle.module.css"

export const CharacterInfoFetchWrapper = () => {

  const { charInfo,loading,error,fetchCharInfo } = useSWAPI();

  //fetchCharInfo()
  console.log("charinfo component", charInfo)
  //valla warum geht nix diese:((

  console.log("Zeige Char info")
  
  return (
    <div className={css.general}>
      
      
      
      <h3>INFO</h3>
      <CharacterInfo
        name={charInfo?.name}
        birth_year={charInfo?.birth_year}
        eye_color={charInfo?.eye_color}
        hair_color={charInfo?.hair_color}
        height={charInfo?.height}
        homeworld={charInfo?.homeworld}
        skin_color={charInfo?.skin_color}
      />
    </div>
  );
};
