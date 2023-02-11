import React, { useContext, useState } from "react";
import { CharacterStylingContext } from "../../../context/CharacterStylingContext";
import { FormError } from "./FormInput/FormError";
import { StyledFormInput } from "./FormInput/StyledFormInput";
import css from "./LoginFormStyle.module.css";
import { LoginPictureFrame } from "./LoginPictureFrame/LoginPictureFrame";
import { useNavigate } from "react-router-dom";
import { LoginContext } from "../../../context/LoginContext";


interface  LoginStyleProps{
  loginFormStyle:{background:string}
  errorState :boolean
  setErrorState: (error:boolean) => void
  activateSaber:(active:boolean) => void
}

export const LoginForm = ({loginFormStyle,errorState,setErrorState,activateSaber}:LoginStyleProps) => {
  //TODO: Validierung der jeweiligen Felder mittels Regex
  //Triggern der Fehler msg?
  //contrast erhöhen durch Anpassen des Farbverlaufs
  
  
  const { currentChar } = useContext(CharacterStylingContext);
  const {logIn} = useContext(LoginContext)
  const[nextPage, setNextPage] = useState(false);
  const navigate = useNavigate();

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

  function switchSaber(error:boolean){
    activateSaber(false)
    setTimeout(() => {
      setErrorState(error)
      activateSaber(true)
    }, 600);
  }



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
    setErrorState(true);
    if(errors.firstName === "" && errors.lastName ==="" && errors.phoneNumber === "" && errors.birthday === "" && errors.adress === ""){
      logIn(firstName,lastName,birthday,adress,phoneNumber);
      switchSaber(false)
      
      setNextPage(true);
      setTimeout(() =>{
        navigate("/chartransition")

      }, 2000)
      
    }else{
      //hier error msg des jeweiligen charakters triggern?
      //setErrorState(true)
      switchSaber(true)
      console.log("error in login form")
    }
    
    
  };

  return (
    <div className={css.loginForm} style={loginFormStyle}>
      <div className={css.login_header}>
        <p>Welcome</p>
        <div>
          <LoginPictureFrame img_path={currentChar!.img_path} />
        </div>
      </div>
      <div className={`${css.login_main} ${nextPage? css.disable: ''}`}>
        
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
            placeholder={"emailadress"}
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
            go
          </button>
        </div>
      </div>
    </div>
  );
};
