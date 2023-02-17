import React, { useEffect, useRef, useState } from "react";
import { IWeatherForecast } from "../../../../../typings/weather/IWeatherForecast";
import css from "./WeatherForecastTiles.module.css"
import { WeatherForecastTile } from "./WeatherForecastTile/WeatherForecastTile";
import { WeatherMode } from "../../../../../typings/weather/WeatherMode";

/**
 * component describes wrapper of all tiles
 */
interface WeatherForecastTilesProps {
    fillWeatherDataWithForecast: (tempMax: number, wind: number, weathercode: { description: string, image: string }) => void;
    weatherForecast: IWeatherForecast;
    setDateState: (value: React.SetStateAction<{
        weekDay: string;
        date: string;
    }>) => void;
    foldState: boolean;
    weatherMode: WeatherMode;
}

export const WeatherForecastTiles: React.FunctionComponent<WeatherForecastTilesProps> = ({ fillWeatherDataWithForecast, weatherForecast, setDateState, foldState, weatherMode }) => {

    const tileRef0 = useRef<HTMLInputElement>(null);
    const tileRef1 = useRef<HTMLInputElement>(null);
    const tileRef2 = useRef<HTMLInputElement>(null);
    const tileRef3 = useRef<HTMLInputElement>(null);
    const tileRef4 = useRef<HTMLInputElement>(null);
    const tileRef5 = useRef<HTMLInputElement>(null);
    const tileRef6 = useRef<HTMLInputElement>(null);
    const tileRefsList = [tileRef0, tileRef1, tileRef2, tileRef3, tileRef4, tileRef5, tileRef6];
    const tilesRef = useRef<HTMLInputElement>(null);

    const tileContentArray = [css.TileContent, css.TileContent, css.TileContent, css.TileContent, css.TileContent, css.TileContent, css.TileContent];
    const [tileContentState, setTileContentState] = useState(tileContentArray);

    let tileslistJSX: JSX.Element[] = []
    initJsxElementTiles();

    const selectTile = (count: number) => {
        fillWeatherDataWithForecast(weatherForecast.tempMax[count], weatherForecast.windspeed[count], weatherForecast.weathercode[count])
        tileContentArray[count] = css.TileContentSelected;
        setTileContentState(tileContentArray);
        setDateState({ weekDay: weatherForecast.weekDays[count], date: weatherForecast.time[count] });
    }

    useEffect(() => {
        if (weatherMode === WeatherMode.CURRENT) {
            setTileContentState(tileContentArray)
        }
    }, [weatherMode])

    /**
     * fold tiles
     */
    useEffect(() => {
        const currentWrapperTiles = tilesRef.current;
        if (currentWrapperTiles !== null) {
            if (foldState) {
                currentWrapperTiles.className = css.Tiles_down;
            } else {
                currentWrapperTiles.className = css.Tiles;
            }
        }
    }, [foldState])

    /**
     * used for mouse hover animation at tiles
     */
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

    /**
     * initialize all tiles
     */
    function initJsxElementTiles() {
        for (let i = 0; i <= 6; i++) {
            tileslistJSX.push(
                <div className={css.Tile} onClick={() => selectTile(i)} ref={tileRefsList[i]} data-cy={"tile_" + i} key={i}>
                    <div className={tileContentState[i]} key={i}>
                        <WeatherForecastTile
                            tempMax={weatherForecast.tempMax[i]}
                            tempMin={weatherForecast.tempMin[i]}
                            time={weatherForecast.time[i]}
                            description={weatherForecast.weathercode[i]}
                            key={i}
                        />
                    </div>
                </div>
            )
        }
    };

    return (
        <>
            <div data-cy="tiles" className={css.Tiles} ref={tilesRef}>
                {tileslistJSX}
            </div>
        </>
    )
}
