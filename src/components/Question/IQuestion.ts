import { IAnswer } from "../Answer/IAnswer";

export interface IQuestion {
    questionText: string,
    answerOptions: IAnswer[],
    questionType: QuestionType
}

export enum QuestionType {
    MULTIPLE_CHOICE,
    ESTIMATION,
    PICTURE,
    FILL_IN_THE_BLANK
}
