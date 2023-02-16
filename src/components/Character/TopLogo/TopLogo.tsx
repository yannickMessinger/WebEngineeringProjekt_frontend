import css from "./TopLogo.module.css";
import logo from "../../../assets/assets_characterChoice/logo_no_back.png";


interface TopLogoProps {
  textOverLogo:string
  textUnderLogo:string
}


export const TopLogo = ({textOverLogo,textUnderLogo} : TopLogoProps) => {
  return (
    <div className={css.logo}>
      <div className={css.toptext}>
        <p>{textOverLogo}</p>
      </div>

      <div className={css.logoWrapper}>
        <img src={logo} className={css.logoSizing} alt={'StarWarsLogo'}/>
      </div>

      <div className={css.toptext}>
        <p>{textUnderLogo}</p>
      </div>
    </div>
  );
};
