import React from "react";
import { FlowNode } from "typescript";
import css from "./Select.module.css";

interface SelectProps {
    label: string,
    value: string,
    options: Option[],
    onChange: (e:React.ChangeEvent<HTMLSelectElement>) => void
}

export interface Option {
    label: string,
    value: string
}

export const Select = ({label, value, options, onChange}: SelectProps) => {
    return (
        <label className={`${css.select_box}`}>
            {label}
            <br />
            <select className={css.select} value={value} onChange={onChange}>
                {options.map((option) => (
                    <option key={option.value} value={option.value}>{option.value}</option>
                ))}
            </select>
        </label>
    )
}
