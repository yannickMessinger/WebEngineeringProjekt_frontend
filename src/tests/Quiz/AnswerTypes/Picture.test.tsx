/* eslint-disable testing-library/no-node-access */
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { Picture } from "../../../components/Quiz/Answer/Picture/Picture";

const mockedAnswerOptions = [
    {
        text: "erstes Bild",
        isRight: true,
        image: "1",
    },
    {
        text: "zweites Bild",
        isRight: false,
        image: "2",
    },
    {
        text: "drittes Bild",
        isRight: false,
        image: "3",
    },
    {
        text: "viertes Bild",
        isRight: false,
        image: "4",
    },
];

const mockedImageData = [
    {
        attributes: {
            name: "1",
            formats: { small: { url: "/testUrl1" } },
        },
    },
    {
        attributes: {
            name: "2",
            formats: { small: { url: "testUrl2" } },
        },
    },
    {
        attributes: {
            name: "3",
            formats: { small: { url: "/testUrl3" } },
        },
    },
    {
        attributes: {
            name: "4",
            formats: { small: { url: "testUrl4" } },
        },
    },
];

test("if correct answer is chosen", () => {
    render(
        <MemoryRouter>
            <Picture
                answerList={mockedAnswerOptions}
                answerImages={{
                    data: mockedImageData,
                }}
                onClickNext={(
                    wasCorrect: boolean,
                    onRight: number,
                    onFalse: number
                ) => {
                    setTimeout(() => {
                        expect(wasCorrect).toBeTruthy();
                    }, 3000);
                }}
            />
        </MemoryRouter>
    );

    var correctAnswer = screen.getByText(mockedAnswerOptions[0].text);
    expect(correctAnswer).toBeInTheDocument();

    fireEvent.click(correctAnswer);
    expect(correctAnswer.parentElement).toHaveClass("right");
});

test("if wrong answer is chosen", () => {
    render(
        <MemoryRouter>
            <Picture
                answerList={mockedAnswerOptions}
                answerImages={{
                    data: mockedImageData,
                }}
                onClickNext={(
                    wasCorrect: boolean,
                    onRight: number,
                    onFalse: number
                ) => {
                    setTimeout(() => {
                        expect(wasCorrect).toBeFalsy();
                    }, 3000);
                }}
            />
        </MemoryRouter>
    );

    var wrongAnswer = screen.getByText(mockedAnswerOptions[1].text);
    expect(wrongAnswer).toBeInTheDocument();

    fireEvent.click(wrongAnswer);
    expect(wrongAnswer.parentElement).toHaveClass("false");
});
