import React, { useState } from "react";
import { IAnswer } from "../IAnswer";
import { Slider } from "../../../UI/Slider/Slider";

interface IProps {
    answerList: IAnswer[],
    onClickNext: (wasCorrect:boolean, onCorrect:number, onFalse:number) => void
}

export const Estimation = ({answerList, onClickNext}:IProps) => {
    const [value, setValue] = useState(0)

    function updateValue (newValue:number) {
        setValue(newValue);
    }
    function clickSubmit(wasCorret:boolean) {
        setValue(Number(0))
        onClickNext(wasCorret, 10, -4);
    }

    return (
        <>
        <Slider value={value} updateValue={updateValue} minValue={Number(answerList.at(1)?.text)} maxValue={Number(answerList.at(2)?.text)} step={Number(answerList.at(3)?.text)} />
        <p>{value}</p>
        <button onClick={() => clickSubmit(value.toString() === answerList.at(0)?.text)}>OK</button>
        </>
    )
}
