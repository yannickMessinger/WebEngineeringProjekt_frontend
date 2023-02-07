import React, { useEffect, useRef, useState } from "react";
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
    fetchCoordinates: () => void
    weatherMode: WeatherMode
}

export const WeatherForecast: React.FunctionComponent<WeatherForecastProps> = ({ weatherForecast, fillWeatherDataWithForecast, fetchCoordinates, weatherMode }) => {
    const arr = [css.Content, css.Content, css.Content, css.Content, css.Content, css.Content, css.Content]
    const [contentState, setContentState] = useState(arr);

    const wrapperRef = useRef<HTMLInputElement>(null)
    const cardRef0 = useRef<HTMLInputElement>(null)
    const cardRef1 = useRef<HTMLInputElement>(null)
    const cardRef2 = useRef<HTMLInputElement>(null)
    const cardRef3 = useRef<HTMLInputElement>(null)
    const cardRef4 = useRef<HTMLInputElement>(null)
    const cardRef5 = useRef<HTMLInputElement>(null)
    const cardRef6 = useRef<HTMLInputElement>(null)

    const cardRefs = [cardRef0, cardRef1, cardRef2, cardRef3, cardRef4, cardRef5, cardRef6]
    wrapperRef.current?.addEventListener('mousemove', ($event) => {
        console.log($event.clientY)
        cardRefs.forEach((card) => {
            const rect = card.current?.getBoundingClientRect();
            if (rect !== undefined) {
                const x = $event.clientX - rect?.left;
                const y = $event.clientY - rect?.top;

                card.current?.style.setProperty('--xPos', `${x}px`);
                card.current?.style.setProperty('--yPos', `${y}px`);
            }
        })
    })

    const handleClick = (count: number) => {
        fillWeatherDataWithForecast(weatherForecast.tempMin[count], weatherForecast.tempMax[count], weatherForecast.time[count], weatherForecast.weathercode[count])
        arr[count] = css.ContentSelected;
        setContentState(arr)
    }
    const showCurrenWeather = () => {
        fetchCoordinates()
    }

    useEffect(() => {
        if (weatherMode === WeatherMode.CURRENT) {
            const arr = [css.Content, css.Content, css.Content, css.Content, css.Content, css.Content, css.Content]
            setContentState(arr)
        }

    }, [weatherMode])

    return (

        <>

            <div className={css.BackToCurrentWeather}>
                <button className={css.showCurrentWeatherButton} onClick={showCurrenWeather}>Akutelles Wetter anzeigen</button>
                <br />
                {weatherMode}
            </div>

            <div className={css.WeatherForecast} ref={wrapperRef}>
                <div className={css.Element} onClick={() => handleClick(0)} ref={cardRef0}>
                    <div className={contentState[0]}>
                        <WeatherForecastElement
                            tempMax={weatherForecast.tempMax[0]}
                            tempMin={weatherForecast.tempMin[0]}
                            time={weatherForecast.time[0]}
                            description={weatherForecast.weathercode[0]}
                        />
                    </div>

                </div>
                <div className={css.Element} onClick={() => handleClick(1)} ref={cardRef1}>
                    <div className={contentState[1]}>
                        <WeatherForecastElement
                            tempMax={weatherForecast.tempMax[1]}
                            tempMin={weatherForecast.tempMin[1]}
                            time={weatherForecast.time[1]}
                            description={weatherForecast.weathercode[1]}
                        />
                    </div>
                </div>
                <div className={css.Element} onClick={() => handleClick(2)} ref={cardRef2}>
                    <div className={contentState[2]}>

                        <WeatherForecastElement
                            tempMax={weatherForecast.tempMax[2]}
                            tempMin={weatherForecast.tempMin[2]}
                            time={weatherForecast.time[2]}
                            description={weatherForecast.weathercode[2]}
                        />
                    </div>
                </div>
                <div className={css.Element} onClick={() => handleClick(3)} ref={cardRef3}>
                    <div className={contentState[3]}>

                        <WeatherForecastElement
                            tempMax={weatherForecast.tempMax[3]}
                            tempMin={weatherForecast.tempMin[3]}
                            time={weatherForecast.time[3]}
                            description={weatherForecast.weathercode[3]}
                        />
                    </div>
                </div>
                <div className={css.Element} onClick={() => handleClick(4)} ref={cardRef4}>
                    <div className={contentState[4]}>

                        <WeatherForecastElement
                            tempMax={weatherForecast.tempMax[4]}
                            tempMin={weatherForecast.tempMin[4]}
                            time={weatherForecast.time[4]}
                            description={weatherForecast.weathercode[4]}
                        />
                    </div>
                </div>
                <div className={css.Element} onClick={() => handleClick(5)} ref={cardRef5}>
                    <div className={contentState[5]}>

                        <WeatherForecastElement
                            tempMax={weatherForecast.tempMax[5]}
                            tempMin={weatherForecast.tempMin[5]}
                            time={weatherForecast.time[5]}
                            description={weatherForecast.weathercode[5]}
                        />
                    </div>
                </div>
                <div className={css.Element} onClick={() => handleClick(6)} ref={cardRef6}>
                    <div className={contentState[6]}>

                        <WeatherForecastElement
                            tempMax={weatherForecast.tempMax[6]}
                            tempMin={weatherForecast.tempMin[6]}
                            time={weatherForecast.time[6]}
                            description={weatherForecast.weathercode[6]}
                        />
                    </div>
                </div>
            </div>
        </>

    )



}

