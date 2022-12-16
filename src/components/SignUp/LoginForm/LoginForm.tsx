import React from "react";
import css from "./Loginform.module.css";
import vader from '../../../assets/darth_choke.png';


export const LoginForm = () => {
  return (
    <div className={css.loginGeneral}>
      <div className={css.loginheader}> <img src={vader} className={css.loginheaderimg}/>
      </div>
      
      <div className={css.loginform}>
        <div className={css.logininputfields}>
          <div className={css.firstname}>
            <input type="text" placeholder="firstname" className={css.styledinput}></input>
          </div>

          <div className={css.lastname}>
            <input type="text" placeholder="lastname"  className={css.styledinput}></input>
          </div>

          <div className={css.birthday}>
            <input type="date" placeholder="birthday"  className={css.styledinput}></input>
          </div>

          <div className={css.adress}>
            <input type="text" placeholder="adress"  className={css.styledinput}></input>
          </div>

          <div className={css.phonenumber}>
            <input type="text" placeholder="phonenumber"  className={css.styledinput}></input>
          </div>
        </div>

        <div className={css.buttonbox}>
          <button>TEST</button>
        </div>

      </div>

      <div className={css.loginfooter}>FOOTER</div>
      
    </div>
  );
};
