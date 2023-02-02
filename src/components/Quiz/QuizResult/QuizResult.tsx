import React from "react";
import css from "./QuizResult.module.css";

interface IProps {
  finalScore: number;
  correctAnswers: number
}
export const QuizResult = ({ finalScore, correctAnswers }: IProps) => {
  return (
    <>
      <h1 className={css.title}>Geschafft!</h1>
      <h3 className={css.score}>Du hast {finalScore} Punkte erreicht!</h3>
      <h3 className={css.score}>{correctAnswers} Fragen richtig beantwortet</h3>
      <div className={css.Icon}>
        <div className={css.front}>🔥</div>
        <div className={css.back}>🌟</div>
      </div>
    </>
  );
};
