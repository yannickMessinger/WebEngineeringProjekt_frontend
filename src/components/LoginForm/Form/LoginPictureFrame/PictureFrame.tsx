import css from "./PictureFrameStyle.module.css";
interface LoginPictureFrameProps {
  img_path: string | undefined;
  testid:string
}
/**
 * Component that is used to render small picture on top in Login Form
 * @param img_path path to image to display correct character
 * @returns rezised  picture of choosen character
 */
export const PictureFrame = ({ img_path, testid}: LoginPictureFrameProps) => {
  return (
    <div className={css.frame}>
      <img
        src={img_path}
        className={css.login_character_img}
        test-id={testid}
      ></img>
    </div>
  );
};
