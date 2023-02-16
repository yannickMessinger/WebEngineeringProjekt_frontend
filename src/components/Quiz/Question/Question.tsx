import React, { useEffect } from "react";
import { IQuestion, QuestionType } from "./IQuestion";
import css from "./Question.module.css";
import { AnswerCard } from "../Answer/AnswerCard/AnswerCard";

interface IProps {
    question: IQuestion;
    onClickNext: (
        wasCorrect: boolean,
        onCorrect: number,
        onFalse: number
    ) => void;
}

export const Question = ({ question, onClickNext }: IProps) => {
    const api_url = "http://localhost:1337";
    const { questionText, answerOptions, questionType, image, answerImages } =
        question;

    return (
        <div className={css.question_card}>
            <h2 className={css.question_text}>
                {questionType !== QuestionType.FILL_IN_THE_BLANK
                    ? questionText
                    : "Fülle den Satz aus!"}
            </h2>
            <img
                src={
                    image.data !== null
                        ? `${api_url}${image.data.attributes.formats.medium.url}`
                        : ""
                }
                className={image.data !== null ? css.visible : css.invisible}
            />
            <AnswerCard
                questionText={questionText}
                answerList={answerOptions}
                answerImages={answerImages}
                questionType={questionType}
                onClickNext={onClickNext}
            />
        </div>
    );
};
