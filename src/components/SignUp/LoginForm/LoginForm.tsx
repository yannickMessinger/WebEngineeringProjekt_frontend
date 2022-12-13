import React from "react";
import css from "./Loginform.module.css";

export const LoginForm = () => {
  return (
    <div className={css.loginGeneral}>
      <div className={css.loginheader}>HEADER</div>
      
      <div className={css.loginform}>
        <div className={css.logininputfields}>
          <div className={css.firstname}>
            <input type="text" placeholder="firstname"></input>
          </div>

          <div className={css.lastname}>
            <input type="text" placeholder="lastname"></input>
          </div>

          <div className={css.birthday}>
            <input type="date" placeholder="birthday"></input>
          </div>

          <div className={css.adress}>
            <input type="text" placeholder="adress"></input>
          </div>

          <div className={css.phonenumber}>
            <input type="text" placeholder="phonenumber"></input>
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
