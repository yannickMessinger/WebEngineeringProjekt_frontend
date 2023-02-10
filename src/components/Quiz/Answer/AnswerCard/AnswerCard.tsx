import React from "react";
import { IAnswer } from "../IAnswer";
import { QuestionType } from "../../Question/IQuestion";
import { MultipleChoice } from "../MultipleChoice/MultipleChoice";
import { Estimation } from "../Estimation/Estimation";
import { Picture } from "../Picture/Picture";

interface IProps {
    answerList: IAnswer[],
    answerImages: {data:any},
    questionType: QuestionType
    onClickNext: (wasCorrect:boolean, onCorrect:number, onFalse:number) => void
}

export const AnswerCard = ({answerList, answerImages, questionType, onClickNext}:IProps) => {
    console.log(questionType)
    switch(questionType) {
        case QuestionType.MULTIPLE_CHOICE:
            return (
                <MultipleChoice
                    answerList={answerList}
                    onClickNext={onClickNext} 
                />
            )
        case QuestionType.ESTIMATION:
            return (
                <Estimation
                    answerList={answerList}
                    onClickNext={onClickNext}
                />
            )
        case QuestionType.FILL_IN_THE_BLANK:
            return (
                <h3>Fill in the blank</h3>
                /*
                <FillInTheBlank
                    answerList={answerList}
                    onClickNext={onClickNext}
                />
                */
            )
        case QuestionType.PICTURE:
            return (
                <Picture
                    answerList={answerList}
                    answerImages={answerImages}
                    onClickNext={onClickNext}
                />
            )
        default:
            return (
                <h3>Fehler bei QuestionType</h3>
            )
    }
}