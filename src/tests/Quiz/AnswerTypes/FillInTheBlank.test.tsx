import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { FillInTheBlank } from "../../../components/Quiz/Answer/FillInTheBlank/FillInTheBlank";

const mockedAnswerOptions = [
    {
        text: "Antwort 1",
        isRight: true,
        image: "",
    },
    {
        text: "Antwort 2",
        isRight: false,
        image: "",
    },
    {
        text: "Antwort 3",
        isRight: false,
        image: "",
    },
    {
        text: "Antwort 4",
        isRight: false,
        image: "",
    },
];

test("if correct answer is chosen", () => {
    render(
        <MemoryRouter>
            <FillInTheBlank
                questionText={"(options) ist ein Planet"}
                answerList={mockedAnswerOptions}
                onClickNext={(
                    wasCorrect: boolean,
                    onCorrect: number,
                    onFalse: number
                ) => {
                    expect(wasCorrect).toBeTruthy();
                }}
            />
        </MemoryRouter>
    );

    let selection = screen.getByRole("combobox");
    fireEvent.change(selection, { target: { value: "Antwort 1" } });

    let confirmButton = screen.getByText("Fertig");
    fireEvent.click(confirmButton);
});

test("if wrong answer is chosen", () => {
    render(
        <MemoryRouter>
            <FillInTheBlank
                questionText={"(options) ist ein Planet"}
                answerList={mockedAnswerOptions}
                onClickNext={(
                    wasCorrect: boolean,
                    onCorrect: number,
                    onFalse: number
                ) => {
                    setTimeout(() => {
                        expect(wasCorrect).toBeFalsy();
                    }, 3000);
                }}
            />
        </MemoryRouter>
    );

    let selection = screen.getByRole("combobox");
    let result = fireEvent.change(selection, {
        target: { value: "Antwort 2" },
    });

    let confirmButton = screen.getByText("Fertig");
    fireEvent.click(confirmButton);
    // setTimeout(() => {
    //     expect(2).toBeFalsy();
    // }, 3000);
});
