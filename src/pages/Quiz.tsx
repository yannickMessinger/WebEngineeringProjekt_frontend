import React from "react";
import { IAnswer } from "../components/Answer/IAnswer";
import { Question } from "../components/Question/Question";
import { Header } from "../layouts/Header/Header";

const answers:IAnswer[] = [
    {
      text:"Darth Vader", 
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

export const Quiz = () => {
    return (
    <div className="App">
      {/* 1. Header */}
      <Header />
      <h1>Star Wars Quiz</h1>

      {/* 2. Current Score */}
      <h2>Current Score</h2>

      {/* 3. Question Card */}
      <div className='question-card'>

      </div>
      <Question 
        question_text="Wer ist der Vater von Luke Skywalker?"
        answerOptions={answers} />
    </div>
    )
}