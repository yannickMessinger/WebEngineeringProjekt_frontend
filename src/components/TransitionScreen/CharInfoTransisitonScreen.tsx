import { useContext } from "react";
import css from "./CharInfoTransitionScreenStyle.module.css";
import { useSWAPI } from "../../hooks/useSWAPI";
import { InfoDisplay } from "../InfoDisplay/InfoDisplay";
import { CharacterStylingContext } from "../../context/CharacterStylingContext";
/**
 * Component that is used to display flying animation as loading screen, while api call is made in hook.
 * When loading is finished, infos are displayed. Uses character specific spaceship.
 * @returns Wrapping component as loading screen.
 */
export const CharInfoTransisitonScreen = () => {
    const { loading, charInfo, starshipInfo, planetInfo } = useSWAPI();
    const { currentChar } = useContext(CharacterStylingContext);

    return (
        <div className={css.backgroundimg}>
            {
                loading ? (
                    <div className={css.xwing}>
                        <img
                            src={currentChar?.ship_img_path}
                            alt={"spaceship_fyling"}
                            width="50px"
                            height="50px"
                        />
                    </div>
                ) : (
                  <InfoDisplay charInfo={charInfo} shipInfo={starshipInfo} planetInfo={planetInfo}/>
                )
            }
        </div>
    );
};
