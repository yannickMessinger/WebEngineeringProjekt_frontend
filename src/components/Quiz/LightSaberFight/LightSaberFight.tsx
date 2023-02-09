import React from "react";
import css from "./LightSaberFight.module.css";

export const LightSaberFight = () => {
    return (
        <>
            <div className={css.loader}>
                <div
                    className={`${css.lightsaber} ${css.ls_left} ${css.ls_green}`}
                ></div>
                <div
                    className={`${css.lightsaber} ${css.ls_right} ${css.ls_red}`}
                ></div>
                <p className={css.text}>May the force be with you!</p>
            </div>
        </>
    );
};
