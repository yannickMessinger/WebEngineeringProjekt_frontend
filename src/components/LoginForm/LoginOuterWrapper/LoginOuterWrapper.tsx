import React, { useContext, useState } from "react";
import { LoginForm } from "../Form/LoginForm";
import css from "./LoginOuterWrapperStyle.module.css";
import { CharacterStylingContext } from "../../../context/CharacterStylingContext";
import { Lightsaber } from "../../Lightsaber/Lightsaber";


export const LoginFormOuterWrapper = () => {
  

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
          <Lightsaber hasErrors={formErrors} isActive={saberIsActive} data-testid={'saber_left'}/>
        </div>
        <LoginForm
          loginFormStyle={currentChar!.loginStyle!}
          errorState={formErrors}
          setErrorState={setFormErrors}
          activateSaber={setSaberisActive}
        />
        <div className={css.saber_right}>
          <Lightsaber hasErrors={formErrors} isActive={saberIsActive} data-testid={'saber_right'}/>
        </div>
      </div>
    </div>
  );
};

export { LoginForm };
