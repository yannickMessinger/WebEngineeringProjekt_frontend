import React, { useState } from "react";
import { Option } from "../components/InputTypes/Select";
import { IQuestion } from "../components/Question/IQuestion";

export const useQuiz = () => {
  const [difficulty, setDifficulty] = useState("easy");
  const [amount, setAmount] = useState("10");
  const [era, setEra] = useState("");
  const [questions, setQuestions] = useState([])

  const api_url = "http://localhost:1337/api/questions";
  const api_token = "9c7a6487430807a9fefd721698a65a35919a2cbe904403815f75e854257b2c1fb58e0a21fee5328df3bfbcdf335e06a375c30ced4ce6d7eac7b5dae39f9964e5059080e4d7bf63cdb942cbe268f8ff8b8fb55e980ab4a01e7819be01300fe9b0f30af07bcade9ba29f8d0180cb6e7f4a3192b81b0a1b15e7b33752ed63ecab8e"

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

  const amountOptions: Option[] = [
    { label: "10", value: "10" },
    { label: "15", value: "15" },
    { label: "20", value: "20" },
  ];

  const fetchQuiz = async() => {
    const result = await fetch(`${api_url}?filters[difficulty][$eq]=${difficulty}`, {
        headers: {
            Authorization: `Bearer ${api_token}`,
            "Content-Type": "application/json",
        }
    });
    const quiz = await result.json();
    setQuestions(quiz.data);
    console.log(quiz.data[0].attributes);
  }

  return {
    difficulty,
    setDifficulty,
    amount,
    setAmount,
    era,
    setEra,
    difficultyOptions,
    amountOptions,
    fetchQuiz
  };
};
