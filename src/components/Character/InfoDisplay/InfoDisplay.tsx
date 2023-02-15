import { useContext, useEffect, useRef } from "react";
import { CharacterStylingContext } from "../../../context/CharacterStylingContext";
import { CharacterInfo } from "../../../typings/CharacterInfo";
import { PlanetInfo } from "../../../typings/IPlanetInfo";
import { StarshipInfo } from "../../../typings/IStarshipInfo";
import { CharacterInfoCard } from "../../CharacterInfo/CharacterInfoCard";
import { PlanetInfoCard } from "../../PlanetInfo/PlanetInfoCard";
import { StarshipInfoCard } from "../../StarshipInfo/StarshipInfoCard";


import "./InfoDisplayStyle.scss";


interface InfoProps {
  charInfo: CharacterInfo | undefined;
  shipInfo: StarshipInfo | undefined;
  planetInfo: PlanetInfo | undefined;
}

export const InfoDisplay = ({ charInfo, shipInfo, planetInfo }: InfoProps) => {
  

  const {currentChar} = useContext(CharacterStylingContext);
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
        card.current?.style.setProperty("--color",`rgba(${currentChar?.charInfoFrameColor!.r},${currentChar?.charInfoFrameColor!.g},${currentChar?.charInfoFrameColor!.b},${currentChar?.charInfoFrameColor!.a})`) 
      });
    };

    infoWrapper.current?.addEventListener("mousemove", trackGradient);

    return () => {
      infoWrapper.current?.removeEventListener("mousemove", trackGradient);
    };
  }, []);


  return (
  <div className='wrapper'>
    <div className="infoCards" ref={infoWrapper}>
      <div
        className="infoCard"
        ref={characterInfoDisplayCard}
       
      >
        <div className='card-content'>
        <PlanetInfoCard info={planetInfo!} />
        </div>
       
      </div>
      
      <div
        className="infoCard"
        ref={planetInfoDisplayCard}
        
      >
        <div className='card-content'>
       
        <CharacterInfoCard info={charInfo} />
        </div>
       
      </div>

      <div
        className="infoCard"
        ref={shipInfoDisplayCard}
        
      >
        <div className='card-content'>
        <StarshipInfoCard info={shipInfo} />
        </div>
       
      </div>
    </div>
  </div>

  
  );
};
