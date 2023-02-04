import React, { useContext, useRef } from "react";
import css from "./Loginform.module.css";
import vader from '../../../assets/darth_choke.png';
import { CharacterContext } from "../../../context/CharacterContext";
import { Link } from "react-router-dom";


export const LoginForm = () => {

  // TODO: Groesse des Bildes anpasse
  // TODO: Charinfo in Landing Page umbenennen und da alles an components rein
  // ggf doch lieber auf Form ändern?
  const {returnCharacter} = useContext(CharacterContext)

  const firstname = useRef("");
  const lastname = useRef("");
  const birthday = useRef()
  const adress = useRef("");
  const phonenumber = useRef("")
  return (

    <div className={css.loginGeneral}>
      <div className={css.loginheader}> <img src={returnCharacter().img_path} className={css.loginheaderimg}/>
      </div>
      
      <div className={css.loginform}>
        <div className={css.logininputfields}>
          <div className={css.firstname}>
            <input type="text" placeholder="firstname" className={css.styledinput} value={firstname.current}></input>
          </div>

          <div className={css.lastname}>
            <input type="text" placeholder="lastname"  className={css.styledinput} value={lastname.current}></input>
          </div>

          <div className={css.birthday}>
            <input type="date" placeholder="birthday"  className={css.styledinput} value={birthday.current}></input>
          </div>

          <div className={css.adress}>
            <input type="text" placeholder="adress"  className={css.styledinput} value={adress.current}></input>
          </div>

          <div className={css.phonenumber}>
            <input type="text" placeholder="phonenumber"  className={css.styledinput}  value={phonenumber.current}></input>
          </div>
        </div>

        <div className={css.buttonbox}>
        <Link to={`/charinfo`}><button>GO</button></Link>
        </div>

      </div>

      <div className={css.loginfooter}>FOOTER</div>
      
    </div>
  );
};
