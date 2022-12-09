import { IAnswer } from "../Answer/IAnswer";

export interface IQuestion {
    question_text: string,
    answerOptions: IAnswer[], 
}