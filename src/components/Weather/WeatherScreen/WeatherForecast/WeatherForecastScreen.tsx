import React, { useEffect, useRef, useState } from "react";
import { EnumType } from "typescript";
import css from "./WeatherForecastScreen.module.css"
import upIcon from "../../../../assets/icons/arrow_up.png";
import downIcon from "../../../../assets/icons/arrow_down.png";
import { WeatherDescription } from "./WeatherDescription/WeatherDescription";
import { WeatherMode } from "../../../../typings/weather/WeatherMode";
import { IWeatherData } from "../../../../typings/weather/IWeatherData";
import { IWeatherForecast } from "../../../../typings/weather/IWeatherForecast";
import { WeatherForecastTiles } from "./WeatherForecastTiles/WeatherForecastTiles";

/**
 * The whole screen related to the weather forecast tiles
 */
interface WeatherForecastProps {
    weatherForecast: IWeatherForecast
    fillWeatherDataWithForecast: (tempMax: number, wind: number, weathercode: { description: string, image: string }) => void
    fetchWeatherData: () => void
    weatherMode: WeatherMode
    weatherData: IWeatherData
}
export const WeatherForecastScreen: React.FunctionComponent<WeatherForecastProps> = ({ weatherForecast, fillWeatherDataWithForecast, fetchWeatherData, weatherMode, weatherData }) => {

    const [dateState, setDateState] = useState({ weekDay: "", date: "" });
    const [foldState, setFoldState] = useState(false);
    const [foldButtonState, setFoldButtonState] = useState(<img src={upIcon} alt="up" />);
    const currentWeatherButtonRef = useRef<HTMLButtonElement>(null);
    const descriptionControlWrapperRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        changeButtonState();
    }, [weatherMode])


    const changeButtonState = () => {
        const currentButton = currentWeatherButtonRef.current;
        if (weatherMode === WeatherMode.CURRENT) {
            if (currentButton !== null) {
                currentButton.className = css.CurrentWeatherButton_disabled;

            }
        } else if (weatherMode === WeatherMode.FORECAST) {
            if (currentButton !== null) {
                currentButton.className = css.CurrentWeatherButton;
            }
        }
    }

    const showCurrenWeather = () => {
        if (weatherMode === WeatherMode.FORECAST) {
            fetchWeatherData()
        }
    }

    const setDescriptionWrapperToBottom = () => {
        const currentWrapperAbove = descriptionControlWrapperRef.current;
        if (currentWrapperAbove !== null) {
            if (foldState) {
                currentWrapperAbove.className = css.DescriptionControlWrapper;
                setFoldButtonState(<img src={upIcon} alt="up" />);
                setFoldState(false)
            } else {
                currentWrapperAbove.className = css.DescriptionControlWrapper_down;
                setFoldButtonState(<img src={downIcon} alt="down" />);
                setFoldState(true)
            }
        }
    }

    return (
        <>
            <div className={css.weatherForecastScreen}>
                <div className={css.DescriptionControlWrapper} ref={descriptionControlWrapperRef}>
                    <div className={css.WeatherDescription}>
                        <WeatherDescription weatherData={weatherData} />
                    </div>
                    <div className={css.TileControlWrapper}>
                        <div data-cy="date" className={css.Date}>{weatherMode === WeatherMode.CURRENT ? weatherMode : dateState.weekDay + ", " + dateState.date}</div>
                        <button data-cy="fold_button" className={css.FoldButton} onClick={() => { setDescriptionWrapperToBottom() }}>{foldButtonState}</button>
                        <button data-cy="current_weather_button" className={css.CurrentWeatherButton} onClick={showCurrenWeather} ref={currentWeatherButtonRef}>Aktuelles Wetter anzeigen</button>
                    </div>
                </div>
                <WeatherForecastTiles
                    weatherForecast={weatherForecast}
                    setDateState={setDateState}
                    fillWeatherDataWithForecast={fillWeatherDataWithForecast}
                    foldState={foldState}
                    weatherMode={weatherMode}
                />
            </div>
        </>

    )
}

