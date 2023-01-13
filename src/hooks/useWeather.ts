import { url } from "inspector";
import { useEffect, useState } from "react"

export const useWeather = () => {
    const [location, setLocation] = useState("");
    const [weatherData, setWeatherData] = useState({ location: "", temp: "", weatherDescription: "" });
    const [weatherDataForecast, setWeatherDataForecast] = useState({ location: "", data: [] });
    const [starWarsPlanet, setStarWarsPlanet] = useState("default");
    const API_KEY = "79a9ad1cd477e4c6265d4b1882c856b0";
    const BASE_WEATHER_URL = "https://api.openweathermap.org";
    const GEO_ENCODING_RELATIVE_URL = "/geo/1.0/direct";
    const WEATHER_DATA_RELATIVE_URL = "/data/2.5/weather";
    const WEATHER_DATA_FORECAST_RELATIVE_URL = "data/2.5/forecast";

    function fetchCoordinates() {
        const url = new URL(GEO_ENCODING_RELATIVE_URL, BASE_WEATHER_URL);
        url.searchParams.append('q', location);
        url.searchParams.append('limit', '1')
        url.searchParams.append('appid', API_KEY);

        fetch(url.toString())
            .then(response => response.json())
            .then((obj) => {
                console.log(obj);
                if (obj[0].hasOwnProperty('local_names') && obj[0].local_names.hasOwnProperty('de')) {
                    fetchWeather(obj[0].lat, obj[0].lon, obj[0].local_names.de);
                } else {
                    fetchWeather(obj[0].lat, obj[0].lon, location);
                }
            })
            .catch((err) => {
                console.log(err);
                setStarWarsPlanet("noPlanet")
            })
    }

    function fetchWeather(lat: string, lon: string, locationName: string) {
        console.log(lat);
        console.log(lon);
        const url = new URL(WEATHER_DATA_RELATIVE_URL, BASE_WEATHER_URL);
        url.searchParams.append("lat", lat);
        url.searchParams.append("lon", lon);
        url.searchParams.append("appid", API_KEY);
        url.searchParams.append("lang", "de");


        fetch(url.toString())
            .then(response => response.json())
            .then((obj) => {
                const weatherDataObj = { location: locationName, temp: (obj.main.temp - 273.15).toFixed(2) + "°C", weatherDescription: obj.weather[0].description };
                decideStarWarsPlanet(parseInt(weatherDataObj.temp));
                setWeatherData(weatherDataObj);
                console.log(weatherData);
                fetchWeatherForecast(lat, lon, locationName);
            })
            .catch((err) => {
                console.log(err);
            })
    }

    function decideStarWarsPlanet(temp: number) {
        if (temp <= 0) {
            setStarWarsPlanet("Hoth");
        } else if (temp <= 7) {
            setStarWarsPlanet("Dagobah");
        } else if (temp <= 14) {
            setStarWarsPlanet("Naboo");
        } else if (temp <= 21) {
            setStarWarsPlanet("Yavin4");
        } else if (temp <= 28) {
            setStarWarsPlanet("Bespin");
        } else if (temp <= 35) {
            setStarWarsPlanet("Tatooine");
        } else if (temp > 35) {
            setStarWarsPlanet("Mustafa");
        }
    }

    function fetchWeatherForecast(lat: string, lon: string, locationName: string) {
        const url = new URL(WEATHER_DATA_FORECAST_RELATIVE_URL, BASE_WEATHER_URL);
        url.searchParams.append("lat", lat);
        url.searchParams.append("lon", lon);
        url.searchParams.append("cnt", "40");
        url.searchParams.append("appid", API_KEY);
        url.searchParams.append("lang", "de");


        fetch(url.toString())
            .then(response => response.json())
            .then((obj) => {
                console.log(obj);
                const weatherDataForecastObj = {location: locationName, data: obj.list};
                setWeatherDataForecast(weatherDataForecastObj);
                console.log(weatherDataForecastObj)
            })
            .catch((error) => console.log(error))
    }



    return {
        location,
        setLocation,
        fetchCoordinates,
        weatherData,
        starWarsPlanet,
        weatherDataForecast
    }

}