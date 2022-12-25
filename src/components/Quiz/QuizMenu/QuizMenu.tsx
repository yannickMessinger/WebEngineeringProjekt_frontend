import React, { useEffect, useState } from "react";
import { Header } from "../../../layouts/Header/Header";
import { Select, Option } from "../../InputTypes/Select";
import css from "./QuizMenu.module.css";
import { useQuiz } from "../../../hooks/useQuiz";
import { Link, useNavigate } from "react-router-dom";

export const QuizMenu = () => {
  const navigate = useNavigate();

  const [difficulty, setDifficulty] = useState("easy");
  const [amount, setAmount] = useState("10");

  enum Difficulty {
    EASY = "easy",
    MEDIUM = "medium",
    HARD = "hard",
  }

  const difficultyOptions: Option[] = [
    { label: "leicht", value: Difficulty.EASY },
    { label: "mittel", value: Difficulty.MEDIUM },
    { label: "hard", value: Difficulty.HARD },
  ];

  useEffect(() => {
    const value = localStorage.getItem("difficult");
    if (typeof value === 'string') {
      setDifficulty(JSON.parse(value));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('difficulty', difficulty);
  }, [difficulty]);

  const amountOptions: Option[] = [
    { label: "10", value: "10" },
    { label: "15", value: "15" },
    { label: "20", value: "20" },
  ];

  const handleDifficulty = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setDifficulty(e.target.value);
  };

  const handleAmount = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setAmount(e.target.value);
  };

  const send = async () => {
    navigate("/quiz/play");
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
        <p>{difficulty}</p>
        <br />
          <button onClick={(e) => send()}>OK</button>
      </div>
    </>
  );
};
