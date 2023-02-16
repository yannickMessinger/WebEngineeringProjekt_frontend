import { MemoryRouter } from "react-router-dom";
import { QuizMenu } from "../../components/Quiz/QuizMenu/QuizMenu";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
 
test("initialize QuizMenu", () => {
    render(
        <MemoryRouter>
            <QuizMenu />
        </MemoryRouter>
    );
    const headingText = screen.getByText(
        "Wähle einen Schwierigkeitsgrad und die maximale Anzahl der Fragen aus, mit denen du das quiz spielen willst."
    );
    expect(headingText).toBeInTheDocument();
});
 
test("show LightSaberFight on Start", () => {
    render(
        <MemoryRouter>
            <QuizMenu />
        </MemoryRouter>
    );
    const buttonElement = screen.getByRole("button", { name: "Let's start!" });
    expect(buttonElement).toBeInTheDocument();
    fireEvent.click(buttonElement);
 
    const lightSaberFightTitle = screen.getByText("May the force be with you!");
    expect(lightSaberFightTitle).toBeInTheDocument();
    expect(buttonElement).not.toBeInTheDocument();
});
 
test("select difficulty", () => {
    render(
        <MemoryRouter>
            <QuizMenu />
        </MemoryRouter>
    );
    let currentDifficulty = screen.getByText("easy");
    expect(currentDifficulty).toBeInTheDocument();
 
    const buttonElement = screen.getAllByRole("button", { name: "ändern" });
    fireEvent.click(buttonElement[0]);
 
    let newDifficulty = screen.getByText("mittel");
    fireEvent.click(newDifficulty);
    currentDifficulty = screen.getByText("medium");
    expect(currentDifficulty).toBeInTheDocument();
 
    newDifficulty = screen.getByText("schwer");
    fireEvent.click(newDifficulty);
    currentDifficulty = screen.getByText("hard");
    expect(currentDifficulty).toBeInTheDocument();
});
 
test("select max amout of questions", () => {
    render(
        <MemoryRouter>
            <QuizMenu />
        </MemoryRouter>
    );
    let currentDifficulty = screen.getAllByText("10");
    expect(currentDifficulty[0]).toBeInTheDocument();
 
    const buttonElement = screen.getAllByRole("button", { name: "ändern" });
    fireEvent.click(buttonElement[1]);
 
    let newDifficulty = screen.getByText("15");
    fireEvent.click(newDifficulty);
    currentDifficulty = screen.getAllByText("15");
 
    newDifficulty = screen.getByText("20");
    fireEvent.click(newDifficulty);
    currentDifficulty = screen.getAllByText("20");
});