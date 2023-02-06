import React, { useContext, useState } from "react";
import { CharacterContext } from "../../../context/CharacterContext";
import { FormError } from "./FormInput/FormError";
import { StyledFormInput } from "./FormInput/StyledFormInput";
import css from "./LoginFormStyle.module.css";
import { LoginPictureFrame } from "./LoginPictureFrame/LoginPictureFrame";

export const LoginForm = () => {
  //bild evtl besser per css anpassen mit width auto
  const { returnCharacter } = useContext(CharacterContext);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [birthday, setBirthday] = useState("");
  const [adress, setAdress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [formErrors, setFormErrors] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    birthday: "",
    adress: "",
  });

  const validateFormData = (event: any) => {
    //TODO Regex Expression nutzen für Validierung????
    event.preventDefault();
    const errors = {
      firstName: "",
      lastName: "",
      phoneNumber: "",
      birthday: "",
      adress: "",
    };

    if (firstName === "") {
      errors.firstName = "kaa leere vorname";
    }

    if (lastName === "") {
      errors.lastName = "kaa leere nachname";
    }

    if (phoneNumber === "") {
      errors.phoneNumber = "kaa leere nummä";
    }

    if (birthday === "") {
      errors.birthday = "kaa leere geboortsdaach";
    }

    if (adress === "") {
      errors.adress = "kaa leere Adress";
    }

    setFormErrors(errors);
  };

  return (
    <div className={css.loginForm}>
      <div className={css.login_header}>
        <p>Welcome</p>
        <div>
          <LoginPictureFrame img_path={returnCharacter().img_path} />
        </div>
      </div>
      <div className={css.login_main}>
        <div className={css.first_name}>
          <StyledFormInput
            value={firstName}
            onchange={setFirstName}
            type={"text"}
            classname={css.styledinput}
            placeholder={"firstname"}
          ></StyledFormInput>
          {formErrors.firstName && (
            <FormError name={formErrors.firstName}></FormError>
          )}
        </div>

        <div className={css.last_name}>
          <StyledFormInput
            value={lastName}
            onchange={setLastName}
            type={"text"}
            classname={css.styledinput}
            placeholder={"lastname"}
          ></StyledFormInput>
          {formErrors.lastName && (
            <FormError name={formErrors.lastName}></FormError>
          )}
        </div>

        <div className={css.birthday}>
          <StyledFormInput
            value={birthday}
            onchange={setBirthday}
            type={"date"}
            classname={css.styledinput}
            placeholder={"birthday"}
          ></StyledFormInput>
          {formErrors.birthday && (
            <FormError name={formErrors.birthday}></FormError>
          )}
        </div>

        <div className={css.adress}>
          <StyledFormInput
            value={adress}
            onchange={setAdress}
            type={"text"}
            classname={css.styledinput}
            placeholder={"adress"}
          ></StyledFormInput>
          {formErrors.adress && (
            <FormError name={formErrors.adress}></FormError>
          )}
        </div>

        <div className={css.phone_number}>
        <StyledFormInput
              value={phoneNumber}
              onchange={setPhoneNumber}
              type={"text"}
              classname={css.styledinput}
              placeholder={"phonenumber"}
            ></StyledFormInput>
            {formErrors.phoneNumber && (
              <FormError name={formErrors.phoneNumber}></FormError>
            )}
        </div>

        <div className={css.submit_button}>
        <button
            onClick={(e) => {
              validateFormData(e);
            }}
          >
            GO
          </button>
        </div>
      </div>
    </div>
  );
};
