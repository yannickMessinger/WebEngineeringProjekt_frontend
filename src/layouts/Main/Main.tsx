import React, { useContext } from "react";
import { Routes, Route, Navigate } from "react-router";
import { QuizMenu } from "../../components/Quiz/QuizMenu/QuizMenu";
import { Home } from "../../pages/Home";
import { Quiz } from "../../pages/Quiz";
import { Weather } from "../../pages/Weather";
import { CharacterChoice } from "../../pages/CharacterCoice/CharacterChoice";
import { CharInfoTransisitonScreen } from "../../components/TransitionScreen/CharInfoTransisitonScreen";
import { LoginFormOuterWrapper } from "../../components/LoginForm/LoginOuterWrapper/LoginOuterWrapper";
import { LoginContext } from "../../context/LoginContext";

export const Main = () => {
    const { isLoggedIn } = useContext(LoginContext);
    return (
        <Routes>
            <Route path="/" element={<Home isLoggedIn={isLoggedIn}/>} />
            <Route path="/characterchoice" element={<CharacterChoice />} />
            <Route path="/signup" element={<LoginFormOuterWrapper />} />
            <Route path="/info" element={<CharInfoTransisitonScreen isLoggedIn={isLoggedIn}/>} />
            <Route path="/quiz" element={<QuizMenu isLoggedIn={isLoggedIn}/>} />
            <Route path="/quiz/play" element={<Quiz isLoggedIn={isLoggedIn}/>} />
            <Route path="/weather" element={<Weather isLoggedIn={isLoggedIn}/>} />
            <Route path="*" element={<Navigate to={"/characterchoice"} replace />} />
        </Routes>
    );
};
