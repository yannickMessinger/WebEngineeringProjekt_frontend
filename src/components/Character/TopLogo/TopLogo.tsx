import css from "./TopLogo.module.css";
import logo from "../../../assets/assets_characterChoice/logo_no_back.png";

interface TopLogoProps {
  textOverLogo: string;
  textUnderLogo: string;
}
/**
 * Component that represents the top part of the CharacterChoice component, contains different text depending
 * on if user has choosen light or dark side
 * @param textOverLogo passed text to be displayed over the Star Wars Logo
 * @param textUnderLogo passed text to be displayed under the Star Wars Logo
 * @returns the top part of CharacterChoice component
 */
export const TopLogo = ({ textOverLogo, textUnderLogo }: TopLogoProps) => {
  return (
    <div className={css.logo}>
      <div className={css.toptext} data-cy="top_text">
        <p>{textOverLogo}</p>
      </div>

      <div className={css.logoWrapper}>
        <img src={logo} className={css.logoSizing} alt={"StarWarsLogo"} />
      </div>

      <div className={css.toptext} data-cy="bottom_text">
        <p>{textUnderLogo}</p>
      </div>
    </div>
  );
};
