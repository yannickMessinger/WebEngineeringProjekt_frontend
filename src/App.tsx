import React from "react";
import "./App.css";
import { Question } from "./components/Question/Question";
import { IAnswer } from "./components/Answer/IAnswer";
import { Header } from "./layouts/Header/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Quiz } from "./pages/Quiz";
//import './App.css';
import { SignUp } from "./pages/SignUp/SignUp";
import { CharacterChoice } from "./pages/CharacterCoice/CharacterChoice";
import { CharacterContextProvider } from "./context/CharacterContext";
import { CharacterInfoFetchWrapper } from "./components/Character/CharacterInfo/FetchWrapper/CharacterInfoFetchWrapper";
import { LoginForm } from "./components/LoginForm/LoginForm";

function App() {
  return (
    <CharacterContextProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CharacterChoice />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/charinfo" element ={<CharacterInfoFetchWrapper/>}/>
        <Route path="/signup" element={<LoginForm/>} />
      </Routes>
      
       
      
    </BrowserRouter>
  </CharacterContextProvider>
  );
}

export default App;


