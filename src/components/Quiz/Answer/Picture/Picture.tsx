import React, { useState } from "react";
import { IAnswer } from "../IAnswer";
import { PictureAnswer } from "./PictureAnswer/PictureAnswer";
import css from "./Picture.module.css";

interface IProps {
    answerList: IAnswer[];
    answerImages: { data: any[] };
    onClickNext: (
        wasCorrect: boolean,
        onRight: number,
        onFalse: number
    ) => void;
}

export const Picture = ({ answerList, answerImages, onClickNext }: IProps) => {
    const [answerClicked, setAnswerClicked] = useState({
        text: "",
        isRight: false,
        image: "",
    });
    return (
        <div className={css.pictures_container}>
            {answerList.map((answer: IAnswer) => {
                const imageSource = answerImages.data.find((ele) => {
                    return ele.attributes.name === answer.image;
                });
                return (
                    <PictureAnswer
                        key={answer.text}
                        imageSource={imageSource.attributes.formats.small.url}
                        answerOption={answer}
                        onClick={onClickNext}
                        answerClicked={answerClicked}
                        setAnswerClicked={setAnswerClicked}
                    />
                );
            })}
        </div>
    );
};
