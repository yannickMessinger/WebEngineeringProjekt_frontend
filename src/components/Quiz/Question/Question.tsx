import React from "react";
import { MultipleChoice } from "../Answer/MultipleChoice/MultipleChoice";
import { IQuestion, QuestionType } from "./IQuestion";
import css from "./Question.module.css";
import { IAnswer } from "../Answer/IAnswer";
import { AnswerCard } from "../Answer/AnswerCard/AnswerCard";

interface IProps {
  question: IQuestion;
  onClickNext: (
    wasCorrect: boolean,
    onCorrect: number,
    onFalse: number
  ) => void;
}

export const Question = ({ question, onClickNext }: IProps) => {
  const { questionText, answerOptions, questionType } = question;
  return (
    <div className={css.question_card}>
      <h2 className={css.question_text}>{questionText}</h2>
      <AnswerCard
        answerList={answerOptions}
        questionType={questionType}
        onClickNext={onClickNext}
      />
    </div>
  );
};
