import React, { useContext, useEffect, useRef } from "react";
import { CharacterContext } from "../../../context/CharacterContext";
import { ICharacterInfo } from "../../../typings/ICharacterInfo";
import { PlanetInfo } from "../../../typings/IPlanetInfo";
import { StarshipInfo } from "../../../typings/IStarshipInfo";
import { CharacterInfoCard } from "../../CharacterInfo/CharacterInfoCard";
import { PlanetInfoCard } from "../../PlanetInfo/PlanetInfoCard";
import { StarshipInfoCard } from "../../StarshipInfo/StarshipInfoCard";
import { Char3D } from "./Char3D";

import "./InfoDisplayStyle.scss";


interface InfoProps {
  charInfo: ICharacterInfo | undefined;
  shipInfo: StarshipInfo | undefined;
  planetInfo: PlanetInfo | undefined;
}

export const InfoDisplay = ({ charInfo, shipInfo, planetInfo }: InfoProps) => {
  
  const {returnCharacter} = useContext(CharacterContext);
  const infoWrapper = useRef<HTMLInputElement>(null);
  const planetInfoDisplayCard = useRef<HTMLInputElement>(null);
  const characterInfoDisplayCard = useRef<HTMLInputElement>(null);
  const shipInfoDisplayCard = useRef<HTMLInputElement>(null);

  

  const infoCardList = [
    planetInfoDisplayCard,
    characterInfoDisplayCard,
    shipInfoDisplayCard,
  ];

  useEffect(() => {
    const trackGradient = ($event: MouseEvent) => {
      infoCardList.forEach((card) => {
        const cardBoundingBox = card.current!.getBoundingClientRect();

        const x = $event.clientX - cardBoundingBox.left;
        const y = $event.clientY - cardBoundingBox.top;

        card.current?.style.setProperty("--cursorX", `${x}px`);
        card.current?.style.setProperty("--cursorY", `${y}px`);
        card.current?.style.setProperty("--color",`rgba(${returnCharacter().charInfoFrameColor!.r},${returnCharacter().charInfoFrameColor!.g},${returnCharacter().charInfoFrameColor!.b},${returnCharacter().charInfoFrameColor!.a})`) 
      });
    };

    infoWrapper.current?.addEventListener("mousemove", trackGradient);

    return () => {
      infoWrapper.current?.removeEventListener("mousemove", trackGradient);
    };
  }, []);


  return (
    <div className="infoCards" ref={infoWrapper}>
      <div
        className="infoCard"
        ref={characterInfoDisplayCard}
       
      >
        <div className='card-content'>
        <PlanetInfoCard />
        </div>
       
      </div>
      
      <div
        className="infoCard"
        ref={planetInfoDisplayCard}
        
      >
        <div className='card-content'>
       
        <CharacterInfoCard />
        </div>
       
      </div>

      <div
        className="infoCard"
        ref={shipInfoDisplayCard}
        
      >
        <div className='card-content'>
        <StarshipInfoCard />
        </div>
       
      </div>
    </div>

  
  );
};
