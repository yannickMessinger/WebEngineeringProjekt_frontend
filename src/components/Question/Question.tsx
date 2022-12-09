import React from "react";
import { MultipleChoice } from "../Answer/MultipleChoice";
import { IQuestion } from "./IQuestion";
import css from "./Question.module.css";

export const Question = (question:IQuestion) => {
    const {question_text, answerOptions} = question;
    return (
        <div className={css.question_card}>
            <h2 className={css.question_text}>{question_text}</h2>
            <MultipleChoice answers={answerOptions} />
        </div>
    )
}
