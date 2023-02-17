import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { Estimation } from "../../../components/Quiz/Answer/Estimation/Estimation";

const mockedAnswerOptions = [
    {
        text: "2",
        isRight: true,
        image: "",
    },
    {
        text: "0",
        isRight: false,
        image: "",
    },
    {
        text: "4",
        isRight: false,
        image: "",
    },
    {
        text: "1",
        isRight: false,
        image: "",
    },
];

test("if correct answer is chosen", () => {
    render(
        <MemoryRouter>
            <Estimation
                answerList={mockedAnswerOptions}
                onClickNext={(
                    wasCorrect: boolean,
                    onCorrect: number,
                    onFalse: number
                ) => {
                    expect(wasCorrect).toBe(true);
                }}
            />
        </MemoryRouter>
    );
    let slider = screen.getByRole("slider");
    fireEvent.change(slider, { target: { value: "2" } });

    let confirmButton = screen.getByText("Fertig");
    fireEvent.click(confirmButton);
});

test("if wrong answer is chosen", () => {
    render(
        <MemoryRouter>
            <Estimation
                answerList={mockedAnswerOptions}
                onClickNext={(
                    wasCorrect: boolean,
                    onCorrect: number,
                    onFalse: number
                ) => {
                    expect(wasCorrect).toBe(false);
                }}
            />
        </MemoryRouter>
    );
    let slider = screen.getByRole("slider");
    fireEvent.change(slider, { target: { value: "1" } });

    let confirmButton = screen.getByText("Fertig");
    fireEvent.click(confirmButton);
});
