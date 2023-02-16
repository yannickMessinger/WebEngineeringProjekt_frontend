import { Link } from "react-router-dom";
import css from "./ButtonBoxStyle.module.css";
/**
 * component that renders button that works as link to next component.
 * Only visible if light or dark side was choosen beforehand
 * @returns the bottom section CharacterChoice component containing the yellow button
 */

export const ButtonBox = () => {
  return (
    <div className={css.buttonbox}>
      <Link to={`/signup`}>
        <button className={css.startbutton}>LOS</button>
      </Link>
    </div>
  );
};
