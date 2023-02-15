import React from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { Header } from "./layouts/Header/Header";
import { Main } from "./layouts/Main/Main";
import { Footer } from "./layouts/Footer/Footer";
import { CharacterStylingContextProvider } from "./context/CharacterStylingContext";
import { LoginContextProvider } from "./context/LoginContext";

function App() {
    return (
        <LoginContextProvider>
            <CharacterStylingContextProvider>
                <div className="App">
                    <BrowserRouter>
                        <Header />
                        <Main />
                        <Footer />
                    </BrowserRouter>
                </div>
            </CharacterStylingContextProvider>
        </LoginContextProvider>
    );
}

export default App;
