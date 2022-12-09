import React from "react";
import { MultipleChoice } from "../Answer/MultipleChoice";
import { IQuestion } from "./IQuestion";

export const Question = (question:IQuestion) => {
    return (
        <>
        <h2>{question.question}</h2>
        <MultipleChoice answers={question.answerOptions} />
        </>
    )
}