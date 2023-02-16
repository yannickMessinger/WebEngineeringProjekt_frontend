import css from "./QuizHeader.module.css";

interface IProps {
    score: number;
    maxScore: number;
}
export const QuizHeader = ({ score, maxScore }: IProps) => {
    return (
        <>
            <div className={css.info}>
                <p>
                    Score {score}/{maxScore}
                </p>
            </div>
        </>
    );
};
