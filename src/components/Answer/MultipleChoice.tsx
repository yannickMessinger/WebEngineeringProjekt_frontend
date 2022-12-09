import React from "react";
import { AnswersListProps } from "./IAnswer";

export const MultipleChoice = ({answers}:AnswersListProps) => {
    return (
        <>
        {answers.map((i) => {
            return (
                <button>{i.text}</button>
            )
        })}
        </>
    )
}