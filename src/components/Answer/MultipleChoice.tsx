import React from "react";
import { AnswersListProps, IAnswer } from "./IAnswer";
import css from './MultipleChoice.module.css';

export const MultipleChoice = ({answers}:AnswersListProps) => {
    function clickAnswer(answer:IAnswer) {
        console.log(answer.text);
    }

    return (
        <ul className={css.no_list}>
        {answers.map((i) => {
            return (
                <li className={css.list_item} key={i.text} onClick={e => clickAnswer(i)}>
                    {i.text}
                </li>
            )
        })}
        </ul>
    )
}