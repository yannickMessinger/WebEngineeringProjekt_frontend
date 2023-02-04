import React, { ChangeEvent, Dispatch, FormEvent, SetStateAction, useEffect, useState } from "react";
import css from "./Searchbar.module.css"
import icon from "../../assets/icons/search_icon.png"
import { useWeather } from "../../hooks/useWeather";


interface SearchbarProps {
    setLocation: Dispatch<SetStateAction<string>> ; 
}

export const Searchbar : React.FunctionComponent<SearchbarProps> = ({setLocation}) => {
    const [value, setValue] = useState("");
    const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    }
    

    function handleSubmitAfterPressEnter(submitEvent: FormEvent) {
        submitEvent.preventDefault();
        console.log(value);
        setLocation(value);
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