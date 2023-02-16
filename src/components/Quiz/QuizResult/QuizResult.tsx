import React, { useEffect, useState } from "react";
import css from "./QuizResult.module.css";
import DARTH_VADER_IMG from "../../../assets/assets_quizresult/Darth_Vader.png";
import JEDI_RITTER_IMG from "../../../assets/assets_quizresult/Jedi_Ritter.webp";
import JEDI_MEISTER_IMG from "../../../assets/assets_quizresult/Yoda.jpeg";
import PADAWAN_IMG from "../../../assets/assets_quizresult/Padawans.jpg";

interface IProps {
    finalScore: number;
    mostPossibleScore: number;
    correctAnswers: number;
    questionAmount: number;
}
interface ILevel {
    imageSrc: string;
    slogan: string;
    boxColor: string;
}

function findLevel(percentage: number) {
    const DARTH_VADER: ILevel = {
        imageSrc: DARTH_VADER_IMG,
        slogan: "ich finde ihren Mangel an Wissen beklagenswert!",
        boxColor: css.red,
    };
    const PADAWAN: ILevel = {
        imageSrc: PADAWAN_IMG,
        slogan: "viel zu lernen du noch hast!",
        boxColor: css.purple,
    };
    const JEDI_RITTER: ILevel = {
        imageSrc: JEDI_RITTER_IMG,
        slogan: "Den Rang eines Meisters gewähren wir dir nicht",
        boxColor: css.lightblue,
    };
    const JEDI_MEISTER: ILevel = {
        imageSrc: JEDI_MEISTER_IMG,
        slogan: "Willkommen im hohen Rat der Jedi",
        boxColor: css.green,
    };
    let level: ILevel;
    if (percentage > 0.85) {
        level = JEDI_MEISTER;
    } else if (percentage > 0.5 && percentage <= 0.85) {
        level = JEDI_RITTER;
    } else if (percentage > 0.0 && percentage <= 0.5) {
        level = PADAWAN;
    } else {
        level = DARTH_VADER;
    }
    return level;
}
export const QuizResult = ({
    finalScore,
    mostPossibleScore,
    correctAnswers,
    questionAmount,
}: IProps) => {
    const [level, setLevel] = useState<ILevel>({
        imageSrc: "",
        slogan: "",
        boxColor: "",
    });
    useEffect(() => {
        const reachedPercentage = calculatePercentage();
        setLevel(findLevel(reachedPercentage));
    }, [finalScore, correctAnswers, questionAmount]);

    function calculatePercentage() {
        return finalScore / mostPossibleScore;
    }

    return (
        <div className={css.center}>
            <div className={css.mandalore}>
                <h1 className={css.title}>Geschafft!</h1>
                <h3 className={css.score}>
                    Du hast {finalScore} von {mostPossibleScore} Punkte
                    erreicht! <br /> Und {correctAnswers} von {questionAmount}{" "}
                    Fragen richtig beantwortet.
                </h3>
            </div>
            <h3 className={`${css.starjedi} ${css.title}`}>{level.slogan}</h3>
            <img className={`${css.image} ${level.boxColor}`} src={level.imageSrc} />
        </div>
    );
};
