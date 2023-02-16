import React, { useState, useEffect } from "react";
import { IAnswer } from "../IAnswer";
import css from "./FillInTheBlank.module.css";

interface IProps {
    questionText: string;
    answerList: IAnswer[];
    onClickNext: (
        wasCorrect: boolean,
        onCorrect: number,
        onFalse: number
    ) => void;
}

export const FillInTheBlank = ({
    questionText,
    answerList,
    onClickNext,
}: IProps) => {
    const [splittedQuestionText, setQuestionValue] = useState(Array<string>());
    const [options, setOptions] = useState(new Map<string, IAnswer>());
    const [selectedAnswer, setSelectedAnswer] = useState({
        text: "",
        isRight: false,
        image: "",
    });

    useEffect(() => {
        const separator = "(options)";
        const result = questionText.split(separator);
        setQuestionValue(result);
        answerList.forEach(async (answer) => {
            options.set(answer.text, answer);
        });
        setSelectedAnswer({
            text: "",
            isRight: false,
            image: "",
        });
    }, [questionText]);

    function clickSubmit() {
        onClickNext(selectedAnswer.isRight, 5, -5);
    }

    function handleSelectChange(answer: IAnswer) {
        const selectedOption = options.get(answer.text);

        if (selectedOption !== undefined) {
            setSelectedAnswer(selectedOption);
        }
    }

    return (
        <>
            <div>
                {splittedQuestionText[0]}
                <span>
                    <select className={`${css.select} ${css.starjedi}`}>
                        <option value="" disabled selected>
                            --Wähle Antwortmöglichkeit--
                        </option>
                        {answerList.map((answer) => (
                            <option
                                value={answer.text}
                                key={answer.text}
                                className={css.answer}
                                onClick={() => {
                                    handleSelectChange(answer);
                                }}
                            >
                                {answer.text}
                            </option>
                        ))}
                    </select>
                </span>
                {splittedQuestionText[1]}
            </div>
            <button
                onClick={clickSubmit}
                className={`${css.ok_button} ${css.starjedi}`}
            >
                Fertig
            </button>
        </>
    );
};
