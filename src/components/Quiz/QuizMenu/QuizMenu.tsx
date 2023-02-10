import React, { useEffect, useState } from "react";
import { Header } from "../../../layouts/Header/Header";
import { Select, Option } from "../../UI/Select/Select";
import css from "./QuizMenu.module.css";
import { useNavigate } from "react-router-dom";
import { LightSaberFight } from "../LightSaberFight/LightSaberFight";

enum Difficulty {
    EASY = "easy",
    MEDIUM = "medium",
    HARD = "hard",
}

export const QuizMenu = () => {
    const navigate = useNavigate();

    const [difficulty, setDifficulty] = useState("easy");
    const [amount, setAmount] = useState("10");

    const [showDifficulty, setShowDifficulty] = useState(false);
    const [showAmount, setShowAmount] = useState(false);

    const difficultyOptions: Option[] = [
        { label: "leicht", value: Difficulty.EASY },
        { label: "mittel", value: Difficulty.MEDIUM },
        { label: "schwer", value: Difficulty.HARD },
    ];

    useEffect(() => {
        localStorage.setItem("difficulty", difficulty);
        localStorage.setItem("amount", amount);
    }, [difficulty, amount]);

    const amountOptions: Option[] = [
        { label: "10", value: 10 },
        { label: "15", value: 15 },
        { label: "20", value: 20 },
    ];

    const handleDifficulty = (option: Option) => {
        switch (option.value) {
            case "easy":
                setDifficulty(Difficulty.EASY);
                break;
            case "medium":
                setDifficulty(Difficulty.MEDIUM);
                break;
            case "hard":
                setDifficulty(Difficulty.HARD);
                break;
        }
    };

    const handleAmount = (option: Option) => {
        setAmount(option.label);
    };

    const send = async () => {
        navigate("/quiz/play");
    };

    return (
        <>
            <Header />
            <p className={`${css.text} ${css.center}`}>
                Wähle einen Schwierigkeitsgrad und die Anzahl der Fragen aus.
            </p>
            <div className={css.selectbox}>
                <Select
                    label={"Schwierigkeitsgrad"}
                    value={difficulty}
                    options={difficultyOptions}
                    onChange={handleDifficulty}
                    showDropDown={showDifficulty}
                    setShowDropDown={setShowDifficulty}
                />
                <br />
                <Select
                    label={"Anzahl an Fragen"}
                    value={amount}
                    options={amountOptions}
                    onChange={handleAmount}
                    showDropDown={showAmount}
                    setShowDropDown={setShowAmount}
                />
            </div>
            <div className={css.center}>
                <p className={css.text}>{difficulty}</p>
                <br />
                <button className={css.ok_button} onClick={(e) => send()}>
                    OK
                </button>
            </div>
            <div>
                <LightSaberFight />
            </div>
        </>
    );
};
