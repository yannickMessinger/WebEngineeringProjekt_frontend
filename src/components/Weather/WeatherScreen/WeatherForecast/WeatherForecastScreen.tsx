import React, { useEffect, useRef, useState } from "react";
import { EnumType } from "typescript";
import css from "./WeatherForecastScreen.module.css"
import { WeatherForecastTile } from "./WeatherForecastTile/WeatherForecastTile";
import upIcon from "../../../../assets/icons/arrow_up.png";
import downIcon from "../../../../assets/icons/arrow_down.png";
import { WeatherDescription } from "./WeatherDescription/WeatherDescription";
import { WeatherMode } from "../../../../typings/weather/WeatherMode";
import { IWeatherData } from "../../../../typings/weather/IWeatherData";
import { IWeatherForecast } from "../../../../typings/weather/IWeatherForecast";


interface WeatherForecastProps {
    weatherForecast: IWeatherForecast
    fillWeatherDataWithForecast: (tempMax: number, wind: number, weathercode: { description: string, image: string }) => void
    fetchWeatherData: () => void
    weatherMode: WeatherMode
    weatherData: IWeatherData
}
export const WeatherForecastScreen: React.FunctionComponent<WeatherForecastProps> = ({ weatherForecast, fillWeatherDataWithForecast, fetchWeatherData, weatherMode, weatherData }) => {

    const tileContentArray = [css.TileContent, css.TileContent, css.TileContent, css.TileContent, css.TileContent, css.TileContent, css.TileContent];
    const [tileContentState, setTileContentState] = useState(tileContentArray);
    const [dateState, setDateState] = useState({ weekDay: "", date: "" });
    const [foldState, setFoldState] = useState(false);
    const [foldButtonState, setFoldButtonState] = useState(<img src={upIcon} alt="up" />);

    const currentWeatherButtonRef = useRef<HTMLButtonElement>(null);
    const tileControlWrapperRef = useRef<HTMLInputElement>(null);
    const tilesRef = useRef<HTMLInputElement>(null);

    const tileRef0 = useRef<HTMLInputElement>(null);
    const tileRef1 = useRef<HTMLInputElement>(null);
    const tileRef2 = useRef<HTMLInputElement>(null);
    const tileRef3 = useRef<HTMLInputElement>(null);
    const tileRef4 = useRef<HTMLInputElement>(null);
    const tileRef5 = useRef<HTMLInputElement>(null);
    const tileRef6 = useRef<HTMLInputElement>(null);
    const tileRefsList = [tileRef0, tileRef1, tileRef2, tileRef3, tileRef4, tileRef5, tileRef6];

    let tileslistJSX: JSX.Element[] = []
    initJsxElementTiles();

    useEffect(() => {
        changeButtonState();
    }, [weatherMode])


    useEffect(() => {
        const mouseMovedForTiles = (event: MouseEvent) => {
            tileRefsList.forEach((tile) => {
                const rect = tile.current?.getBoundingClientRect();
                if (rect !== undefined) {
                    const xPos = event.clientX - rect?.left;
                    const yPos = event.clientY - rect?.top;

                    tile.current?.style.setProperty('--xPos', `${xPos}px`);
                    tile.current?.style.setProperty('--yPos', `${yPos}px`);
                }
            })
        }
        tilesRef.current?.addEventListener('mousemove', mouseMovedForTiles);

        return () => {
            tilesRef.current?.removeEventListener('mousemove', mouseMovedForTiles);
        }
    }, [])


    const changeButtonState = () => {
        const currentButton = currentWeatherButtonRef.current;
        if (weatherMode === WeatherMode.CURRENT) {
            setTileContentState(tileContentArray)
            if (currentButton !== null) {
                currentButton.className = css.CurrentWeatherButton_disabled;

            }
        } else if (weatherMode === WeatherMode.FORECAST) {
            if (currentButton !== null) {
                currentButton.className = css.CurrentWeatherButton;
            }
        }
    }

    const selectTile = (count: number) => {
        fillWeatherDataWithForecast(weatherForecast.tempMax[count], weatherForecast.windspeed[count], weatherForecast.weathercode[count])
        tileContentArray[count] = css.TileContentSelected;
        setTileContentState(tileContentArray);
        setDateState({ weekDay: weatherForecast.weekDays[count], date: weatherForecast.time[count] });
    }

    const showCurrenWeather = () => {
        if (weatherMode === WeatherMode.FORECAST) {
            fetchWeatherData()
        }
    }

    const foldTiles = () => {
        const currentWrapperTiles = tilesRef.current;
        const currentWrapperAbove = tileControlWrapperRef.current;
        if (currentWrapperTiles !== null && currentWrapperAbove !== null) {
            if (foldState) {
                currentWrapperTiles.className = css.Tiles;
                currentWrapperAbove.className = css.TileControlWrapper;
                setFoldButtonState(<img src={upIcon} alt="up" />);
                setFoldState(false)
            } else {
                currentWrapperTiles.className = css.Tiles_down;
                currentWrapperAbove.className = css.TileControlWrapper_down;
                setFoldButtonState(<img src={downIcon} alt="down" />);
                setFoldState(true)
            }
        }
    }

    function initJsxElementTiles() {
        for (let i = 0; i <= 6; i++) {
            tileslistJSX.push(
                <div className={css.Tile} onClick={() => selectTile(i)} ref={tileRefsList[i]}>
                    <div className={tileContentState[i]}>
                        <WeatherForecastTile
                            tempMax={weatherForecast.tempMax[i]}
                            tempMin={weatherForecast.tempMin[i]}
                            time={weatherForecast.time[i]}
                            description={weatherForecast.weathercode[i]}
                        />
                    </div>
                </div>
            )
        }
    };

    return (
        <>
            <div className={css.TileControlWrapper} ref={tileControlWrapperRef}>
                <div className={css.WeatherDescription}>
                    <WeatherDescription weatherData={weatherData} />
                </div>
                <div className={css.Date}>{weatherMode === WeatherMode.CURRENT ? weatherMode : dateState.weekDay + ", " + dateState.date} </div>
                <button className={css.FoldButton} onClick={foldTiles}>{foldButtonState}</button>
                <button className={css.CurrentWeatherButton} onClick={showCurrenWeather} ref={currentWeatherButtonRef}>Aktuelles Wetter anzeigen</button>
            </div>

            <div className={css.Tiles} ref={tilesRef}>
                {tileslistJSX}
            </div>
        </>

    )
}

