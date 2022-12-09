import React from 'react';
import './App.css';
import { Question } from './components/Question/questionComponent';
import { IAnswer } from './components/Answer/IAnswer';

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
  }]

function App() {
  return (
    <div className="App">
      <Question 
        question="Wer ist der Vater von Luke Skywalker?"
        answerOptions={answers} />
    </div>
  );
}

export default App;
