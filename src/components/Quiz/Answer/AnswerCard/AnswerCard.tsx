import React from "react";
import { IAnswer } from "../../../../typings/quiz/IAnswer";
import { QuestionType } from "../../../../typings/quiz/IQuestion";
import { MultipleChoice } from "../MultipleChoice/MultipleChoice";
import { Estimation } from "../Estimation/Estimation";
import { Picture } from "../Picture/Picture";
import { FillInTheBlank } from "../FillInTheBlank/FillInTheBlank";

interface IProps {
    questionText: string;
    answerList: IAnswer[];
    answerImages: { data: any };
    questionType: QuestionType;
    onClickNext: (
        wasCorrect: boolean,
        onCorrect: number,
        onFalse: number
    ) => void;
}

export const AnswerCard = ({
    questionText,
    answerList,
    answerImages,
    questionType,
    onClickNext,
}: IProps) => {
    switch (questionType) {
        case QuestionType.MULTIPLE_CHOICE:
            return (
                <MultipleChoice
                    answerList={answerList}
                    onClickNext={onClickNext}
                />
            );
        case QuestionType.ESTIMATION:
            return (
                <Estimation answerList={answerList} onClickNext={onClickNext} />
            );
        case QuestionType.FILL_IN_THE_BLANK:
            return (
                <FillInTheBlank
                    questionText={questionText}
                    answerList={answerList}
                    onClickNext={onClickNext}
                />
            );
        case QuestionType.PICTURE:
            return (
                <Picture
                    answerList={answerList}
                    answerImages={answerImages}
                    onClickNext={onClickNext}
                />
            );
        default:
            return <h3>Fehler bei QuestionType</h3>;
    }
};
