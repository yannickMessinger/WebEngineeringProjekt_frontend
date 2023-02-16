import React from "react";
import css from "./Select.module.css";

interface SelectProps {
    label: string;
    value: string;
    options: Option[];
    onChange: (option: Option) => void;
    showDropDown: boolean;
    setShowDropDown: (newValue: boolean) => void;
}

export interface Option {
    label: string;
    value: string | number;
}

export const Select = ({
    label,
    value,
    options,
    onChange,
    showDropDown,
    setShowDropDown,
}: SelectProps) => {
    const isSelected = (option: Option) => {
        if (option.value == value) {
            return true;
        }
        return false;
    };

    return (
        <div className={css.select_box}>
            <label className={css.text_label}>{label}</label>
            <br />
            <label className={css.gray_text}>{value}</label>
            <br />
            <button
                onClick={() => setShowDropDown(!showDropDown)}
                className={css.trigger_button}
            >
                ändern
            </button>
            <div
                className={`${css.options} ${
                    showDropDown ? css.visible : css.hidden
                }`}
            >
                {options.map((option) => (
                    <div
                        key={option.value}
                        className={`${css.option} ${
                            isSelected(option) && css.option_selected
                        }`}
                        onClick={() => {
                            onChange(option);
                            setShowDropDown(false);
                        }}
                    >
                        {option.label}
                    </div>
                ))}
            </div>
        </div>
    );
};
