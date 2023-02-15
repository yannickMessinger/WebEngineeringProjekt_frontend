import css from "./QuizHeader.module.css";

interface IProps {
	score: number;
}
export const QuizHeader = ({ score }: IProps) => {
	return (
		<>
			<div className={css.info}>
				<p>Score {score}/100</p>
			</div>
		</>
	);
};
