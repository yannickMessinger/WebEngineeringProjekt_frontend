import React, { ChangeEvent, FormEvent, useState } from "react";
import css from "./Searchbar.module.css"
import icon from "../../assets/icons/search_icon.png"


export const Searchbar = () => {
    const [value, setValue] = useState("");
    const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    }

    function handleSubmitAfterPressEnter(submitEvent: FormEvent) {
        submitEvent.preventDefault();
        console.log(value);
    }
    return (
        <div className={css.search}>
            <form onSubmit={handleSubmitAfterPressEnter}>
                <input type="text" onChange={changeHandler} value={value} />
                <button type="submit"><img src={icon} alt="Search"/></button>
            </form>
        </div>
    )
}