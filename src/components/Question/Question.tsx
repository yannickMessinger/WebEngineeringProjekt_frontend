import React from "react";
import { MultipleChoice } from "../Answer/MultipleChoice";
import { IQuestion, QuestionType } from "./IQuestion";
import css from "./Question.module.css";

export const Question = (question:IQuestion) => {
    const {question_text, answerOptions, questionType} = question;
    // !!! Switch Case for different question types
    /*
    switch(questionType) {
        case (QuestionType.MULTIPLE_CHOICE): {
            return (
                <div className={css.question_card}>
                    <h2 className={css.question_text}>{question_text}</h2>
                    <MultipleChoice answers={answerOptions} />
                </div>
            )
        }
    }
    */
    return (
        <div className={css.question_card}>
            <h2 className={css.question_text}>{question_text}</h2>
            <MultipleChoice answers={answerOptions} />
        </div>
    )
}
