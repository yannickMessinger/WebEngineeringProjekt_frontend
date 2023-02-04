import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Quiz } from "./pages/Quiz";
import { SignUp } from "./pages/SignUp/SignUp";
import { QuizMenu } from "./components/Quiz/QuizMenu/QuizMenu";
import { Weather } from './pages/Weather';

function App() {
  return (
    <>
    <div className="App">
    </div>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/quiz" element={<QuizMenu />} />
        <Route path="/quiz/play" element={<Quiz />} />
        <Route path='/weather' element={<Weather />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
