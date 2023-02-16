import React, { useState } from "react";
import { IAnswer } from "../IAnswer";
import { Slider } from "../../../UI/Slider/Slider";
import css from "./Estimation.module.css";

interface IProps {
    answerList: IAnswer[];
    onClickNext: (
        wasCorrect: boolean,
        onCorrect: number,
        onFalse: number
    ) => void;
}

export const Estimation = ({ answerList, onClickNext }: IProps) => {
    const [value, setValue] = useState(0);
    const [submitted, setSubmitted] = useState(false);
    const [boxColor, setBoxColor] = useState("");
    const correctAnswer = parseInt(answerList.at(0)?.text || "-1");

    function updateValue(newValue: number) {
        setValue(newValue);
    }
    function clickSubmit(wasCorrect: boolean) {
        setSubmitted(true);
        setBoxColor(wasCorrect ? css.right : css.false);
        setTimeout(() => {
            setSubmitted(false);
            setValue(Number(0));
            onClickNext(wasCorrect, 10, -4);
        }, 2000);
    }

    function isCorrect(value: number, correctAnswer: number) {
        return value === correctAnswer;
    }

    return (
        <div className={submitted ? css.disabled : ""}>
            <Slider
                value={value}
                updateValue={updateValue}
                minValue={Number(answerList.at(1)?.text)}
                maxValue={Number(answerList.at(2)?.text)}
                step={Number(answerList.at(3)?.text)}
            />
            <p className={`${submitted ? boxColor : ""} ${css.large}`}>{value}</p>
            <button
                className={`${css.submit_button}`}
                onClick={() => clickSubmit(isCorrect(value, correctAnswer))}
            >
                ok
            </button>
        </div>
    );
};
