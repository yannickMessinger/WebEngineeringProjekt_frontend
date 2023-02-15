import { useEffect, useRef, useState } from "react";
import css from "./LightsaberStyle.module.css";

interface LightSaberProps {
  hasErrors: boolean;
  isActive: boolean;
}

export const Lightsaber = ({ hasErrors, isActive }: LightSaberProps) => {
 
  const [activateSaber, setActivateSaber] = useState(false);
  const bladeRef = useRef<HTMLInputElement>(null);

  function toogleSaberRed() {
    bladeRef.current?.style.setProperty("--blade-hue", `1`);
  }

  function toogleSaberGreen() {
    bladeRef.current?.style.setProperty("--blade-hue", `120`);
  }

  useEffect(() => {
    setActivateSaber(isActive ? true : false);

    if (hasErrors) {
      toogleSaberRed();
    } else {
      toogleSaberGreen();
    }
  }, [hasErrors, isActive]);

  return (
    <div className={css.lightsaberbody}>
      <div className={css.lightsaber}>
        <input
          type={"checkbox"}
          id={css.on_off}
          checked={activateSaber}
          readOnly={true}
        />
        <div className={css.blade} ref={bladeRef} />
        <label className={css.hilt} />
      </div>
    </div>
  );
};
