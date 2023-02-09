import React from "react";
import "./App.css";
import { Question } from "./components/Question/Question";
import { IAnswer } from "./components/Answer/IAnswer";
import { Header } from "./layouts/Header/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Quiz } from "./pages/Quiz";
//import './App.css';
import { CharacterChoice } from "./pages/CharacterCoice/CharacterChoice";
import { CharacterContextProvider } from "./context/CharacterContext";
import { CharacterInfoFetchWrapper } from "./components/Character/CharacterInfo/FetchWrapper/CharacterInfoFetchWrapper";
import { LoginFormRework } from "./components/LoginForm/LoginOuterWrapper/LoginOuterWrapper";
import { CharInfoTransisitonScreen } from "./components/TransitionScreen/CharInfoTransisitonScreen";

function App() {
  return (
    <CharacterContextProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CharacterChoice />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/charinfo" element ={<CharacterInfoFetchWrapper/>}/>
        <Route path="/signup" element={<LoginFormRework/>} />
        <Route path="/chartransition" element={<CharInfoTransisitonScreen/>} />
        <Route path='/weather' element={<Weather />} />
      </Routes>
      
       
      
    </BrowserRouter>
  </CharacterContextProvider>
  );
}

export default App;


