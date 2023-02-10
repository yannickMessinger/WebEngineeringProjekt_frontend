import React, { useState } from "react";
import { IAnswer } from "../../IAnswer";
import css from "./PictureAnswer.module.css";

interface IProps {
    imageSource: string;
    answerOption: IAnswer;
    onClick: (wasCorrect: boolean, onCorrect: number, onFalse: number) => void;
}

export const PictureAnswer = ({
    imageSource,
    answerOption,
    onClick,
}: IProps) => {
    const api_url = "http://localhost:1337";
    console.log(imageSource);
    function clickAnswer() {
        setTimeout(() => {
            onClick(answerOption.isRight, 5, -5);
        }, 2000);
    }

    return (
        <div
            onClick={() => clickAnswer()}
            //${answerOption.isRight ? css.right : css.false}
            className={` ${css.answer_container}`}
        >
            <img src={`${api_url}${imageSource}`} className={css.image} />
            <p>{answerOption.text}</p>
        </div>
    );
};
