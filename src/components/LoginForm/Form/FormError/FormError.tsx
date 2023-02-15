import css from "./FormErrorStyle.module.css"
interface errorProps {
  name: string;
}

export const FormError = ({ name }: errorProps) => {
  return (
    <>
      <strong className={`${css.error}`}>{name}</strong>
    </>
  );
};
