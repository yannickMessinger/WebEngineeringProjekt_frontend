import React from "react";
import { IAnswer } from "../components/Answer/IAnswer";
import { Question } from "../components/Question/Question";
import { Header } from "../layouts/Header/Header";
import { QuestionType } from "../components/Question/IQuestion";
import { QuizHeader } from "../components/Header/QuizHeader";

const answers:IAnswer[] = [
    {
      text:"Darth `ader", 
      isRight: true
    },{
      text:"Hello Kitty",
      isRight: false
    }, {
      text:"Daisy",
      isRight: false
    }, {
      text:"Spongebob Schwammkopf",
      isRight: false
    }
]

const qType = QuestionType.MULTIPLE_CHOICE;

export const Quiz = () => {
    return (
    <div className="App">
      {/* 1. Header */}
      <Header />
      <QuizHeader />

      {/* 3. Question Card */}
      <div className='question-card'>

      </div>
      <Question 
        question_text="Wer ist der `ater von Luke Skywalker ?"
        answerOptions={answers}
        questionType={qType}
      />
    </div>
    )
}