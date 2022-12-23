import React, { useEffect, useState } from "react";
import { useWeather } from "../../hooks/useWeather";
import { Searchbar } from "../Searchbar/Searchbar";
import { WeatherDescription } from "../WeatherDescription/WeatherDescription";
import { WeatherPlanet } from "../WeatherPlanet/WeatherPlanet";
import css from "./WeatherScreen.module.css"

export const WeatherScreen = () => {

    let weatherLocation;
    const { location, setLocation, fetchCoordinates, weatherData, starWarsPlanet} = useWeather();
    const [backgroundPlanetUrl, setBackgroundPlanetUrl] = useState("");


    useEffect(() => {
        if (location != "") {
            fetchCoordinates();
        }
    }, [location]);

    useEffect(() => {
        setBackgroundPlanetUrl("./weather_backgrounds/" + starWarsPlanet.toLowerCase() + ".png");
        console.log(backgroundPlanetUrl)
    }, [starWarsPlanet])

    if(starWarsPlanet != "noPlanet") {
        weatherLocation =  <span>{weatherData.location} </span>;
    }else {
        weatherLocation = <span></span>;
    }

    return (
        <>
            <div className={css.WholeWeather}>
                <div className={css.Background}
                    style={{
                        backgroundImage: `url(${backgroundPlanetUrl})`,
                        backgroundSize: '100%',
                        backgroundRepeat: 'no-repeat',
                        height: '100vh',
                        width: '100vw',
                    }} >
                    <div className={css.Searchbar}>
                        <Searchbar setLocation={setLocation} />
                    </div>
                    <div className={css.Location}>
                        {weatherLocation}
                    </div> 
                    <div className={css.StarWarsPlanet}>
                        <WeatherPlanet planetName={starWarsPlanet} />
                    </div>
                    <div className={css.WeatherDescription}>
                        <WeatherDescription weatherData={weatherData} />
                    </div>
                </div>
            </div>

        </>
    );
}