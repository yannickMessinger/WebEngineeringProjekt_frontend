import { useContext, useState } from "react";
import { LoginForm } from "../Form/LoginForm";
import css from "./LoginOuterWrapperStyle.module.css";
import { CharacterStylingContext } from "../../../context/CharacterStylingContext";
import { Lightsaber } from "../../Lightsaber/Lightsaber";
/**
 * wrapper class that contains left lightsaber, the login form in the middle and the right lightsaber
 * @returns Component with login form so that user can register
 */
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
        <div className={css.saber_left} data-cy="saber_left">
          <Lightsaber
            hasErrors={formErrors}
            isActive={saberIsActive}
            data-testid={"saber_left"} 
            cy_id_blade={"blade_left"}          
            />
        </div>
        <LoginForm
          loginFormStyle={currentChar!.loginStyle!}
          setErrorState={setFormErrors}
          activateSaber={setSaberisActive}
        />
        <div className={css.saber_right} data-cy="saber_right">
          <Lightsaber
            hasErrors={formErrors}
            isActive={saberIsActive}
            data-testid={"saber_right"} 
            cy_id_blade={"blade_right"}          
            />
        </div>
      </div>
    </div>
  );
};
