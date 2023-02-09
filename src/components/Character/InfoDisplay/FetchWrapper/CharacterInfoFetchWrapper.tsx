import React from "react";
import { useSWAPI } from "../../../../hooks/useSWAPI";
import { InfoDisplay } from "../InfoDisplay";
import css from "./CharacterInfoWrapperStyle.module.css";



export const CharacterInfoFetchWrapper = () => {
  
  const { charInfo,starshipInfo,planetInfo, loading, error, fetchCharInfo } = useSWAPI();

  
  console.log("charinfo component", charInfo);
  

  console.log("Zeige Char info");

  return (
    <div className={css.general}>
      {loading ? (
        <h4>loading</h4>
      ) : (
        <InfoDisplay charInfo={charInfo} shipInfo={starshipInfo} planetInfo={planetInfo} />
      )}
    </div>
  );
};
