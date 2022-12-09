import { IAnswer } from "../Answer/IAnswer";

export interface IQuestion {
    question: string,
    answerOptions: IAnswer[], 
}