import { useContext, useEffect, useMemo, useRef } from "react";
import { CharacterStylingContext } from "../../context/CharacterStylingContext";
import { CharacterInfo } from "../../typings/character/CharacterInfo";
import { PlanetInfo } from "../../typings/character/IPlanetInfo";
import { StarshipInfo } from "../../typings/character/IStarshipInfo";
import { CharacterInfoCard } from "./CharacterInfo/CharacterInfoCard";
import { PlanetInfoCard } from "./PlanetInfo/PlanetInfoCard";
import { StarshipInfoCard } from "./StarshipInfo/StarshipInfoCard";

import "./InfoDisplayStyle.scss";

interface InfoProps {
  charInfo: CharacterInfo | undefined;
  shipInfo: StarshipInfo | undefined;
  planetInfo: PlanetInfo | undefined;
}
/**
 * Parent component to display all 3 infocards containing information about the planet, starship and the character himself
 * that user has choosen beforehand. Coressponding info objects are handed from TransitionScreen Component, where custim hook
 * useSWAPI is called to obtain information.
 * 
 * Component used to attach event listeners to HTML Elements to set x and y position values of cursor for
 * css class to track positions to create color frame effect. For performance reasons, event listeners are detached in cleanup function when
 * Component is unmounted. Color value is determinded by styling information connected to each character from StylingContext and than set to css variable.
 * @param charInfo info object containing fetched character infos
 * @param shipInfo info object containing fetched starship infos of character
 * @param planetInfo info object containing fetched planet infos of character
 * @returns 
 */
export const InfoDisplay = ({ charInfo, shipInfo, planetInfo }: InfoProps) => {
  const { currentChar } = useContext(CharacterStylingContext);
  const infoWrapper = useRef<HTMLInputElement>(null);
  const planetInfoDisplayCard = useRef<HTMLInputElement>(null);
  const characterInfoDisplayCard = useRef<HTMLInputElement>(null);
  const shipInfoDisplayCard = useRef<HTMLInputElement>(null);

  const infoCardList = useMemo(() => {
    return [
      planetInfoDisplayCard,
      characterInfoDisplayCard,
      shipInfoDisplayCard,
    ];
  }, []);

  /**
   * Attaches and detaches event listeners to info cards for color frame effect
   */
  useEffect(() => {
    const trackGradient = ($event: MouseEvent) => {

      infoCardList.forEach((card) => {
        const cardBoundingBox = card.current!.getBoundingClientRect();

        const x = $event.clientX - cardBoundingBox.left;
        const y = $event.clientY - cardBoundingBox.top;

        card.current?.style.setProperty("--cursorX", `${x}px`);
        card.current?.style.setProperty("--cursorY", `${y}px`);
        card.current?.style.setProperty(
          "--color",
          `rgba(${currentChar?.charInfoFrameColor!.r},${
            currentChar?.charInfoFrameColor!.g
          },${currentChar?.charInfoFrameColor!.b},${
            currentChar?.charInfoFrameColor!.a
          })`
        );
      });
    };

    infoWrapper.current?.addEventListener("mousemove", trackGradient);
   
  return () => {
      infoWrapper.current?.removeEventListener("mousemove", trackGradient);
    };
  }, [currentChar.charInfoFrameColor, infoCardList]);

  return (
    <div className="wrapper">
      <div className="infoCards" ref={infoWrapper}>
        <div className="infoCard" ref={characterInfoDisplayCard}>
          <div className="card-content">
            <PlanetInfoCard info={planetInfo!} />
          </div>
        </div>

        <div className="infoCard" ref={planetInfoDisplayCard}>
          <div className="card-content">
            <CharacterInfoCard info={charInfo} />
          </div>
        </div>

        <div className="infoCard" ref={shipInfoDisplayCard}>
          <div className="card-content">
            <StarshipInfoCard info={shipInfo} />
          </div>
        </div>
      </div>
    </div>
  );
};
