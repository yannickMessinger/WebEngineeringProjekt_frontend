import React, { useEffect, useState } from "react";
import { IQuestion } from "../components/Quiz/Question/IQuestion";

export const useQuiz = (difficulty: string) => {
  const [questions, setQuestions] = useState(Array<{attributes:IQuestion, id:number}>());
  const [error, setError] = useState(false);
  
  useEffect(() => {
    async function fetchQuestions() {
      try {
        const api_url = "http://localhost:1337/api/questions";
        const api_token =
          "9c7a6487430807a9fefd721698a65a35919a2cbe904403815f75e854257b2c1fb58e0a21fee5328df3bfbcdf335e06a375c30ced4ce6d7eac7b5dae39f9964e5059080e4d7bf63cdb942cbe268f8ff8b8fb55e980ab4a01e7819be01300fe9b0f30af07bcade9ba29f8d0180cb6e7f4a3192b81b0a1b15e7b33752ed63ecab8e";
        const response = await fetch(
          `${api_url}?filters[difficulty][$eq]=${difficulty}`,
          {
            headers: {
              Authorization: `Bearer ${api_token}`,
              "Content-Type": "application/json",
            },
          }
        );
        const json = await response.json();
        setQuestions(json.data);
      } catch (error) {
        setError(true);
      }
    }
    fetchQuestions()
  }, [difficulty]);
  return {
    questions,
    loading: questions.length === 0,
    error: error
  };
};