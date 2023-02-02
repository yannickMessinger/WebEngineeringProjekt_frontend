import React, { useState } from "react";
import { Question } from "../components/Question/Question";
import { Header } from "../layouts/Header/Header";
import { QuizHeader } from "../components/Header/QuizHeader";
import { useQuiz } from "../hooks/useQuiz";
import { useUser } from "../hooks/useUser";
import { QuizResult } from "../components/Quiz/QuizResult/QuizResult";

export const Quiz = () => {
  const difficulty = localStorage.getItem("difficulty");
  const { score, updateScore } = useUser();
  const [index, setIndex] = useState(0);
  const { questions, loading, error } = useQuiz(difficulty || "easy");

  const nextQuestion = (wasCorrect: boolean, onCorrect:number, onFalse:number) => {
    setIndex((prev) => prev + 1);
    if (wasCorrect) {
      updateScore(onCorrect);
    } else {
      updateScore(onFalse);
    }
  };
  if (loading) {
    return <h2>Am Laden</h2>;
  }
  if (error) {
    return <h2>Etwas verlief schief</h2>;
  }
  if (index !== questions.length) {
    return (
      <div className="App">
        {/* 1. Header */}
        <Header />

        {/* 2. Quiz Header with current score display */}
        <QuizHeader score={score} />

        {/* 3. Question Card */}
        <Question
          onClickNext={nextQuestion}
          question={questions!.at(index)?.attributes!}
        />
      </div>
    );
  } else {
    return <QuizResult finalScore={score}/>;
  }
};
