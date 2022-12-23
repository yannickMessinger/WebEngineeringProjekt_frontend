import React from "react";
import logo from "../../assets/star_wars_logo.png";
import css from "./QuizHeader.module.css";
import { useUser } from "../../hooks/useUser";
import { text } from "stream/consumers";

export const QuizHeader = () => {
  const { score } = useUser();

  return (
    <>
    <div className={css.info}>
      <p>Score 50/100</p>
    </div>
    </>
  );
};
