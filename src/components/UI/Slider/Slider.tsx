import React from "react";
import css from "./Slider.module.css";

interface IProps {
    value: number
    updateValue: (value:number) => void
    minValue:number
    maxValue:number
    step:number
}

export const Slider = ({value, updateValue, minValue, maxValue, step}:IProps) => {
    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        updateValue(Number(e.target.value))
    }
    return (
        <>
        <input
            className={css.slider}
            type="range"
            step={step}
            min={minValue}
            max={maxValue}
            value={value}
            onChange={handleChange} 
        />
        </>
    )
}
