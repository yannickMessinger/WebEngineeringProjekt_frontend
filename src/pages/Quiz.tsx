import React, { useContext, useState } from "react";
import { Question } from "../components/Quiz/Question/Question";
import { Header } from "../layouts/Header/Header";
import { QuizHeader } from "../components/Quiz/QuizHeader/QuizHeader";
import { useQuiz } from "../hooks/useQuiz";
import { QuizResult } from "../components/Quiz/QuizResult/QuizResult";
import { LoginContext } from "../context/LoginContext";

export const Quiz = () => {
    const difficulty = localStorage.getItem("difficulty");
    const amount = localStorage.getItem("amount");
    const { score, updateScore } = useContext(LoginContext);
    const [index, setIndex] = useState(0);
    const { questions, loading, error, maxPossibleScore } = useQuiz(
        difficulty || "easy",
        parseInt(amount || "10")
    );
    const [correctAnswers, setCorrectAnswers] = useState(0);

    const nextQuestion = (
        wasCorrect: boolean,
        onCorrect: number,
        onFalse: number
    ) => {
        setIndex((prev) => prev + 1);
        if (wasCorrect) {
            updateScore(onCorrect);
            setCorrectAnswers(correctAnswers + 1);
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
                {/* 1. Quiz Header with current score display */}
                <QuizHeader score={score} maxScore={maxPossibleScore}/>

                {/* 2. Question Card */}
                <Question
                    onClickNext={nextQuestion}
                    question={questions!.at(index)?.attributes!}
                />
            </div>
        );
    } else {
        return (
            <QuizResult
                finalScore={score}
                mostPossibleScore={maxPossibleScore}
                correctAnswers={correctAnswers}
                questionAmount={questions.length}
            />
        );
    }
};
