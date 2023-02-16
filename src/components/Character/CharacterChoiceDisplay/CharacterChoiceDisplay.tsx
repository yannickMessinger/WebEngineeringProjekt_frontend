import { useContext} from "react";
import css from "./CharacterChoiceDisplay.module.css";
import { CharacterStylingContext } from "../../../context/CharacterStylingContext";
import arrow_left from "../../../assets/icons/arrow_left.png";
import arrow_right from "../../../assets/icons/arrow_right.png";

export const CharacterChoiceDisplay = () => {
  const { charChoiceHandlerNext, charChoiceHandlerPrev, currentChar } =
    useContext(CharacterStylingContext);
    
    

  return (
    <div className={css.choosechar}>
      <div
        className={css.arrowleft}
        onClick={() => charChoiceHandlerPrev()}
      ><img src={arrow_left} alt={'arrow_left'}/></div>
      <div className={`${css.characterDisplay}`}>
        <img src={currentChar!.img_path} className={css.character_img} alt={'charPic'} id={currentChar.name} data-testid={currentChar.name}/>
      </div>
      <div
        className={css.arrowright}
        onClick={() => charChoiceHandlerNext()}
      ><img src={arrow_right} alt={'arrow_right'}/></div>
    </div>
  );
};
