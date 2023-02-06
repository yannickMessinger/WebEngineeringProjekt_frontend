import React, { useEffect, useState } from "react";
import { EnumType } from "typescript";
import { WeatherMode } from "../../../hooks/useWeather";
import css from "./WeatherForecast.module.css"
import { WeatherForecastElement } from "./WeatherForecastElement";


interface WeatherForecastProps {
    weatherForecast: {
        tempMax: Array<number>,
        tempMin: Array<number>
        sunrise: Array<number>
        sunset: Array<number>
        time: Array<string>
        weathercode: Array<{ description: string, image: string }>
        windspeed: Array<number>
    };
    fillWeatherDataWithForecast: (tempMin: number, tempMax: number, time: string, weathercode: { description: string, image: string }) => void
    fetchCoordinates : () => void
    weatherMode : WeatherMode
}

export const WeatherForecast: React.FunctionComponent<WeatherForecastProps> = ({ weatherForecast, fillWeatherDataWithForecast, fetchCoordinates, weatherMode }) => {
    const arr = [css.Element,css.Element, css.Element, css.Element, css.Element, css.Element, css.Element]
    const [selected, setSelected] = useState(arr);

    const handleClick = (count: number) => {
        fillWeatherDataWithForecast(weatherForecast.tempMin[count], weatherForecast.tempMax[count], weatherForecast.time[count], weatherForecast.weathercode[count])
        arr[count] = css.ElementSelected;
        setSelected(arr)
    }
    const showCurrenWeather = () => {
        fetchCoordinates()
    }

    useEffect(() => {
        if(weatherMode === WeatherMode.CURRENT) {
            const arr = [css.Element,css.Element, css.Element, css.Element, css.Element, css.Element, css.Element]
            setSelected(arr)
        }
        
    }, [weatherMode])

    return (
        <>
        <div className={css.BackToCurrentWeather}>
            <button className={css.showCurrentWeatherButton} onClick={showCurrenWeather}>Akutelles Wetter anzeigen</button>
            <br />
            {weatherMode}
        </div>
        
            <div className={css.WeatherForecast}>
                <div className={selected[0]} onClick={() => handleClick(0)}>
                    <WeatherForecastElement
                        tempMax={weatherForecast.tempMax[0]}
                        tempMin={weatherForecast.tempMin[0]}
                        time={weatherForecast.time[0]}
                        description={weatherForecast.weathercode[0]}
                    />
                </div>
                <div className={selected[1]} onClick={() => handleClick(1)}>
                    <WeatherForecastElement
                        tempMax={weatherForecast.tempMax[1]}
                        tempMin={weatherForecast.tempMin[1]}
                        time={weatherForecast.time[1]}
                        description={weatherForecast.weathercode[1]}
                    />
                </div>

                <div className={selected[2]} onClick={() => handleClick(2)}>
                    <WeatherForecastElement
                        tempMax={weatherForecast.tempMax[2]}
                        tempMin={weatherForecast.tempMin[2]}
                        time={weatherForecast.time[2]}
                        description={weatherForecast.weathercode[2]}
                    />
                </div>
                <div className={selected[3]} onClick={() => handleClick(3)}>
                    <WeatherForecastElement
                        tempMax={weatherForecast.tempMax[3]}
                        tempMin={weatherForecast.tempMin[3]}
                        time={weatherForecast.time[3]}
                        description={weatherForecast.weathercode[3]}
                    />
                </div>

                <div className={selected[4]} onClick={() => handleClick(4)}>
                    <WeatherForecastElement
                        tempMax={weatherForecast.tempMax[4]}
                        tempMin={weatherForecast.tempMin[4]}
                        time={weatherForecast.time[4]}
                        description={weatherForecast.weathercode[4]}
                    />
                </div>

                <div className={selected[5]} onClick={() => handleClick(5)}>
                    <WeatherForecastElement
                        tempMax={weatherForecast.tempMax[5]}
                        tempMin={weatherForecast.tempMin[5]}
                        time={weatherForecast.time[5]}
                        description={weatherForecast.weathercode[5]}
                    />
                </div>

                <div className={selected[6]} onClick={() => handleClick(6)}>
                    <WeatherForecastElement
                        tempMax={weatherForecast.tempMax[6]}
                        tempMin={weatherForecast.tempMin[6]}
                        time={weatherForecast.time[6]}
                        description={weatherForecast.weathercode[6]}
                    />
                </div>

            </div>
        </>
    )
}

