
import { Link } from 'react-router-dom';
import css from "./ButtonBoxStyle.module.css";

export const ButtonBox = () => {

 

  return (
    <div className={css.buttonbox}>
    <Link to={`/signup`}><button className={css.startbutton}>go</button></Link>
  </div>
  )
}
