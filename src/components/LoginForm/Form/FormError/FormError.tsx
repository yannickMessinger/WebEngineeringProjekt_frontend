import css from "./FormErrorStyle.module.css";
interface errorProps {
  errormsg: string;
}
/**
 * component that is is used to display form errors in login form
 * @param name errormsg that is supposed to be displayed  
 * @returns error Component under input field
 */
export const FormError = ({ errormsg }: errorProps) => {
  return (
    <>
      <strong className={`${css.error}`}>{errormsg}</strong>
    </>
  );
};
