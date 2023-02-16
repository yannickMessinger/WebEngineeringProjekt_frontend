import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { Question } from "../../components/Quiz/Question/Question";
import { IQuestion, QuestionType } from "../../components/Quiz/Question/IQuestion";

const mockedAnswerOptions = [
    {
        text: "Antwort eins",
        isRight: true,
        image: "image1",
    },
    {
        text: "Antwort zwei",
        isRight: false,
        image: "image2",
    },
    {
        text: "Antwort drei",
        isRight: false,
        image: "image3",
    },
    {
        text: "Antwort vier",
        isRight: false,
        image: "image4",
    },
];

let mockedQuestion:IQuestion = {
    questionText: "Das ist eine Frage",
    answerOptions: mockedAnswerOptions,
    questionType: QuestionType.MULTIPLE_CHOICE,
    image: { data: null },
    answerImages: { data: [{}] },
};

test("initialize Question", () => {
    render(
        <MemoryRouter>
            <Question
                question={mockedQuestion}
                onClickNext={(
                    wasCorrect: boolean,
                    onCorrect: number,
                    onFalse: number
                ) => {}}
            ></Question>
        </MemoryRouter>
    );
});

test("when QuestionType is MULTIPLE_CHOICE/ESTIMATION/PICTURE", () => {
    mockedQuestion.questionType = QuestionType.MULTIPLE_CHOICE;

    render(
        <MemoryRouter>
            <Question
                question={mockedQuestion}
                onClickNext={(
                    wasCorrect: boolean,
                    onCorrect: number,
                    onFalse: number
                ) => {}}
            ></Question>
        </MemoryRouter>
    );
    let title = screen.getByText(mockedQuestion.questionText);
    expect(title).toBeInTheDocument();
});

test("when QuestionType is FILL_IN_THE_BLANK", () => {
    mockedQuestion.questionType = QuestionType.FILL_IN_THE_BLANK;

    render(
        <MemoryRouter>
            <Question
                question={mockedQuestion}
                onClickNext={(
                    wasCorrect: boolean,
                    onCorrect: number,
                    onFalse: number
                ) => {}}
            ></Question>
        </MemoryRouter>
    );
    let title = screen.getByText("Fülle den Satz aus!");
    expect(title).toBeInTheDocument();
});
