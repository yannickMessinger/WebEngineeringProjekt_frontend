import React, { useContext, useState } from "react";
import { LoginForm } from "../Form/LoginForm";
import css from "./LoginOuterWrapperStyle.module.css";
import { CharacterStylingContext } from "../../../context/CharacterStylingContext";
import { Lightsaber } from "../../Lightsaber/Lightsaber";


export const LoginFormOuterWrapper = () => {
  
  //TODO: Farbverlauf weiter nach unten um Schirft besser lesbar zu machen
  //TODO: Schriftfarbe bei hellen Hintergründen mit mehr Kontrast auf dunkel setzen

  const { currentChar } = useContext(CharacterStylingContext);
  const [formErrors, setFormErrors] = useState(false);
  const [saberIsActive, setSaberisActive] = useState(false);

  const imgStyles = {
    backgroundImage: `url(${currentChar!.login_img_path})`,
    height: "100%",
    minHeight: "100vh",
    overflow: "auto",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };

  return (
    <div className={css.outerWrapper} style={imgStyles}>
      <div className={css.login_form}>
        <div className={css.saber_left}>
          <Lightsaber hasErrors={formErrors} isActive={saberIsActive} />
        </div>
        <LoginForm
          loginFormStyle={currentChar!.loginStyle!}
          errorState={formErrors}
          setErrorState={setFormErrors}
          activateSaber={setSaberisActive}
        />
        <div className={css.saber_right}>
          <Lightsaber hasErrors={formErrors} isActive={saberIsActive} />
        </div>
      </div>
    </div>
  );
};

export { LoginForm };
