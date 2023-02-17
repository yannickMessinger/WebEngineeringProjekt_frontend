import { useEffect, useRef, useState } from "react";
import css from "./LightsaberStyle.module.css";

interface LightSaberProps {
  hasErrors: boolean;
  isActive: boolean;
  cy_id_blade:string
}
/**
 * component that represents the lightsaber handle and blade that is used to intensify errors oder success in LoginForm Validation
 * @param hasErrors props passed from login form which tell if login form had errors or not. Used to determine color of blade (red for errors, green for no errors)
 * @param isActive prop that is passed to determine if lightsaber is active or not (if blade should be visible or not)
 * @returns Lightsaberhandle and blade with toggle function  to intensify errors oder success in LoginForm Validation
 */
export const Lightsaber = ({ hasErrors, isActive,cy_id_blade }: LightSaberProps) => {
  const [activateSaber, setActivateSaber] = useState(false);
  const bladeRef = useRef<HTMLInputElement>(null);

  //function to set blade color to red
  function toogleSaberRed() {
    bladeRef.current?.style.setProperty("--blade-hue", `1`);
  }

  //function to set blade color to green
  function toogleSaberGreen() {
    bladeRef.current?.style.setProperty("--blade-hue", `120`);
  }

  //renders correct lightsaber color when form is validated.
  useEffect(() => {
    setActivateSaber(isActive ? true : false);

    if (hasErrors) {
      toogleSaberRed();
    } else {
      toogleSaberGreen();
    }
  }, [hasErrors, isActive]);

  return (
    <div className={css.lightsaberbody} data-cy="lightsaber_body">
      <div className={css.lightsaber} data-cy="lightsaber_handle">
        <input
          type={"checkbox"}
          id={css.on_off}
          checked={activateSaber}
          readOnly={true}
        />
        <div className={css.blade} ref={bladeRef} data-cy={cy_id_blade}/>
        <label className={css.hilt} />
      </div>
    </div>
  );
};
