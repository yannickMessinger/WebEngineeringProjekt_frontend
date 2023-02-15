import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Quiz } from "./pages/Quiz";
import { SignUp } from "./pages/SignUp/SignUp";
import { QuizMenu } from "./components/Quiz/QuizMenu/QuizMenu";
import { Weather } from "./pages/Weather";
import { Header } from "./layouts/Header/Header";
import { Main } from "./layouts/Main/Main";
import { Footer } from "./layouts/Footer/Footer";

function App() {
    return (
        <>
            <div className="App">
                <BrowserRouter>
                    <Header />
                    <Main />
                    <Footer />
                </BrowserRouter>
            </div>
        </>
    );
}

export default App;
