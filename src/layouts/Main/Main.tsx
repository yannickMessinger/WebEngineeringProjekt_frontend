import React from "react";
import { Routes, Route } from "react-router";
import { QuizMenu } from "../../components/Quiz/QuizMenu/QuizMenu";
import { Home } from "../../pages/Home";
import { Quiz } from "../../pages/Quiz";
import { Weather } from "../../pages/Weather";
import { CharacterChoice } from "../../pages/CharacterCoice/CharacterChoice";
import { CharInfoTransisitonScreen } from "../../components/TransitionScreen/CharInfoTransisitonScreen";
import { LoginFormOuterWrapper } from "../../components/LoginForm/LoginOuterWrapper/LoginOuterWrapper";

export const Main = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/characterchoice" element={<CharacterChoice />} />
            <Route path="/info" element={<CharInfoTransisitonScreen />} />
            <Route path="/signup" element={<LoginFormOuterWrapper />} />
            <Route path="/quiz" element={<QuizMenu />} />
            <Route path="/quiz/play" element={<Quiz />} />
            <Route path="/weather" element={<Weather />} />
        </Routes>
    );
};
