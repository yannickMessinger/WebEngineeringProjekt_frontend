
import css from "./PictureFrameStyle.module.css"
interface LoginPictureFrameProps{
    img_path: string | undefined
    testid:string
}

export const PictureFrame = ({img_path,testid}:LoginPictureFrameProps) => {
  return (
    <div className={css.frame}>
        <img src={img_path} className={css.login_character_img} data-testid={testid}></img>
    </div>
  )
}
