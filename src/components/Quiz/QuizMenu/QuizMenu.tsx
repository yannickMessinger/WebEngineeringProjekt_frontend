import React, { useContext, useEffect, useState } from "react";
import { Select, Option } from "../../UI/Select/Select";
import css from "./QuizMenu.module.css";
import { Navigate, useNavigate } from "react-router-dom";
import { LightSaberFight } from "../LightSaberFight/LightSaberFight";
import { LoginContext } from "../../../context/LoginContext";

enum Difficulty {
    EASY = "easy",
    MEDIUM = "medium",
    HARD = "hard",
}

interface IProps {
    isLoggedIn: boolean;
}

export const QuizMenu = ({ isLoggedIn }: IProps) => {
    const navigate = useNavigate();

    const [difficulty, setDifficulty] = useState("easy");
    const [amount, setAmount] = useState("10");

    const [showLightSabers, setShowLightSabers] = useState(false);
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
        setShowLightSabers(true);
        setTimeout(() => {
            navigate("/quiz/play");
        }, 3500);
    };

    if (!isLoggedIn) {
        return <Navigate to="/" replace />;
    }
    return (
        <>
            {showLightSabers ? (
                <LightSaberFight />
            ) : (
                <>
                    <p className={`${css.text} ${css.centered_horizontally}`}>
                        Wähle einen Schwierigkeitsgrad und die maximale Anzahl
                        der Fragen aus, mit denen du das quiz spielen willst.
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
                            label={"max. Anzahl an Fragen"}
                            value={amount}
                            options={amountOptions}
                            onChange={handleAmount}
                            showDropDown={showAmount}
                            setShowDropDown={setShowAmount}
                        />
                    </div>
                    <div className={css.centered_horizontally}>
                        <br />
                        <button
                            className={css.play_button}
                            onClick={(e) => send()}
                        >
                            <label>Let's start!</label>
                        </button>
                    </div>
                </>
            )}
        </>
    );
};
