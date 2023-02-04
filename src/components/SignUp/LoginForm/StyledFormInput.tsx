import React, { Dispatch, SetStateAction } from "react";
import Styling from "./Input.module.css";

interface FormInputProps {
  value: string | number;
  onchange?: Dispatch<SetStateAction<string>>;
  type: string;
  classname: string;
  placeholder: string;
}

export const StyledFormInput = ({
  value,
  type,
  onchange,
  classname,
  placeholder,
}: FormInputProps) => {
  return (
    <div>
      <input
        type={type}
        onChange={(e) => onchange!(e.target.value)}
        value={value}
        className={classname}
        placeholder={placeholder}
      />
    </div>
  );
};
