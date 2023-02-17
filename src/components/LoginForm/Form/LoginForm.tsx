import React, { useContext, useEffect, useRef, useState } from "react";
import { CharacterStylingContext } from "../../../context/CharacterStylingContext";
import { FormError } from "./FormError/FormError";
import css from "./LoginFormStyle.module.css";
import { PictureFrame } from "./LoginPictureFrame/PictureFrame";
import { useNavigate } from "react-router-dom";
import { LoginContext } from "../../../context/LoginContext";

interface LoginStyleProps {
  loginFormStyle: { background: string };
  setErrorState: (error: boolean) => void;
  activateSaber: (active: boolean) => void;
}
/**
 * form that user has to fill out in the displayed input fields. The form has individual look, based on the character
 * that was choosen in the beginning. Input fields are then validated if they contain info and in certain cases
 * if info is in the correct format.
 * 
 * Form only accepts E mail in certain format and phone numbers that only contain digits, also birthday canot be in future.
 * If form contains errors, they are displayed under the coressponding input field. 
 * Also the lightsabers are activated and the blade is set to red color. The user
 * is not directed to next page unless form is filled out correctly. 
 * Then lightsabers are set to green and login function of LoginContext saves the login informations.
 * In mobile view frame around picture is set to green to symbolize correct data.
 * @param loginFormStyle passed style prop that contains parameters for color gradient, based on choosen character
 * @param setErrorState passed function to set errorState in LoginOuterWrapping component to activate lightsabers in correct color.
 * @param activateSaber passed funtion to activate lightsaberblade
 * @returns the LoginForm Component in the middle.
 */
export const LoginForm = ({
  loginFormStyle,
  setErrorState,
  activateSaber,
}: LoginStyleProps) => {
  const loginFormRef = useRef<HTMLInputElement>(null);
  const pictureFrameRef = useRef<HTMLInputElement>(null);
  const { currentChar } = useContext(CharacterStylingContext);
  const { logIn } = useContext(LoginContext);
  const [nextPage, setNextPage] = useState(false);
  const navigate = useNavigate();
  const validEmail = new RegExp(
    "^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$"
  );
  const validPhoneNumber = new RegExp("^[0-9]*$");

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userName, setUserName] = useState("");
  const [birthday, setBirthday] = useState("");
  const [mailAdress, setMailAdress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const [formErrors, setFormErrors] = useState({
    firstName: "",
    lastName: "",
    userName: "",
    phoneNumber: "",
    birthday: "",
    mailAdress: "",
  });

  //sets parameters for background color gradient
  useEffect(() => {
    loginFormRef.current?.style.setProperty(
      "--backgroundGradient",
      loginFormStyle.background
    );
  }, [loginFormStyle.background]);

  /*function that imitates on and of function of saber with time delay
  *so that lightsabers retract once and are activated again
  */
  function switchSaber(error: boolean) {
    activateSaber(false);
    setTimeout(() => {
      setErrorState(error);
      activateSaber(true);
    }, 600);
  }

  /**
   * Validates form data when user click "Registrieren" button. 
   * Directs to next page if no errors exist, stays on page and displays errors if otherwise
   * @param event event that is passed from clicking "Registrieren" button
   */
  const validateFormData = (event: React.MouseEvent) => {
    event.preventDefault();
    const errors = {
      firstName: "",
      lastName: "",
      userName: "",
      phoneNumber: "",
      birthday: "",
      mailAdress: "",
    };

    if (firstName === "") {
      errors.firstName = "Vorname leer";
    }

    if (lastName === "") {
      errors.lastName = "Nachname leer";
    }

    if (userName === "") {
      errors.userName = "Username leer";
    }

    if (phoneNumber === "") {
      errors.phoneNumber = "TelNum leer";
    }

    if (!validPhoneNumber.test(phoneNumber)) {
      errors.phoneNumber = "nur Zahlen!";
    }

    if (birthday === "") {
      errors.birthday = "Geburtstag leer";
    }

    if (new Date(birthday) > new Date(Date.now())) {
      errors.birthday = "kein Geb. aus Zukunft";
    }

    if (mailAdress === "") {
      errors.mailAdress = "Mail leer";
    }

    if (!validEmail.test(mailAdress)) {
      errors.mailAdress = "Format: user@example.com";
    }

    setFormErrors(errors);
    setErrorState(true);
    if (
      errors.firstName === "" &&
      errors.lastName === "" &&
      errors.userName === "" &&
      errors.phoneNumber === "" &&
      errors.birthday === "" &&
      errors.mailAdress === ""
    ) {
      logIn(firstName, lastName, userName, birthday, mailAdress, phoneNumber);
      switchSaber(false);
      if(window.innerWidth <= 400){
        pictureFrameRef.current?.style.setProperty('--pictureFrameColor','green')
       
      }
      //function to disable clicking when navigating to next page
      setNextPage(true);
      setTimeout(() => {
        navigate("/");
      }, 2000);
    } else {
      switchSaber(true);
      console.log("error in login form");
    }
  };

  return (
    <div className={css.loginForm} ref={loginFormRef}>
      <div className={css.login_header} data-cy="login_header">
        <p>Willkommen</p>
        <div ref={pictureFrameRef} className={css.pictureFrame}>
          <PictureFrame
            img_path={currentChar!.img_path} 
            testid={currentChar.name!}        
            />
        </div>
      </div>
      <div className={`${css.login_main} ${nextPage ? css.disable : ""}`}>
        <div className={css.first_name} data-cy="input_firstname">
          <input
            data-testid={"firstName"}
            value={firstName}
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
            type={"text"}
            className={css.styledinput}
            placeholder={"Vorname"}
          />
          <div data-cy="error_firstname">
            {formErrors.firstName && (
              <FormError
                errormsg={formErrors.firstName}
                data-testid={"firstNameError"}
              ></FormError>
            )}
          </div>
        </div>

        <div className={css.last_name} data-cy="input_lastname">
          <input
            data-testid={"lastName"}
            value={lastName}
            onChange={(e) => {
              setLastName(e.target.value);
            }}
            type={"text"}
            className={css.styledinput}
            placeholder={"Nachname"}
          />
          <div data-cy="error_lastname">
            {formErrors.lastName && (
              <FormError
                errormsg={formErrors.lastName}
                data-testid={"lastNameError"}
              ></FormError>
            )}
          </div>
        </div>

        <div className={css.user_name} data-cy="input_username">
          <input
            data-testid={"userName"}
            value={userName}
            onChange={(e) => {
              setUserName(e.target.value);
            }}
            type={"text"}
            className={css.styledinput}
            placeholder={"Username"}
          />
          <div data-cy="error_username">
            {formErrors.userName && (
              <FormError
                errormsg={formErrors.userName}
                data-testid={"userNameError"}
              ></FormError>
            )}
          </div>
        </div>

        <div className={css.birthday} data-cy="input_birthday">
          <input
            data-testid={"birthday"}
            value={birthday}
            onChange={(e) => {
              setBirthday(e.target.value);
            }}
            type={"date"}
            className={css.styledinput}
            placeholder={"Geburtstag"}
          />
          <div data-cy="error_birthday">
            {formErrors.birthday && (
              <FormError
                errormsg={formErrors.birthday}
                data-testid={"birthdayError"}
              ></FormError>
            )}
          </div>
        </div>

        <div className={css.adress} data-cy="input_adress">
          <input
            data-testid={"mailadress"}
            value={mailAdress}
            onChange={(e) => {
              setMailAdress(e.target.value);
            }}
            type={"text"}
            className={css.styledinput}
            placeholder={"Mailadresse"}
          />
          <div data-cy="error_email">
            {formErrors.mailAdress && (
              <FormError
                errormsg={formErrors.mailAdress}
                data-testid={"mailadressError"}
              ></FormError>
            )}
          </div>
        </div>

        <div className={css.phone_number} data-cy="input_phonenumber">
          <input
            data-testid={"phonenumber"}
            value={phoneNumber}
            onChange={(e) => {
              setPhoneNumber(e.target.value);
            }}
            type={"text"}
            className={css.styledinput}
            placeholder={"Telefonnummer"}
          />
          <div data-cy="error_phone">
            {formErrors.phoneNumber && (
              <FormError
                errormsg={formErrors.phoneNumber}
                data-testid={"phoneNumberError"}
              ></FormError>
            )}
          </div>
        </div >
      
        <button 
          className={css.submit_button}
          onClick={(e) => {
            validateFormData(e);
          }}
        >
          Registrieren
        </button>
        </div>
      
    </div>
  );
};
