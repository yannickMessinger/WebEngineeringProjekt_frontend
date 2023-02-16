import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { QuizResult } from "../../components/Quiz/QuizResult/QuizResult";
import { MemoryRouter } from "react-router-dom";

test("init QuizResult", () => {
    const result = {
        finalScore: 31,
        mostPossibleScore: 50,
        correctAnswers: 5,
        questionAmount: 9,
    };
    render(
        <MemoryRouter>
            <QuizResult
                finalScore={result.finalScore}
                correctAnswers={result.correctAnswers}
                questionAmount={result.questionAmount}
                mostPossibleScore={result.mostPossibleScore}
            />
        </MemoryRouter>
    );

    var resultText = screen.getByText(
        `Du hast ${result.finalScore} von ${result.mostPossibleScore} Punkten erreicht! Und ${result.correctAnswers} von ${result.questionAmount} Fragen richtig beantwortet.`
    );

    expect(resultText).toBeInTheDocument();
});
