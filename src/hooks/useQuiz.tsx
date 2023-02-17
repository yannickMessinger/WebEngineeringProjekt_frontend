import { useEffect, useState } from "react";
import { IQuestion, QuestionType } from "../components/Quiz/Question/IQuestion";

interface IQuestionItem {
    attributes: IQuestion;
    id: number;
}

export const useQuiz = (difficulty: string, amount: number) => {
    const [questions, setQuestions] = useState(Array<IQuestionItem>());
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [maxPossibleScore, setMaxPossibleScore] = useState(-1);

    function shuffleAndLimit(array: Array<IQuestionItem>) {
        array.sort(() => Math.random() - 0.5);
        if (array.length > amount) {
            let slicedArray = array.slice(0, amount);
            array = slicedArray;
        }
        let maxScore = 0;
        array.forEach((ele) => {
            switch (ele.attributes.questionType) {
                case QuestionType.ESTIMATION:
                    maxScore += 10;
                    break;
                case QuestionType.FILL_IN_THE_BLANK:
                    maxScore += 5;
                    break;
                case QuestionType.MULTIPLE_CHOICE:
                    maxScore += 5;
                    break;
                case QuestionType.PICTURE:
                    maxScore += 5;
                    break;
            }
        });
        setMaxPossibleScore(maxScore);
        setLoading(false);
        return array;
    }

    useEffect(() => {
        setLoading(true);
        async function fetchQuestions() {
            try {
                const api_url = "http://localhost:1337/api/questions";
                const difficulty_filter = `filters[difficulty][$eq]=${difficulty}`;
                const populate_filter = "populate=*";
                const api_token =
                    "9c7a6487430807a9fefd721698a65a35919a2cbe904403815f75e854257b2c1fb58e0a21fee5328df3bfbcdf335e06a375c30ced4ce6d7eac7b5dae39f9964e5059080e4d7bf63cdb942cbe268f8ff8b8fb55e980ab4a01e7819be01300fe9b0f30af07bcade9ba29f8d0180cb6e7f4a3192b81b0a1b15e7b33752ed63ecab8e";
                const response = await fetch(
                    `${api_url}?${difficulty_filter}&${populate_filter}`,
                    {
                        headers: {
                            Authorization: `Bearer ${api_token}`,
                            "Content-Type": "application/json",
                        },
                    }
                );
                const json = await response.json();
                await setQuestions(shuffleAndLimit(json.data));
            } catch (error) {
                setError(true);
            }
        }
        fetchQuestions();
    }, [difficulty, amount]);
    return {
        questions,
        loading: loading,
        error: error,
        maxPossibleScore,
    };
};
