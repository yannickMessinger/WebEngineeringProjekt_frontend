import React from "react";
import css from "./Slider.module.css";

interface IProps {
    value: number
    updateValue: (value:number) => void
}

export const Slider = ({value, updateValue}:IProps) => {
    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        updateValue(Number(e.target.value))
    }
    return (
        <>
        <input
            className={css.slider}
            type="range"
            step={5}
            min={0}
            max={1000}
            value={value}
            onChange={handleChange} 
        />
        </>
    )
}
