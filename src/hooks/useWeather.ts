import { useState } from "react"

export const useWeather= () => {
    const [location, setLocation] = useState("");
    const API_KEY = "79a9ad1cd477e4c6265d4b1882c856b0";


    function fetchWeather() {

    }

    return {
        location,
        setLocation,
        fetchWeather
    }

}