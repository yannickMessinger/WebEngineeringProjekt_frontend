import React, { ChangeEvent, Dispatch, FormEvent, SetStateAction, useState } from "react";
import css from "./Searchbar.module.css"
import icon from "../../../assets/icons/search_icon.png"

interface SearchbarProps {
    setLocation: Dispatch<SetStateAction<string>>;
}

export const Searchbar: React.FunctionComponent<SearchbarProps> = ({ setLocation }) => {
    const [value, setValue] = useState("");
    const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    }


    function handleSubmitAfterPressEnter(submitEvent: FormEvent) {
        submitEvent.preventDefault();
        setLocation(value);
    }
    return (
        <div className={css.search}>
            <form onSubmit={handleSubmitAfterPressEnter}>
                <input type="text" onChange={changeHandler} value={value} />
                <button data-cy="searchbar_button" type="submit"><img src={icon} alt="Search" /></button>
            </form>

        </div>
    )
}