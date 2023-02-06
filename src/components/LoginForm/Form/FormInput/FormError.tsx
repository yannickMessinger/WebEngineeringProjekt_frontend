import React from "react";

interface errorProps {
  name: string;
}

export const FormError = ({ name }: errorProps) => {
  return (
    <>
      <strong style={{ color: "red" }}>{name}</strong>
    </>
  );
};
