import { IAnswer } from "../Answer/IAnswer";

export interface IQuestion {
    questionText: string;
    answerOptions: IAnswer[];
    questionType: QuestionType;
    image: { data: any };
    answerImages: {data: [any]}
}

export enum QuestionType {
    MULTIPLE_CHOICE = "MULTIPLE_CHOICE",
    ESTIMATION = "ESTIMATION",
    PICTURE = "PICTURE",
    FILL_IN_THE_BLANK = "FILL_IN_THE_BLANK",
}
