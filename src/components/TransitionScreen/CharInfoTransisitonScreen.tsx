import { useContext } from 'react'
import css from "./CharInfoTransitionScreenStyle.module.css"
import { useSWAPI } from '../../hooks/useSWAPI';
import { InfoDisplay } from '../Character/InfoDisplay/InfoDisplay';
import { CharacterStylingContext } from '../../context/CharacterStylingContext';
import { InfoDisplayWrapper } from '../Character/InfoDisplay/InfoDisplayWrapper';
import { useNavigate } from 'react-router';



export const CharInfoTransisitonScreen = () => {

  
  const { charInfo, starshipInfo,planetInfo,loading} = useSWAPI();
  const {currentChar} = useContext(CharacterStylingContext);
  //const navigate = useNavigate();

  return (
    
    <div className={css.backgroundimg}>
      {loading ? (
       <div className={css.xwing}>
          <img src={currentChar?.ship_img_path} alt={"spaceship_fyling"} width='50px' height='50px'/>
      </div>
      ) : (
        <InfoDisplay charInfo={charInfo} shipInfo={starshipInfo} planetInfo={planetInfo}/>
      )}
      
    </div>
  )
}
