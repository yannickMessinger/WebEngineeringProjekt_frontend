import { Dispatch, SetStateAction, useContext } from "react";
import css from "./SideChoice.module.css";

import rebel_logo from "../../../assets/assets_characterChoice/logo_blue.png";
import empire_logo from "../../../assets/assets_characterChoice/empire_logo.png";
import { CharacterStylingContext } from "../../../context/CharacterStylingContext";
import { SideImageButton } from "./SideImageButton/SideImageButton";
import { side } from "../../../typings/character/ESide";

interface LightDarkSideChoiceProps {
  setSideChoosen: Dispatch<SetStateAction<boolean>>;
}

/**
 * Component that displays the two buttons to choose between dark and light side.
 * Based on this decisision, list of available characters in context is filtered and users can now choose from
 * characters of light side or dark side. After side is choosen, passed function is called to update state and
 * trigger conditional rendering of parent component to display CharacterChoiceDisplay component.
 * @param setSideChoosen function to change state if side was choosen or not
 * @returns the component und the Star Wars Logo containing the buttons to switch side.
 */
export const LightDarkSideChoice = ({
  setSideChoosen,
}: LightDarkSideChoiceProps) => {
  const { setDarkCharacters, setLightCharacters } = useContext(
    CharacterStylingContext
  );

  return (
    <div className={css.switchtheme}>
      <SideImageButton
        logopath={rebel_logo}
        className={css.rebelLogo}
        setSide={setLightCharacters}
        altTitle={"rebel_logo"}
        setSideChoosen={setSideChoosen}
      />
      <SideImageButton
        logopath={empire_logo}
        className={css.empireLogo}
        setSide={setDarkCharacters}
        altTitle={"empire_logo"}
        setSideChoosen={setSideChoosen}
      />
    </div>
  );
};
