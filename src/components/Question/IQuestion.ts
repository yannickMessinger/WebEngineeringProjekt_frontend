import { IAnswer } from "../Answer/IAnswer";

export interface IQuestion {
    question_text: string,
    answerOptions: IAnswer[],
    questionType: QuestionType
}

export enum QuestionType {
    MULTIPLE_CHOICE,
    ESTIMATION,
    PICTURE,
    FILL_IN_THE_BLANK
}
