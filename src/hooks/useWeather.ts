import { url } from "inspector";
import { useEffect, useState } from "react"
import { IWeatherData } from "../typings/weather/IWeatherData";
import { IWeatherForecast } from "../typings/weather/IWeatherForecast";
import { IWeatherJsonData } from "../typings/weather/IWeatherJsonData";
import { WeatherMode } from "../typings/weather/WeatherMode";

/**
 * hook to provide weather data from API
 *  
 */
export const useWeather = () => {

    const API_KEY_FOR_ENCODING = "79a9ad1cd477e4c6265d4b1882c856b0";
    const BASE_WEATHER_ENCODING_URL = "https://api.openweathermap.org";
    const GEO_ENCODING_RELATIVE_URL = "/geo/1.0/direct";
    const BASE_WEATHER_URL = "https://api.open-meteo.com";
    const WEATHER_DATA_FORECAST_RELATIVE_URL = "v1/forecast";

    const weatherCodeMap = initializeWeatherCodeMap();
    const weatherDateMap = initializeWeatherDateMap();

    const weatherDataObj: IWeatherData = { location: "", temp: "", wind: "", weatherDescription: { description: "", image: "" } };
    const weatherDataForecastObj: IWeatherForecast = { tempMax: [], tempMin: [], time: [], weekDays: [], weathercode: [], windspeed: [] }

    const [location, setLocation] = useState("");
    const [weatherData, setWeatherData] = useState(weatherDataObj);
    const [weatherDataForecast, setWeatherDataForecast] = useState(weatherDataForecastObj);
    const [starWarsPlanet, setStarWarsPlanet] = useState("default");
    const [weatherMode, setWeatherMode] = useState(WeatherMode.CURRENT);

    /**
     * fetch coordinates based on location from https://openweathermap.org/api
     * Reason for used different Apis: https://open-meteo.com/ does not provide location to coordinates conversion
     */
    function fetchCoordinates() {
        const url = new URL(GEO_ENCODING_RELATIVE_URL, BASE_WEATHER_ENCODING_URL);
        url.searchParams.append('q', location);
        url.searchParams.append('limit', '1')
        url.searchParams.append('appid', API_KEY_FOR_ENCODING);

        fetch(url.toString())
            .then(response => response.json())
            .then((rawCoordinatesObj: any) => {
                if (rawCoordinatesObj[0].hasOwnProperty('local_names') && rawCoordinatesObj[0].local_names.hasOwnProperty('de')) {
                    setLocation(rawCoordinatesObj[0].local_names.de);
                }
                fetchWeather(rawCoordinatesObj[0].lat, rawCoordinatesObj[0].lon);

            })
            .catch((error) => {
                console.log(error);
                setStarWarsPlanet("noPlanet")
            })
    }
    /**
     * fetch weather data based on lat and long from https://open-meteo.com/. 
     * Reason for used different Apis: https://openweathermap.org/api does not provide a reasonable forecast free of charge.
     * @param lat latitude 
     * @param lon longitude
     */
    function fetchWeather(lat: string, lon: string) {
        const url = new URL(WEATHER_DATA_FORECAST_RELATIVE_URL, BASE_WEATHER_URL);
        url.searchParams.append("latitude", lat);
        url.searchParams.append("longitude", lon);
        url.searchParams.append("current_weather", "true");
        url.searchParams.append("daily", "temperature_2m_min");
        url.searchParams.append("daily", "temperature_2m_max");
        url.searchParams.append("daily", "weathercode");
        url.searchParams.append("daily", "windspeed_10m_max");
        url.searchParams.append("timezone", "auto");

        fetch(url.toString())
            .then(response => response.json())
            .then((weatherJsonData: IWeatherJsonData) => {
                fillWeatherStates(weatherJsonData);
            })
            .catch((error) => {
                console.log(error);
            })
    }

    function fillWeatherStates(weatherJsonData: IWeatherJsonData) {
        const weatherDataObj: IWeatherData = {
            location: location,
            temp: weatherJsonData.current_weather.temperature + "°C",
            wind: weatherJsonData.current_weather.windspeed + " km/h",
            weatherDescription: weatherCodeMap.get(weatherJsonData.current_weather.weathercode)
        };
        decideStarWarsPlanet(parseInt(weatherDataObj.temp));
        setWeatherData(weatherDataObj);
        buildForecastObject(weatherJsonData.daily);
        setWeatherMode(WeatherMode.CURRENT)
    }

    function decideStarWarsPlanet(temp: number) {
        const planets = [
            { tempRange: [0, 0], planet: "Hoth" },
            { tempRange: [1, 7], planet: "Dagobah" },
            { tempRange: [8, 14], planet: "Naboo" },
            { tempRange: [15, 21], planet: "Yavin4" },
            { tempRange: [22, 28], planet: "Bespin" },
            { tempRange: [29, 35], planet: "Tatooine" },
            { tempRange: [36, Number.MAX_SAFE_INTEGER], planet: "Mustafar" },
        ];

        const matchingPlanet = planets.find(({ tempRange }) =>
            tempRange[0] <= temp && temp <= tempRange[1]
        );

        if (matchingPlanet) {
            setStarWarsPlanet(matchingPlanet.planet);
        }
    }

    function buildForecastObject(dailyForecast: IWeatherJsonData["daily"]) {
        const weatherDescriptions = dailyForecast.weathercode.map((code: number) => weatherCodeMap.get(code));
        const dateEU = calculateDateEU(dailyForecast.time);
        const weekDays = calculateWeekdayByDate(dailyForecast.time);

        const weatherDataObjForecast: IWeatherForecast = { tempMax: dailyForecast.temperature_2m_max, tempMin: dailyForecast.temperature_2m_min, time: dateEU, weekDays: weekDays, weathercode: weatherDescriptions, windspeed: dailyForecast.windspeed_10m_max };
        setWeatherDataForecast(weatherDataObjForecast);
    }

    function calculateWeekdayByDate(dates: string[]) {
        return dates.map(date => weatherDateMap.get(new Date(date).getDay()));
    }

    function calculateDateEU(time: string[]) {
        return time.map((date: string) => {
            const dateArr = date.split("-");
            return dateArr[2] + "." + dateArr[1] + "." + dateArr[0];
        })
    }

    function initializeWeatherDateMap() {
        const weatherDateMap = new Map();
        weatherDateMap.set(0, "Sonntag");
        weatherDateMap.set(1, "Montag");
        weatherDateMap.set(2, "Dienstag");
        weatherDateMap.set(3, "Mittwoch");
        weatherDateMap.set(4, "Donnerstag");
        weatherDateMap.set(5, "Freitag");
        weatherDateMap.set(6, "Samstag");

        return weatherDateMap;
    }
    /**
     * 
     * @returns weatherCodeMap for weathercode translation
     */
    function initializeWeatherCodeMap() {
        const weatherCodeMap = new Map();
        const CLEAR_SKY = { description: 'klarer Himmel', image: "sun" };
        const CLEAR = { description: 'meist klar', image: "clear" };
        const CLOUDY = { description: 'teilweise bewölkt', image: "cloudy" };
        const OVERCAST = { description: 'bedeckt', image: "overcast" };
        const OVERCAST_STRONG = { description: 'stark bewölkt', image: "overcast" };
        const RAIN_LOW = { description: 'leichter Regen', image: "rain" };
        const RAIN_MID = { description: 'mäßiger Regen', image: "rain" };
        const RAIN_HARD = { description: 'starker Regen', image: "rain" };
        const SNOW_LOW = { description: 'leichter Schneefall', image: "snow" };
        const SNOW_MID = { description: 'mäßiger Schneefall', image: "snow" };
        const SNOW_HARD = { description: 'starker Schneefall', image: "snow" };
        const RAIN_LOW_SHOWER = { description: 'leichter Regenschauer', image: "rain" };
        const RAIN_HARD_SHOWER = { description: 'starker Regenschauer', image: "rain" };
        const SNOW_LOW_SHOWER = { description: 'leichter Schneeschauer', image: "snow" };
        const SNOW_HARD_SHOWER = { description: 'starker Schneeschauer', image: "snow" };
        const STORM = { description: 'Gewitter', image: "storm" };
        const STORM_HAIL = { description: 'Gewitter mit Hagel', image: "storm" };

        weatherCodeMap.set(0, CLEAR_SKY);
        weatherCodeMap.set(1, CLEAR);
        weatherCodeMap.set(2, CLOUDY);
        weatherCodeMap.set(3, OVERCAST);
        weatherCodeMap.set(45, OVERCAST_STRONG);
        weatherCodeMap.set(48, OVERCAST_STRONG);
        weatherCodeMap.set(51, RAIN_LOW);
        weatherCodeMap.set(53, RAIN_MID);
        weatherCodeMap.set(55, RAIN_HARD);
        weatherCodeMap.set(56, RAIN_LOW);
        weatherCodeMap.set(57, RAIN_MID);
        weatherCodeMap.set(61, RAIN_LOW);
        weatherCodeMap.set(63, RAIN_MID);
        weatherCodeMap.set(65, RAIN_HARD);
        weatherCodeMap.set(66, RAIN_LOW);
        weatherCodeMap.set(67, RAIN_MID);
        weatherCodeMap.set(71, SNOW_LOW);
        weatherCodeMap.set(73, SNOW_MID);
        weatherCodeMap.set(75, SNOW_HARD);
        weatherCodeMap.set(77, SNOW_LOW);
        weatherCodeMap.set(80, RAIN_LOW_SHOWER);
        weatherCodeMap.set(81, RAIN_HARD_SHOWER);
        weatherCodeMap.set(82, RAIN_HARD_SHOWER);
        weatherCodeMap.set(85, SNOW_LOW_SHOWER);
        weatherCodeMap.set(86, SNOW_HARD_SHOWER);
        weatherCodeMap.set(95, STORM);
        weatherCodeMap.set(96, STORM_HAIL);
        weatherCodeMap.set(99, STORM_HAIL);

        return weatherCodeMap;
    }
    /**
     * fetch weatherdata based on location
     */
    useEffect(() => {
        fetchWeatherData();
    }, [location]);

    function fetchWeatherData() {
        if (location != "") {
            fetchCoordinates();
        }
    }

    function fillWeatherDataWithForecast(tempMax: number, windspeed: number, weathercode: { description: string, image: string }) {
        const weatherDataObj = { location: location, temp: (tempMax).toFixed(2) + "°C", wind: windspeed + " km/h", weatherDescription: weathercode };
        decideStarWarsPlanet(tempMax);
        setWeatherData(weatherDataObj);
        setWeatherMode(WeatherMode.FORECAST)
    }

    return {
        weatherData,
        starWarsPlanet,
        weatherDataForecast,
        weatherMode,
        setLocation,
        fetchWeatherData,
        fillWeatherDataWithForecast,
    }

}