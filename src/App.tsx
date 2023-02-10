import React from "react";
import "./App.css";
import { Header } from "./layouts/Header/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Quiz } from "./pages/Quiz";
//import './App.css';
import { CharacterChoice } from "./pages/CharacterCoice/CharacterChoice";
import { CharacterContextProvider } from "./context/CharacterStylingContext";
import { CharacterInfoFetchWrapper } from "./components/Character/InfoDisplay/FetchWrapper/CharacterInfoFetchWrapper";
import { LoginFormRework } from "./components/LoginForm/LoginOuterWrapper/LoginOuterWrapper";
import { CharInfoTransisitonScreen } from "./components/TransitionScreen/CharInfoTransisitonScreen";
import { Weather } from "./pages/Weather";
import { Lightsaber } from "./components/Lightsaber/Lightsaber";

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


