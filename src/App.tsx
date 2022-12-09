import React from 'react';
import './App.css';
import { Question } from './components/Question/questionComponent';
import { IAnswer } from './components/Answer/IAnswer';
import { Searchbar } from './components/Searchbar/Searchbar';

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
      <Searchbar/>
    </div>
  );
}

export default App;
