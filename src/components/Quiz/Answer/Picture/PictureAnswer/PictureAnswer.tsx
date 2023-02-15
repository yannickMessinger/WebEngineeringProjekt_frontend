import React, { useState } from "react";
import { IAnswer } from "../../IAnswer";
import css from "./PictureAnswer.module.css";

interface IProps {
    imageSource: string;
    answerOption: IAnswer;
    onClick: (wasCorrect: boolean, onCorrect: number, onFalse: number) => void;
    answerClicked: IAnswer;
    setAnswerClicked: (value: IAnswer) => void;
}

export const PictureAnswer = ({
    imageSource,
    answerOption,
    onClick,
    answerClicked,
    setAnswerClicked,
}: IProps) => {
    const api_url = "http://localhost:1337";
    const [boxColor, setBoxColor] = useState("");
    function clickAnswer() {
        setAnswerClicked(answerOption);
        setBoxColor(answerOption.isRight ? css.right : css.false);
        setTimeout(() => {
            onClick(answerOption.isRight, 5, -5);
        }, 2000);
    }

    return (
        <div
            onClick={() => clickAnswer()}
            className={`${
                answerClicked === answerOption ? boxColor : css.answer_container
            }`}
        >
            <p className={css.answertext}>{answerOption.text}</p>
            <img src={`${api_url}${imageSource}`} className={css.image} />
        </div>
    );
};
