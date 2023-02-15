import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Quiz } from "./pages/Quiz";
import { CharacterChoice } from "./pages/CharacterCoice/CharacterChoice";
import { CharacterStylingContextProvider } from "./context/CharacterStylingContext";
import { LoginFormOuterWrapper } from "./components/LoginForm/LoginOuterWrapper/LoginOuterWrapper";
import { CharInfoTransisitonScreen } from "./components/TransitionScreen/CharInfoTransisitonScreen";
import { Weather } from "./pages/Weather";
import { LoginContextProvider } from "./context/LoginContext";


function App() {
  return (
    <LoginContextProvider>
      <CharacterStylingContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<CharacterChoice />} />
            <Route path="/quiz" element={<Quiz />} />
            <Route path="/signup" element={<LoginFormOuterWrapper />} />
            <Route
              path="/chartransition"
              element={<CharInfoTransisitonScreen />}
            />
            <Route path="/weather" element={<Weather />} />
          </Routes>
        </BrowserRouter>
      </CharacterStylingContextProvider>
    </LoginContextProvider>
  );
}

export default App;
