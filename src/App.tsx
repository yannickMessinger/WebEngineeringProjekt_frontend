import React from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { Header } from "./layouts/Header/Header";
import { Main } from "./layouts/Main/Main";
import { CharacterStylingContextProvider } from "./context/CharacterStylingContext";
import { LoginContextProvider } from "./context/LoginContext";

function App() {
    return (
        <LoginContextProvider>
            <CharacterStylingContextProvider>
                <div>
                    <BrowserRouter>
                        <Header />
                        <Main />
                    </BrowserRouter>
                </div>
            </CharacterStylingContextProvider>
        </LoginContextProvider>
    );
}

export default App;
