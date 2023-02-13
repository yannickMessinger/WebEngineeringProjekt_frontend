import React, { useContext, useState } from "react";
import { CharacterStylingContext } from "../../../context/CharacterStylingContext";
import { FormError } from "./FormError/FormError";
import css from "./LoginFormStyle.module.css";
import { PictureFrame } from "./LoginPictureFrame/PictureFrame";
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
  //Username validierung format
  //contrast erhöhen durch Anpassen des Farbverlaufs
  
  
  const { currentChar } = useContext(CharacterStylingContext);
  const {logIn} = useContext(LoginContext)
  const[nextPage, setNextPage] = useState(false);
  const navigate = useNavigate();
  const validEmail = new RegExp('^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$')

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const[userName, setUserName] = useState("");
  const [birthday, setBirthday] = useState("");
  const [mailAdress, setMailAdress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  
  const [formErrors, setFormErrors] = useState({
    firstName: "",
    lastName: "",
    userName:"",
    phoneNumber: "",
    birthday: "",
    mailAdress: "",
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
      userName:"",
      phoneNumber: "",
      birthday: "",
      mailAdress: "",
    };

    //console.log(new Date(birthday) > new Date(Date.now()))

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
      errors.phoneNumber = "leere Nummer";
    }

    if (birthday === "") {
      errors.birthday = "Geburtstag leer";
    }

    if(new Date(birthday) > new Date(Date.now())){
      errors.birthday ="kein zukünftiger Geburtstag!"
    }
    

    if (mailAdress === "") {
      errors.mailAdress = "Mailadresse leer";
    }
    
    if(!validEmail.test(mailAdress)){
      errors.mailAdress ="falsches Mailformat"
    }

    setFormErrors(errors);
    setErrorState(true);
    if(errors.firstName === "" && errors.lastName ==="" && errors.userName=="" && errors.phoneNumber === "" && errors.birthday === "" && errors.mailAdress === ""){
      logIn(firstName,lastName,userName,birthday,mailAdress,phoneNumber);
      switchSaber(false)
      
      setNextPage(true);
      setTimeout(() =>{
        navigate("/chartransition")

      }, 2000)
      
    }else{
      switchSaber(true)
      console.log("error in login form")
    }
    
    
  };

  return (
    <div className={css.loginForm} style={loginFormStyle}>
      <div className={css.login_header}>
        <p>Welcome</p>
        <div>
          <PictureFrame img_path={currentChar!.img_path} />
        </div>
      </div>
      <div className={`${css.login_main} ${nextPage? css.disable: ''}`}>
        
        <div className={css.first_name}>
          <input
            value={firstName}
            onChange={(e)=> {setFirstName(e.target.value)}}
            type={"text"}
            className={css.styledinput}
            placeholder={"firstname"}
          />
          <div>
          {formErrors.firstName && (
            <FormError name={formErrors.firstName}></FormError>
          )}
          </div>
          
        </div>

        <div className={css.last_name}>
          <input
            value={lastName}
            onChange={(e) =>{setLastName(e.target.value)}}
            type={"text"}
            className={css.styledinput}
            placeholder={"lastname"}
          />
          <div>
          {formErrors.lastName && (
            <FormError name={formErrors.lastName}></FormError>
          )}
          </div>
         
        </div>

        <div className={css.user_name}>
          <input
            value={userName}
            onChange={(e) => {setUserName(e.target.value)}}
            type={"text"}
            className={css.styledinput}
            placeholder={"user name"}
          />
          <div>
          {formErrors.lastName && (
            <FormError name={formErrors.userName}></FormError>
          )}
          </div>
          
        </div>

        <div className={css.birthday}>
          <input
            value={birthday}
            onChange={(e) =>{setBirthday(e.target.value)}}
            type={"date"}
            className={css.styledinput}
            placeholder={"birthday"}
          />
          <div>
          {formErrors.birthday && (
            <FormError name={formErrors.birthday}></FormError>
          )}
          </div>
          
        </div>

        <div className={css.adress}>
          <input
            value={mailAdress}
            onChange={(e) => {setMailAdress(e.target.value)}}
            type={"text"}
            className={css.styledinput}
            placeholder={"emailadress"}
          />
          <div>
          {formErrors.mailAdress && (
            <FormError name={formErrors.mailAdress}></FormError>
          )}
          </div>
          
        </div>

        <div className={css.phone_number}>
        <input
              value={phoneNumber}
              onChange={(e) =>{setPhoneNumber(e.target.value)}}
              type={"text"}
              className={css.styledinput}
              placeholder={"phonenumber"}
            />
            <div>
            {formErrors.phoneNumber && (
              <FormError name={formErrors.phoneNumber}></FormError>
            )}
            </div>
           
        </div>


        <button  className={css.submit_button}
            onClick={(e) => {
              validateFormData(e);
              
            }}
          >
            go
          </button>
      </div>
    </div>
  );
};
