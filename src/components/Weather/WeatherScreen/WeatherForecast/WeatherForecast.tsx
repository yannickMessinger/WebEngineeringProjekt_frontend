import React, { useEffect, useRef, useState } from "react";
import { EnumType } from "typescript";
import css from "./WeatherForecast.module.css"
import { WeatherForecastElement } from "./WeatherForecastElement/WeatherForecastElement";
import upIcon from "../../../../assets/icons/arrow_up.png";
import downIcon from "../../../../assets/icons/arrow_down.png";
import { WeatherDescription } from "./WeatherDescription/WeatherDescription";
import { WeatherMode } from "../../../../typings/weather/WeatherMode";
import { IWeatherData } from "../../../../typings/weather/IWeatherData";
import { IWeatherForecast } from "../../../../typings/weather/IWeatherForecast";


interface WeatherForecastProps {
    weatherForecast: IWeatherForecast
    fillWeatherDataWithForecast: ( tempMax: number, wind: number, weathercode: { description: string, image: string }) => void
    fetchWeatherData: () => void
    weatherMode: WeatherMode
    weatherData: IWeatherData
}

export const WeatherForecast: React.FunctionComponent<WeatherForecastProps> = ({ weatherForecast, fillWeatherDataWithForecast, fetchWeatherData, weatherMode, weatherData }) => {

    const arr = [css.Content, css.Content, css.Content, css.Content, css.Content, css.Content, css.Content]
    const [contentState, setContentState] = useState(arr);
    const [dateState, setDateState] = useState({ weekDay: "", date: "" });
    const [foldState, setFoldState] = useState(false)
    const wrapperRef = useRef<HTMLInputElement>(null);
    const cardRef0 = useRef<HTMLInputElement>(null);
    const cardRef1 = useRef<HTMLInputElement>(null);
    const cardRef2 = useRef<HTMLInputElement>(null);
    const cardRef3 = useRef<HTMLInputElement>(null);
    const cardRef4 = useRef<HTMLInputElement>(null);
    const cardRef5 = useRef<HTMLInputElement>(null);
    const cardRef6 = useRef<HTMLInputElement>(null);
    const currentWeatherButtonRef = useRef<HTMLButtonElement>(null);
    const backToCurrentWeatherRef = useRef<HTMLInputElement>(null);
    const [foldButtonState, setFoldButtonState] = useState(<img src={upIcon} alt="up" />);

    const cardRefs = [cardRef0, cardRef1, cardRef2, cardRef3, cardRef4, cardRef5, cardRef6];

    useEffect(() => {
        const mouseMovedForElements = ($event: MouseEvent) => {
            console.log("TEst test ets")
            cardRefs.forEach((card) => {
                const rect = card.current?.getBoundingClientRect();
                if (rect !== undefined) {
                    const x = $event.clientX - rect?.left;
                    const y = $event.clientY - rect?.top;

                    card.current?.style.setProperty('--xPos', `${x}px`);
                    card.current?.style.setProperty('--yPos', `${y}px`);
                }
            })
        }
        wrapperRef.current?.addEventListener('mousemove', mouseMovedForElements);

        return () => {
            wrapperRef.current?.removeEventListener('mousemove', mouseMovedForElements);
        }
    }, [])

    const handleClick = (count: number) => {
        fillWeatherDataWithForecast(weatherForecast.tempMax[count], weatherForecast.windspeed[count], weatherForecast.weathercode[count])
        arr[count] = css.ContentSelected;
        setContentState(arr);
        setDateState({ weekDay: weatherForecast.weekDays[count], date: weatherForecast.time[count] });
    }
    const showCurrenWeather = () => {
        if (weatherMode === WeatherMode.FORECAST) {
            fetchWeatherData()
        }
    }

    const foldTiles = () => {
        const currentWrapperTiles = wrapperRef.current;
        const currentWrapperAbove = backToCurrentWeatherRef.current;
        if (currentWrapperTiles !== null && currentWrapperAbove !== null) {
            if (foldState) {
                currentWrapperTiles.className = css.WeatherForecast;
                currentWrapperAbove.className = css.BackToCurrentWeather;
                setFoldButtonState(<img src={upIcon} alt="up" />);
                setFoldState(false)
            } else {
                currentWrapperTiles.className = css.WeatherForecast_down;
                currentWrapperAbove.className = css.BackToCurrentWeather_down;
                setFoldButtonState(<img src={downIcon} alt="down" />);
                setFoldState(true)
            }
        }
    }

    useEffect(() => {
        const currentButton = currentWeatherButtonRef.current;
        if (weatherMode === WeatherMode.CURRENT) {
            const arr = [css.Content, css.Content, css.Content, css.Content, css.Content, css.Content, css.Content]
            setContentState(arr)
            if (currentButton !== null) {
                currentButton.className = css.showCurrentWeatherButton_disabled;

            }
        } else if (weatherMode === WeatherMode.FORECAST) {
            if (currentButton !== null) {
                currentButton.className = css.showCurrentWeatherButton;
            }
        }
    }, [weatherMode])

    return (
        <>

            <div className={css.BackToCurrentWeather} ref={backToCurrentWeatherRef}>
                <div className={css.WeatherDescription}>
                    <WeatherDescription weatherData={weatherData} />
                </div>
                <div className={css.WeatherMode}>{weatherMode === WeatherMode.CURRENT ? weatherMode : dateState.weekDay + ", " + dateState.date} </div>
                <div className={css.TileControllRow}>
                    <button className={css.FoldButton} onClick={foldTiles}>{foldButtonState}</button>
                    <button className={css.showCurrentWeatherButton} onClick={showCurrenWeather} ref={currentWeatherButtonRef}>Aktuelles Wetter anzeigen</button>
                </div>
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

