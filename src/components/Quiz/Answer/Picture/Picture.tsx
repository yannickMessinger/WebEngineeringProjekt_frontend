import React from "react";
import { IAnswer } from "../IAnswer";
import { PictureAnswer } from "./PictureAnswer/PictureAnswer";
import css from "./Picture.module.css";

interface IProps {
    answerList: IAnswer[];
    answerImages: { data: [any] };
    onClickNext: (
        wasCorrect: boolean,
        onRight: number,
        onFalse: number
    ) => void;
}

export const Picture = ({ answerList, answerImages, onClickNext }: IProps) => {
    return (
        <div className={css.container}>
            {answerList.map((answer: IAnswer) => {
                const imageSource = answerImages.data.find((ele) => {
                    return ele.attributes.name === answer.image;
                });
                return (
                    <PictureAnswer
                        imageSource={imageSource.attributes.formats.small.url}
                        answerOption={answer}
                        onClick={onClickNext}
                    />
                );
            })}
        </div>
    );
};
