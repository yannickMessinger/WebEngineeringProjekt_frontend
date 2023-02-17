import css from "./CharacterPictureStyle.module.css";
import { CharacterStyle} from "../../../typings/character/ICharacterStyle";

/**
 * component that resizes and displays picture of currently choosen star wars character
 * @param img_path imagepath to correct image, passed in from parent component. Path is saved in charList data class.
 * @returns the sized character picture 
 */

export const CharacterPicture = ({ img_path }: CharacterStyle) => {
  return (
    <div className={css.imageWrapper}>
      <img src={img_path} className={css.character_img}></img>
    </div>
  );
};
