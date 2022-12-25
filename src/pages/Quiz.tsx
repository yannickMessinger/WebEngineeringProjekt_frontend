import React, { useEffect, useState } from "react";
import { IAnswer } from "../components/Answer/IAnswer";
import { Question } from "../components/Question/Question";
import { Header } from "../layouts/Header/Header";
import { IQuestion, QuestionType } from "../components/Question/IQuestion";
import { QuizHeader } from "../components/Header/QuizHeader";
import { useQuiz } from "../hooks/useQuiz";

export const Quiz = () => {
  const [index, setIndex] = useState(0);
  const {questions} = useQuiz();

  return (
    <div className="App">
      {/* 1. Header */}
      <Header />

      {/* 2. Quiz Header with current score display */}
      <QuizHeader />

      {/* 3. Question Card */}
      <Question
        questionText={questions.at(index)?.attributes.questionText || ""}
        answerOptions={questions.at(index)?.attributes.answerOptions || []}
        questionType={questions.at(index)?.attributes.questionType || QuestionType.MULTIPLE_CHOICE}
      />
    </div>
  );
};
