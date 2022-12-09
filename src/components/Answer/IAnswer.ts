export interface AnswersListProps {
    answers: IAnswer[]
}

export interface IAnswer {
    text: string,
    isRight: boolean
}