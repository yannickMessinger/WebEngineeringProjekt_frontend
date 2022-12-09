import { useState } from "react"

export const useWeather= () => {
    const [location, setLocation] = useState("");



    function fetchWeather() {

    }
    
    return {
        location,
        setLocation,
        fetchWeather
    }

}