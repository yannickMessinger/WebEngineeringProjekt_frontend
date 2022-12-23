import React, { useState } from "react";
import { Header } from "../../../layouts/Header/Header";
import { Select, Option } from "../../InputTypes/Select";
import css from "./QuizMenu.module.css"
import { useQuiz } from "../../../hooks/useQuiz";

export const QuizMenu = () => {

  const {difficulty, setDifficulty, amount, setAmount, difficultyOptions, amountOptions, fetchQuiz} = useQuiz();

  const handleDifficulty = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setDifficulty(e.target.value);
  };

  const handleAmount = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setAmount(e.target.value);
  };

  const send = () => {
    fetchQuiz();
  };

  return (
    <>
      <Header />
      <div className={css.menubox}>
        <Select
          label={"Schwierigkeitsgrad"}
          value={difficulty}
          options={difficultyOptions}
          onChange={handleDifficulty}
        />
        <br />
        <Select
          label={"Anzahl an Fragen"}
          value={amount}
          options={amountOptions}
          onChange={handleAmount}
        />
        <br />
        <button onClick={e => send()}>OK</button>
      </div>
    </>
  );
};
