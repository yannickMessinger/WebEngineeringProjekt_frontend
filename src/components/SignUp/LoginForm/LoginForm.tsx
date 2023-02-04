import React, { useContext, useState } from "react";
import css from "./Loginform.module.css";
import { CharacterContext } from "../../../context/CharacterContext";
import { Link } from "react-router-dom";
import { StyledFormInput } from "./StyledFormInput";
import { FormError } from "./FormError";
import saberhandle from "../../../assets/saber.png";

export const LoginForm = () => {
  // TODO: Groesse des Bildes anpasse
  // TODO: Charinfo in Landing Page umbenennen und da alles an components rein
  // TODO: rote u grüne Laserschwerter je nach Fehler, error msg von character anzeige
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
    <div className={css.loginGeneral}>
      <div className={css.loginheader}>
        <img src={returnCharacter().img_path} className={css.loginheaderimg} />
      </div>

      <div className={css.lightsaber_left}>
        <div className={`${css.plasma} ${css.yoda}`}>
        LEFT
        </div>
        <img src={saberhandle}></img>
      </div>

      <div className={css.loginform}>
        <div className={css.logininputfields}>
          <div className={css.firstname}>
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

          <div className={css.lastname}>
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

          <div className={css.phonenumber}>
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
        </div>

        <div className={css.buttonbox}>
          <button
            onClick={(e) => {
              validateFormData(e);
            }}
          >
            GO
          </button>
        </div>
      </div>

      <div className={css.lightsaber_right}>
      <div className={`${css.plasma} ${css.vader}`}>
        RIGHT
        </div>

        <img src={saberhandle}></img>
      </div>

      

      <div className={css.loginfooter}>FOOTER</div>
    </div>
  );
};
