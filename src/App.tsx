import React from 'react';
import './App.css';
import { Question } from './components/Question/Question';
import { IAnswer } from './components/Answer/IAnswer';
import { Header } from "./layouts/Header/Header";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { Quiz } from './pages/Quiz';
//import './App.css';
import { SignUp } from './pages/SignUp/SignUp';
import { CharacterChoiceNew } from './pages/CharacterCoice/CharacterChoice';
import { CharacterChoice } from './components/SignUp/CharacterChoiceDisplay/CharacterChoiceDisplay';
import { SideChoice } from './components/SignUp/SideChoice/SideChoice';


function App() {
  return (
   <CharacterChoiceNew></CharacterChoiceNew>
  );
}

export default App;


/*
 <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/quiz' element={<Quiz />} />
      </Routes>
    </BrowserRouter>
*/