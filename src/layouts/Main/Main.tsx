import React from "react";
import { Routes, Route } from "react-router";
import { BrowserRouter } from "react-router-dom";
import { QuizMenu } from "../../components/Quiz/QuizMenu/QuizMenu";
import { Home } from "../../pages/Home";
import { Quiz } from "../../pages/Quiz";
import { SignUp } from "../../pages/SignUp/SignUp";
import { Weather } from "../../pages/Weather";

export const Main = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/quiz" element={<QuizMenu />} />
            <Route path="/quiz/play" element={<Quiz />} />
            <Route path="/weather" element={<Weather />} />
        </Routes>
    );
};
