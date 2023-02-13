import React, { useEffect, useState } from "react";
import { useWeather } from "../../../hooks/useWeather";
import { Searchbar } from "../../UI/Searchbar/Searchbar";
import { WeatherDescription } from "../WeatherDescription/WeatherDescription";
import { WeatherForecast } from "../WeatherForecast/WeatherForecast";
import { WeatherPlanet } from "../WeatherPlanet/WeatherPlanet";
import css from "./WeatherScreen.module.css"

export const WeatherScreen = () => {

    let weatherLocation;
    let weatherForecast;
    let weatherDescription;
    const { location, setLocation, fetchCoordinates, weatherData, starWarsPlanet, weatherDataForecast, fillWeatherDataWithForecast, weatherMode } = useWeather();
    const [backgroundPlanetUrl, setBackgroundPlanetUrl] = useState("");


    useEffect(() => {
        const decideIfBackgroundGetChanged = ((event: UIEvent) => {
            if (window.innerWidth > 450) {
                setBackgroundPlanetUrl("./weather_backgrounds/" + starWarsPlanet.toLowerCase() + ".png");

            } else {
                setBackgroundPlanetUrl("./weather_backgrounds/phone/" + starWarsPlanet.toLowerCase() + "_phone.png");
            }
        });
        console.log(backgroundPlanetUrl)

        window.addEventListener("resize", decideIfBackgroundGetChanged);
        return () => {
            window.removeEventListener("resize", decideIfBackgroundGetChanged);
        }

    });

    useEffect(() => {
        if (location != "") {
            fetchCoordinates();
        }
    }, [location]);

    useEffect(() => {
        if (window.innerWidth > 450) {
            setBackgroundPlanetUrl("./weather_backgrounds/" + starWarsPlanet.toLowerCase() + ".png");

        } else {
            setBackgroundPlanetUrl("./weather_backgrounds/phone/" + starWarsPlanet.toLowerCase() + "_phone.png");
        }
        console.log(backgroundPlanetUrl)
    }, [starWarsPlanet])




    if (starWarsPlanet !== "noPlanet" && starWarsPlanet !== "default") {
        weatherLocation = <span>{weatherData.location} </span>;
        weatherForecast = <WeatherForecast weatherForecast={weatherDataForecast} fillWeatherDataWithForecast={fillWeatherDataWithForecast} fetchCoordinates={fetchCoordinates} weatherMode={weatherMode} weatherData={weatherData} />;
    } else {
        weatherLocation = <span></span>;
        weatherForecast = <span></span>;
        weatherDescription = <span></span>;
    }

    return (
        <>
            <div className={css.WholeWeather}>
                <div className={css.Background}
                    style={{

                        backgroundImage: `url(${backgroundPlanetUrl})`,

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
                    <div className={css.WeatherForecast}>
                        {weatherForecast}
                    </div>
                </div>
            </div>

        </>
    );
}