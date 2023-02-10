import React, { useRef, useState } from "react";
import css from "./LightsaberStyle.module.css";

export const Lightsaber = () => {

    const [activateSaber, setActivateSaber] = useState(true)
    const bladeRef = useRef<HTMLInputElement>(null);

    bladeRef.current?.style.setProperty("--blade-hue", `1`);
    bladeRef.current?.style.setProperty("--blade-hue", `120`);

  return (
    <div className={css.lightsaberbody}>
      <div className={css.lightsaber}>
        <input type={"checkbox"} id={css.on_off} checked={activateSaber}/>
        <div className={css.blade} ref={bladeRef}/>
        <label className={css.hilt} htmlFor={"on_off"}/>
      </div>
    </div>
  );
};
