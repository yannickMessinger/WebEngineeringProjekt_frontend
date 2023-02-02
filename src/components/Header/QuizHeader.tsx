import React from "react";
import logo from "../../assets/star_wars_logo.png";
import css from "./QuizHeader.module.css";
import { useUser } from "../../hooks/useUser";
import { text } from "stream/consumers";

interface IProps{
  score:number
}
export const QuizHeader = ({score}:IProps) => {
  return (
    <>
    <div className={css.info}>
      <p>Score {score}/100</p>
    </div>
    </>
  );
};
