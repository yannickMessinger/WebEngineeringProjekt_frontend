import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { MultipleChoice } from "../../../components/Quiz/Answer/MultipleChoice/MultipleChoice";
import { IAnswer } from "../../../components/Quiz/Answer/IAnswer";

const mockedAnswerOptions:Array<IAnswer> = [
    {
        text: "erste Antwort",
        isRight: true,
        image: "image1",
    },
    {
        text: "zweite Antwort",
        isRight: false,
        image: "image2",
    },
    {
        text: "dritte Antwort",
        isRight: false,
        image: "image3",
    },
    {
        text: "vierte Antwort",
        isRight: false,
        image: "image4",
    },
];

test("if right answer is chosen", () => {
    render(
        <MemoryRouter>
            <MultipleChoice
                answerList={mockedAnswerOptions}
                onClickNext={(
                    wasCorrect: boolean,
                    onCorrect: number,
                    onFalse: number
                ) => {}}
            />
        </MemoryRouter>
    );
    mockedAnswerOptions.forEach((answer) => {
        const answerText = screen.getByText(answer.text);
        expect(answerText).toBeInTheDocument();
        expect(answerText).toHaveClass("list_item");
    });

    const rightAnswer = screen.getByText(mockedAnswerOptions[0].text);
    expect(rightAnswer).toBeInTheDocument();

    fireEvent.click(rightAnswer);
    expect(rightAnswer).toHaveClass("right disableClick");
});

test("if wrong answer is chosen", () => {
    render(
        <MemoryRouter>
            <MultipleChoice
                answerList={mockedAnswerOptions}
                onClickNext={(
                    wasCorrect: boolean,
                    onCorrect: number,
                    onFalse: number
                ) => {}}
            />
        </MemoryRouter>
    );
    mockedAnswerOptions.forEach((answer) => {
        const answerText = screen.getByText(answer.text);
        expect(answerText).toBeInTheDocument();
        expect(answerText).toHaveClass("list_item");
    });

    const wrongAnswer = screen.getByText(mockedAnswerOptions[1].text);
    expect(wrongAnswer).toBeInTheDocument();

    fireEvent.click(wrongAnswer);
    expect(wrongAnswer).toHaveClass("false disableClick");
});
