import { useContext, useEffect, useRef } from "react";
import { CharacterStylingContext } from "../../../context/CharacterStylingContext";
import { StarshipInfo } from "../../../typings/character/IStarshipInfo";
import { PictureFrame } from "../../LoginForm/Form/LoginPictureFrame/PictureFrame";
import css from "./StarshipInfoCardStyle.module.css";
interface StarshipInfoProps {
  info: StarshipInfo | undefined;
}

/**
 * Component to display fetched infos about the starship of choosen character from SWAPI api. 
 * Frame and table color is adapted to choosen characters main color.
 * To achive that, css color variable is set dynamically. 
 * @param info object that contains all necessary starship infos, fetched from swapi.
 * @returns Starship Info Card to be displayed in InfoDisplay Component.
 */
export const StarshipInfoCard = ({ info }: StarshipInfoProps) => {
  const { currentChar } = useContext(CharacterStylingContext);
  const starShipInfoWrapper = useRef<HTMLInputElement>(null);

  useEffect(() => {
    starShipInfoWrapper.current?.style.setProperty(
      "--color",
      `rgba(${currentChar?.charInfoFrameColor!.r},${
        currentChar?.charInfoFrameColor!.g
      },${currentChar?.charInfoFrameColor!.b},${
        currentChar?.charInfoFrameColor!.a
      })`
    );
  }, [currentChar.charInfoFrameColor]);

  return (
    <div className={css.starshipInfoWrapper} ref={starShipInfoWrapper}>
      <div className={css.header}>Schiff Info</div>
      <div className={css.ship_pic}>
        <PictureFrame
          img_path={currentChar?.ship_img_path!} 
          testid={currentChar.name!}        />
      </div>
      <div className={css.name}>Name: {info?.name}</div>
      <div className={css.model}>Model: {info?.model}</div>
      <div className={css.manufacturer}>Hersteller: {info?.manufacturer}</div>
      {info?.length === "keine Info" ? (
        <div className={css.length}>Laenge: {info?.length}</div>
      ) : (
        <div className={css.length}>Laenge: {info?.length} m</div>
      )}
      {info?.hyperdrive_rating === "keine Info" ? (
        <div className={css.hyperdrive}>
          Hyperraumantriebklasse: {info?.hyperdrive_rating}
        </div>
      ) : (
        <div className={css.hyperdrive}>
          Hyperraumantriebklasse: {info?.hyperdrive_rating}
        </div>
      )}
      {info?.max_atmosphering_speed === "keine Info" ? (
        <div className={css.max_speed}>
          MaxGeschw. Athmosph.: {info?.max_atmosphering_speed}
        </div>
      ) : (
        <div className={css.max_speed}>
          Max. Geschw. Athmosphaere: {info?.max_atmosphering_speed} km/h
        </div>
      )}
    </div>
  );
};
