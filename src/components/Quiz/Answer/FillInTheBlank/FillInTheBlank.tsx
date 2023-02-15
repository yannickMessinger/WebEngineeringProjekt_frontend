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

    function handleSelectChange(event: any) {
        const selectedOption = options.get(event.target.value);

        if (selectedOption !== undefined) {
            setSelectedAnswer(selectedOption);
        }
    }

    return (
        <>
            <div>
                <p className={css.redText}>
                    {splittedQuestionText[0]}
                    <span>
                        <select onChange={handleSelectChange}>
                            <option value="" disabled selected>
                                --Wähle eine Antwortmöglichkeit aus--
                            </option>
                            {answerList.map((answer) => {
                                return <option>{answer.text}</option>;
                            })}
                        </select>
                    </span>
                    {splittedQuestionText[1]}
                </p>
                <button onClick={clickSubmit}>Fertig</button>
            </div>
        </>
    );
};
