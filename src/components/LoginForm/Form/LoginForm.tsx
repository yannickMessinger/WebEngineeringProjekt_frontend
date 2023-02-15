import React, { useContext, useState } from "react";
import { CharacterStylingContext } from "../../../context/CharacterStylingContext";
import { FormError } from "./FormError/FormError";
import css from "./LoginFormStyle.module.css";
import { PictureFrame } from "./LoginPictureFrame/PictureFrame";
import { useNavigate } from "react-router-dom";
import { LoginContext } from "../../../context/LoginContext";

interface LoginStyleProps {
  loginFormStyle: { background: string };
  errorState: boolean;
  setErrorState: (error: boolean) => void;
  activateSaber: (active: boolean) => void;
}

export const LoginForm = ({
  loginFormStyle,
  errorState,
  setErrorState,
  activateSaber,
}: LoginStyleProps) => {
  //TODO: Validierung der jeweiligen Felder mittels Regex
  //Username validierung format
  //contrast erhöhen durch Anpassen des Farbverlaufs

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

  function switchSaber(error: boolean) {
    activateSaber(false);
    setTimeout(() => {
      setErrorState(error);
      activateSaber(true);
    }, 600);
  }

  const validateFormData = (event: any) => {
    //TODO Regex Expression nutzen für Validierung????
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
      errors.firstName = "empty first name";
    }

    if (lastName === "") {
      errors.lastName = "empty last name";
    }

    if (userName === "") {
      errors.userName = "empty username";
    }

    if (phoneNumber === "") {
      errors.phoneNumber = "empty phone number";
    }

    if (!validPhoneNumber.test(phoneNumber)) {
      errors.phoneNumber = "digits only!";
    }

    if (birthday === "") {
      errors.birthday = "empty birthday";
    }

    if (new Date(birthday) > new Date(Date.now())) {
      errors.birthday = "no birthday from future";
    }

    if (mailAdress === "") {
      errors.mailAdress = "empty mail adress";
    }

    if (!validEmail.test(mailAdress)) {
      errors.mailAdress = "format: user@example.com";
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

      setNextPage(true);
      setTimeout(() => {
        navigate("/chartransition");
      }, 2000);
    } else {
      switchSaber(true);
      console.log("error in login form");
    }
  };

  return (
    <div className={css.loginForm} style={loginFormStyle}>
      <div className={css.login_header}>
        <p>Welcome</p>
        <div>
          <PictureFrame
            img_path={currentChar!.img_path}
            testid={currentChar.name!}
          />
        </div>
      </div>
      <div className={`${css.login_main} ${nextPage ? css.disable : ""}`}>
        <div className={css.first_name}>
          <input
            data-testid={"firstName"}
            value={firstName}
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
            type={"text"}
            className={css.styledinput}
            placeholder={"firstname"}
          />
          <div>
            {formErrors.firstName && (
              <FormError
                name={formErrors.firstName}
                data-testid={"firstNameError"}
              ></FormError>
            )}
          </div>
        </div>

        <div className={css.last_name}>
          <input
            data-testid={"lastName"}
            value={lastName}
            onChange={(e) => {
              setLastName(e.target.value);
            }}
            type={"text"}
            className={css.styledinput}
            placeholder={"lastname"}
          />
          <div>
            {formErrors.lastName && (
              <FormError
                name={formErrors.lastName}
                data-testid={"lastNameError"}
              ></FormError>
            )}
          </div>
        </div>

        <div className={css.user_name}>
          <input
            data-testid={"userName"}
            value={userName}
            onChange={(e) => {
              setUserName(e.target.value);
            }}
            type={"text"}
            className={css.styledinput}
            placeholder={"username"}
          />
          <div>
            {formErrors.lastName && (
              <FormError
                name={formErrors.userName}
                data-testid={"userNameError"}
              ></FormError>
            )}
          </div>
        </div>

        <div className={css.birthday}>
          <input
            data-testid={"birthday"}
            value={birthday}
            onChange={(e) => {
              setBirthday(e.target.value);
            }}
            type={"date"}
            className={css.styledinput}
            placeholder={"birthday"}
          />
          <div>
            {formErrors.birthday && (
              <FormError
                name={formErrors.birthday}
                data-testid={"birthdayError"}
              ></FormError>
            )}
          </div>
        </div>

        <div className={css.adress}>
          <input
            data-testid={"mailadress"}
            value={mailAdress}
            onChange={(e) => {
              setMailAdress(e.target.value);
            }}
            type={"text"}
            className={css.styledinput}
            placeholder={"emailadress"}
          />
          <div>
            {formErrors.mailAdress && (
              <FormError
                name={formErrors.mailAdress}
                data-testid={"mailadressError"}
              ></FormError>
            )}
          </div>
        </div>

        <div className={css.phone_number}>
          <input
            data-testid={"phonenumber"}
            value={phoneNumber}
            onChange={(e) => {
              setPhoneNumber(e.target.value);
            }}
            type={"text"}
            className={css.styledinput}
            placeholder={"phonenumber"}
          />
          <div>
            {formErrors.phoneNumber && (
              <FormError
                name={formErrors.phoneNumber}
                data-testid={"phoneNumberError"}
              ></FormError>
            )}
          </div>
        </div>

        <button
          className={css.submit_button}
          onClick={(e) => {
            validateFormData(e);
          }}
        >
          register
        </button>
      </div>
    </div>
  );
};
