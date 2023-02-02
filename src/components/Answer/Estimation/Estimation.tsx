import React, { useState } from "react";
import { IAnswer } from "../IAnswer";
import { Slider } from "../../UI/Slider/Slider";

interface IProps {
    answerList: IAnswer[],
    onClickNext: (wasCorrect:boolean, onCorrect:number, onFalse:number) => void
}

export const Estimation = ({answerList, onClickNext}:IProps) => {
    const [value, setValue] = useState(Number(answerList.at(2)?.text)/2)

    function updateValue (newValue:number) {
        setValue(newValue);
    }
    function clickSubmit(wasCorret:boolean) {
        onClickNext(wasCorret, 10, -4);
    }

    return (
        <>
        <Slider value={value} updateValue={updateValue} />
        <p>{value} Jahre</p>
        <button onClick={() => clickSubmit(value.toString() === answerList.at(0)?.text)}>OK</button>
        </>
    )
}
