import React, { useState } from "react";
import {IAnswer } from "../IAnswer";
import css from './MultipleChoice.module.css';

interface IProps {
    answerList: IAnswer[],
    onClickNext: (wasCorrect:boolean, onCorrect:number, onFalse:number) => void
}

async function sleep(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

export const MultipleChoice = ({answerList, onClickNext}:IProps) => {
    const [chosenAnswer, setChosenAnswer] = useState<IAnswer|null>(null)
    const [boxColor, setBoxColor] = useState("")

    function resetStates() {
        setBoxColor(css.list_item)
        setChosenAnswer(null)
    }

    function clickAnswer(answer:IAnswer) {
        setBoxColor(answer.isRight ? css.right : css.false)
        setChosenAnswer(answer)
        setTimeout(() => {
            resetStates()
            onClickNext(answer.isRight, 5, -5)
        }, 2000);
    }

    return (
        <ul className={css.no_list}>
        {answerList.map((i:IAnswer) => {
            return (
                <li
                    className={`${(chosenAnswer === i)? boxColor : css.list_item} ${chosenAnswer !== null ? css.disableClick : ""}`}
                    key={i.text}
                    onClick={e => clickAnswer(i)}
                >
                    {i.text}
                </li>
            )
        })}
        </ul>
    )
}