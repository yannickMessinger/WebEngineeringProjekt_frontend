import { url } from "inspector";
import { useEffect, useState } from "react"

export const useWeather = () => {
    const [location, setLocation] = useState("");
    const [weatherData, setWeatherData] = useState({ location: "", temp: "", weatherDescription: "" });
    const [starWarsPlanet, setStarWarsPlanet] = useState("");
    const API_KEY = "79a9ad1cd477e4c6265d4b1882c856b0";
    const BASE_WEATHER_URL = "https://api.openweathermap.org";
    const GEO_ENCODING_RELATIVE_URL = "/geo/1.0/direct";
    const WEATHER_DATA_RELATIVE_URL = "/data/2.5/weather";


    function fetchCoordinates() {
        const url = new URL(GEO_ENCODING_RELATIVE_URL, BASE_WEATHER_URL);
        url.searchParams.append('q', location);
        url.searchParams.append('limit', '1')
        url.searchParams.append('appid', API_KEY);

        fetch(url.toString())
            .then(response => response.json())
            .then((obj) => {
                console.log(obj);
                fetchWeather(obj[0].lat, obj[0].lon);
            })
            .catch((err) => {
                console.log(err);
            })
    }

    function fetchWeather(lat: string, lon: string) {
        console.log(lat);
        console.log(lon);
        const url = new URL(WEATHER_DATA_RELATIVE_URL, BASE_WEATHER_URL);
        url.searchParams.append("lat", lat);
        url.searchParams.append("lon", lon);
        url.searchParams.append("appid", API_KEY);


        fetch(url.toString())
            .then(response => response.json())
            .then((obj) => {
                const wheaterData = { location: location, temp: (obj.main.temp - 273.15).toFixed(2), weatherDescription: obj.weather[0].description };
                decideStarWarsPlanet(parseInt(wheaterData.temp));
                setWeatherData(wheaterData);
                console.log(wheaterData);
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
        }else if (temp <= 14) {
            setStarWarsPlanet("Naboo");
        }else if (temp <= 21) {
            setStarWarsPlanet("Yavin4");
        }else if (temp <= 28) {
            setStarWarsPlanet("Bespin");
        }else if (temp <= 35) {
            setStarWarsPlanet("Tatooine");
        }else if (temp > 35) {
            setStarWarsPlanet("Mustafa");
        }
        
    }

    return {
        location,
        setLocation,
        fetchCoordinates,
        weatherData,
        starWarsPlanet
    }

}