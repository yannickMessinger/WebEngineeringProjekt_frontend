import React, { useContext, useRef, useState } from "react";
import css from "./Loginform.module.css";
import vader from '../../../assets/darth_choke.png';
import { CharacterContext } from "../../../context/CharacterContext";
import { Link } from "react-router-dom";
import { StyledFormInput } from "./StyledFormInput";
import { FormError } from "./FormError";


export const LoginForm = () => {

  // TODO: Groesse des Bildes anpasse
  // TODO: Charinfo in Landing Page umbenennen und da alles an components rein
  // ggf doch lieber auf Form ändern?
  const {returnCharacter} = useContext(CharacterContext)

  const firstName = useRef("");
  const lastName = useRef("");
  const birthday = useRef("")
  const adress = useRef("");
  const phoneNumber = useRef("")
  const [formErrors, setFormErrors] = useState({firstName:"", lastName:"",phoneNumber:"", birthday:"", adress:""});

  



  const validateFormData = (event:any) => {
    //TODO Regex Expression nutzen für Validierung????
    event.preventDefault();
    const errors = {firstName:"", lastName:"",phoneNumber:"", birthday:"",adress:""};
    
    if(firstName.current === ''){
      errors.firstName = "kaa leere vorname";
    }

    if(lastName.current === ''){
      errors.lastName = "kaa leere nachname";
    }

    if(phoneNumber.current === ''){
      errors.phoneNumber = "kaa leere nummä";
    }

    if(birthday.current === ''){
      errors.birthday = "kaa leere geboortsdaach";
    }

    if(adress.current === ''){
      errors.adress ="kaa leere Adress"
    }




    setFormErrors(errors);

    

  }


  return (

    <div className={css.loginGeneral}>
      <div className={css.loginheader}> <img src={returnCharacter().img_path} className={css.loginheaderimg}/>
      </div>
      
     
      <div className={css.loginform}>
        
        <div className={css.logininputfields}>

          <div className={css.firstname}>
          <StyledFormInput  value={firstName.current} type ={'text'} classname={css.styledinput} placeholder={'firstname'}></StyledFormInput>
          {formErrors.firstName && <FormError name = {formErrors.firstName}></FormError>}  
          </div>

          <div className={css.lastname}>
          <StyledFormInput  value={lastName.current} type ={'text'} classname={css.styledinput} placeholder={'lastname'}></StyledFormInput>
          {formErrors.lastName && <FormError name = {formErrors.lastName}></FormError>} 
          </div>

          <div className={css.birthday}>
          <StyledFormInput  value={birthday.current} type ={'date'} classname={css.styledinput} placeholder={'birthday'}></StyledFormInput>
          {formErrors.birthday && <FormError name = {formErrors.birthday}></FormError>} 
          </div>

          <div className={css.adress}>
          <StyledFormInput  value={adress.current} type ={'text'} classname={css.styledinput} placeholder={'adress'}></StyledFormInput>
          {formErrors.adress && <FormError name = {formErrors.adress}></FormError>} 
          </div>

          <div className={css.phonenumber}>
          <StyledFormInput  value={phoneNumber.current} type ={'text'} classname={css.styledinput} placeholder={'phonenumber'}></StyledFormInput>
          {formErrors.phoneNumber && <FormError name = {formErrors.phoneNumber}></FormError>} 
          </div>
        </div>
        
        <div className={css.buttonbox}>
        <button  onClick={(e) => {validateFormData(e)}}>GO</button>
        </div>
    
      </div>
     
      <div className={css.loginfooter}>FOOTER</div>
      
    </div>
  );
};
